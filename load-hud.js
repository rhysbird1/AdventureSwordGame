/*eslint-env browser*/
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
}
