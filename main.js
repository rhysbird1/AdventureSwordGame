var game = {};
var player = {};

document.onmousedown = disableclick;
status = "Right Click Disabled";
function disableclick(event){ 
    if(event.button==2) {     
        alert(status);     
        return false;       
    }
}

player.baseHealth = 400; //400 default
player.maxHealth = player.baseHealth + armour.baseHealth + armour.bonusHealth;
player.currentHealth = player.maxHealth;
player.attackSpeed = weapon.baseAttackSpeed + weapon.bonusAttackSpeed;
player.hitChance = weapon.hitChance + weapon.bonusHitChance;
player.dodgeChance = armour.baseDodgeChance + armour.bonusDodgeChance;
player.boneShards = 5;
player.storedBoneShards = 0;
player.currentRunLevel = 0;
player.currentRunXP = 0;
player.currentStage = area.fyreVale.currentStage;

player.currRunWeaponScroll = 0;
player.currRunArmourScroll = 0;
player.currRunHeadScroll = 0;
player.currRunGlovesScroll = 0;
player.currRunBootsScroll = 0;
player.currRunRing1Scroll = 0;
player.currRunRing2Scroll = 0;
player.currRunRing3Scroll = 0;
player.currRunRing4Scroll = 0;
player.currRunBeltScroll = 0;
player.currRunPocketScroll = 0;
player.currRunAuraScroll = 0;

function loadHUD(){
    document.getElementById("locAdj").innerHTML = currentLocAdj.toString();
    document.getElementById("locNoun").innerHTML = currentLocNoun.toString();
    document.getElementById("area").innerHTML = area.fyreVale.name;
    document.getElementById("currentStage").innerHTML = player.currentStage;
    document.getElementById("totalStages").innerHTML = area.fyreVale.totalStages;
    document.getElementById("bestStage").innerHTML = bestStageArr.slice(0);
    document.getElementById("currentBoneShards").innerHTML = player.boneShards;
    document.getElementById("currentPlayerHealth").innerHTML = player.currentHealth;
    document.getElementById("maxPlayerHealth").innerHTML = player.baseHealth;
    document.getElementById("weapon").innerHTML = weapon.name[weapon.level];
    document.getElementById("armour").innerHTML = armour.name[armour.level];
    document.getElementById("head").innerHTML = head.name[head.level];
    document.getElementById("gloves").innerHTML = gloves.name[gloves.level];
    document.getElementById("boots").innerHTML = boots.name[boots.level];
    document.getElementById("ring1").innerHTML = ring1.name[ring1.level];
    document.getElementById("ring2").innerHTML = ring2.name[ring2.level];
    document.getElementById("ring3").innerHTML = ring3.name[ring3.level];
    document.getElementById("ring4").innerHTML = ring4.name[ring4.level];
    document.getElementById("belt").innerHTML = belt.name[belt.level];
    document.getElementById("pocket").innerHTML = pocket.name[pocket.level];
    document.getElementById("aura").innerHTML = aura.name[aura.level];
    document.getElementById("currentRunLevel").innerHTML = player.currentRunLevel;
    
    document.getElementById("weaponScroll").innerHTML = weapon.scroll;
    document.getElementById("armourScroll").innerHTML = armour.scroll;
    document.getElementById("headScroll").innerHTML = head.scroll;
    document.getElementById("glovesScroll").innerHTML = gloves.scroll;
    document.getElementById("bootsScroll").innerHTML = boots.scroll;
    document.getElementById("ring1Scroll").innerHTML = ring1.scroll;
    document.getElementById("ring2Scroll").innerHTML = ring2.scroll;
    document.getElementById("ring3Scroll").innerHTML = ring3.scroll;
    document.getElementById("ring4Scroll").innerHTML = ring4.scroll;
    document.getElementById("beltScroll").innerHTML = belt.scroll;
    document.getElementById("pocketScroll").innerHTML = pocket.scroll;
    document.getElementById("auraScroll").innerHTML = aura.scroll;
    
    //TODO make this a loop so as to not have massive lines of code
    document.getElementById("ttBsNeededWep").innerHTML = weapon.shardsNeededToUpgrade;
    document.getElementById("ttWsNeededWep").innerHTML = weapon.scrollsNeededToUpgrade;
    
    document.getElementById("currentEnemyName").innerHTML = activeEnemyName;
    
//    var element = document.getElementById("weapon");
//    element.classList.add("tooltip");
//    var node = document.createElement("div");
//    node.setAttribute("class", "tooltip-text");
//    var text = "Hello";
//    var textnode = document.createTextNode(text);
//    node.appendChild(textnode);
//    document.getElementById("weapon").appendChild(node);
       
}

var bestStageArr = [];

function pushBestStage(){
    if (!bestStageArr.include(player.currentStage)){
        bestStageArr.push(player.currentStage)
    }
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

var startEnemyAttack;
var startPlayerAttack;

function initialiseEnemy(){
    document.getElementById("enemyHealth").style.width = "100%";
    currentEnemyHP = activeEnemyHp;
}

function startCombat(){
    player.damage = Math.round(weapon.baseDamage + weapon.bonusDamage);
    document.getElementById("startCombat").style.display = "none";
    currentEnemyHP = activeEnemyHp;
    var startEnemyAttack = setInterval(startEnemyAttack, activeEnemyAttackSpeed);
    var startPlayerAttack = setInterval(startPlayerAttack, player.attackSpeed);

    function startPlayerAttack(){
        const maxEnemyHP = activeEnemyHp;
        var hit = [Math.floor(Math.random() * 100)];
        if (hit >= player.hitChance){
            currentEnemyHP += player.damage;
            CombatLogListAppend(gameLogText.playerMissed);
        } else {
            CombatLogListAppend(gameLogText.playerDamage);
        }
        currentEnemyHP -= player.damage;
        enemyHpPercent = (currentEnemyHP / maxEnemyHP) * 100;
        document.getElementById("enemyHealth").style.width = enemyHpPercent + "%";
        
            // Enemy Dead =================================================
            if (currentEnemyHP <= 0) {
                document.getElementById("enemyHealth").style.width = "0%";
                clearInterval(startEnemyAttack);
                clearInterval(startPlayerAttack);
                player.currentStage++;
                randomEnemySelector();
                xpGains();
                enemyLoot();
                addEnemiesToPool();
                setTimeout(function(){
                    initialiseEnemy();
                    startCombat();
                },1500)
            }
    }
    
    function startEnemyAttack(){
        var dodge = [Math.floor(Math.random() * 100)];
        if (dodge <= player.dodgeChance){
            player.currentHealth += activeEnemyDamage;
            CombatLogListAppend(gameLogText.playerDodged);
        } else {
            CombatLogListAppend(gameLogText.enemyDamage);
        }
        player.currentHealth -= activeEnemyDamage;
        document.getElementById("currentPlayerHealth").innerHTML = player.currentHealth;
        
        // Player dead ===================================================
        if (player.currentHealth <= 0){
            clearInterval(startEnemyAttack);
            clearInterval(startPlayerAttack);
            player.currentHealth = player.maxHealth;
            
            //document.getElementById("overlay").style.display = "block";
            
            document.getElementById("startCombat").style.display = "block";
            removeText();
            collectStoredCurrency();
            resetPlayerStats();
        }
    }
}

function collectStoredCurrency(){
    player.boneShards += player.storedBoneShards;
    weapon.scroll += player.currRunWeaponScroll;
    armour.scroll += player.currRunArmourScroll;
    head.scroll += player.currRunHeadScroll;
    gloves.scroll += player.currRunGlovesScroll;
    boots.scroll += player.currRunBootsScroll;
    ring1.scroll += player.currRunRing1Scroll;
    ring2.scroll += player.currRunRing2Scroll;
    ring3.scroll += player.currRunRing3Scroll;
    ring4.scroll += player.currRunRing4Scroll;
    belt.scroll += player.currRunBeltScroll;
    pocket.scroll += player.currRunPocketScroll;
    aura.scroll += player.currRunAuraScroll;
}

var baseXP = 25;
var xpCalc = baseXP;

function xpGains(){
    player.currentRunXP += activeEnemyXP;
    currentXpPercent = (player.currentRunXP / baseXP) * 100;
    document.getElementById("xpBar").style.width = currentXpPercent + "%";
    console.log("XP: ", player.currentRunXP);
    if (player.currentRunXP >= baseXP){
        xpCalc += Math.floor(player.currentRunLevel + 200 * Math.pow(2, player.currentRunLevel / 7.))
        baseXP = Math.floor(xpCalc / 4);
        player.currentRunXP = 0;
        player.currentRunLevel++;
        document.getElementById("currentRunLevel").innerHTML = player.currentRunLevel;
        document.getElementById("xpBar").style.width = "100%";
        console.log("baseXP: ", baseXP);
    }
}

function enemyLoot(){
    BoneShardsLoot();
    RareDropTable();
    EquipmentDrops();
    ScrollLoot();
}

var dropTableOneChance = 750;
var dropTableTwoChance = 2000;
var dropTableThreeChance = 7500;
var dropTableFourChance = 16000;
var scrollDropChance = 2;  //250 default
var dropTableOneItems = [1, 2, 3, 4, 5, 6, 7];
var dropTableTwoItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var equipmentOwnedArr = ["weapon"];
var equipmentNOTOwnedArr = ["armour", "head", "gloves", "boots", "ring1", "ring2",                                                 "ring3", "ring4", "belt", "pocket", "aura"];
var equipmentDropChance = 2; //increases with each drop. 150 default

function RareDropTable() {
    selectDropTable = activeEnemyDropTable[Math.floor(Math.random() * activeEnemyDropTable.length)];
    if (selectDropTable == 1){
        itemChance = Math.floor(Math.random() * dropTableOneChance + 1);
        if (itemChance == 100){
            itemFound = dropTableOneItems[Math.floor(Math.random() * dropTableOneItems.length)];
            switch (itemFound){
                case 1:
                    console.log("You found something!")
                    break;
            }
        }
    }
}

function BoneShardsLoot() {
    player.storedBoneShards += activeEnemyBoneShards;
    CombatLogListAppend("You found " + activeEnemyBoneShards + " Bone Shards");
}

function ScrollLoot( ){
    scrollDropRand = Math.floor(Math.random() * scrollDropChance);
    if (scrollDropRand == 1) {
        randomEquipScroll = Math.floor(Math.random() * equipmentOwnedArr.length);
        console.log("You got a scroll");
        switch (randomEquipScroll) {
            case 0:
                weaponMin = weapon.level * 2;
                weaponMax = weapon.level * 4;
                var weaponScrollsDropped = randNumGenMinMax(weaponMin, weaponMax);
                player.currRunWeaponScroll += weaponScrollsDropped;
                break;
        }
    }
}

function EquipmentDrops() {
    equipmentChance = Math.floor(Math.random() * equipmentDropChance);
    if (equipmentChance == 1){
        gainEquipIfNotOwned(equipmentNOTOwnedArr.slice(0,1));
    }
} 

function gainEquipIfNotOwned(equip) {
    console.log(equip);
    if (!isEquipOwned(equip)) {
        equipmentOwnedArr.push(equip);
        equipmentNOTOwnedArr.shift();
        if (equip == "armour"){
            armour.isOwned = true;
        }
        //equipmentDropChance += 100;
    }
}

function isEquipOwned(item) {
    return item.isOwned;
}

function resetPlayerStats() {
    player.storedBoneShards = 0;
    player.currentRunLevel = 0;
    player.currentRunXP = 0;
    player.currentStage = 1;
    player.currRunArmourScroll = 0;
    player.currRunHeadScroll = 0;
    player.currRunGlovesScroll = 0;
    player.currRunBootsScroll = 0;
    player.currRunRing1Scroll = 0;
    player.currRunRing2Scroll = 0;
    player.currRunRing3Scroll = 0;
    player.currRunRing4Scroll = 0;
    player.currRunBeltScroll = 0;
    player.currRunPocketScroll = 0;
    player.currRunAuraScroll = 0;
    document.getElementById("xpBar").style.width = "0%";
}

var gameLogText = {
    playerDamage: "Player > Hit Enemy",
    playerDodged: "Player > Dodged Attack",
    playerMissed: "Player > Missed",
    enemyDamage: "Enemy > Dealt " + activeEnemyDamage + " Damage",
}

function CombatLogListAppend(text){
    var node = document.createElement("LI");
    
    if (text === gameLogText.playerDodged){
        node.setAttribute("style", "color:#0092e0;");
    } 
    
    if (text === gameLogText.playerDamage){
        node.setAttribute("style", "color:green;");
    }
    
    if (text === gameLogText.enemyDamage){
        node.setAttribute("style", "color:red;");
    }
        
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    var combatLog = document.getElementById("combatLog");
    combatLog.insertBefore(node, combatLog.childNodes[0]);
}

function removeText(){
    document.getElementById("combatLog").innerHTML = "";
}

function randNumGenMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function(){
    loadHUD()
},10);
