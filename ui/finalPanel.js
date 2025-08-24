import { subscribe, state } from '../lib/state.js';
import { evaluateAllBonuses } from '../lib/relicBonusEngine.js';

export function mountFinalPanel() {
  const box = document.getElementById('finalBonusBox');
  if (!box) return;

  const render = (s) => {
    const result = evaluateAllBonuses(s, { includeParts: true });
    if (!result || !result.parts) {
      box.textContent = 'No bonuses selected.';
      return;
    }

    const { notes, parts } = result;
    const out = [];

    const merged = mergeParts(parts);
    const bonuses = merged.bonuses;

    // === TOTAL DAMAGE MULTIPLIER + PRIMARY STATS ===
    const dmgMult = calculateDamageMultiplier(bonuses);
    out.push(`=== TOTAL BONUSES ===`);
    out.push(`Damage Multiplier: ${dmgMult.toFixed(2)}`);
    if (bonuses.critrate) out.push(`Crit Rate: ${bonuses.critrate}%`);
    if (bonuses.critdamage) out.push(`Crit Damage: ${bonuses.critdamage}%`);
    if (bonuses.skilldamage) out.push(`Skill Damage: +${bonuses.skilldamage}%`);

    const ordered = [
      ['Shield Damage', 'bonus vs shielded targets'],
      ['To Chilled', 'bonus vs chilled targets'],
      ['To Poisoned', 'bonus vs poisoned targets'],
      ['To Weakened', 'bonus vs weakened targets'],
      ['To Lacerated', 'bonus vs lacerated targets'],
      ['To Vulnerable', 'bonus vs vulnerable targets'],
      ['To Weakspot', 'bonus vs weakspot targets']
    ];

    const usedKeys = new Set(['critrate', 'critdamage', 'skilldamage']);

    for (const [label, key] of ordered) {
      if (bonuses[key]) {
        out.push(`${label}: +${bonuses[key]}%`);
        usedKeys.add(key);
      }
    }

    // === REMAINING STATS ===
    for (const [key, val] of Object.entries(bonuses)) {
      if (usedKeys.has(key)) continue;
      const label = formatBonusKey(key);
      const suffix = /flat|final|atk|hp|def|stacks|duration/i.test(key) ? '' : '%';
      out.push(`${label}: +${val}${suffix}`);
    }

    out.push('');

    // === GROUPED SOURCE BREAKDOWN ===
    for (const part of parts || []) {
      const header = part.source || 'Other';
      out.push(`=== ${header} Bonuses ===`);
      const b = part.bonuses || {};
      const kUsed = new Set();

      // Ordered known stats
      if (b.critrate) {
        out.push(`Crit Rate: ${b.critrate}%`);
        kUsed.add('critrate');
      }
      if (b.critdamage) {
        out.push(`Crit Damage: ${b.critdamage}%`);
        kUsed.add('critdamage');
      }
      if (b.skilldamage) {
        out.push(`Skill Damage: +${b.skilldamage}%`);
        kUsed.add('skilldamage');
      }

      for (const [label, key] of ordered) {
        if (b[key]) {
          out.push(`${label}: +${b[key]}%`);
          kUsed.add(key);
        }
      }

      // Leftovers
      for (const [key, val] of Object.entries(b)) {
        if (kUsed.has(key)) continue;
        const label = formatBonusKey(key);
        const suffix = /flat|final|atk|hp|def|stacks|duration/i.test(key) ? '' : '%';
        out.push(`${label}: +${val}${suffix}`);
      }

      if (part.notes?.length) {
        for (const note of part.notes) {
          out.push(note);
        }
      }

      out.push('');
    }

    box.textContent = out.join('\n').trim();
  };

  subscribe(render);
  render(state);
}

function calculateDamageMultiplier(bonuses) {
  const critRate = Math.min(bonuses.critrate || 0, 100) / 100;
  const critDmg = (bonuses.critdamage || 0) / 100;
  const skillDmg = (bonuses.skilldamage || 0) / 100;
  const clarity = (bonuses.clarity || 0) / 100;

  let multiplier = 1 + skillDmg;
  multiplier *= 1 + critRate * critDmg;
  multiplier *= 1 + clarity;

  return multiplier * 100000;
}

function mergeParts(parts) {
  const bonuses = {};
  const notes = [];

  for (const part of parts || []) {
    for (const [k, v] of Object.entries(part.bonuses || {})) {
      bonuses[k] = (bonuses[k] || 0) + v;
    }
    if (part.notes?.length) notes.push(...part.notes);
  }

  return { bonuses, notes };
}

function formatBonusKey(key) {
  return key
    .replace(/bonus vs /i, 'To ')
    .replace(/targets?/i, '')
    .replace(/critrate/i, 'Crit Rate')
    .replace(/critdamage/i, 'Crit Damage')
    .replace(/skilldamage/i, 'Skill Damage')
    .replace(/finalflashrift/i, 'Final Flashrift Damage')
    .replace(/finaldamage/i, 'Final Damage')
    .replace(/shieldDamage/i, 'Shield Damage')
    .replace(/clarity/i, 'Clarity')
    .replace(/glacialstacks/i, 'Glacial Stacks')
    .replace(/finalatk/i, 'Final ATK')
    .replace(/finalhp/i, 'Final HP')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, l => l.toUpperCase());
}
