/*eslint-env browser*/
/*global weapon, armour, area*/
/*eslint no-undef: "error"*/

//TODO rename implicit function names

var game = {};
var player = {};

function saveGame(){
    localStorage.setItem("boneShards", player.boneShards);
}

function loadSave(){
    player.boneShards = localStorage.getItem("boneShards");
}

function deleteSave(){
    localStorage.clear();
}

document.onmousedown = disableclick;
function disableclick(event){ 
    if(event.button==2) {     
        alert("Right Click Disabled");     
        return false;       
    }
}

player.maxHealth = Math.round(armour.baseHealth + armour.bonusHealth + head.baseHealth);
player.currentHealth = player.maxHealth;
player.hitChance = weapon.hitChance + weapon.bonusHitChance;
player.damageReduction = armour.damageReduction + armour.bonusDamageReduction + 
                         head.damageReduction + head.bonusDamageReduction;
player.boneShards = 0;
player.storedBoneShards = 0;
player.currentRunLevel = 0;
player.currentRunXP = 0;
player.currentStage = area.fyreVale.currentStage;

var bestStageArr = [];

function pushBestStage(){
    if (!bestStageArr.include(player.currentStage)){
        bestStageArr.push(player.currentStage)
    }
}

function increment(n){
    n++;
    return n;
}

var startEnemyAttack;
var startPlayerAttack;
var isLevellingUp = false;
var isPlaying = false;

function initialiseEnemy(){
    document.getElementById("enemyHealth").style.width = "100%";
    currentEnemyHP = activeEnemyHp;
}

//TODO refactor startCombat, startPlayerAttack & startEnemyAttack

function startCombat(){
    isPlaying = true;
    player.damage = Math.round(weapon.baseDamage + weapon.bonusDamage);
    document.getElementById("startCombat").style.display = "none";
    currentEnemyHP = activeEnemyHp;
    startEnemyAttack = setInterval(startEnemyAttack, activeEnemyAttackSpeed);
    startPlayerAttack = setInterval(startPlayerAttack, player.attackSpeed);

    function startPlayerAttack(){
        maxEnemyHP = activeEnemyHp;
        hitChanceHandler();
        currentEnemyHP -= player.damage;
        enemyHpPercent = (currentEnemyHP / maxEnemyHP) * 100;
        document.getElementById("enemyHealth").style.width = enemyHpPercent + "%";
        if (currentEnemyHP <= 0) {
            clearInterval(startEnemyAttack);
            clearInterval(startPlayerAttack);
            defeatedEnemyHandler();
        }
    }  
    function startEnemyAttack(){
        dodgeChanceHandler();
        player.currentHealth -= activeEnemyDamage;
        document.getElementById("currentPlayerHealth").innerHTML = player.currentHealth;
        if (player.currentHealth <= 0){
            player.currentHealth = 0;
            clearInterval(startEnemyAttack);
            clearInterval(startPlayerAttack);
            animateDeathScreen();
            setTimeout(function(){
                resetPlayerStateDuringDeathScreen();
            },5000);
        }
    }
}

function hitChanceHandler(){
    var hit = [Math.floor(Math.random() * 100)];
    if (hit >= player.hitChance){
        currentEnemyHP += player.damage;
        combatLogListAppend(gameLogText.playerMissed);
    } else {
        combatLogListAppend(gameLogText.playerDamage);
    }
}

function dodgeChanceHandler(){
    var dodge = [Math.floor(Math.random() * 100)];
    if (dodge <= player.dodgeChance){
        player.currentHealth += activeEnemyDamage;
        combatLogListAppend(gameLogText.playerDodged);
    } else {
        combatLogListAppend(gameLogText.enemyDamage);
    }
}

function levellingUpHandler(){
if (isLevellingUp == true) {
        levelUp();
    } else {
        setTimeout(function(){
            initialiseEnemy();
            startCombat();
        },1500)
    }
}

function resetPlayerStateDuringDeathScreen(){
    player.currentHealth = player.maxHealth;                    
    document.getElementById("startCombat").style.display = "block";
    document.getElementById("enemyHealth").style.width = "100%";
    removeLogText();
    collectStoredCurrency();
    resetPlayerStats();
    isPlaying = false;
}

function defeatedEnemyHandler(){
    randomEnemySelector();
    xpGains();
    enemyLoot();
    addEnemiesToPool();
    changeLocation();
    levellingUpHandler();
    player.currentStage = increment(player.currentStage);
    document.getElementById("enemyHealth").style.width = "0%";
}

function clearAllCombatIntervals(){
    clearInterval(startEnemyAttack);
    clearInterval(startPlayerAttack);
}

function animateDeathScreen(){
    var element = document.getElementById("deathScreen");
    element.classList.add("death-screen");
    element.classList.add("fadeIn");
    setTimeout(function(){
        element.classList.remove("fadeIn");
        element.classList.add("fadeOut");
    }, 5000);
    setTimeout(function(){
        element.classList.remove("death-screen");
        element.classList.remove("fadeOut");
    }, 8300);  
}

function levelUp(){
    document.getElementById("xpBar").style.width = "0%";
    clearInterval(startEnemyAttack);
    clearInterval(startPlayerAttack);
    overlayHandler();
}

function collectStoredCurrency(){
    player.boneShards +=  player.storedBoneShards;
    weapon.scroll     +=       weapon.heldScrolls;
    armour.scroll     +=       armour.heldScrolls;
    head.scroll       +=         head.heldScrolls;
    gloves.scroll     +=       gloves.heldScrolls;
    boots.scroll      +=        boots.heldScrolls;
    ring1.scroll      +=        ring1.heldScrolls;
    ring2.scroll      +=        ring2.heldScrolls;
    ring3.scroll      +=        ring3.heldScrolls;
    ring4.scroll      +=        ring4.heldScrolls;
    belt.scroll       +=         belt.heldScrolls;
    pocket.scroll     +=       pocket.heldScrolls;
    aura.scroll       +=         aura.heldScrolls;
}

var baseXP = 25;
var xpCalc = baseXP;

function xpGains(){
    player.currentRunXP += activeEnemyXP;
    currentXpPercent = (player.currentRunXP / baseXP) * 100;
    document.getElementById("xpBar").style.width = currentXpPercent + "%";
    console.log("XP: ", player.currentRunXP);
    if (player.currentRunXP >= baseXP){
        isLevellingUp = true;
        xpCalc += Math.floor(player.currentRunLevel + 200 * Math.pow(2, player.currentRunLevel / 7.))
        baseXP = Math.floor(xpCalc / 4);
        player.currentRunXP = 0;
        player.currentRunLevel = increment(player.currentRunLevel);
        document.getElementById("currentRunLevel").innerHTML = player.currentRunLevel;
        document.getElementById("xpBar").style.width = "100%";
    }
}

function enemyLoot(){
    boneShardLoot();
    rareDropTable();
    equipmentLoot();
    scrollLoot();
}

var dropTableOneChance = 750;
var dropTableTwoChance = 2000;
var dropTableThreeChance = 7500;
var dropTableFourChance = 16000;
var scrollDropChance = 250;  //250 default
var dropTableOneItems = [1, 2, 3, 4, 5, 6, 7];
var dropTableTwoItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var equipmentOwnedArr = ["weapon"];
var equipmentNOTOwnedArr = ["armour", "head", "gloves", "boots", "ring1", "ring2",                                                 "ring3", "ring4", "belt", "pocket", "aura"];
var equipmentDropChance = 50; //increases with each drop. 50 default

function rareDropTable(){
    selectDropTable = activeEnemyDropTable[Math.floor(Math.random() * activeEnemyDropTable.length)];
    if (selectDropTable == 1){
        itemChance = Math.floor(Math.random() * dropTableOneChance + 1);
        if (itemChance == 100){
            itemFound = dropTableOneItems[Math.floor(Math.random() * dropTableOneItems.length)];
            switch (itemFound){
                case 1:
                    console.log("You found something!");
                    break;
            }
        }
    }
}

function boneShardLoot(){
    player.storedBoneShards += activeEnemyBoneShards;
    combatLogListAppend("You found " + activeEnemyBoneShards + " Bone Shards");
}

function scrollLoot( ){
    scrollDropRand = Math.floor(Math.random() * scrollDropChance);
    if (scrollDropRand == 1) {
        randomEquipScroll = Math.floor(Math.random() * equipmentOwnedArr.length);
        console.log("You got a scroll");
        switch (randomEquipScroll) {
            case 0:  gainRandomEquipScrolls(weapon); break;
            case 1:  gainRandomEquipScrolls(armour);
                     armour.baseHealth += 200; break;
            case 2:  gainRandomEquipScrolls(head);   break;
            case 3:  gainRandomEquipScrolls(gloves); break;
            case 4:  gainRandomEquipScrolls(boots);  break;
            case 5:  gainRandomEquipScrolls(ring1);  break;
            case 6:  gainRandomEquipScrolls(ring2);  break;
            case 7:  gainRandomEquipScrolls(ring3);  break;
            case 8:  gainRandomEquipScrolls(ring4);  break;
            case 9:  gainRandomEquipScrolls(belt);   break;
            case 10: gainRandomEquipScrolls(pocket); break;
            case 11: gainRandomEquipScrolls(aura);   break;
        }
    }
}

function gainRandomEquipScrolls(item){
    min = item.level * 2;
    max = item.level * 4;
    var scrollsDropped = RNGMinMax(min, max);
    item.heldScrolls += scrollsDropped;
}

function equipmentLoot(){
    equipmentChance = Math.floor(Math.random() * equipmentDropChance);
    if (equipmentChance == 1){
        gainEquipIfNotOwned(equipmentNOTOwnedArr.slice(0,1));
    }
} 

function gainEquipIfNotOwned(equip){
    console.log(equip);
    if (!isEquipOwned(equip)) {
        equipmentOwnedArr.push(equip);
        equipmentNOTOwnedArr.shift();
        combatLogListAppend("You found: " + equip);
        //TODO refactor
        if (equip == "armour")      { changeEquipStatus(armour); } 
        else if (equip == "head")   { changeEquipStatus(head); } 
        else if (equip == "gloves") { changeEquipStatus(gloves); }
        else if (equip == "boots")  { changeEquipStatus(boots); }
        else if (equip == "ring1")  { changeEquipStatus(ring1); }
        else if (equip == "ring2")  { changeEquipStatus(ring2); }
        else if (equip == "ring3")  { changeEquipStatus(ring3); }
        else if (equip == "ring4")  { changeEquipStatus(ring4); }
        else if (equip == "belt")   { changeEquipStatus(belt); }
        else if (equip == "pocket") { changeEquipStatus(pocket); }
        else if (equip == "aura")   { changeEquipStatus(aura); }
        equipmentDropChance += 100;   
    }
}

function changeEquipStatus(item){
    item.isOwned = true;
    item.level = 1;
}

function isEquipOwned(item){
    return item.isOwned;
}

function resetPlayerStats(){
    player.storedBoneShards = 0;
    player.currentRunLevel = 0;
    player.currentRunXP = 0;
    player.currentStage = 1;
    weapon.heldScrolls = 0;
    armour.heldScrolls = 0;
    head.heldScrolls = 0;
    gloves.heldScrolls = 0;
    boots.heldScrolls = 0;
    ring1.heldScrolls = 0;
    ring2.heldScrolls = 0;
    ring3.heldScrolls = 0;
    ring4.heldScrolls = 0;
    belt.heldScrolls = 0;
    pocket.heldScrolls = 0;
    aura.heldScrolls = 0;
    document.getElementById("xpBar").style.width = "0%";
}

var gameLogText = {
    playerDamage: "Player > Hit Enemy",
    playerDodged: "Player > Dodged Attack",
    playerMissed: "Player > Missed",
    enemyDamage: "Enemy > Dealt " + activeEnemyDamage + " Damage",
}

function combatLogListAppend(text){
    var node = document.createElement("LI");
    changeLogTextStyle(text, node);    
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    var combatLog = document.getElementById("combatLog");
    combatLog.insertBefore(node, combatLog.childNodes[0]);
}

function changeLogTextStyle(text, node){
    if (text === gameLogText.playerDodged){
        node.setAttribute("style", "color:#0092e0;");
    } 
    if (text === gameLogText.playerDamage){
        node.setAttribute("style", "color:green;");
    }
    if (text === gameLogText.enemyDamage){
        node.setAttribute("style", "color:red;");
    }
}

function removeLogText(){
    document.getElementById("combatLog").innerHTML = "";
}

function RNGMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function skillCardSelect(){
    isLevellingUp = false;
    var overlayFade = document.getElementById("overlay");
    overlayFade.style.opacity = "0";
//    if (num == 1){
//        //statement
//    }
    initialiseEnemy();
    setTimeout(function(){
        startCombat();
    },500);
}

function overlayHandler(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    generateSkillCard(skills[0].url, skillImgElementIds[0]);
    console.log(skills[0].url, skillImgElementIds[0]);
}

function generateSkillCard(url, eleId){
    var imgNode = document.createElement("IMG");
    imgNode.setAttribute("src", url);
    imgNode.setAttribute("width", "333");
    imgNode.setAttribute("height", "333");
    document.getElementById(eleId).appendChild(imgNode);
}

function addSkillCardClickEvent(){
    
}

//========================================= TESTING ====================================

//Element.prototype.setAttributes = function (attrs) {
//    for (var idx in attrs) {
//        if ((idx == 'styles' || idx == 'style') && typeof attrs[idx] == 'object') {
//            for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop]}
//        } else if (idx == 'html') {
//            this.innerHTML = attrs[idx]
//        } else {
//            this.setAttribute(idx, attrs[idx]);
//        }
//    }
//};
//
//var d = document.createElement('div');
//d.setAttributes({
//    'id':'myDiv',
//    'class':'my-class',
//    'styles':{
//        'backgroundColor':'blue',
//        'color':'red'
//    },
//    'html':'lol'
//});

const skills = [
    {
        name: "Damage Boost",
        desc: "Increase damage by ", //+ var + "%"
        url: "../images/Dmg%20Boost.png",
    },
    {
        name: "Max Health Boost",
        desc: "...",
        url: "../images/Max%20Health%20Boost.png",
    },
    {
        name: "Attack Speed Boost",
        desc: "...",
        url: "../images/attack%20speed.png",
    },
]

console.log(skills[0].url);

const skillImgElementIds = [
    "skillIcon1",
    "skillIcon2",
    "skillIcon3"
];

setInterval(function(){
    loadHUD()
},10);
