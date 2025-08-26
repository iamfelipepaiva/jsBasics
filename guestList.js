
function nameCheck() {

    var listOfGuests = ["Angelina", "Lean", "Bruna", "Pierre", "John"];

    var yourName = prompt("What's your name?");
    alert("Thank you!");

       if (listOfGuests.includes(yourName)){
        return alert("Welcome to the party!");
    } else {
       return alert("Sorry, maybe next time!");
    }
    
}
