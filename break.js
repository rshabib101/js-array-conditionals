for (var i = 0; i <= 10; i++){
    console.log(i);

    if(i >= 5){
        break;
    }
}

// while loop

var roastGiven = 0;
while(roastGiven < 10){
    console.log('roaste den');
    roastGiven++;
    if(roastGiven > 5){
        break;
    }
}

var items = ['habib', 'hasan', 'mariha', 'humayra'];
for (var i = 0; i < items.length; i++){

    var item = items[i];
    if(item == 'mariha'){
        break;
    }
    console.log(item);

 
}