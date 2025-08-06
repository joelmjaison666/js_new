//creating a variable using var keyword
const weight = parseFloat(prompt("enter your weight"));
const height = parseFloat(prompt("enter your height"));
const total = weight / (height * height);
if (total<18.5){
    alert("you are underweight");
}
else if(total>25){
    alert("you are overweight");
}
else{
    alert("you are good");
}