import { state, setCollectable, subscribe } from '../lib/state.js';
import { evaluateSets } from '../lib/evalSets.js';
import { evaluateCollectables } from '../lib/collectableEngine.js';
import { codeToLevel, levelToCode } from '../lib/stars.js';

export function mountCollectablesGrid(collectablesDict, setsDef) {
  const grid = document.getElementById('collectablesGrid');
  const outBonuses = document.getElementById('collectableBonusOutput');
  const outSets = document.getElementById('collectableSetDebug');

  // Build a stable list of up to 56 red or yellow
  const items = Object.entries(collectablesDict)
    .filter(([_, d]) => d.rarity === 'red' || d.rarity === 'yellow')
    .slice(0, 56)
    .map(([name], i) => ({ id: i + 1, name, icon: `icons/c${i + 1}.png` }));

  const levels = ['', 'Y1','Y2','Y3','Y4','Y5','R1','R2','R3','R4','R5'];

  // initial DOM
  for (const col of items) {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.alignItems = 'center';
    wrap.style.textAlign = 'center';
    wrap.style.fontSize = '12px';

    const img = document.createElement('img');
    img.src = col.icon; img.alt = '';
    img.style.width = '40px'; img.style.height = '40px'; img.style.marginBottom = '4px';

    const label = document.createElement('label');
    label.textContent = col.name;

    const select = document.createElement('select');
    select.id = `collectable_${col.id}`;
    for (const lv of levels) {
      const opt = document.createElement('option');
      opt.value = lv; opt.textContent = lv || '--';
      select.appendChild(opt);
    }
    select.addEventListener('change', () => {
      const level = codeToLevel(select.value);
      setCollectable(col.name, level);
    });

    wrap.appendChild(img);
    wrap.appendChild(label);
    wrap.appendChild(select);
    grid.appendChild(wrap);
  }

    const render = (s) => {
      const result = evaluateCollectables(s);
      const bonusMap = result.bonuses;
      const notes = result.notes;

      let out = 'Total Collectable Bonuses:\n\n';
      if (Object.keys(bonusMap).length === 0 && notes.length === 0) {
        out += 'No bonuses selected.';
      } else {
        const gridStats = new Set([
          'atk','def','hp','critRate','critDamage','skillDamage',
          'bonusVsPoisoned','bonusVsWeakened','bonusVsChilled',
          'bonusVsLacerated','bonusVsVulnerable','bonusVsShielded'
        ]);
        const flatStats = new Set(['hpFlat','atkFlat','defFlat','finalHP','finalATK','finalDEF']);
        const sorted = Object.entries(bonusMap).sort(([a],[b]) => {
          const ai = gridStats.has(a) ? 0 : 1, bi = gridStats.has(b) ? 0 : 1;
          return ai !== bi ? ai - bi : a.localeCompare(b);
        });
        for (const [stat, val] of sorted) {
          const formatted = flatStats.has(stat) ? `+${val}` : `+${val}%`;
          out += `${stat}: ${formatted}\n`;
        }
        if (notes.length) out += `\nExtra Effects:\n${notes.join('\n')}`;
      }
      outBonuses.textContent = out.trim();

      // Sets
      const setsResult = evaluateSets(s, window.collectableSets || {});
      outSets.textContent = setsResult.debugText;
    };

  subscribe(render);
  render(state);
}