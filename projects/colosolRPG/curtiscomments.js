var readline = require("readline-sync");
//math
var randomNumberQuarter = Math.floor(Math.random() * 4 + 1);
var mathFiftyFifty = Math.floor(Math.random() * 2 + 1);
var mathThirds = Math.floor(Math.random() * 3 + 1);
var stepsTaken = 0;
//hero//
function Character(name, weapons) {
        this.name = name;
        this.weapons = weapons || "no weapons";
        this.attackpoints = 40;
        this.hitpoints = 100;
}
function heroDeath() {
    console.log("(RADIO STATIC)... You have been bitten... There's nothing more we can do for you...  God Bless ...(RADIO STATIC)")
}
//console.log("good job there are 4 types of enemies.  zombies, crawlers, runners and witches.
//       /grab a weapon create a weaponsArray = ["Gun", "Knife", "Towel"]
//console.log("get to the watchtower, you'll need to go through the bunker first")
//zombies//
function Monster(name, hitpoints, attackpoints, speed) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.attackpoints = attackpoints;
};
var zombie = new Monster("Zombie", 40, 20);
var runner = new Monster("Runner", 80, 30);
var theWitch = new Monster("The Witch", 200, 60);

function chooseMonster() {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber <= 5) {
        console.log("A " + zombie.name + " attacks you");
        return zombie;
    } else if (randomNumber >= 6 && randomNumber <= 9) {
        console.log("A " + runner.name + " attacks you")
        return runner;
    } else {
        console.log("the " + theWitch.name + " brings a swift death, good luck")
        return theWitch;
    }
}
//StoryLine
var charName = readline.question("(RADIO STATIC) ...repeat, who am I talking to? Over... (RADIO STATIC)").toUpperCase();
var hero = new Character(charName);
//// the reason this wasn't working was because you had a different var in the while loop than you did for the initial readline.question.  just make sure they both are named the same thing and it works. I changed it for you.  
while (charName === "") {
    charName = readline.question("(RADIO STATIC)...")
}
//you also had a , instead of + in front of charName.  I changed that too.
console.log("RADIO STATIC..." + charName + ", this is Sergeant Brooks,  HOW THE HELL DID YOU GET INSIDE THE QUARANTINE ZONE!?!?...(RADIO STATIC)");
///put this question in a function.  Then, inside of that function, put an if else statement, if (walk === r), run (make a function that handles walking) else if (walk). The while loop can stay outside, or you can just put an else statement at the end of the function that just starts the function over until the user types in one of the correct inputs. 
var walk = readline.question("(RADIO STATIC)... Wait... Don't answer that... Something's coming.  You gotta get out of there! Hit [R] to Run. NOW!! ...(RADIO STATIC)").toLowerCase();
while (walk !== 'r') {
    var walk = readline.question("It's coming coming up fast! Get out of there! Hit [R] NOW!").toLowerCase();
}
//put this into a function so you can call it later if you need to repeat it.  if you just have an if statement floating in the code, it'll only run once.  Put in a function and call it instead.  
if (walk === 'r') {
    toWalk();
}
var toTheBunker = readline.question("Keep going [R] until you're at the bunker!  Don't Stop!")
    
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
    while (monster.hitpoints < 0 || hero.hitpoints < 0) {
            console.log(monster.hitpoints)
            var attack = readline.question("Attack with [A] or try to escape with [E]").toLowerCase();
            if (attack === 'a') {
                monster.hitpoints -= hero.attackpoints;
                console.log("Zombie Health: " + monster.hitpoints)
                hero.hitpoints -= monster.attackpoints
                console.log(hero.name + " Heath:" + hero.hitpoints)
            } else if (attack === 'e') {
                escape()
            } else {
           attack = readline.question("Attack with [A] or try to escape with [E]")
        }
    } console.log("he dead")
}
function escape() {
    if (mathFiftyFifty > 1) {
        var escape = readline.question("You've managed to Escape!  Keep running with [R] until you get to the bunker or watchtower!").toLowerCase();
        if (escape === 'r') {
            toWalk()
        } else {
            console.log("Please keep going until you make it to the bunker with [R]")
            toWalk()
        }
    } else {
        fight(chooseMonster())
    }
}
//walking//
//I can see what you're trying to do here, and I found an easier way to handle a random enemy.  let me show you what I would do:
function checkSteps(){
    stepsTaken ++;
    
}
//I tried to make an example of what I did to make random enemy encounters in my first draft of my game.  Hopefully it should help you.
/////CURT'S WALK FUNCTION/////////
/*function toWalk(){
    /// you could put a check function here to see if you have taken 5 steps. have that function increment the stepsTaken by 1, and then make function call your Bunker function if stepsTaken === 5.  If it's less than 5, tell it to run the Walk function again.
    console.log("Walk Count: " + stepsTaken)
    var encounter = [1, 2, 3];
    var chance = encounter[Math.floor(Math.random() * encounter.length)];
    if (chance === 1) {
        console.log("an enemy appears!!!");
        //run your enemy generator function here.  Then, inside of your enemy generator function after it is complete, run your fight function.  Or put them in the same function and call that.  then, if the player is still alive after the fight, make sure that it calls the function that brings up the players options again, or the game will end. 
    } else {
        console.log("you continue safely");
        //then make sure to run another function here that brings the player back to their options.  if there is no function to call here, then the game will simply end.  
        
    }
}
*/
function toWalk() {
    stepsTaken++
    console.log(stepsTaken + "Walk Count")
    var randomNumberQuarter = Math.floor(Math.random() * 4 + 1);
    //change the number in the if statement back to 3, this was just to debug
    if (randomNumberQuarter > 0) {
        var monsterEncounter = readline.question("Something saw you! Hit [F] to fight or [R] to run!").toLowerCase();
        if (monsterEncounter === "f") {
            fight(chooseMonster());
            var fightOn = readline.question("Keep fighting with [F] or escape with [R]").toLowerCase();
        } else {
            escape()
        }
    } else {
        readline.question("Good, the monster didn't see you. Keep Walking [W] until you get to the Bunker").toLowerCase();
        //inventory
    }
    if (stepsTaken === 5) {
        var bunker = readline.question("You've made it to the bunker... Enter with [E] or continue running [R]")
    } else if (stepsTaken === 10) {
        madeItToSafety()
    }
}
//deaths//
//function heroDeath(){
//
//}
//
//function enemyDeath(){
//
//}