import { evaluateCollectables } from './collectableEngine.js';
import { evaluateSets } from './evalSets.js';
import { evaluateGear } from './gearEngine.js';
import { evaluateSurvivors } from './survivorEngine.js';

export function evaluateAllBonuses(state = window.appState, options = {}) {
  if (!state) return { bonuses: {}, notes: [], debugText: '', parts: [] };

  const collectable = { ...evaluateCollectables(state), source: 'Collectables' };
  const sets = { ...evaluateSets(state, window.collectableSets), source: 'Sets' };
  const gear = { ...evaluateGear({ gear: state.gear }), source: 'Gear' };
  const survivors = (typeof evaluateSurvivors === 'function' && window.survivors)
    ? { ...evaluateSurvivors(state, window.survivors), source: 'Survivors' }
    : null;

  const allParts = [collectable, sets, gear];
  if (survivors) allParts.push(survivors);

  const combined = mergeBonuses(allParts);

  const debugLines = [];
  debugLines.push("=== FINAL BONUSES ===\n");
  for (const [stat, value] of Object.entries(combined.bonuses)) {
    const label = formatLabel(stat);
    const suffix = shouldAddPercent(stat) ? '%' : '';
    debugLines.push(`${label}: +${value}${suffix}`);
  }

  if (combined.notes.length > 0) {
    debugLines.push("\nNotes:", ...combined.notes);
  }

  debugLines.push("\n=== DEBUG ===");
  debugLines.push(collectable.debugText);
  debugLines.push(sets.debugText);
  debugLines.push(gear.debugText);
  if (survivors) debugLines.push(survivors.debugText);

  return {
    bonuses: combined.bonuses,
    notes: combined.notes,
    debugText: debugLines.join('\n'),
    parts: options.includeParts ? allParts : undefined
  };
}

function mergeBonuses(parts) {
  const bonuses = {};
  const notes = [];

  for (const part of parts) {
    for (const [k, v] of Object.entries(part.bonuses || {})) {
      bonuses[k] = (bonuses[k] || 0) + v;
    }
    if (part.notes?.length) notes.push(...part.notes);
  }

  return { bonuses, notes };
}

function formatLabel(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')           // camelCase to camel Case
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')           // word123 → word 123
    .replace(/(\d)([a-zA-Z])/g, '$1 $2')           // 123word → 123 word
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')      // CAPSWord → CAPS Word
    .replace(/([a-z])([A-Z])/g, '$1 $2')           // missed camelCase
    .replace(/([A-Za-z])(%)/g, '$1 $2')            // space before %
    .replace(/([A-Z]{2,})(?=[A-Z][a-z])/g, '$1 ')  // ALLCAPSWord → ALLCAPS Word
    .replace(/[\W_]+/g, ' ')                       // Remove extra non-alphanum
    .trim();
}

function shouldAddPercent(stat) {
  return !/(flat|final|atk|hp|def|stacks|duration|count|cooldown|max|shield|crit|multiplier|speed|orb|overload|bonus|fury|reduction|value)/i.test(stat);
}
