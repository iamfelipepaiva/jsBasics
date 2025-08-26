var names = ["Felipe", "Daniel", "Richard", "João", "Fernando"];

function whosPaying() {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy coffee today!";
    
}


whosPaying();
