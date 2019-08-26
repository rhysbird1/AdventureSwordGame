var slot = {};

var effect = {}

var weapon = { name: "Steel Sword",
               level: 1,
               baseDamage: 15,
               bonusDamage: 0,
               hitChance: 52,
               bonusHitChance: 0,
               critDamage: 1.4,
               critDamageBonus: 0,
               critChance: 3,
               critChanceBonus: 0,
               baseAttackSpeed: 2000,
               bonusAttackSpeed: 0,
               scrollCost: 1,
               shardCost: 10,
             };

var armour = { name: "Empty",
               level: 1,
               baseHealth: 400,
               bonusHealth: 0,
               baseDodgeChance: 2,
               bonusDodgeChance: 0,
               isOwned: false,
             };

var head =   { name: "Empty",
               isOwned: false,
             };

var gloves = { name: "Empty",
               hitChance: 0,
               isOwned: false,
             };

var boots =  { name: "Empty",
               dodgeChance: 0,
               isOwned: false,
             };

var ring1 =  { name: "Empty",
               isOwned: false,
             };

var ring2 =  { name: "Empty",
               xpBonus: 0,
               isOwned: false,
             };

var ring3 =  { name: "Empty",
               isOwned: false,
             };

var ring4 =  { name: "Empty",
               isOwned: false,
             };

var belt =   { name: "Empty",
               critChance: 0,
               critDamage: 0,
               isOwned: false,
             };

var pocket = { name: "Empty",
               boneShardBonus: 0,
               isOwned: false,
             };

var aura =   { name: "Empty",
               isOwned: false,
             };

var weaponScrollCost = 1;
var weaponScrollMultiplier = 1;
var weaponShardCost = 10;
var weaponShardMultiplier = 2;

function upgradeWeapon(){
    if (player.boneShards >= weaponShardCost &&
        player.weaponScroll >= weaponScrollCost){
        player.boneShards -= weaponShardCost;
        player.weaponScroll -= weaponScrollCost
        weaponScrollMultiplier *= 1.05;
        scrollAdd = weaponScrollCost + 1 + weaponScrollMultiplier;
        weaponScrollCost = Math.floor(scrollAdd);
        weaponShardMultiplier *= 2;
        shardAdd = weaponShardCost + weaponShardMultiplier;
        weaponShardCost = shardAdd;
        weapon.baseDamage += 5;
        weapon.hitChance += 2;
        weapon.critDamage += 0.1;
        weapon.critChance += 0.5;
        weapon.baseAttackSpeed -= 50;
        setNewStats();
        console.log("damage: ", weapon.baseDamage);
        console.log("hit chance", weapon.hitChance);
        console.log("crit chance", weapon.critChance);
        console.log("scrollCost: ", weaponScrollCost);
        console.log("shardCost: ", weaponShardCost);
        loadHUD();
    } else { 
        alert("Nah");
    }
}

