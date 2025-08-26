function toUpper() {
    const usersFirstName = prompt("Type your first name: ");
    const usersLastName = prompt("Type your last name: ");

    if (usersFirstName) {
        let usersFirstChar = usersFirstName.slice(0, 1);
        let usersRestOfName = usersFirstName.slice(1, usersFirstName.length);
        
        if (usersFirstChar !== usersFirstChar.toUpperCase()) {
            usersFirstName = usersFirstChar.toUpperCase() + usersRestOfName.toLowerCase();
        }
    }

    if (usersLastName) {
        let lastFirstChar = usersLastName.slice(0, 1);
        let lastRestOfName = usersLastName.slice(1, usersLastName.length);

        if (lastFirstChar !== lastFirstChar.toUpperCase()) {
            usersLastName = lastFirstChar.toUpperCase() + lastRestOfName.toLowerCase();
        }
    }

    let usersFullName = usersFirstName + " " + usersLastName;
    alert("Your full name is " + usersFullName + "!");
}

toUpper();

/* function toUpper() {
    const usersFirstName = prompt("Type your name: ");
    const usersLastName = prompt("Type your last name: ");
    
    if (usersFirstName) {
        usersFirstName = usersFirstName[0].toUpperCase() + usersFirstName.slice(1).toLowerCase();
    }

       if (usersLastName) {
        usersLastName = usersLastName[0].toUpperCase() + usersLastName.slice(1).toLowerCase();
    }

    let usersFullName = usersFirstName +" "+ usersLastName;
    alert("Your full name is " + usersFullName + "!");
}

toUpper();

*/