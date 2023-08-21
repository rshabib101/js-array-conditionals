var money =  30;
var danishPrice = 45;
var butterBread = 35; 
var toastBiscuit = 20;

if(danishPrice < money) {
    console.log('dan dan danish khamu');
}
else if (butterBread < money){
    console.log('butterbon khamu')
}

else if (toastBiscuit < money){
    console.log('cubaiya khamuni')
}

else {
    console.log('eigula sob tok jinis khamu na')
}

// practice problem 3 

const num1 = 13;
const num2 = 79;
const num3 = 45;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number.");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest number.");
} else {
    console.log(num3 + " is the largest number.");
}