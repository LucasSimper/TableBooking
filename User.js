//Skal oprettes 2 Strings- username og password

/*skal kunne logge ind- ud fra User Data
skal den kunne vide hvilken bruger der logger ind*/

class User {
    constructor(firstName, lastName, password, age, gender, eMail, phoneNumber, id ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.eMail = eMail;
        this.phoneNumber = phoneNumber;
        this.id = id;
    }}
//The empty array, that the users will get stored into
var allUsers = [];
//Variable to get the id_gen function to work.
var id_generator = 0;

    function id_gen () {
        id_generator ++;
        return id_generator;
    }
    //Function to control which radiobutton is checked




    function storeUsers () {
        if (checkInputs()== true){
        id_gen();

        var userObj = new User(
            document.getElementById("firstName").value,
            document.getElementById("lastName").value,
            document.getElementById("password").value,
            calculateAge(),
            controlGender(),
            document.getElementById("eMail").value,
            document.getElementById("phoneNumber").value);
        userObj.id = id_generator;
        console.log(userObj);

        allUsers.push(userObj);

        console.log(allUsers);

      // Pushes the array with user-objects into our localstorage
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
            console.log(JSON.parse(localStorage.getItem("allUsers")));
         alert("Thank you for creating a user! We will now direct you to the booking system!");
         //   document.location = "GUI.html";
    }
    }

//array is empty. every new user will be pushed to the array

//use allUsers.push() to add new Users to the array

// if there are Users in the local Storage, retrieve the local storage allUsers = JSON.parse(localStorage.getItem("Users"). and then we push to allUsers

// push allUsers array to localstorage