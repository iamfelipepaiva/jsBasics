let dogAge = prompt("Type your dog's age: ");

function dogAgeFunc(dogAge){
    
    let humanAge = ((dogAge-2) * 4) + 21;
    
    return alert("The human age of your dog is: " + humanAge + "!");
}

dogAgeFunc(dogAge);