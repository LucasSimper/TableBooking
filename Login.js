var eMail = document.getElementById("enteredEmail");
var password = document.getElementById("enteredPassword");
var logInButton = document.getElementById("Login!");
var existingUser = JSON.parse(localStorage.getItem("allUsers"))
console.log(existingUser)

//Admin login
var adminEmail = "admin@email.com";
var adminPassword = "adminp";

logInButton.onclick = function (e) {
    var userExists = false;
    e.preventDefault()
    for( i = 0; i < existingUser.length; i++) {
        if (eMail.value == adminEmail && password.value == adminPassword) {
            alert("Hello Admin");
            userExists = true;
            break;
        } else if (eMail.value == existingUser[i].eMail && password.value == existingUser[i].password) {
            alert("Hello user")
            userExists = true;
            document.location = "GUI.html";
            break;
        } else if (eMail.value == existingUser[i].eMail && password.value != existingUser[i].password) {
            alert("Wrong password- try again!");
            userExists = true;
            break;
        }
    }

    if (!userExists) {
        alert ("It seems like you haven't created a user yet- we will direct you to our sign up page!");
    }


    }
   // else if (eMail.value == )*/
