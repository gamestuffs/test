export function evaluateSurvivors(state, survivorsData) {
  const bonuses = {};
  const notes = [];
  const lines = ['Survivor Bonuses:'];

  const survivorInfo = state.survivor;
  if (!survivorInfo || !survivorInfo.name || !survivorsData) {
    lines.push('No survivor selected or survivor data missing');
    return { bonuses, notes, debugText: lines.join('\n') };
  }

  const { name, yellow = 0, red = 0 } = survivorInfo;
  const survivor = survivorsData[name];
  if (!survivor) {
    lines.push(`No data found for survivor: ${name}`);
    return { bonuses, notes, debugText: lines.join('\n') };
  }

  const effectiveLevel = (yellow >= 6 || red >= 1) ? 120 : 0;
  lines.push(`→ ${name} (Y${yellow} R${red})`);

  const statMap = {
    'ATK': 'atk',
    'DEF': 'def',
    'HP': 'hp',
    'Crit Rate': 'critrate',
    'Crit Damage': 'critdamage',
    'Skill Damage': 'skilldamage',
    'Healing effect': 'healing',
    'Move Speed': 'movespeed',
    'Weak Spot damage': 'bonus vs weakspot targets',
    'Shield damage': 'bonus vs shielded targets',
    'Damage to Poisoned targets': 'bonus vs poisoned targets',
    'Damage to Chilled targets': 'bonus vs chilled targets',
    'Damage to Weakened targets': 'bonus vs weakened targets',
    'Damage to Vulnerable targets': 'bonus vs vulnerable targets',
    'Final Flashrift Rip damage': 'finalflashrift',
    'Final damage': 'finaldamage'
  };

  const addStat = (text) => {
    const matches = [...text.matchAll(/(Crit Rate|Crit Damage|Skill Damage|ATK|DEF|HP|Healing effect|Move Speed|Weak Spot damage|Shield damage|Damage to (?:Poisoned|Chilled|Weakened|Vulnerable) targets|Final Flashrift Rip damage|Final damage) \+([0-9]+(?:\.\d+)?%?)/gi)];

    for (const match of matches) {
      const stat = match[1].trim();
      const raw = match[2].trim();
      const value = parseFloat(raw.replace('%', ''));
      const isPercent = raw.includes('%');

      const key = statMap[stat] || stat.replace(/\s+/g, '').toLowerCase();
      bonuses[key] = (bonuses[key] || 0) + value;
      lines.push(`✓ ${key} +${value}${isPercent ? '%' : ''}`);
    }
  };

  const applyEntries = (entries, type) => {
    if (!entries) return;

    for (const [key, val] of Object.entries(entries)) {
      const unlock = parseInt(key, 10);
      let unlocked = false;

      switch (type) {
        case 'levelUp':
          unlocked = effectiveLevel >= unlock;
          break;
        case 'upgrade':
          unlocked = yellow >= unlock;
          break;
        case 'awakening':
          unlocked = red >= unlock;
          break;
        case 'combatHarmony':
          unlocked = yellow >= val.yellowStars && red >= Math.max(val.redLeft, val.redRight);
          break;
      }

      if (!unlocked) continue;

      const line = typeof val === 'string' ? val : val.effect;
      lines.push(`✓ [${type}] ${line}`);
      addStat(line);
    }
  };

  applyEntries(survivor.levelUp, 'levelUp');
  applyEntries(survivor.upgrade, 'upgrade');
  applyEntries(survivor.awakening, 'awakening');
  applyEntries(survivor.combatHarmony, 'combatHarmony');

  return {
    bonuses,
    notes,
    debugText: lines.join('\n').trim()
  };
}
