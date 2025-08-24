import { state, setGear, subscribe } from '../lib/state.js';
import { evaluateGear } from '../lib/gearEngine.js';

const SLOTS = [
  { slot: 'Weapon', options: ['Twin Lance'] },
  { slot: 'Body Armor', options: ['EvervoidArmor', 'eChest'] },
  { slot: 'Necklace', options: ['judgmentNecklace', 'vNeck'] },
  { slot: 'Belt', options: ['stardustSash'] },
  { slot: 'Gloves', options: ['moonscarBracer'] },
  { slot: 'Boots', options: ['glacialWarboots', 'vBoots'] }
];

export function mountGearPanel(gearData) {
  const grid = document.getElementById('gearGrid');
  const out = document.getElementById('gearBonusOutput');

  SLOTS.forEach(({ slot, options }) => {
    const wrap = document.createElement('div');
    wrap.innerHTML = `<label><strong>${slot}</strong></label><br>`;

    const selector = document.createElement('select');
    for (const key of options) {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = gearData[key]?.name || key;
      selector.appendChild(opt);
    }
    selector.addEventListener('change', () => setGear(slot, { key: selector.value }));

    // Helper to create upgrade dropdowns (E, V, C, A)
    const mk = (prefix, max) => {
      const sel = document.createElement('select');
      sel.appendChild(new Option('--', ''));
      for (let i = 1; i <= max; i++) {
        sel.appendChild(new Option(`${prefix}${i}`, i));
      }
      sel.addEventListener('change', () => {
        const val = parseInt(sel.value || '0', 10);
        setGear(slot, { [prefix]: val });
      });
      return sel;
    };

    // Add selectors to DOM
    wrap.appendChild(selector);
    wrap.appendChild(document.createElement('br'));
    wrap.appendChild(mk('E', 5));
    wrap.appendChild(document.createElement('br'));
    wrap.appendChild(mk('V', 5));
    wrap.appendChild(document.createElement('br'));
    wrap.appendChild(mk('C', 10));
    wrap.appendChild(document.createElement('br'));
    wrap.appendChild(mk('A', 3));
    wrap.appendChild(document.createElement('br'));

    grid.appendChild(wrap);
  });

  const render = (s) => {
    const totals = evaluateGear({ gear: s.gear }); // ✅ this is now correct

    const gridStats = new Set([
      'atk', 'def', 'hp',
      'critrate', 'critdamage', 'skilldamage',
      'bonus vs poisoned targets', 'bonus vs weakened targets', 'bonus vs chilled targets',
      'bonus vs lacerated targets', 'bonus vs vulnerable targets', 'bonus vs shielded targets'
    ]);

    const flatStats = new Set([
      'hpflat', 'atkflat', 'defflat',
      'finalhp', 'finalatk', 'finaldef',
      'movespeed'
    ]);

    const entries = Object.entries(totals).sort(([a], [b]) => {
      const aGrid = gridStats.has(a) ? 0 : 1;
      const bGrid = gridStats.has(b) ? 0 : 1;
      return aGrid !== bGrid ? aGrid - bGrid : a.localeCompare(b);
    });

    const text = entries.map(([k, v]) =>
      flatStats.has(k) ? `${k}: +${v}` : `${k}: +${v}%`
    ).join('\n');

    out.textContent = text || 'No bonuses selected';
  };

  subscribe(render);
  render(state);
}
