//Skal oprettes 2 Strings- username og password

/* skal kunne logge ind- ud fra User Data
skal den kunne vide hvilken bruger der logger ind
 */
class Users {
    constructor(firstName, lastName, password, age, gender, eMail, phoneNumber, birthday){
        this firstName = firstName
        this lastName = lastName

    }
}

//array is empty. every new user will be pushed to the array
var allUsers = []

//use allUsers.push() to add new Users to the array
new Users()

// check if local storage for Users is empty if localStorage.getItem("Users") == null then push new Users to allUser array
// if there are Users in the local Storage, retrieve the local storage allUsers = JSON.parse(localStorage.getItem("Users"). and then we push to allUsers

// push allUsers array to localstorage
