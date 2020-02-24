var enemy = {};
var creature = {};
var miniboss = {};
var boss = {};

enemy.soulless = {};
enemy.rotten = {};
enemy.infested = {};
enemy.crystal = {};

//#1 - common soulless
enemy.soulless.common = { name: "Common Soulless",
                          active: false,
                          health: 75,
                          damage: 20,
                          xp: 10,
                          attackSpeed: 4000,
                          boneShards: [1, 2, 3],
                          dropTable: [1],
                          }
//#2 - soulless mage
enemy.soulless.mage = { name: "Soulless Mage",
                          active: false,
                          health: 60,
                          damage: 10,
                          xp: 5,
                          attackSpeed: 2500,
                          boneShards: [1, 2, 3],
                          dropTable: [1],
                          }
//#3 - soulless archer
enemy.soulless.archer = { name: "Soulless Archer",
                          active: false,
                          health: 55,
                          damage: 5,
                          xp: 5,
                          attackSpeed: 1750,
                          boneShards: [1, 2, 3],
                          dropTable: [1],
                          }
//#4 - soulless soldier
enemy.soulless.soldier = { name: "Soulless Soldier",
                          active: false,
                          health: 110,
                          damage: 35,
                          xp: 15,
                          attackSpeed: 5000,
                          boneShards: [2, 3, 4, 5],
                          dropTable: [1],
                          }
//#5 - soulless knight
enemy.soulless.knight = { name: "Soulless Knight",
                          active: false,
                          health: 180,
                          damage: 50,
                          xp: 23,
                          attackSpeed: 3000,
                          boneShards: [4, 5, 6, 8],
                          dropTable: [1],
                          }
//#6 - soulless assassin
enemy.soulless.assassin = { name: "Soulless Assassin",
                          active: false,
                          health: 60,
                          damage: 4,
                          xp: 7,
                          attackSpeed: 350,
                          boneShards: [2, 3],
                          dropTable: [1],
                          }
//#7 - soulless giant
enemy.soulless.giant = { name: "Soulless Giant",
                          active: false,
                          health: 300,
                          damage: 70,
                          xp: 30,
                          attackSpeed: 2000,
                          boneShards: [10, 12, 14, 16, 18],
                          dropTable: [1, 2],
                          }
//#8 - soulless demon
enemy.soulless.demon = { name: "Soulless Demon",
                          active: false,
                          health: 400,
                          damage: 95,
                          xp: 45,
                          attackSpeed: 1900,
                          boneShards: [15, 18, 21, 23],
                          dropTable: [1, 2],
                          }
//#9 - soulless saint
enemy.soulless.saint = { name: "Soulless Saint",
                          active: false,
                          health: 550,
                          damage: 60,
                          xp: 40,
                          attackSpeed: 1000,
                          boneShards: [15, 18, 21, 23],
                          dropTable: [1, 2, 3],
                          }
//#10 - soulless dragon
enemy.soulless.dragon = { name: "Soulless Dragon",
                          active: false,
                          health: 750,
                          damage: 175,
                          xp: 75,
                          attackSpeed: 3000,
                          boneShards: [25, 30, 35, 40, 45],
                          dropTable: [1, 2, 3],
                          }

//#11 - rotten common
enemy.rotten.common = { name: "Rotten Common",
                          active: false,
                          health: 125,
                          damage: 30,
                          xp: 10,
                          attackSpeed: 1700,
                          boneShards: [2, 3, 4, 5],
                          dropTable: [1],
                          }
//#12 - rotten mage
enemy.rotten.mage = { name: "Rotten Mage",
                          active: false,
                          health: 120,
                          damage: 20,
                          xp: 10,
                          attackSpeed: 1000,
                          boneShards: [2, 3, 4, 5],
                          dropTable: [1],
                          }
//#13 - rotten archer
enemy.rotten.archer = { name: "Rotten Archer",
                          active: false,
                          health: 120,
                          damage: 15,
                          xp: 10,
                          attackSpeed: 700,
                          boneShards: [2, 3, 4, 5],
                          dropTable: [1],
                          }
//#14 rotten soldier
enemy.rotten.soldier = { name: "Rotten Soldier",
                          active: false,
                          health: 180,
                          damage: 50,
                          xp: 17,
                          attackSpeed: 2000,
                          boneShards: [4, 5, 6, 7],
                          dropTable: [1],
                          }
//#15 - rotten knight
enemy.rotten.knight = { name: "Rotten Knight",
                          active: false,
                          health: 270,
                          damage: 75,
                          xp: 25,
                          attackSpeed: 1850,
                          boneShards: [6, 7, 9, 11],
                          dropTable: [1, 2],
                          }
//#16 - rotten assassin
enemy.rotten.assassin = { name: "Rotten Assassin",
                          active: false,
                          health: 90,
                          damage: 9,
                          xp: 15,
                          attackSpeed: 350,
                          boneShards: [5, 6],
                          dropTable: [1],
                          }
//#17 - rotten giant
enemy.rotten.giant = { name: "Rotten Giant",
                          active: false,
                          health: 450,
                          damage: 100,
                          xp: 48,
                          attackSpeed: 1950,
                          boneShards: [16, 18, 20, 22, 24],
                          dropTable: [1, 2, 3],
                          }
//#18 - rotten demon
enemy.rotten.demon = { name: "Rotten Demon",
                          active: false,
                          health: 580,
                          damage: 125,
                          xp: 55,
                          attackSpeed: 1900,
                          boneShards: [21, 24, 27],
                          dropTable: [1, 2, 3],
                          }
//#19 - rotten saint
enemy.rotten.saint = { name: "Rotten Saint",
                          active: false,
                          health: 750,
                          damage: 155,
                          xp: 80,
                          attackSpeed: 1000,
                          boneShards: [25, 30, 35, 40, 75],
                          dropTable: [1, 2, 3],
                          }
//#20 - rotten dragon
enemy.rotten.dragon = { name: "Rotten Dragon",
                          active: false,
                          health: 1250,
                          damage: 205,
                          xp: 105,
                          attackSpeed: 3000,
                          boneShards: [35, 40, 45, 50, 60, 100],
                          dropTable: [1, 2, 3, 4],
                          }

//#21 - infested common
enemy.infested.common = { name: "Infested Common",
                          active: false,
                          health: 175,
                          damage: 40,
                          xp: 15,
                          attackSpeed: 1700,
                          boneShards: [3, 4, 5, 7],
                          dropTable: [1, 2],
                          }
//#22 - rotten mage
enemy.infested.mage = { name: "Infested Mage",
                          active: false,
                          health: 160,
                          damage: 30,
                          xp: 13,
                          attackSpeed: 950,
                          boneShards: [5, 6, 7, 8, 10],
                          dropTable: [1, 2],
                          }
//#23 - infested archer
enemy.infested.archer = { name: "Infested Archer",
                          active: false,
                          health: 160,
                          damage: 25,
                          xp: 13,
                          attackSpeed: 650,
                          boneShards: [5, 6, 7, 8, 10],
                          dropTable: [1, 2],
                          }
//#24 - infested soldier
enemy.infested.soldier = { name: "Infested Soldier",
                          active: false,
                          health: 250,
                          damage: 75,
                          xp: 25,
                          attackSpeed: 2000,
                          boneShards: [6, 8, 10, 12, 15],
                          dropTable: [1, 2],
                          }
//#25 - infested knight
enemy.infested.knight = { name: "Infested Knight",
                          active: false,
                          health: 360,
                          damage: 100,
                          xp: 40,
                          attackSpeed: 1800,
                          boneShards: [11, 13, 15, 17, 20],
                          dropTable: [1, 2, 3],
                          }
//#26 - infested assassin
enemy.infested.assassin = { name: "Infested Assassin",
                          active: false,
                          health: 110,
                          damage: 15,
                          xp: 15,
                          attackSpeed: 350,
                          boneShards: [10, 11],
                          dropTable: [1],
                          }
//#27 - infested giant
enemy.infested.giant = { name: "Infested Giant",
                          active: false,
                          health: 600,
                          damage: 175,
                          xp: 70,
                          attackSpeed: 1950,
                          boneShards: [22, 24, 26, 28, 36],
                          dropTable: [1, 2, 3],
                          }
//#28 - infested demon
enemy.infested.demon = { name: "Infested Demon",
                          active: false,
                          health: 760,
                          damage: 200,
                          xp: 85,
                          attackSpeed: 1900,
                          boneShards: [30, 40, 50, 60, 130],
                          dropTable: [1, 2, 3],
                          }
//#29 - infested saint
enemy.infested.saint = { name: "Infested Saint",
                          active: false,
                          health: 950,
                          damage: 250,
                          xp: 105,
                          attackSpeed: 1000,
                          boneShards: [45, 55, 65, 75, 105],
                          dropTable: [1, 2, 3],
                          }
//#30 - infested dragon
enemy.infested.dragon = { name: "Infested Dragon",
                          active: false,
                          health: 1750,
                          damage: 320,
                          xp: 175,
                          attackSpeed: 3000,
                          boneShards: [60, 80, 100, 120, 250],
                          dropTable: [1, 2, 3, 4],
                          }

//#31 - crystal common
enemy.crystal.common = { name: "Crystal Common",
                          active: false,
                          health: 125,
                          damage: 50,
                          xp: 20,
                          attackSpeed: 1600,
                          boneShards: [6, 7, 8, 11],
                          dropTable: [1, 2],
                          }
//#32 - crystal mage
enemy.crystal.mage = { name: "Crystal Mage",
                          active: false,
                          health: 200,
                          damage: 30,
                          xp: 25,
                          attackSpeed: 700,
                          boneShards: [9, 10, 11, 12, 13],
                          dropTable: [1, 2],
                          }
//#33 - crystal archer
enemy.crystal.archer = { name: "Crystal Archer",
                          active: false,
                          health: 200,
                          damage: 35,
                          xp: 25,
                          attackSpeed: 300,
                          boneShards: [9, 10, 11, 12, 13],
                          dropTable: [1, 2],
                          }
//#34 - crystal soldier
enemy.crystal.soldier = { name: "Crystal Soldier",
                          active: false,
                          health: 320,
                          damage: 75,
                          xp: 25,
                          attackSpeed: 1850,
                          boneShards: [15, 18, 21, 24, 27, 50],
                          dropTable: [1, 2, 3],
                          }
//#35 - crystal knight
enemy.crystal.knight = { name: "Crystal Knight",
                          active: false,
                          health: 450,
                          damage: 150,
                          xp: 55,
                          attackSpeed: 1700,
                          boneShards: [20, 25, 30, 35, 40, 100],
                          dropTable: [1, 2, 3],
                          }
//#36 - crystal assassin
enemy.crystal.assassin = { name: "Crystal Assassin",
                          active: false,
                          health: 140,
                          damage: 24,
                          xp: 25,
                          attackSpeed: 225,
                          boneShards: [25, 30],
                          dropTable: [1, 2, 3],
                          }
//#37 - crystal giant
enemy.crystal.giant = { name: "Crystal Giant",
                          active: false,
                          health: 750,
                          damage: 250,
                          xp: 95,
                          attackSpeed: 1850,
                          boneShards: [35, 40, 45, 50, 55, 80],
                          dropTable: [1, 2, 3, 4],
                          }
//#38 - crystal demon
enemy.crystal.demon = { name: "Crystal Demon",
                          active: false,
                          health: 940,
                          damage: 310,
                          xp: 120,
                          attackSpeed: 1800,
                          boneShards: [50, 60, 70, 80, 200, 250],
                          dropTable: [1, 2, 3, 4],
                          }
//#39 - crystal saint
enemy.crystal.saint = { name: "Crystal Saint",
                          active: false,
                          health: 1200,
                          damage: 380,
                          xp: 160,
                          attackSpeed: 850,
                          boneShards: [90, 110, 130, 150, 200, 300],
                          dropTable: [1, 2, 3, 4],
                          }
//#40 - crystal dragon
enemy.crystal.dragon = { name: "Crystal Dragon",
                          active: false,
                          health: 2250,
                          damage: 550,
                          xp: 275,
                          attackSpeed: 2500,
                          boneShards: [50, 100, 150, 200, 250, 500, 1000],
                          dropTable: [1, 2, 3, 4],
                          }

var enemyArray = [1,2,3,4];

function randomEnemySelector(){
    var randomEnemySelector = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    var currentEnemy = randomEnemySelector;

    if (currentEnemy == 1) {
        enemy.soulless.common.active = true;
        activateEnemy(enemy.soulless.common.name, enemy.soulless.common.health, 
                      enemy.soulless.common.damage, enemy.soulless.common.attackSpeed, enemy.soulless.common.xp, 
                      enemy.soulless.common.boneShards[Math.floor(Math.random() * enemy.soulless.common.boneShards.length)], enemy.soulless.common.dropTable);
    } else if (currentEnemy == 2) {
        enemy.soulless.mage.active = true;
        activateEnemy(enemy.soulless.mage.name, enemy.soulless.mage.health, 
                      enemy.soulless.mage.damage, enemy.soulless.mage.attackSpeed, 
                      enemy.soulless.mage.xp,
                      enemy.soulless.mage.boneShards[Math.floor(Math.random() * enemy.soulless.mage.boneShards.length)], enemy.soulless.mage.dropTable);
    } else if (currentEnemy == 3) {
        enemy.soulless.archer.active = true;
        activateEnemy(enemy.soulless.archer.name, enemy.soulless.archer.health, 
                      enemy.soulless.archer.damage, enemy.soulless.archer.attackSpeed, enemy.soulless.archer.xp,
                      enemy.soulless.archer.boneShards[Math.floor(Math.random() * enemy.soulless.archer.boneShards.length)], enemy.soulless.archer.dropTable);
    } else if (currentEnemy == 4) {
        enemy.soulless.soldier.active = true;
        activateEnemy(enemy.soulless.soldier.name, enemy.soulless.soldier.health, 
                      enemy.soulless.soldier.damage, enemy.soulless.soldier.attackSpeed, enemy.soulless.soldier.xp,
                      enemy.soulless.soldier.boneShards[Math.floor(Math.random() * enemy.soulless.soldier.boneShards.length)], enemy.soulless.soldier.dropTable);
    } else if (currentEnemy == 5) {
        enemy.soulless.knight.active = true;
        activateEnemy(enemy.soulless.knight.name, enemy.soulless.knight.health, 
                      enemy.soulless.knight.damage, enemy.soulless.knight.attackSpeed, enemy.soulless.knight.xp,
                      enemy.soulless.knight.boneShards[Math.floor(Math.random() * enemy.soulless.knight.boneShards.length)], enemy.soulless.knight.dropTable);
    } else if (currentEnemy == 6) {
        enemy.soulless.assassin.active = true;
        activateEnemy(enemy.soulless.assassin.name, enemy.soulless.assassin.health, 
                      enemy.soulless.assassin.damage, enemy.soulless.assassin.attackSpeed, enemy.soulless.assassin.xp,
                      enemy.soulless.assassin.boneShards[Math.floor(Math.random() * enemy.soulless.assassin.boneShards.length)], enemy.soulless.assassin.dropTable);
    } else if (currentEnemy == 7) {
        enemy.soulless.giant.active = true;
        activateEnemy(enemy.soulless.giant.name, enemy.soulless.giant.health, 
                      enemy.soulless.giant.damage, enemy.soulless.giant.attackSpeed, enemy.soulless.giant.xp,
                      enemy.soulless.giant.boneShards[Math.floor(Math.random() * enemy.soulless.giant.boneShards.length)], enemy.soulless.giant.dropTable);
    } else if (currentEnemy == 8) {
        enemy.soulless.demon.active = true;
        activateEnemy(enemy.soulless.demon.name, enemy.soulless.demon.health, 
                      enemy.soulless.demon.damage, enemy.soulless.demon.attackSpeed, enemy.soulless.demon.xp,
                      enemy.soulless.demon.boneShards[Math.floor(Math.random() * enemy.soulless.demon.boneShards.length)], enemy.soulless.demon.dropTable);
    } else if (currentEnemy == 9) {
        enemy.soulless.saint.active = true;
        activateEnemy(enemy.soulless.saint.name, enemy.soulless.saint.health, 
                      enemy.soulless.saint.damage, enemy.soulless.saint.attackSpeed, enemy.soulless.saint.xp,
                      enemy.soulless.saint.boneShards[Math.floor(Math.random() * enemy.soulless.saint.boneShards.length)], enemy.soulless.saint.dropTable);
    } else if (currentEnemy == 10) {
        enemy.soulless.dragon.active = true;
        activateEnemy(enemy.soulless.dragon.name, enemy.soulless.dragon.health, 
                      enemy.soulless.dragon.damage, enemy.soulless.dragon.attackSpeed, enemy.soulless.dragon.xp,
                      enemy.soulless.dragon.boneShards[Math.floor(Math.random() * enemy.soulless.dragon.boneShards.length)], enemy.soulless.dragon.dropTable);
    }
    console.log("current enemy: ", currentEnemy);
}

randomEnemySelector();

function activateEnemy(name, hp, damage, attackSpeed, xp, boneShards, dropTable){
    activeEnemyName = name;
    activeEnemyHp = hp;
    activeEnemyDamage = damage;
    activeEnemyAttackSpeed = attackSpeed;
    activeEnemyXP = xp;
    activeEnemyBoneShards = boneShards;
    activeEnemyDropTable = dropTable;
}

function addEnemiesToPool(){
    switch (player.currentStage){
        case 9:
            enemyArray.push(6, 11);
            break;
        case 14:
            enemyArray.push(5, 12);
            break;
        case 19:
            enemyArray.push(7, 13);
            break;
        case 29:
            enemyArray.push(14);
            break;
        case 39:
            enemyArray.push(8);
            break;
        case 44:
            enemyArray.push(15);       
    }
}


console.log(activeEnemyName);
console.log(activeEnemyHp);
console.log(activeEnemyDamage);
console.log(activeEnemyXP);
console.log(activeEnemyBoneShards);
