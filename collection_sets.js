window.collectableSets = {
  "Glacial Synergy": {
    members: ["Cyber Totem", "Clone Mirror", "Dreamscape Puzzle", "Gene Splicer"],
    bonuses: [
      {
        type: "perItemThreshold",
        requiredStars: {
          "Cyber Totem": "Y3",
          "Clone Mirror": "Y3",
          "Dreamscape Puzzle": "Y3",
          "Gene Splicer": "Y3"
        },
        stat: "shieldDamage",
        valuePerStack: 10,
        note: "+10% Shield Damage per Glacial Bloodline stack when all 4 are Y3+"
      },
      {
        type: "perItemThreshold",
        requiredStars: {
          "Cyber Totem": "R5",
          "Clone Mirror": "R5",
          "Dreamscape Puzzle": "R5",
          "Gene Splicer": "R5"
        },
        stat: "finalATK",
        value: 500
      },
      {
        type: "perItemThreshold",
        requiredStars: {
          "Cyber Totem": "R5",
          "Clone Mirror": "R5",
          "Dreamscape Puzzle": "R5",
          "Gene Splicer": "R5"
        },
        stat: "finalHP",
        value: 2000
      },
      {
        type: "totalStarThreshold",
        starType: "any",
        minStars: 8,
        stat: "finalATK",
        value: 600
      },
      {
        type: "totalStarThreshold",
        starType: "any",
        minStars: 16,
        stat: "finalATK",
        value: 900
      },
      {
        type: "perItemThreshold",
        requiredStars: {
          "Cyber Totem": "Y3",
          "Clone Mirror": "Y3",
          "Dreamscape Puzzle": "Y3",
          "Gene Splicer": "Y3"
        },
        conditional: {
          gear: "glacialWarboots",
          eLevel: 5,
          vLevel: 4
        },
        stat: "shieldDamage",
        valuePerStack: 10
      },
      {
        type: "totalStarThreshold",
        starType: "yellow",
        minStars: 20,
        stat: "atk",
        valuePercent: 4
      },
      {
        type: "perItemThreshold",
        requiredStars: {
          "Cyber Totem": "R3",
          "Clone Mirror": "R3",
          "Dreamscape Puzzle": "R3",
          "Gene Splicer": "R3"
        },
        conditional: {
          gear: "glacialWarboots",
          quality: "relic"
        },
        stat: "glacialStacks",
        value: 1
      },
      {
        type: "totalStarThreshold",
        starType: "red",
        minStars: 20,
        stat: "atk",
        valuePercent: 6
      },
      {
        type: "totalStarThreshold",
        starType: "any",
        minStars: 25,
        conditional: {
          gear: "glacialWarboots",
          quality: "legend"
        },
        stat: "bonusVsChilled",
        valuePercent: 50
      }
    ]
  }
};
