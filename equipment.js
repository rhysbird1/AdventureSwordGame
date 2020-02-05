var slot = {};

var effect = {}

var weapon = { name: ["Empty","Wooden Dagger", "Bronze Dagger", "Bronze Sword", "Iron Sword", 
                      "Steel Longsword", "Steel Claymore", "Greatsword", "Obisidian Dagger", 
                      "Obsidian Sword", "Glass WarAxe", "Crystal Dagger", "Crystal Greatsword"],
               level: 1,
               scroll: 1,
               baseDamage: 15, //15 default
               bonusDamage: 0,
               hitChance: 40, //40 default
               bonusHitChance: 0,
               critDamage: 1.2,
               critDamageBonus: 0,
               critChance: 3,
               critChanceBonus: 0,
               baseAttackSpeed: 2000,
               bonusAttackSpeed: 0,
               shardsNeededToUpgrade: 5,
               scrollsNeededToUpgrade: 1,
               isOwned: true
             };

var armour = { name: ["Empty", "Wooden Armour", "Rugged Leather", "Hard Leather", "Bronze Armour",
                      "Iron Armour", "Steel Armour", "Mithril Armour", "Obisidian Armour", "Glass Armour", "Crystal Amour", "Elder Armour"],
               level: 0,
               scroll: 0,
               baseHealth: 0,
               bonusHealth: 0,
               baseDodgeChance: 2,
               bonusDodgeChance: 0,
               shardsNeededToUpgrade: 2,
               scrollsNeededToUpgrade: 1,
               isOwned: false,
             };

var head =   { name: ["Empty", "Leaf Cowl", "Cloth Headwrap", "Turtle Shell", "Wooden Helmet",
                      "Plated Hood", "Spidersilk Hood", "Obisidian Helmet", "Glass Helmet"
                      ],
               level: 0,
               scroll: 0,
               isOwned: false,
             };

var gloves = { name: ["Empty"],
               level: 0,
               scroll: 0,
               hitChance: 0,
               isOwned: false,
             };

var boots =  { name: ["Empty"],
               level: 0,
               scroll: 0,
               dodgeChance: 0,
               isOwned: false,
             };

var ring1 =  { name: ["Empty"],
               level: 0,
               scroll: 0,
               isOwned: false,
             };

var ring2 =  { name: ["Empty"],
               level: 0,
               scroll: 0,
               xpBonus: 0,
               isOwned: false,
             };

var ring3 =  { name: ["Empty"],
               level: 0,
               scroll: 0,
               isOwned: false,
             };

var ring4 =  { name: ["Empty"],
               level: 0,
               scroll: 0,
               isOwned: false,
             };

var belt =   { name: ["Empty"],
               level: 0,
               scroll: 0,
               critChance: 0,
               critDamage: 0,
               isOwned: false,
             };

var pocket = { name: ["Empty"],
               level: 0,
               scroll: 0,
               boneShardBonus: 0,
               isOwned: false,
             };

var aura =   { name: ["Empty"],
               level: 0,
               scroll: 0,
               isOwned: false,
             };


function upgradeEquipment(item){
    if (!item.isOwned) {
        alert("You Do Not Own This Item");
        return;
    } 
    
    if (player.boneShards >= item.shardsNeededToUpgrade &&
        item.scroll >= item.scrollsNeededToUpgrade){
            player.boneShards -= item.shardsNeededToUpgrade;
            item.scroll -= item.scrollsNeededToUpgrade;
            item.level++;
            item.shardsNeededToUpgrade = Math.floor(item.shardsNeededToUpgrade * 2.5);
            item.scrollsNeededToUpgrade = Math.ceil((item.scrollsNeededToUpgrade * 1.4) + 5)
        
    } else { 
        alert("Not enough resources");
    }  
    
    UpgradeStats(item);
}


function UpgradeStats(item) {
    switch (item){
        case weapon:
            weapon.baseDamage += (weapon.baseDamage / 2);
            weapon.hitChance += 4;
            weapon.critDamage += 0.1;
            weapon.critChance += 1;
            weapon.baseAttackSpeed -= 100;
            break;
    }
}




