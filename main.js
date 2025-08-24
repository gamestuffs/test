import { mountCollectablesGrid } from './ui/collectablesGrid.js';
import { mountSurvivorPanel } from './ui/survivorPanel.js';
import { mountGearPanel } from './ui/gearPanel.js';
import { mountFinalPanel } from './ui/finalPanel.js';

window.addEventListener('DOMContentLoaded', () => {
  // Wait a tick to ensure all globals like window.survivors are loaded
  setTimeout(() => {
    if (!window.collectables) console.warn('⚠️ collectables missing');
    if (!window.collectableSets) console.warn('⚠️ collectableSets missing');
    if (!window.gearData) console.warn('⚠️ gearData missing');

    if (!window.survivors) {
      console.error('❌ survivors missing — Make sure survivors.js is loaded BEFORE main.js');
      return;
    }

    // Mount UI components
    mountSurvivorPanel(window.survivors);
    mountCollectablesGrid(window.collectables || {}, window.collectableSets || {});
    mountGearPanel(window.gearData || {});
    mountFinalPanel();
  }, 0);
});
