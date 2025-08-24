const listeners = new Set();

export const state = {
  resources: { eShards: 0, vShards: 0, relicCores: 0, awakeningCores: 0, sShards: 0 },
  resonance: { A: 3000, B: 3000, C: 3000, RChips: 3000 },
  priorities: { drone: 1.7, drill: 1.05, durian: 0.4 },
  survivor: {
    name: null,
    yellow: 0,
    red: 0
  },
  collectables: new Map(), // key -> level 0..10
  gear: {
    Weapon: { key: 'Twin Lance', E: 1, V: 1, C: 1, A: 1 },
    'Body Armor': { key: 'EvervoidArmor', E: 1, V: 1, C: 1, A: 1 },
    Necklace: { key: 'judgmentNecklace', E: 1, V: 1, C: 1, A: 1 },
    Belt: { key: 'stardustSash', E: 1, V: 1, C: 1, A: 1 },
    Gloves: { key: 'moonscarBracer', E: 1, V: 1, C: 1, A: 1 },
    Boots: { key: 'glacialWarboots', E: 1, V: 1, C: 1, A: 1 }
  }
};

// Subscribe
export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function emit() {
  for (const fn of listeners) fn(state);
}

// Setters
export function setCollectable(name, level) {
  state.collectables.set(name, level);
  emit();
}

export function setSurvivor({ name, yellow, red }) {
  state.survivor = { name, yellow, red };
  emit();
}

export function setGear(slot, data) {
  state.gear[slot] = { ...state.gear[slot], ...data };
  emit();
}
