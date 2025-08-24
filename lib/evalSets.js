import { yellowStars, redStars, codeToLevel, meetsAtLeast } from './stars.js';

export function evaluateSets(state, setsDef) {
  const sets = setsDef || {};
  const lines = ['Collectable Set Bonuses:'];
  const bonuses = {};
  const notes = [];

  for (const [setName, { members = [], bonuses: rules = [] }] of Object.entries(sets)) {
    // collect numeric levels from state
    const levels = {};
    for (const m of members) levels[m] = state.collectables.get(m) || 0;

    // totals
    let y = 0, r = 0;
    for (const m of members) { y += yellowStars(levels[m]); r += redStars(levels[m]); }
    const t = y + r;

    lines.push(`Set: ${setName}`);

    for (const rule of rules) {
      const okByType = (() => {
        if (rule.type === 'perItemThreshold') {
          const req = rule.requiredStars || {};
          for (const [name, minCode] of Object.entries(req)) {
            const lv = levels[name] || 0;
            if (!meetsAtLeast(lv, minCode)) return false;
          }
          return true;
        }
        if (rule.type === 'totalStarThreshold') {
          let count = 0;
          if (rule.starType === 'yellow') count = y;
          else if (rule.starType === 'red') count = r;
          else count = t;
          return count >= (rule.minStars || 0);
        }
        return false;
      })();

      if (!okByType) continue;
      if (!gearConditionOk(state, rule.conditional)) continue;

      // decide numeric vs note
      let applied = false;
      if (typeof rule.value === 'number' && rule.stat) {
        // flat add (no % sign)
        bonuses[rule.stat] = (bonuses[rule.stat] || 0) + rule.value;
        applied = true;
      } else if (typeof rule.valuePercent === 'number' && rule.stat) {
        // percent add
        bonuses[rule.stat] = (bonuses[rule.stat] || 0) + rule.valuePercent;
        applied = true;
      } else if (typeof rule.valuePerStack === 'number') {
        // we don't know live stack count here; record a note
        notes.push(`• ${setName}: ${rule.stat || 'effect'} +${rule.valuePerStack}% per stack (stacks not summed here)`);
      }

      const desc = rule.note || rule.stat || rule.type;
      if (rule.type === 'totalStarThreshold') {
        lines.push(`✓ ${desc} (yellow=${y}, red=${r}, total=${t})`);
      } else {
        lines.push(`✓ ${desc}`);
      }
      if (!applied && !rule.valuePerStack) {
        // nothing numeric to add, still keep as note to be transparent
        notes.push(`• ${setName}: ${desc}`);
      }
    }

    lines.push(`→ Stars: Total=${t}, Gold=${y}, Red=${r}`, '');
  }

  if (lines.length === 1) lines.push('No set bonuses active');

  return {
    bonuses,
    notes,
    debugText: lines.join('\n').trim()
  };
}

function gearConditionOk(state, cond) {
  if (!cond) return true;
  if (cond.gear) {
    const hit = Object.values(state.gear).some(g => g.key === cond.gear);
    if (!hit) return false;
  }
  if (cond.eLevel && !anySlotAtLeast(state, 'E', cond.eLevel)) return false;
  if (cond.vLevel && !anySlotAtLeast(state, 'V', cond.vLevel)) return false;
  // quality checks would need quality stored; skip for now
  return true;
}

function anySlotAtLeast(state, type, needed) {
  return Object.values(state.gear).some(g => (g[type] || 0) >= needed);
}
