const bonusRegex = /([+\-]?[0-9]+(?:\.[0-9]+)?)(%)?/g;

export function evaluateGear(state) {
  const data = window.gearData || {};
  const totals = {};
  const lines = ['Gear Bonuses:'];

  for (const [slot, cfg] of Object.entries(state.gear)) {
    const item = data[cfg.key];
    if (!item) continue;

    const rows = [];

    if (item.baseStats) {
      for (const [stat, val] of Object.entries(item.baseStats)) {
        rows.push(`${stat}: ${val}`);
      }
    }

    const { E = 0, V = 0, C = 0, A = 0 } = cfg;
    const pick = (obj, prefix, n) => obj && n ? obj[`${prefix}${n}`] : null;

    const e = pick(item.eternalForge, 'E', E);
    const v = pick(item.voidForge, 'V', V);
    const c = pick(item.chaosForge, 'C', C);
    const a = pick(item.astralForge, 'A', A);

    if (e) rows.push(e);
    if (v) rows.push(v);
    if (c) rows.push(c);
    if (item.chaosFusion?.powers) {
      const cLv = C || 0;
      for (const [lvl, txt] of Object.entries(item.chaosFusion.powers)) {
        if (parseInt(lvl, 10) <= cLv) rows.push(txt);
      }
    }
    if (a) rows.push(a);

    const parsed = parse(rows.join('\n'));
    for (const [k, v] of Object.entries(parsed)) {
      totals[k] = (totals[k] || 0) + v;
    }

lines.push(`\n✓ ${slot}: ${cfg.key} E${E || 0}/V${V || 0}/C${C || 0}/A${A || 0}`);
  }

  if (lines.length === 1) lines.push('No gear selected');

  return {
    bonuses: totals,
    notes: [],
    debugText: lines.join('\n')
  };
}

function parse(text) {
  const bonuses = {};
  const lines = text.split('\n');

  const keyMap = {
    'atk': 'atk',
    'def': 'def',
    'hp': 'hp',
    'crit rate': 'critrate',
    'crit damage': 'critdamage',
    'skill damage': 'skilldamage',
    'healing': 'healing',
    'healing effect': 'healing',
    'move speed': 'movespeed',
    'shield damage': 'shieldDamage',
    'bonus vs weakspot targets': 'bonus vs weakspot targets',
    'bonus vs shielded targets': 'bonus vs shielded targets',
    'bonus vs chilled targets': 'bonus vs chilled targets',
    'bonus vs weakened targets': 'bonus vs weakened targets',
    'bonus vs poisoned targets': 'bonus vs poisoned targets',
    'bonus vs vulnerable targets': 'bonus vs vulnerable targets',
    'final atk': 'finalatk',
    'final hp': 'finalhp'
    // Add more if needed
  };

  for (const line of lines) {
    const matches = [...line.matchAll(bonusRegex)];
    if (!matches.length) continue;

    for (const match of matches) {
      const value = parseFloat(match[1]);
      const isPercent = match[2] === '%';

      // Remove number and percent from line to isolate label
      const labelPart = line.replace(match[0], '').replace(/[:+%-]/g, '').trim().toLowerCase();

      // Try fuzzy match using keyMap
      let foundKey = null;
      for (const [keyLabel, normalized] of Object.entries(keyMap)) {
        if (labelPart.includes(keyLabel)) {
          foundKey = normalized;
          break;
        }
      }

      if (!foundKey) {
        foundKey = labelPart; // fallback to raw string if no match
      }

      bonuses[foundKey] = (bonuses[foundKey] || 0) + value;
    }
  }

  return bonuses;
}

