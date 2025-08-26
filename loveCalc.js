function loveCalc() {

    var yourName = prompt("What's your name?");
    alert("Thank you!");
    var theirName = prompt("What's their name?");
}

function probabilityInPercentage() {

    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    if(loveScore <= 30){
        alert("Your love score is " + loveScore + "%! Maybe you should keep looking!");
    } else if( loveScore > 30 && loveScore <=70){
        alert("Your love score is " + loveScore + "%! You might succeed as a couple!");
    } else {
        alert("Your love score is " + loveScore + "%! You intensely love one another!");
    }
    
}


loveCalc();
probabilityInPercentage();
