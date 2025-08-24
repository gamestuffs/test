import { setSurvivor, subscribe, state } from '../lib/state.js';

export function mountSurvivorPanel(survivorsData) {
  const panel = document.getElementById('survivorPanel');
  if (!panel) return;

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '8px';
  container.style.marginBottom = '10px';

  // Survivor Dropdown
  const survivorSelect = document.createElement('select');
  survivorSelect.innerHTML = '<option value="">-- Select Survivor --</option>';

  for (const name of Object.keys(survivorsData)) {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    survivorSelect.appendChild(opt);
  }

  // Combined Star Selector (Y1 to R6)
  const starLabel = document.createElement('label');
  starLabel.textContent = 'Survivor Star Level:';

  const starSelect = document.createElement('select');
  starSelect.innerHTML = '<option value="">--</option>';
  ['Y1','Y2','Y3','Y4','Y5','Y6','R1','R2','R3','R4','R5','R6'].forEach(level => {
    const opt = document.createElement('option');
    opt.value = level;
    opt.textContent = level;
    starSelect.appendChild(opt);
  });

  const updateSurvivor = () => {
    const name = survivorSelect.value;
    const levelCode = starSelect.value;

    if (!name || !levelCode) return;

    let yellow = 0, red = 0;
    if (levelCode.startsWith('Y')) {
      yellow = parseInt(levelCode.slice(1), 10);
    } else if (levelCode.startsWith('R')) {
      yellow = 6;
      red = parseInt(levelCode.slice(1), 10);
    }

    setSurvivor({ name, yellow, red });
  };

  survivorSelect.addEventListener('change', updateSurvivor);
  starSelect.addEventListener('change', updateSurvivor);

  container.appendChild(survivorSelect);
  container.appendChild(starLabel);
  container.appendChild(starSelect);
  panel.appendChild(container);

  // Debug Output
  const debug = document.createElement('pre');
  debug.style.color = 'lime';
  debug.style.marginTop = '10px';
  panel.appendChild(debug);

  subscribe(s => {
    const { name, yellow, red } = s.survivor || {};
    if (!name) {
      debug.textContent = 'No survivor selected';
    } else {
      debug.textContent = `Selected: ${name} (Y${yellow} R${red})`;
    }
  });
}
