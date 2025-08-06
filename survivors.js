window.survivors = {
  joey: {
    name: "Joey",
    levelUp: {
      20: "Survivor HP +3000",
      40: "ATK +10%",
      60: "Survivor ATK +1200",
      80: "Healing effect +5%",
      100: "Survivor ATK +1800",
      120: "Crit Damage +10%"
    },
    upgrade: {
      1: "Showdown: Reveals Weak Spots (Boss and Elite), Weak Spot damage +10%. Every 200 attacks on Weak Spot inflicts Exposed to the target for 5s. Deals +2% damage to Exposed targets that are Chilled, Poisoned or Weakened (Stackable. Max 10 stacks)",
      2: "Survivor License: Survivor ATK +600, Survivor HP +3000",
      3: "Ravage: Exposed duration increased to 20s, Survivor HP +20%",
      4: "Advanced Survivor License: Survivor ATK +1500, Survivor HP +7500",
      5: "ATK +8%",
      6: "Vital Strike: Weak Spot Damage +10%, Survivor ATK +20%"
    },
    awakening: {
      1: "Grand Brawler: (Passive) Every 500 attacks on targets (Boss and Elite) inflicts 1 Exposed stack on them (Max 10 stacks with \"Showdown\" passive) Skill damage +60%, Weak Spot damage +10%, Final Flashrift Rip damage +400%",
      2: "Grand Brawler Pursuit: Every Exposed stack effect +2%, Unlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
      3: "Weak Spot damage +10%, Final Flashrift Rip damage +500%, Riftstar Rip duration +2s",
      4: "Grand Brawler Pursuit: Required hits to inflict Exposed debuff -100, Teamwork passive slot +1",
      5: "Crit Damage +60%, Final Flashrift Rip damage +525%",
      6: "Grand Brawler Pursuit: Every Exposed stack effect +3%, Teamwork passive slot +1"
    },
    combatHarmony: {
      1: {
        yellowStars: 1,
        redLeft: 2,
        redRight: 2,
        effect: "Joey Harmony Skill Lv.1: Launches fists at enemy. Evolves into Heavy Bash with skill upgrades."
      },
      2: {
        yellowStars: 4,
        redLeft: 6,
        redRight: 6,
        effect: "Joey Harmony Skill Lv.2: Every 3 Harmonized Fists and Heavy Bash attacks launch a Fists of Fury"
      },
      3: {
        yellowStars: 8,
        redLeft: 10,
        redRight: 10,
        effect: "Joey Harmony Skill Lv.3: Harmonized Fists of Fury inflicts Weaken and Exposed debuffs. +1.5% for each Exposed stack (Max 10 stacks)"
      },
      4: {
        yellowStars: 12,
        redLeft: 14,
        redRight: 14,
        effect: "Joey Harmony Skill Lv.4: Harmonized Fists of Fury required attack count -1. Fists, Heavy Bash, Fists of Fury damage +60%"
      },
      5: {
        yellowStars: 16,
        redLeft: 18,
        redRight: 18,
        effect: "Joey Harmony Skill Lv.5: Harmonized Fists of Fury inflicts Exposed debuff. +1.5% for each stack"
      }
    }
  },

metallia: {
  name: "Metallia",
  levelUp: {
    20: "Survivor HP +3000",
    40: "ATK +10%",
    60: "Survivor ATK +1200",
    80: "Healing effect +5%",
    100: "Survivor ATK +1800",
    120: "Crit Damage +10%"
  },
  upgrade: {
    1: "Harmonic Power: (Select in battle) Attacking Weakened targets restores Energy Shield. Inflicts heavy wounds to Poisoned and Chilled targets",
    2: "Survivor License: Survivor ATK +600, Survivor HP +3000",
    3: "Voice of Destruction: Debuff duration inflicted by Tritone Performance +5s. Harmonic Power's damage to Poisoned and Chilled targets greatly increased. Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1500, Survivor HP +7500",
    5: "ATK +8%",
    6: "Lingering Reverb: Debuff duration inflicted by Tritone Performance +15s. Survivor Attack +20%"
  },
  awakening: {
    1: "Anomalous Synergy: (Passive) Shield damage increase +10%. Tritone Performance: (Active) +20% Crit Damage during Green Tone Performance. +1 base Movement Speed during Blue Tone Performance. +20% damage reduction for first 3s of Purple Tone Performance.",
    2: "Anomalous Synergy Pursuit: +5% damage to Poisoned targets. Unlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    3: "+20% Crit Damage during Green Tone Performance. +1 base Movement Speed during Blue Tone Performance. +30% damage reduction for first 3s of Purple Tone Performance.",
    4: "Anomalous Synergy Pursuit: +5% damage to Chilled targets. Teamwork passive slot +1",
    5: "+20% Crit Damage during Green Tone Performance. +1 base Movement Speed during Blue Tone Performance. Invincible for first 3s of Purple Tone Performance",
    6: "Anomalous Synergy Pursuit: +15% damage to Poisoned targets. Teamwork passive slot +1"
  },
  combatHarmony: {
    1: {
      yellowStars: 1,
      redLeft: 2,
      redRight: 2,
      effect: "Metallia Harmony Skill Lv.1: Alternate attacks with Musical Note that inflict Weaken, Poison and Chill. Evolves into Mega Musical Note with skill upgrades."
    },
    2: {
      yellowStars: 4,
      redLeft: 6,
      redRight: 6,
      effect: "Metallia Harmony Skill Lv.2: Damage to Weakened targets +25%, Damage to Chilled targets +25%"
    },
    3: {
      yellowStars: 8,
      redLeft: 10,
      redRight: 10,
      effect: "Metallia Harmony Skill Lv.3: Damage to Chilled targets +25%, Damage to Poisoned targets +25%"
    },
    4: {
      yellowStars: 12,
      redLeft: 14,
      redRight: 14,
      effect: "Metallia Harmony Skill Lv.4: Harmonized Musical Note, Mega Musical Note Damage +100%, inflicted debuff duration up"
    },
    5: {
      yellowStars: 16,
      redLeft: 18,
      redRight: 18,
      effect: "Metallia Harmony Skill Lv.5: Harmonized Musical Note, Mega Musical Note Damage +100%, Damage to Poisoned targets +25%, Damage to Weakened targets +25%"
    }
  }
},

masterYang: {
  name: "Master Yang",
  levelUp: {
    20: "Survivor HP +3000",
    40: "ATK +10%",
    60: "Survivor ATK +1200",
    80: "Healing effect +5%",
    100: "Survivor ATK +1800",
    120: "Crit Rate +10%"
  },
  upgrade: {
    1: "Yin-Yang Balance: (Select in battle) Master Yang has an active skill that allows him to use different skills in battle by changing his Yin-Yang stances. Palm Wind inflicts Vulnerability on enemies (Enemies take increased damage). Vulnerability effect increases when this skill levels up in-battle. Extra Sunfire Palm Vulnerability +25%",
    2: "Survivor License: Survivor ATK +600, Survivor HP +3000",
    3: "Calm and Collected: When Solarian Ki explodes, it will spawn a ki cyclone that prevents enemy movement. Enemies affected by cyclone are inflicted with +50% Vulnerability. Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1500, Survivor HP +7500",
    5: "ATK +8%",
    6: "Burning Rage: Sunfire Palm Crit Damage +100%, Survivor ATK +20%"
  },
  awakening: {
    1: "Extra Sunfire Palm Crit Damage +100%; Warrior Soul: (Passive) Crit Rate +5%, Crit Damage +5%",
    2: "Warrior Soul Pursuit: All skill damage +15%, Unlocks 1 Teamwork passive slot. Can equip other awakened Survivors' passive Awakening skills",
    3: "Extra Sunfire Palm Vulnerability +10% (Enemies take increased damage)",
    4: "Warrior Soul Pursuit: Extra Crit Rate +10%, Extra Crit Damage +10%, Passive Awakening slot +1",
    5: "Solarian Ki +15% Vulnerability",
    6: "Warrior Soul Pursuit: Extra Crit Rate +15%, Extra Crit Damage +25%, all skill damage +15%, Passive Awakening slot +1"
  },
  combatHarmony: {
    1: {
      yellowStars: 1,
      redLeft: 2,
      redRight: 2,
      effect: "Master Yang Harmony Skill Lv.1: Fires Palm Wind at enemies. Evolves into Sunfire Palm with skill upgrades."
    },
    2: {
      yellowStars: 4,
      redLeft: 6,
      redRight: 6,
      effect: "Master Yang Harmony Skill Lv.2: Harmonized Palm Wind and Sunfire Palm attacks are followed up by Ki and Solarian Ki"
    },
    3: {
      yellowStars: 8,
      redLeft: 10,
      redRight: 10,
      effect: "Master Yang Harmony Skill Lv.3: Harmonized Palm Wind and Sunfire Palm attacks inflict +25% Vulnerability"
    },
    4: {
      yellowStars: 12,
      redLeft: 14,
      redRight: 14,
      effect: "Master Yang Harmony Skill Lv.4: Harmonized Palm Wind, Sunfire Palm, Ki, Solarian Ki count +1"
    },
    5: {
      yellowStars: 16,
      redLeft: 18,
      redRight: 18,
      effect: "Master Yang Harmony Skill Lv.5: Harmonized Ki and Solarian Ki attacks inflict +25% Vulnerability"
    }
  }
},

leonardo: {
  name: "Leonardo",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors HP +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors ATK +5%"
  },
  upgrade: {
    1: "Swiftwind Dual Katanas (Exclusive weapon): Leonardo performs two long and short slashes with his katanas. Can be evolved into Fullmoon Slash. (Does not work with Tsukuyomi's Awakening passive Bladesmith's boost)",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Voidbreaker Combo: Adds long and short slashes, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors Crit Rate +8%",
    6: "Secret Art Limit: Fullmoon Slash breakthrough art. Adds attacks, Survivor ATK +20%"
  },
  awakening: {
    1: "Whirlwind Slash: (Active) Whirlwind Slash damage +50%; Undaunted Will: (Passive) When hit by enemy collisions, inflicts Laceration on them. Damage on Lacerated targets +2% for 5s",
    2: "Additional damage on Lacerated targets +2%. Laceration duration +5s",
    3: "Reduces Whirlwind Slash CD",
    4: "When hit by monster collisions, inflicts Laceration on them. Additional damage on Lacerated targets +3%. Laceration duration +5s. Unlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "Whirlwind Slash duration up",
    6: "Additional damage to Lacerated targets +3%. Laceration duration is permanent. Teamwork passive slot +1"
  }
},

raphael: {
  name: "Raphael",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors HP +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors ATK +5%"
  },
  upgrade: {
    1: "Sai (Exclusive weapon): Raphael throws 2 sai at enemies. Can be evolved into Fury Sai.",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Power Strike: For every 5 attacks, 1 more giant sai is thrown. Attacks inflict Bleed. Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors Crit Rate +8%",
    6: "Hot-headed: Sai and Fury Sai damage +70%. Survivor ATK +20%"
  },
  awakening: {
    1: "Rocket Assault: (Active) When Rocket Assault ends, fires a wave of Assault Sai. Scattered Spikes: (Passive) Throw a circle of piercing sai around every 20s. Enemies hit by sai are inflicted with Laceration, and damage on Lacerated enemies +10% for 5s.",
    2: "Additional damage on Lacerated targets +10%",
    3: "More Assault Sai thrown during Rocket Assault",
    4: "Additional damage on Lacerated targets +10%. Unlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "Fires Assault Sai during Rocket Assault",
    6: "Additional damage on Lacerated targets +20%. Teamwork passive slot +1"
  }
},

april: {
  name: "April",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors HP +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors ATK +5%"
  },
  upgrade: {
    1: "Microphone: (Exclusive weapon) April uses her mic to fire soundwave balls at enemies. Can be evolved into Mega Soundwave Balls",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Increased Volume: Soundwave Ball damage +30%, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors Crit Rate +8%",
    6: "Sonic Boom: Mega Soundwave Balls explode in a small area when enemies are hit, Survivor ATK +20%"
  },
  awakening: {
    1: "Reporter Snapshot damage +50%. Pet Companion: (Passive) When in battle, deployed pet's Attack +5%, HP +5%",
    2: "When in battle, deployed pet's additional Attack +5%, additional HP +5%",
    3: "Reporter Snapshot damage +50%, targets hit by Snapshot inflicted with 5% Vulnerability",
    4: "When in battle, deployed pet's additional Attack +10%, additional HP +10%. Unlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "Reporter Snapshot damage +50%, targets hit by Snapshot inflicted with additional 5% Vulnerability",
    6: "When in battle, deployed pet's additional Attack +10%, additional HP +10%. Teamwork passive slot +1"
  }
},


donatello: {
  name: "Donatello",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors HP +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors ATK +5%"
  },
  upgrade: {
    1: "Seeker Bo: (Exclusive weapon) Donatello spins his bo to attack enemies. Can be upgraded to Savage Bo.",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Super Sweep: Seeker Bo, Savage Bo damage +30%, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors Crit Rate +8%",
    6: "Staff Strike: Seeker Bo, Savage Bo attack range up, damage +30%, Survivor ATK +20%"
  },
  awakening: {
    1: "Spinning Smash: (Active) Fires an energy wave when Spinning Smash ends\nBrotherhood: (Exclusive global passive: Effective for all Survivors when unlocked, but can't be equipped to Teamwork passive slots) For every SP Grade Survivor Awakening passive skill equipped, Crit Rate +3%",
    2: "Brotherhood: For every SP Grade Survivor Awakening passive skill equipped, Skill Damage +3%, Crit Damage +3%",
    3: "Spinning Smash: Attack range up",
    4: "Brotherhood: For every SP Grade Survivor Awakening passive skill equipped, damage to Lacerated targets +3%, Shield damage boost +3%\nUnlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "Spinning Smash: Damage +50%",
    6: "Brotherhood: For every SP Grade passive equipped, damage to Weakened targets +3%, damage to Poisoned targets +3%, damage to Chilled targets +3%\nTeamwork passive slot+1"
  }
},

michelangelo: {
  name: "Michelangelo",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors HP +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors ATK +5%"
  },
  upgrade: {
    1: "Arc Nunchucks: (Exclusive weapon) Michelangelo swings his nunchucks and launches whirlwinds at enemies. Can be upgraded to Windchaser Nunchucks.",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Tubular Tornado: Arc Nunchucks, Windchaser Nunchucks whirlwind damage +50%. Whirlwind range up. Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors Crit Rate +8%",
    6: "Apocalypse Tornado: Arc Nunchucks, Windchaser Nunchucks whirlwind damage +50%. Whirlwind inflicts Bleed. Survivor ATK +20%"
  },
  awakening: {
    1: "Twin Throw: (Active) Nunchucks thrown by Twin Throw can be thrown again\nFuntastic Storm: (Passive) Every 500 attacks on hit spawns 1 windstorm that inflicts Lacerate on enemies. Damage to Lacerated targets +10% for 5s. Skill CD: 20s",
    2: "Funtastic Storm: Required hits -100, damage to Lacerated targets +10%",
    3: "Twin Throw: Thrown nunchucks count up",
    4: "Funtastic Storm: Required hits -100, damage to Lacerated targets +10%\nUnlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "Twin Throw: Thrown nunchucks attack range up, Attack Damage +50%",
    6: "Funtastic Storm: Required hits -200, damage to Lacerated targets +20%\nTeamwork passive slot+1"
  }
},

splinter: {
  name: "Splinter",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors HP +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Healing effect +5%",
    100: "Survivor ATK +1000",
    120: "All Survivors ATK +5%"
  },
  upgrade: {
    1: "Tail Sweep: (Exclusive weapon) Splinter swings his tail and fires a power wave at enemies. Can be upgraded to Tail Barrage.",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Bonecrusher Blast: Secret Art Blast, Secret Art Fusion power wave damage +30% and inflicts Slow. Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors Crit Rate +8%",
    6: "Fatality Blast: Secret Art Blast, Secret Art Fusion power wave damage +30% and inflicts enhanced Slow. Survivor ATK +20%"
  },
  awakening: {
    1: "Phantom Assault: (Active) Adds 1 phantom, Phantom damage +20%. Master Mentor: (Passive) Equipped Pet Skill CD -5%, Pet Crit Rate +10%",
    2: "Master Mentor: Equipped Pet Crit Rate +10%, Pet Crit Damage +20%",
    3: "Phantom Assault: +1 Phantom, Phantom damage +20%",
    4: "Master Mentor: Equipped Pet Skill CD -15%. Unlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "Phantom Assault: +1 Phantom, Phantom damage +20%",
    6: "Master Mentor: Equipped Pet Skill CD -10%, Pet Crit Rate +20%, Pet Crit Damage +20%. Teamwork passive slot +1"
  }
},

spongebob: {
  name: "SpongeBob SquarePants",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors Crit Damage +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors Crit Rate +5%"
  },
  upgrade: {
    1: "Spatula: (Exclusive weapon) SpongeBob uses his spatula to attack the nearest enemy. Can be evolved into the Hydro-dynamic Spatula.",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Master Chef: Spatula attack range +40%, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors ATK +4%",
    6: "Hi-Speed Motor: Hydro-dynamic Spatula's attack interval -20%, damage +20%. Survivor ATK +20%"
  }
},

patrick: {
  name: "Patrick",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors Crit Damage +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors Crit Rate +5%"
  },
  upgrade: {
    1: "Sea Star Punch: (Exclusive weapon) Patrick attacks enemies with his fists. Can be evolved into Sea Star Kah-Rah-Tay",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Swift Strike: Fist attack range +40%, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors ATK +4%",
    6: "Talent Burst: Sea Star Kah-Rah-Tay attack interval -20%, damage +25%, Survivor ATK +20%"
  }
},

sandy: {
  name: "Sandy",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors Crit Damage +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors Crit Rate +5%"
  },
  upgrade: {
    1: "Nut Lasso: (Exclusive weapon) Sandy attacks enemies around her with a nut on a rope. Can be evolved into Invincible Bubble",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Power Throw: Nut Lasso attack range +25%, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors HP +4%",
    6: "Speed Bubble: Invincible Bubble's spin speed +20%, damage +25%, Survivor ATK +20%"
  }
},

common: {
  name: "Common",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors Crit Damage +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Heal 5% HP when on level up",
    100: "Survivor ATK +1000",
    120: "All Survivors Crit Rate +5%"
  },
  upgrade: {
    1: "Pointless: (Passive) +3% to all skill damage",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Expired Plan: (Passive) +3% to all skill ranges, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors HP +4%",
    6: "Helter Skelter: (Passive) -3% to all skill CDs, Survivor Attack +20%"
  },
  awakening: {
    1: "Electronic Protection: (Active) Spawns energy shield with 40% of Survivor's HP; Garrison Shield: (Passive) When energy shield is active, EXP gain +20%",
    2: "When Garrison Shield is triggered, all skill damage +5%",
    3: "Energy shield HP spawned from Electronic Protection +30%",
    4: "When Garrison Shield is triggered, Crit Damage +10%; Unlocks 1 Teamwork passive slot. Can equip other awakened Survivors' passive Awakening skills",
    5: "Energy shield HP spawned from Electronic Protection +30%",
    6: "When Garrison Shield is triggered, all skill damage +10%; Teamwork passive slot +1"
  },
  combatHarmony: {
    1: {
      yellowStars: 1,
      redLeft: 2,
      redRight: 2,
      effect: "Common Harmony Skill Lv.1: Fires Kunai at enemies. Evolves into Spirit Shuriken as more skills are learned"
    },
    2: {
      yellowStars: 4,
      redLeft: 6,
      redRight: 6,
      effect: "Common Harmony Skill Lv.2: Harmonized Kunai, Shuriken Damage +50%"
    },
    3: {
      yellowStars: 8,
      redLeft: 10,
      redRight: 10,
      effect: "Common Harmony Skill Lv.3: Get 1 Skill When Battle Start"
    },
    4: {
      yellowStars: 12,
      redLeft: 14,
      redRight: 14,
      effect: "Common Harmony Skill Lv.4: Harmonized Kunai, Shuriken Damage +50%"
    },
    5: {
      yellowStars: 16,
      redLeft: 18,
      redRight: 18,
      effect: "Common Harmony Skill Lv.5: Skill Damage +20%"
    }
  }
},

tsukuyomi: {
  name: "Tsukuyomi",
  levelUp: {
    20: "Survivor HP +1000",
    40: "All Survivors ATK +5%",
    60: "Survivor ATK +600",
    80: "All Survivors Crit Rate +5%",
    100: "Survivor ATK +1000",
    120: "All Survivors Crit Damage +5%"
  },
  upgrade: {
    1: "Moonshade Slash: (Select in battle) A powerful frontal slash",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Nitoryu: When bladed main weapons evolve, Moonhalo Slash can be upgraded again, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "All Survivors ATK +4%",
    6: "Evo Unleashed: Moonhalo Slash's upgrade requirement is not restricted to main weapon, Survivor Attack +20%"
  },
  awakening: {
    1: "Iai Slash: (Active) Charges up and fires a blade wave. Blade wave is enhanced when released at the right time; Bladesmith: (Passive) When blades are used, weapon damage +5%",
    2: "When Bladesmith is triggered, equipped weapon's extra damage +5%",
    3: "Enemies hit by Iai Slash are inflicted with +5% Vulnerability (increase damage taken)",
    4: "When Bladesmith is triggered, all skill damage +20%; Unlocks 1 Teamwork passive slot. Can equip other awakened Survivors' passive Awakening skills",
    5: "Enemies hit by Iai Slash are inflicted with additional +5% Vulnerability",
    6: "When Bladesmith is triggered, equipped weapon's extra damage +10%; Teamwork passive slot +1"
  }
},

catnips: {
  name: "Catnips",
  levelUp: {
    20: "Survivor HP +1000",
    40: "HP +5%",
    60: "Survivor ATK +600",
    80: "Healing effect +5%",
    100: "Survivor ATK +1000",
    120: "ATK +5%"
  },
  upgrade: {
    1: "Medi-drone: (Select in battle) Releases a healing zone",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Tech Breakthrough: All drones can be freely paired, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "HP +4%",
    6: "Advanced Medicine: Healing drone effect doubled, Survivor Attack +20%"
  },
  awakening: {
    1: "Summon Drone: (Active) Use skill to get drone; Mechmeat Unity: (Passive) When drone gains Evo, drone damage +5%",
    2: "When Mechmeat Unity is triggered, drone's extra damage +5%",
    3: "When using Summon Drone, +50% HP recovery",
    4: "When Mechmeat Unity is triggered, Survivor Crit Damage +20%; Unlocks 1 Teamwork passive slot. Can equip other awakened Survivors' passive Awakening skills",
    5: "When using Summon Drone, +50% HP recovery",
    6: "When Mechmeat Unity is triggered, drone's extra damage +10%; Teamwork passive slot +1"
  }
},

worm: {
  name: "Worm",
  levelUp: {
    20: "Survivor HP +1000",
    40: "HP +5%",
    60: "Survivor ATK +600",
    80: "Healing effect +5%",
    100: "Survivor ATK +1000",
    120: "ATK +5%"
  },
  upgrade: {
    1: "Listening Bug: (Select in battle) Unveils enemy weaknesses and increases their damage taken",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Cash Trade: (Passive) Greatly reduces collision damage. Slightly increases projectile damage, Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "ATK +4%",
    6: "Sting Op: Listening Bug can be upgraded to Sting Op. Raise Sting Op meter to force enemies to retreat, Survivor Attack +20%"
  },
  awakening: {
    1: "Dauntless: (Active) Movement speed up. 50% damage reduction when Dauntless is active\nLone Hero: (Passive) Crit damage +10% when there are fewer than 3 monsters on the map",
    2: "Additional Crit damage +10% when Lone Hero is triggered",
    3: "Dauntless duration +2s. Gain invincibility when Dauntless is active",
    4: "Attack interval -10%, skill damage +10% when Lone Hero is triggered\nUnlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "When Dauntless is active, instakills any monsters on impact (excluding elites and bosses)",
    6: "Attack interval -10%, additional Crit damage +15%, additional skill damage +15% when Lone Hero is triggered\nTeamwork passive slot +1"
  }
},

king: {
  name: "King",
  levelUp: {
    20: "Survivor HP +1000",
    40: "ATK +5%",
    60: "Survivor ATK +600",
    80: "Crit Rate +5%",
    100: "Survivor ATK +1000",
    120: "Crit Damage +5%"
  },
  upgrade: {
    1: "Survivor Instinct: (Select in battle) +8% Crit Rate for each level",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Sixth Sense: Survivor Instinct evolves into Sixth Sense: +50% Crit Rate and 25% Crit Damage. Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "HP +4%",
    6: "Lucky Kill: (Passive) If a Critical hit fails to hit, it will be re-calculated. Survivor ATK +20%"
  },
  awakening: {
    1: "Auric Shell: (Active) Gain invincibility for 3s. Pummel: (Passive) Triggers a burning circle that deals damage to enemies every 500 Crits. Brief interval when triggered consecutively",
    2: "Pummel Crit trigger count -200, Burning circle inflicts +5% Vulnerability (increase damage taken)",
    3: "When Auric Shell is active, each critical hit restores 0.5% HP",
    4: "Pummel Crit trigger count -100. Burning circle inflicts additional +5% Vulnerability. Unlocks 1 Teamwork passive slot. Can equip other awakened Survivors' passive Awakening skills",
    5: "When Auric Shell is active, Crit Damage +30%",
    6: "Pummel Crit trigger count -100. Burning circle inflicts additional +10% Vulnerability. Teamwork passive slot +1"
  },
  combatHarmony: {
    1: {
      yellowStars: 1,
      redLeft: 2,
      redRight: 2,
      effect: "King Harmony Skill Lv.1: Throws Explosive Molotov at enemies. Evolves into Explosive Fuel Barrel with skill upgrades."
    },
    2: {
      yellowStars: 4,
      redLeft: 6,
      redRight: 6,
      effect: "King Harmony Skill Lv.2: Harmonized Explosive Molotov and Explosive Fuel Barrel may critically hit. Throws 1 extra round on successful critical hit"
    },
    3: {
      yellowStars: 8,
      redLeft: 10,
      redRight: 10,
      effect: "King Harmony Skill Lv.3: Harmonized Explosive Molotov and Explosive Fuel Barrel inflict +5% Vulnerability"
    },
    4: {
      yellowStars: 12,
      redLeft: 14,
      redRight: 14,
      effect: "King Harmony Skill Lv.4: Harmonized Explosive Molotov and Explosive Fuel Barrel may critically hit. Throws 1 extra round on successful critical hit"
    },
    5: {
      yellowStars: 16,
      redLeft: 18,
      redRight: 18,
      effect: "King Harmony Skill Lv.5: Harmonized Explosive Molotov and Explosive Fuel Barrel attacks inflict +5% Vulnerability"
    }
  }
},

wesson: {
  name: "Wesson",
  levelUp: {
    20: "Survivor HP +1000",
    40: "ATK +5%",
    60: "Survivor ATK +600",
    80: "Crit Rate +5%",
    100: "Survivor ATK +1000",
    120: "Crit Damage +5%"
  },
  upgrade: {
    1: "EM Grenade: (Select in battle) Hurls hi-tech EM grenade at enemies",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Drillmaster Perk: Chance to call for HQ support when throwing a grenade; Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "ATK +4%",
    6: "EM Field: Drillmaster's Fury also generates an EM field that blocks enemy attacks; Survivor ATK +20%"
  },
  awakening: {
    1: "Fire Support: (Active) Calls in carpet bombing in a large area; Survival Specialist: (Passive) For every 3 supplies looted (Meat, bomb, magnet), character's exclusive skill damage +2% (Max 10%)",
    2: "For every 3 supplies looted (Meat, bomb, magnet), character's exclusive skill damage +2% (Max 20%)",
    3: "Fire Support damage +50%. Get 1 airdrop instantly",
    4: "For every 3 supplies looted (Meat, bomb, magnet), firearm weapon damage (including Starforged Havoc) +2% (Max 10%); Unlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "Additional Fire Support damage +50%. Get 1 additional airdrop",
    6: "Supplies pickup needed to trigger Survival Specialist -1, character's exclusive skill damage +6% (Max 30%) and firearm weapon damage (including Starforged Havoc) +4% (Max 20%); Teamwork passive slot +1"
  }
},


yelena: {
  name: "Yelena",
  levelUp: {
    20: "Survivor HP +1000",
    40: "HP +5%",
    60: "Survivor ATK +600",
    80: "Healing effect +5%",
    100: "Survivor ATK +1000",
    120: "ATK +5%"
  },
  upgrade: {
    1: "Automatic Pistol: (Select in battle) All-purpose firearm that Yelena cooked up with her highly advanced hacker skills",
    2: "Survivor License: Survivor ATK +400, Survivor HP +2000",
    3: "Projection Haste: Movement Speed +5 when projection is active; Survivor HP +20%",
    4: "Advanced Survivor License: Survivor ATK +1000, Survivor HP +5000",
    5: "HP +4%",
    6: "Enhanced Projection: Critical hits can extend a single Holo Projection's duration to up to 6s. Survivor ATK +20%"
  },
  awakening: {
    1: "Fiery Curtain: (Active) Fires a hail of shots; Holoshield: (Passive) After 10s of no HP loss, gain Woundless state: Lightning Emitter, Laser Launcher and Forcefield damage +5%. This passive can't be stacked. Effect ends when HP is lost again. Gain additional 20% energy shield when Woundless is active",
    2: "When Woundless is active, additional Lightning Emitter, Laser Launcher and Forcefield damage +5%.",
    3: "Enemies hit by Fiery Curtain are inflicted with +5% Vulnerability (Increased damage taken)",
    4: "When Woundless is active, additional Lightning Emitter, Laser Launcher and Forcefield damage +10%, additional Crit damage +20%; Unlock 1 Teamwork passive slot to equip other awakened Survivors' passive Awakening skills",
    5: "Enemies hit by Fiery Curtain are inflicted with +5% additional Vulnerability (Increased damage taken)",
    6: "When Woundless is active, additional Lightning Emitter, Laser Launcher and Forcefield damage +15%, additional Crit damage +25%. Gain additional energy shield with 30% of Max HP when Woundless is active; Teamwork passive slot +1"
  }
},

};