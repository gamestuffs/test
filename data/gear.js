window.gearData = {
"Twin Lance": {
  name: "Twin Lance",
  gradeSkills: [
    "ATK +15%",
    "Starforge: Triggers Energy Overload 1 time for every 2 Eternity Ray shots, increasing own skill damage by 30% for 10s. Max 2 stacks",
    "Starforged Havoc: Higher thrust damage with lower HP. Max damage +100%",
    "ATK +25%",
    "Havoc Nova: Releases Void power during a thrust. Targets hit by the Void Fissure take an additional 10% damage",
    "Havoc Nova: Outermost rim of Eternity Ray has suppression force"
  ],
  eternalForge: {
    E1: "Photolithography: Energy Overload counts will also be recorded when Eternity Ray retracts. Starforge and Havoc start at Lv.3",
    E2: "ATK +10%",
    E3: "Super Star: Each Energy Overload stack's damage increased to 35%",
    E4: "Final ATK +4000",
    E5: "Jade Cluster: Energy Overload stacks up to 3 times"
  },
  voidForge: {
    V1: "ATK +10%",
    V2: "Disordered Death: Void power damage +80%. Targets hit by the Void Fissure take an additional 20% damage",
    V3: "Final ATK +4000",
    V4: "Blink: Thrusts performed at low HP reduces base attack intervals by up to 1s",
    V5: "Final ATK +8000"
  },
  chaosForge: {
    C2: "Meteorite: When Void Power is fired, additional homing Chaos Meteorites are launched. Inflicts 10% Vulnerability on hit for 10s (Doesn't stack)",
    C4: "Damage to Weakened targets +20%",
    C6: "Shatterstar: When Chaos Meteorite hits enemies, Chaos Shatterstar is triggered",
    C8: "Damage to Chilled targets +30%",
    C10: "Warp: After Void Power hits a boss, it will lock in on the boss' aura, and home in on it after flying out to deal damage to it again (Void Power base damage -30%)"
  },
  chaosFusion: {
    powers: {
      3: "Eternally Immortal: Thrusts no longer depend on HP. All effects are triggered at full HP. Targets hit by Void Fissure take +10% additional damage",
      6: "Infinity Void: Void Power additionally gains 30% of Overload's damage bonus. Targets hit by Void Fissure take +20% additional damage",
      9: "Chaos Wind: Removes Eternity Ray and fuses its energy into Void power, transforming it into Chaos Wind. Post-fusion Chaos Wind triggers Energy Overload. Each Overload stack's damage boost effect +25%",
      12: "Thunderbolt Thrust: Removes Void Fissure and melds its energy into a thrust, turning into Thunderbolt Thrust. Shield damage boost +10%, Skill damage +10%",
      15: "Obliterastar: When you have Shield, Chaos Wind damage +30%, Shield damage boost +10%, Skill damage +10%",
      18: "Wrathful Cleaver: Thunderbolt Thrust turns into Wrathful Cleaver. When you have Blink, base attack interval reduction of 1s turns into Chaos Wind count +2, Wrathful Cleaver damage +60%, Shield damage boost +10%, Skill damage +20%"
    }
  },
  setBonuses: [
    "Twin Lance Excellent quality skill boosted: Starforged Havoc: Higher thrust damage with lower HP. Max damage +20%",
    "Twin Lance Void Forge skill boosted: Disordered Death: Targets take additional +15% damage",
    "Twin Lance Eternal Forge skill boosted: Super Star: Each Energy Overload stack's damage +10%"
  ]
},

  "EvervoidArmor": {
  name: "Evervoid Armor",
  gradeSkills: [
    "Skill choice chances when match starts +1",
    "HP +15%",
    "Adversity: Gain an energy shield with 30% of Max HP when dying (Once per battle. Resets on revival)",
    "HP +25%",
    "Clarity: Skill damage +20%. Effect fades on death",
    "Preservation: HP recovery through supplies also restores 10% of energy shield. Shield recovery cannot exceed its max HP (Max 100% HP)"
  ],
  eternalForge: {
    E1: "Halberd Shield: Shield damage +10% (Damage up when shield is active) / Unrelenting: After taking no damage for 10s, slowly restores 2.5% of energy shield every second (will not exceed max shield HP)",
    E2: "HP +10%",
    E3: "Shield damage +10% / Violent Backlash: When own HP is higher than 10%, own HP is deducted first before shield HP when taking damage",
    E4: "Final HP +16000",
    E5: "Omnicombat: The higher the energy shield's HP, the higher the damage. For every 25% shield HP, shield damage +5%"
  },
  voidForge: {
    V1: "HP +10%",
    V2: "Reverse Scale: When shield HP is higher than own HP, skill damage +10%",
    V3: "Final HP +16000",
    V4: "Clarity increases skill damage by +15%",
    V5: "Final HP +32000"
  },
  chaosFusion: {
    powers: {
      2: "Swordshield: For every 30% Shield accumulated, gain 10% Shield damage boost. Max 1 stack",
      4: "Skill damage +20%",
      6: "Ward: Gain 100% Shield when match starts. Skill damage +20%",
      8: "Damage to Poisoned targets +30%",
      10: "Shieldcore: Required accumulated Shield for each Swordshield stack -15%. Max stacks +3"
    }
  },
  collectibleBonuses: [
    "Evervoid Armor Eternal Forge skill boosted: Omnicombat -5% required shield value to trigger each damage buff",
    "Evervoid Armor Void Forge skill boosted: Reverse Scale's triggered skill damage +20%",
    "Evervoid Armor Legend quality skill boosted: Clarity increases skill damage by +10%"
  ]
},


  "judgmentNecklace": {
  name: "Judgment Necklace - Starforged Havoc",
  baseStats: {
    atk: "+25%", // Combined +15% and +10%
    amplifyWeakenedDamage: "+25%"
  },
  gradeSkills: [
    "Hatred: On hit, inflicts Weaken on attacker, reducing its Attack by 10%",
    "ATK +15%",
    "Defensive Stance: Restores 15% of Energy Shield when skill levels up",
    "ATK +25%",
    "Potential Unleashed: All passive skills learned in battle can be upgraded to Red Star",
    "Amplify: +25% damage to Weakened target"
  ],
  eternalForge: {
    E1: "Fury: +20s Fury when skill levels up. +50% skill damage during this time. Defeat monsters to extend Fury duration. Max 200s",
    E2: "ATK +10%",
    E3: "Wondermight: The higher the shield value, the more damage dealt to Weakened targets. For every 20% of Energy Shield value, +2% damage to Weakened targets",
    E4: "Final ATK +4000",
    E5: "Limit Break: +40% Max Energy Shield"
  },
  voidForge: {
    V1: "ATK +10%",
    V2: "Stealth Attack: +2% Crit Damage for every 2 levels of passive skills learned",
    V3: "Final ATK +4000",
    V4: "Divine Might: Initial passive skill level +1. For each Red Star passive upgrade, Crit Damage +10%",
    V5: "Final ATK +8000"
  },
  collectibleBonuses: [
    "Judgment Necklace Eternal Forge skill boosted: When Fury is active, +10% additional skill damage",
    "Judgment Necklace Void Forge skill boosted: Stealth Attack: +1% additional Crit Damage for every 2 levels of passive skills learned",
    "Judgment Necklace Relic quality skill boosted: +10% additional damage dealt to weakened targets"
  ]
},


  "stardustSash": {
  name: "Stardust Sash",
  baseStats: {
    healingEffect: "+35%",
    hp: "+40%" // 15% + 25%
  },
  gradeSkills: [
    "Toughened Armor: Triggers Toughened Armor for 5s when attacked (60s CD). Immune to all damage during this period, and collisions instakill minions",
    "Eternal Recharge: Energy orbs dropped for every 500 hits (display limited). Each orb increases energy level, up to Lv.5. +5% damage multiplier per level. Energy drains over time",
    "Super Enhance: When total energy >90%, +30% skill damage"
  ],
  eternalForge: {
    E1: "Peerless: -100 hits required for orb drops. +5% additional damage multiplier per energy level",
    E2: "HP +10%",
    E3: "Suppression: Super Enhance can trigger at Lv.4+. +5% skill damage per energy level",
    E4: "Final HP +16000",
    E5: "Ultimate Eternity: -100 hits required for orb drops. +10% Crit Damage per energy level"
  },
  voidForge: {
    V1: "HP +10%",
    V2: "Cabalista: Start at max energy level. Restore +2% shield per orb. Shield damage boost +10%",
    V3: "Final HP +16000",
    V4: "Destructive Restraint: Energy drains 50% slower. Shield damage boost +20%",
    V5: "Final HP +32000"
  },
  collectibleBonuses: [
    "Stardust Sash Void Forge skill boosted: Cabalista: Shield damage boost +10%",
    "Stardust Sash Legend quality skill boosted: Eternal Recharge: Each Energy level +1% damage multiplier",
    "Stardust Sash Eternal Forge skill boosted: Suppression: Super Enhance deals +5% Skill Damage per level"
  ]
},

"moonscarBracer": {
  name: "Moonscar Bracer",
  baseStats: {
    critRate: "+30%", // 5% every 500 hits, max 30%
    atk: "+40%", // 15% + 25%
    shieldDamage: "+10%"
  },
  gradeSkills: [
    "Crit Rate +5% for every 500 effective attacks in battle. Max 30%",
    "ATK +15%",
    "0.5% of energy shield restored when a critical hit defeats a monster (Max 5 times per second)",
    "ATK +25%",
    "Shield damage +10%",
    "Light's Judgment: Fires 1 Eternal Laser every 10s. Marks 1 boss 10s before firing and enters Charging Attack state. During this time, 100% of total damage dealt to boss is converted into Charging Damage, and will be fired in a single laser when the charge phase ends (Charged damage is not affected by attack multiplier bonuses)"
  ],
  eternalForge: {
    E1: "Mega Crit I: Crit Rate exceeds 100%, Crit Damage +30%",
    E2: "ATK +10%",
    E3: "Mega Crit II: Crit Rate exceeds 130%, Skill Damage +30%",
    E4: "Final ATK +4000",
    E5: "Mega Crit III: Crit Rate exceeds 150%, Crit Damage +100%"
  },
  voidForge: {
    V1: "ATK +10%",
    V2: "Revolution: Shield damage boost +20%. Restores 10% Energy Shield after laser is fired",
    V3: "Final ATK +4000",
    V4: "Final Evolution: During Eternal Laser's charging period, Crit Rate +20%, Stored Damage +30%",
    V5: "Final ATK +8000"
  },
  collectibleBonuses: [
    "Moonscar Bracer Legend quality skill boosted: Increases Shield damage boost by 10%",
    "Moonscar Bracer Eternal Forge skill boosted: Mega Crit II: Crit Rate exceeds 130%, Skill Damage +30%",
    "Moonscar Bracer Eternal Forge skill boosted: Mega Crit I: Crit Rate exceeds 100%, Crit Damage +30%"
  ]
},



"glacialWarboots": {
  name: "Glacial Warboots",
  baseStats: {
    moveSpeed: "+3",
    hp: "+40%", // 15% + 25%
    chilledBonus: "+15%" // Damage vs Chilled
  },
  gradeSkills: [
    "Base Movement Speed +3",
    "HP +15%",
    "Crystal Trail: Moving leaves a trail of ice blocks that last 10s and ignite icy explosions when they expire. Enemies that touch the blocks or are hit by their explosions are Chilled for 10s (unstackable)",
    "HP +25%",
    "Damage on Chilled enemies +15%",
    "Glacial Bloodline: Move to start charging. The faster the speed, the faster the charge. Charge weakens when movement stops. +1 Glacial Bloodline stack at full charge. +12% damage for each stack, lasting 15s, max 5 stacks. Repeat to extend duration"
  ],
  eternalForge: {
    E1: "Ice Armor: +2% Energy Shield, +4% Shield damage boost for each Glacial Bloodline stack",
    E2: "HP +10%",
    E3: "Enhanced Ice Armor: Shield damage boost +21%. For every 25% shield HP gained, Movement Speed +10%",
    E4: "Final HP +16000",
    E5: "Rime Blast: Charge stacks +1"
  },
  voidForge: {
    V1: "HP +10%",
    V2: "Frost Blast: Damage on Chilled enemies +20%",
    V3: "Final HP +16000",
    V4: "Ice Arrow: Damage on Chilled enemies +20%. When a crystal trail reaches 30 blocks in length, the trail immediately explodes, firing homing ice arrows that inflict Chill and 10% Vulnerability for 10s (unstackable)",
    V5: "Final HP +32000"
  }
},

  "vNeck": {
  name: "VNeck",
  baseStats: {
    atk: "+40%",              // 15% + 25%
    berserkDamage: "+40%",
    critRateLowHP: "+40%",
    bonusLowHPDamage: "+40%"
  },
  gradeSkills: [
    "Gain Berserk for 5s when leveling up: +40% damage",
    "ATK +15%",
    "The lower your HP is, the higher your damage (Triggers below 50% HP. Max +40% damage)",
    "ATK +25%",
    "The lower your HP is, the higher your Crit Rate (Triggers below 50% HP. Max +40% Crit Rate)"
  ],
  astralForge: {
    A1: "Fanatical: Gain more battle EXP when HP is lower (Triggers when HP is below 50%. Max +40%)",
    A2: "ATK +20%",
    A3: "Believer: When Berserk is active, monsters defeated can reset duration"
  }
},

  "eChest": {
  name: "EChest",
  baseStats: {
    hp: "+40%",                 // 15% + 25%
    atkAfterRevive: "+15%",
    moveSpeedAfterRevive: "+15%",
    revivalCount: "+1"
  },
  gradeSkills: [
    "Revives with full HP once",
    "HP +15%",
    "After revival, ATK +15%, Movement Speed +15%",
    "HP +25%",
    "+1 revival"
  ],
  astralForge: {
    A1: "Gnosis: Get 1 more skill choice chance when revived",
    A2: "HP +20%",
    A3: "Machine Ascent: Revived stats +5%"
  }
},


  "vGlove": {
  name: "VGlove",
  baseStats: {
    atk: "+40%",               // 15% + 25%
    eliteBossDamage: "+50%"
  },
  gradeSkills: [
    "Destructive Nature: Instakills non-boss enemies below 20% HP",
    "ATK +15%",
    "Blood Suppression: +50% damage against elites/bosses",
    "ATK +25%",
    "Sanguine Aura: Enemies in a certain radius will gradually wither (Lose 1% HP per 0.1s. Ineffective against bosses)"
  ],
  astralForge: {
    A1: "Deep Red: Increased inner rings in red ring. Inner ring number of hits x2.",
    A2: "ATK +20%",
    A3: "Lord of Destruction: Instakill bosses with HP below 10%"
  }
},



  "vBoots": {
  name: "Vboots",
  baseStats: {
    hp: "+40%",                  // 15% + 25%
    moveSpeedFlat: "+2",
    moveSpeedBonus: "up to +50%",     // via Apex Species
    proportionalDamage: "up to +50%"  // via Predator
  },
  gradeSkills: [
    "Base Movement Speed +2",
    "HP +15%",
    "Apex Species: +10% Movement Speed for every 500 enemies killed (Max 50%)",
    "HP +25%",
    "Predator: Increases proportionate damage against enemies with lower movement speed than you (Max +50%)"
  ],
  astralForge: {
    A1: "Fully Sated: When Apex Species is active, +20% Max HP (Max 100%)",
    A2: "HP +20%",
    A3: "Lethal Metabolism: Move faster with lower HP (Triggers when HP is below 50%. Max +40%)"
  }
},


};
