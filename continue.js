var numbers = [10, 20, 30, 40, 60, 70, 80, 25, 90, 50, 100];

for ( var i = 0; i < numbers.length; i++){
    var number = numbers[i];

    if(number > 50){
        continue;
    }

    console.log(number);
}
