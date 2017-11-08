var readline = require("readline-sync");

//math
var randomNumberQuarter = Math.floor(Math.random() * 4 + 1);
var mathFiftyFifty = Math.floor(Math.random() * 2 + 1);
var mathThirds = Math.floor(Math.random() * 3 + 1);
var weaponsList = ["Sword", "Shotgun", "Pistol"]
var stepsTaken = 0;
var gameOn = true;


//hero//

function Character(name, weapons) {
        this.name = name;
        this.weapons = weapons || "no weapons";
        this.attackpoints = 41;
        this.hitpoints = 140;
}

function heroDeath() {
    return gameOn = false;
    
}

function health() {
    hero.hitpoints += 40;
    console.log("Health +40")
}
//console.log("good job there are 4 types of enemies.  zombies, crawlers, runners and witches.
//       /grab a weapon create a weaponsArray = ["Gun", "Knife", "Towel"]
//console.log("get to the watchtower, you'll need to go through the bunker first")



//zombies & enemies//

function Monster(name, hitpoints, attackpoints, speed) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.attackpoints = attackpoints;
};

var zombie = new Monster("Zombie", 80, 26);
var runner = new Monster("Runner", 120, 33);
var theWitch = new Monster("The Witch", 200, 61);

function chooseMonster() {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber <= 5) {
        console.log("A " + zombie.name + " attacks you");
        return zombie;
    } else if (randomNumber >= 6 && randomNumber <= 9) {
        console.log("A " + runner.name + " attacks you")
        return runner;
    } else {
        console.log("...(RADIO STATIC)...She's coming.... " + theWitch.name + " brings a swift death... if you don't have a good weapon... ...I'm sorry...  ...I'm so sorry ...(RADIO STATIC)")
        return theWitch;
    }
}


function enemyDeath(monster){
    console.log("(RADIO STATIC)... Looks like you killed them beyond dead, good work ...(RADIO STATIC)");
    health();
    toWalk();
}



//StoryLine

var charName = readline.question("(RADIO STATIC) ...repeat, who am I talking to? Over... (RADIO STATIC)").toUpperCase();
var hero = new Character(charName);

while (charName === "") {
    charName = readline.question("...(RADIO STATIC)...")
}

console.log("(RADIO STATIC)..." + charName + ", this is Sergeant Brooks,  HOW THE HELL DID YOU GET INSIDE THE QUARANTINE ZONE!?!? ...(RADIO STATIC)");
var run = readline.question("(RADIO STATIC)... Wait... Don't answer that... Something's coming.  You gotta get out of there! Hit [R] to Run. NOW!! ...(RADIO STATIC)").toLowerCase();

while (run !== 'r') {
    var run = readline.question("(RADIO STATIC)... It's coming coming up fast! Get out of there! Hit [R] NOW! ...(RADIO STATIC)").toLowerCase();
}

while (run === 'r') {
    toWalk();
//while steps taken === 5 run bunker function   
}



//fighting//

//function monster (){
//    random amount 
//    if hit {
//        then AJ.hitpoints -= random number
//    }
//    either hit 
//    
//    die()
//    toWalk()
//}

function fight(monster) {
    while (monster.hitpoints >= 0 && hero.hitpoints >= 0) {
            console.log("Enemy Health: " + monster.hitpoints);
            console.log("Your Health: " + hero.hitpoints);
            var attack = readline.question("(RADIO STATIC)... Attack with [A] or try to escape with [E] ...(RADIO STATIC)").toLowerCase();
            if (attack === 'a') {
                monster.hitpoints -= hero.attackpoints;
                hero.hitpoints -= monster.attackpoints
            } else if (attack === 'e' && Math.floor(Math.random() * 2 + 1) > 1 ) {
                console.log("(RADIO STATIC)... Great escape! RUN! ...(RADIO STATIC)");
                escape();
            } else {
           console.log("(RADIO STATIC)... Was that an escape attempt? You need to fight for your life! ...(RADIO STATIC)");
            hero.hitpoints -= 20;
        }
        
    } 
    if (hero.hitpoints <= 0) {
//        heroDeath();
            readline.question("...(RADIO STATIC)...ave been bitten... There's nothing more we can do for you...  God Bless...(RADIO STATIC)...");
            readline.question("... Sir?...   ....Sergeant Brooks?...")
            readline.question("...(RADIO STATIC)...    ...I'm sorry " + charName + "...   goodbye...(RADIO STATIC)..." )
            while (hero.hitpoints <= 0) {
            readline.question("...RADIO STATIC...")
        }
  } else if (monster.hitpoints <= 0) {
        monster.hitpoints += 150;
        enemyDeath();
    } 
}

//escape//

function escape() {
        var escape = readline.question("(RADIO STATIC)... You've managed to Escape!  Keep running with [R] until you get to the bunker or watchto...(RADIO STATIC)").toLowerCase();
        if (escape === 'r') {
            toWalk()
        } else {
            console.log("(RADIO STATIC)... Keep going until you make it to cover with [R]! ...(RADIO STATIC)")
            toWalk()
        }
}



//walking//

function toWalk() {
    steps();
    console.log("Distance Ran: " + stepsTaken)
    var randomNumberQuarter = Math.floor(Math.random() * 4 + 1);
    //change the number in the if statement back to 3, this was just to debug
    if (randomNumberQuarter > 2) {
        var monsterEncounter = readline.question("(RADIO STATIC)... The Enemy saw you! Hit [F] to fight or [R] to run! ...(RADIO STATIC)").toLowerCase();
        if (monsterEncounter === "f") {
            fight(chooseMonster());
        } else if (monsterEncounter === "r" && Math.floor(Math.random() * 2 + 1) > 1 ) {
            escape()
        } else {
            console.log("(RADIO STATIC)...'re too quick... You cannot escape ...(RADIO STATIC)");
            fight(chooseMonster());
        }
    } else {
        readline.question("(RADIO STATIC)...eep running with [R] until you get to Cover! ...(RADIO STATIC)").toLowerCase();
        //inventory
    }
}


function steps() {
    stepsTaken++
    if (stepsTaken === 5) {
        bunker()
    } else if (stepsTaken === 10) {
        while (stepsTaken === 10) {
        readline.question("You'll Live a Schmuch, You'll die a schmuck.  Welcome to Hell, Idiot")
        } 
    } else {
        
    }
}



//checkPoints//

function bunker() {
    var bunkerEntrance = readline.question("(RADIO STATIC)... You've reached the bunker! Look for a weapon... anything! ...(RADIO STATIC)!");
    var weaponChoice = readline.keyInSelect(weaponsList, "Which weapon do you choose?");
    console.log("You have chosen " + weaponsList[weaponChoice] + "...")
    weaponsUpGrade(weaponChoice)
    readline.question("(RADIO STATIC)... " + weaponsList[weaponChoice] + ", good choice.  Give them hell...(RADIO STATIC)");
    hero.hitpoints += 140;
    theWitch.hitpoints += 250;
    theWitch.attackpoints += 40;
    zombie.hitpoints += 100;
    zombie.attackpoints += 20;
    runner.hitpoints += 170;
    runner.hitpoints += 30;
    
}

function weaponsUpGrade(weapon) {
    if (weapon === "1") {
        hero.attackpoints += 40;
        console.log("Attack +40")
    } else if (weapon === "2") {
        hero.attackpoints += 80;
        console.log("Attack +80");
    } else {hero.attackpoints += 50; console.log("Attack +50")}
}
//function watchTower() {
//    console.log("You've made it to safety friend.  Well, safe enough... have a toffee.")
//    gameOn = false
//}
//

