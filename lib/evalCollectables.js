import { } from './stars.js'; // not needed here but kept for symmetry

// Order of thresholds for inclusion
const ORDER = ['Y1','Y2','Y3','Y4','Y5','R1','R2','R3','R4','R5'];

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
    if (!code) continue;

    const idx = ORDER.indexOf(code);
    if (idx < 0) continue;

    const valid = new Set(ORDER.slice(0, idx + 1));
    let had = false;

    for (const eff of entry.effects || []) {
      if (!valid.has(eff.star)) continue;
      had = true;
      if (eff.stat && typeof eff.value === 'number') {
        bonuses[eff.stat] = (bonuses[eff.stat] || 0) + eff.value;
      }
      if (eff.note) {
        notes.push(`• ${name} ${eff.star}: ${eff.note}`);
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
  const lv = Math.max(0, Math.min(10, level|0));
  if (!lv) return '';
  if (lv <= 5) return 'Y' + lv;
  return 'R' + (lv - 5);
}
