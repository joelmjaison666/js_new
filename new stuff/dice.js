/*🎲 Dice Roller

    Simulate rolling two dice (random numbers 1–6).

    Show both dice values and their total.

    🔍 Use: Math.random(), numbers, strings, variables*/

const dice1= Math.floor(Math.random()*6)+1;
const dice2= Math.floor(Math.random()*6)+1;

const first_dice=alert("First dice "+dice1);
const second_dice=alert("Second dice "+dice2);
const total=alert("Total sum "+(dice1+dice2));

