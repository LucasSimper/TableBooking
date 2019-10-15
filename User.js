//Skal oprettes 2 Strings- username og password

/* skal kunne logge ind- ud fra User Data
skal den kunne vide hvilken bruger der logger ind
 */
/*class User {
    constructor(firstName, lastName, password, age, gender, eMail, phoneNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.eMail = eMail;
        this.phoneNumber = phoneNumber;
    }
    var allUsers = [];

    function storeUsers () {
       // Make a function that creates a user_id_generator();

        var userObj = new User (document.getElementById("firstName").value, document.getElementById("lastName").value, document.getElementById("password").value,
            document.getElementById("age").value, document.getElementById("gender").value, document.getElementById("eMail").value, document.getElementById("phoneNumber").value)

        //Adds the value of the user_ID
        userObj.User_id = user_idgen;
        console.log(userObj);

       Pushes the array with user-objects into our localstorage
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        console.log(JSON.parse(localStorage.getItem("allUsers")));
        alert("Det er nu blevet gemt!")
    }

}

//array is empty. every new user will be pushed to the array

//use allUsers.push() to add new Users to the array
new Users(){
    this.firstName = localStorage.getItem(firstName);
    this.lastName =localStorage.getItem(lastName);
}

// check if local storage for Users is empty if localStorage.getItem("Users") == null then push new Users to allUser array
// if there are Users in the local Storage, retrieve the local storage allUsers = JSON.parse(localStorage.getItem("Users"). and then we push to allUsers

// push allUsers array to localstorage */
