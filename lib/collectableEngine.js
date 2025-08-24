const ORDER = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'R1', 'R2', 'R3', 'R4', 'R5'];

export function evaluateCollectables(state) {
  const dict = window.collectables || {};
  const selection = state.collectables; // Map(name -> level 0..10)

  const bonuses = {};
  const notes = [];
  const lines = ['Collectable Effects:'];

  for (const [name, entry] of Object.entries(dict)) {
    const lv = selection.get(name) || 0;
    if (!lv) continue;

    const code = levelToCode(lv);
    const idx = ORDER.indexOf(code);
    if (idx < 0) continue;

    const validStars = new Set(ORDER.slice(0, idx + 1));
    let had = false;

    for (const eff of entry.effects || []) {
      if (!validStars.has(eff.star)) continue;

      had = true;

      // Add direct stat value
      if (eff.stat && typeof eff.value === 'number') {
        const key = normalizeStatKey(eff.stat);
        bonuses[key] = (bonuses[key] || 0) + eff.value;
      }

      // Parse embedded notes
      if (eff.note) {
        notes.push(`• ${name} ${eff.star}: ${eff.note}`);
        const parsed = parseNoteStats(eff.note);
        for (const { key, value } of parsed) {
          bonuses[key] = (bonuses[key] || 0) + value;
        }
      }
    }

    if (had) lines.push(`✓ ${name} @ ${code}`);
  }

  if (lines.length === 1) lines.push('No collectable effects selected');

  return {
    bonuses,
    notes,
    debugText: lines.join('\n')
  };
}

function levelToCode(level) {
  const lv = Math.max(0, Math.min(10, level | 0));
  if (!lv) return '';
  return lv <= 5 ? 'Y' + lv : 'R' + (lv - 5);
}

function normalizeStatKey(input) {
  const map = {
    'atk': 'atk',
    'critDamage': 'critdamage',
    'critRate': 'critrate',
    'skillDamage': 'skilldamage',
    'shieldDamage': 'bonus vs shielded targets',
    'bonusVsChilled': 'bonus vs chilled targets',
    'bonusVsPoisoned': 'bonus vs poisoned targets',
    'bonusVsWeakened': 'bonus vs weakened targets',
    'bonusVsVulnerable': 'bonus vs vulnerable targets'
  };
  return map[input] || input.toLowerCase().replace(/\s+/g, '');
}

function parseNoteStats(text) {
  const matches = [...text.matchAll(/(Crit Rate|Crit Damage|Skill Damage|Shield Damage|Damage to (?:Poisoned|Chilled|Weakened|Vulnerable) targets)\s*\+([0-9.]+)%/gi)];
  const results = [];

  for (const match of matches) {
    const label = match[1];
    const value = parseFloat(match[2]);

    let key = label.toLowerCase()
      .replace(/damage to /i, 'bonus vs ')
      .replace(/ targets/i, '')
      .replace(/\s+/g, '');

    // Normalize to match bonus key names
    if (key === 'critrate') key = 'critrate';
    if (key === 'critdamage') key = 'critdamage';
    if (key === 'skilldamage') key = 'skilldamage';
    if (key === 'shielddamage') key = 'bonus vs shielded targets';
    if (key === 'bonusvschilled') key = 'bonus vs chilled targets';
    if (key === 'bonusvspoisoned') key = 'bonus vs poisoned targets';
    if (key === 'bonusvsweakened') key = 'bonus vs weakened targets';
    if (key === 'bonusvsvulnerable') key = 'bonus vs vulnerable targets';

    results.push({ key, value });
  }

  return results;
}
