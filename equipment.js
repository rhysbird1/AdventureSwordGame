var slot = {};

var effect = {};

var weapon = { name: ["Empty", "Wooden Dagger", "Bronze Dagger", "Bronze Sword", "Iron Sword", 
                      "Steel Longsword", "Steel Claymore", "Greatsword", "Obisidian Dagger", 
                      "Obsidian Sword", "Glass WarAxe", "Crystal Dagger", "Crystal Greatsword"],
               level: 1,
               scroll: 1,
               heldScrolls: 0,
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
               isOwned: true,
             };

var armour = { name: ["Empty", "Wooden Armour", "Rugged Leather", "Hard Leather", "Bronze Armour",
                      "Iron Armour", "Steel Armour", "Mithril Armour", "Obisidian Armour", "Glass Armour", "Crystal Amour", "Elder Armour"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               baseHealth: 250, //250 default
               bonusHealth: 0,
               baseDodgeChance: 2,
               bonusDodgeChance: 0,
               damageReduction: 0,
               bonusDamageReduction: 0,
               shardsNeededToUpgrade: 5,
               scrollsNeededToUpgrade: 1,
               isOwned: true,
             };

var head =   { name: ["Empty", "Leaf Cowl", "Cloth Headwrap", "Turtle Shell", "Wooden Helmet",
                      "Plated Hood", "Spidersilk Hood", "Obisidian Helmet", "Glass Helmet",
                      "Hood of Ghosts", "Hood of Saints", "Helmet of Gods", "Dragon-Leather Cowl"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               baseHealth: 0,
               damageReduction: 0,
               bonusDamageReduction: 0,
               shardsNeededToUpgrade: 5,
               scrollsNeededToUpgrade: 1,
               isOwned: true,
             };

var gloves = { name: ["Empty", "Worn Hand-Wraps", "Old Leather Gloves", "Wormsilk Gloves", 
                      "Hard-Leather Gloves", "Spidersilk Gloves", "Golden Vambraces", 
                      "Obisidian Gauntlets", "Spectral Gloves", "Gloves of Silence", 
                      "[none]"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               hitChance: 0.5,
               shardsNeededToUpgrade: 5,
               scrollsNeededToUpgrade: 1,
               isOwned: true,
             };

var boots =  { name: ["Empty", "[none]", "[none]", "[none]", 
                      "[none]", "[none]", "[none]", "[none]",
                      "[none]", "[none]", "[none]"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               dodgeChance: 1,
               shardsNeededToUpgrade: 5,
               scrollsNeededToUpgrade: 1,
               isOwned: false,
             };

var ring1 =  { name: ["Empty", "Cracked, Rusty Ring", "Cracked Blood Ring", "Blood Ring", 
                      "Plated Blood Ring", "Enchanted Blood Ring", "Death-Imbued Blood Ring", 
                      "Sacred Blood Ring", "Elder Blood Ring"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               shardsNeededToUpgrade: 7,
               scrollsNeededToUpgrade: 2,
               isOwned: false,
             };

var ring2 =  { name: ["Empty"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               xpBonus: 0,
               shardsNeededToUpgrade: 7,
               scrollsNeededToUpgrade: 2,
               isOwned: false,
             };

var ring3 =  { name: ["Empty"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               shardsNeededToUpgrade: 7,
               scrollsNeededToUpgrade: 2,
               isOwned: false,
             };

var ring4 =  { name: ["Empty"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               shardsNeededToUpgrade: 7,
               scrollsNeededToUpgrade: 2,
               isOwned: false,
             };

var belt =   { name: ["Empty"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               critChance: 1,
               critDamage: 0.1,
               shardsNeededToUpgrade: 10,
               scrollsNeededToUpgrade: 3,
               isOwned: false,
             };

var pocket = { name: ["Empty"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               boneShardBonus: 0,
               shardsNeededToUpgrade: 10,
               scrollsNeededToUpgrade: 3,
               isOwned: false,
             };

var aura =   { name: ["Empty"],
               level: 0,
               scroll: 0,
               heldScrolls: 0,
               healPercentOnDamage: 1,
               shardsNeededToUpgrade: 15,
               scrollsNeededToUpgrade: 5,
               isOwned: false,
             };

function upgradeEquipment(item){
    if (!item.isOwned || isPlaying) {
        alert("You can't do that right now.");
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
        return;
    }  
    
    upgradeStats(item);
}


function upgradeStats(item) {
    switch (item){
        case weapon:
            weapon.baseDamage += Math.round(weapon.baseDamage / 2);
            weapon.hitChance += 4;
            weapon.critDamage += 0.1;
            weapon.critChance += 1;
            weapon.baseAttackSpeed -= 75;
            console.log("damage: " + weapon.baseDamage);
            console.log("hit rate: " + weapon.hitChance);
            break;
        case armour:
            armour.baseHealth += Math.ceil((armour.baseHealth / 3.3 + 1) / 10) * 10;
            player.currentHealth = Math.round(armour.baseHealth + armour.bonusHealth + head.baseHealth);
            break;
    }
}
