/*global document, window, alert, console, require*/
var game = {};
var player = {};

player.baseHealth = 400;
player.maxHealth = armour.baseHealth + armour.bonusHealth;
player.currentHealth = player.maxHealth;
player.damage = weapon.baseDamage + weapon.bonusDamage;
player.attackSpeed = weapon.baseAttackSpeed + weapon.bonusAttackSpeed;
player.hitChance = weapon.hitChance + weapon.bonusHitChance;
player.dodgeChance = armour.baseDodgeChance + armour.bonusDodgeChance;
player.critDamage = weapon.critDamage + weapon.critDamageBonus;
player.critChance = weapon.critChance + weapon.critChanceBonus;

player.boneShards = 0;
player.storedBoneShards = 0;
player.currentRunLevel = 0;
player.currentRunXP = 0;
player.currentStage = area.fyreVale.currentStage;

player.weaponScroll = 1;
player.currRunWeaponScroll = 0;
player.armourScroll = 0;
player.currRunArmourScroll = 0;
player.headScroll = 0;
player.currRunHeadScroll = 0;
player.glovesScroll = 0;
player.currRunGlovesScroll = 0;
player.bootsScroll = 0;
player.currRunBootsScroll = 0;
player.ring1Scroll = 0;
player.currRunRing1Scroll = 0;
player.ring2Scroll = 0;
player.currRunRing2Scroll = 0;
player.ring3Scroll = 0;
player.currRunRing3Scroll = 0;
player.ring4Scroll = 0;
player.currRunRing4Scroll = 0;
player.beltScroll = 0;
player.currRunBeltScroll = 0;
player.pocketScroll = 0;
player.currRunPocketScroll = 0;
player.auraScroll = 0;
player.currRunAuraScroll = 0;

function loadHUD() {
    document.getElementById("locAdj").innerHTML = currentLocAdj.toString();
    document.getElementById("locNoun").innerHTML = currentLocNoun.toString();
    document.getElementById("area").innerHTML = area.fyreVale.name;
    document.getElementById("currentStage").innerHTML = player.currentStage;
    document.getElementById("totalStages").innerHTML = area.fyreVale.totalStages;
    document.getElementById("bestStage").innerHTML = bestStageArr.slice(-1);
    document.getElementById("currentBoneShards").innerHTML = player.boneShards;
    document.getElementById("currentPlayerHealth").innerHTML = player.currentHealth;
    document.getElementById("maxPlayerHealth").innerHTML = player.maxHealth;
    document.getElementById("weapon").innerHTML = weapon.name;
    document.getElementById("armour").innerHTML = armour.name;
    document.getElementById("head").innerHTML = head.name;
    document.getElementById("gloves").innerHTML = gloves.name;
    document.getElementById("boots").innerHTML = boots.name;
    document.getElementById("ring1").innerHTML = ring1.name;
    document.getElementById("ring2").innerHTML = ring2.name;
    document.getElementById("ring3").innerHTML = ring3.name;
    document.getElementById("ring4").innerHTML = ring4.name;
    document.getElementById("belt").innerHTML = belt.name;
    document.getElementById("pocket").innerHTML = pocket.name;
    document.getElementById("aura").innerHTML = aura.name;
    document.getElementById("currentRunLevel").innerHTML = player.currentRunLevel;
    
    document.getElementById("weaponScroll").innerHTML = player.weaponScroll;
    document.getElementById("armourScroll").innerHTML = player.armourScroll;
    document.getElementById("headScroll").innerHTML = player.headScroll;
    document.getElementById("glovesScroll").innerHTML = player.glovesScroll;
    document.getElementById("bootsScroll").innerHTML = player.bootsScroll;
    document.getElementById("ring1Scroll").innerHTML = player.ring1Scroll;
    document.getElementById("ring2Scroll").innerHTML = player.ring2Scroll;
    document.getElementById("ring3Scroll").innerHTML = player.ring3Scroll;
    document.getElementById("ring4Scroll").innerHTML = player.ring4Scroll;
    document.getElementById("beltScroll").innerHTML = player.beltScroll;
    document.getElementById("pocketScroll").innerHTML = player.pocketScroll;
    document.getElementById("auraScroll").innerHTML = player.auraScroll;
    
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

function setNewStats(){
    player.damage = weapon.baseDamage + weapon.bonusDamage;
    player.hitChance = weapon.hitChance + weapon.bonusHitChance;
    player.critDamage = weapon.critDamage + weapon.critDamageBonus;
    player.critChance = weapon.critChance + weapon.critChanceBonus;
    player.attackSpeed = weapon.baseAttackSpeed + weapon.bonusAttackSpeed;
}

var bestStageArr = [1];

function pushBestStage() {
    if (!bestStageArr.include(player.currentStage)) {
        bestStageArr.push(player.currentStage);
    }
}

function addEnemies(){
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
    document.getElementById("startCombat").style.display = "none";
    currentEnemyHP = activeEnemyHp;
    startEnemyAttack = setInterval(startEnemyAttack, activeEnemyAttackSpeed);
    startPlayerAttack = setInterval(startPlayerAttack, player.attackSpeed);
    
    function startPlayerAttack(){
        const maxEnemyHP = activeEnemyHp;
        var hit = [Math.floor(Math.random() * 100)];
        if (hit >= player.hitChance){
            currentEnemyHP += player.damage;
            console.log("miss");
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
                player.storedBoneShards += activeEnemyBoneShards;
                xpGains();
                enemyLoot();
                addEnemies();
                setTimeout(function(){
                    initialiseEnemy();
                    loadHUD();
                    startCombat();
                },1500)
            }
    }
    function startEnemyAttack(){
        var dodge = [Math.floor(Math.random() * 100)];
        if (dodge <= player.dodgeChance){
            player.currentHealth += activeEnemyDamage;
            console.log("dodge");
        }
        player.currentHealth -= activeEnemyDamage;
        document.getElementById("currentPlayerHealth").innerHTML = player.currentHealth;
        
        // Player dead ===================================================
        if (player.currentHealth <= 0){
            clearInterval(startEnemyAttack);
            clearInterval(startPlayerAttack);
            player.currentHealth = player.maxHealth;
            player.boneShards += player.storedBoneShards;
            player.weaponScroll += player.currRunWeaponScroll;
            
            //document.getElementById("overlay").style.display = "block";
            
            document.getElementById("startCombat").style.display = "block";
            resetPlayerStats();
            resetEnemy();
            loadHUD();
        }
    }
}

var baseXP = 25;
var xpCalc = baseXP;

function xpGains(){
    player.currentRunXP += activeEnemyXP;
    currentXpPercent = (player.currentRunXP / baseXP) * 100;
    document.getElementById("xpBar").style.width = currentXpPercent + "%";
    if (player.currentRunXP >= baseXP){
        xpCalc += Math.floor(player.currentRunLevel + 200 * Math.pow(2, player.currentRunLevel / 7.))
        baseXP = Math.floor(xpCalc / 4);
        player.currentRunXP = 0;
        player.currentRunLevel++;
        document.getElementById("currentRunLevel").innerHTML = player.currentRunLevel;
        document.getElementById("xpBar").style.width = "100%";
        chooseSkill();
    }
}

function chooseSkill(){
        document.getElementById("overlaySkills").style.display = "block";
        createSkillElement();
}

var dropTableOneChance = 350;
var dropTableTwoChance = 1000;
var dropTableThreeChance = 3500;
var dropTableFourChance = 8600;
var scrollDropChance = 50;

var scrollTypeArr = ["weapon"];
var dropTableOneItems = [1, 2, 3, 4, 5, 6, 7];
var dropTableTwoItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function enemyLoot(){
    scrollDropRndm = Math.floor(Math.random() * scrollDropChance + 1);
    console.log("num: ", scrollDropRndm);
    if (scrollDropRndm == 1){
        selectScrollType = scrollTypeArr[Math.floor(Math.random() * scrollTypeArr.length)];
        switch (selectScrollType){
            case "weapon":
                player.currRunWeaponScroll += Math.round(weapon.level / 2);
                console.log("scrollDrop");
                break;
        }
    }
    selectDropTable = activeEnemyDropTable[Math.floor(Math.random() * activeEnemyDropTable.length)];
    if (selectDropTable == 1){
        itemChance = Math.floor(Math.random() * dropTableOneChance + 1);
        if (itemChance == 100){
            itemFound = dropTableOneItems[Math.floor(Math.random() * dropTableOneItems.length)];
            switch (itemFound){
                case 1:
                    armour.name = "Light Chainlink Armour";
                    armour.baseHealth = 650;
                    player.maxHealth = armour.baseHealth + armour.bonusHealth;
                    armour.baseDodgeChance = 5;
                    player.dodgeChance = armour.baseDodgeChance + armour.bonusDodgeChance;
                    armour.isOwned = true;
                    dropTableOneItems.splice(0,1);
                    scrollTypeArr.push("armour");
                    loadHUD();
                    break;
            }
        }
    }
}

function resetPlayerStats(){
    player.storedBoneShards = 0;
    player.currentRunLevel = 0;
    player.currentRunXP = 0;
    player.currentStage = 1;
    document.getElementById("xpBar").style.width = "0%";
}

var skills = ["Additional Strike", "Attack Speed", "Attack Damage", "Max Health",
              "Critical Strike", "Focus", "Shadow Step", "Poison Sword", "Fire Sword",
              "Melee Attack", "Throwing Knife", "Ancient Magik", "Corrupt Core", 
              "Intuition", "Inspire", "Self-awareness", "Glacial Presence", "Intimidate", "Wiseman's Deathblow", "Deflect", "Resurrection", "Parasitic Strike", "Momentum"];

function createSkillElement(){
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("new text");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("overlaySkills");
    currentDiv.appendChild(newDiv);
}
