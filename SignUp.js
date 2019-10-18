var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmPassword")
var phoneNumber = document.getElementById("phoneNumber")
var eMail = document.getElementById("eMail")
var age = document.getElementById("age")
var genderFemale = document.getElementById("genderRadioFemale")
var genderMale = document.getElementById("genderRadioMale")

// bruges ikke lige nu: var signUpButton = document.getElementById("signUpButton")



//Funktion til at omregne fødselsdato til en reel alder
function calculateAge () {
    var todayInMs = Date.now();
    var birthDate = new Date(age.value);
    var birthMS = birthDate.getTime();
    var ageInMs = todayInMs-birthMS;
    ageInYears = Math.floor(ageInMs/(24*3600*365.25*1000));
   return ageInYears;
}
function controlGender() {
    gender =""
        if (genderMale.checked == true){
            gender = "Male";
        }
        else {
            gender = "Female";
        }
        return (gender);

    }



// Funktion til at kontrollere at alle inputs bliver overholdt
function checkInputs() {
    var passed = true;
    // Variabel til at vise at der KUN må indeholde digits- bruges i telefonnummer
    var numbers = /^\d+$/;

   /* if (phoneNumber.value.match(numbers) || phoneNumber.value<1) {
        passed = true
    }
    else {
        alert ("Please input numeric characters only in phone number!")
        document.getElementById("phoneNumber").style.borderColor = "red";
        passed = false
    }
    if (firstName.value == "") {
        alert("You need to fill out all the boxes");
        document.getElementById("firstName").style.borderColor = "red";
        passed = false
    }
    else if (lastName.value == "") {
        alert("You need to fill out all the boxes");
        document.getElementById("lastName").style.borderColor = "red";
        passed = false;
    }
    else if (password.value=="") {
        alert("You need to fill out all the boxes");
    document.getElementById("password").style.borderColor = "red";
    passed = false;
    }
    else if(confirmPassword.value == "") {
            alert("You need to fill out all the boxes");
            document.getElementById("confirmPassword").style.borderColor = "red";
            passed = false;
        }
    else if (phoneNumber.value == "") {
        alert("You need to fill out all the boxes");
        document.getElementById("age").style.borderColor = "red";
        passed = false;
    }

    else if(eMail.value == ""){
        alert("You need to fill out all the boxes");
        document.getElementById("eMail").style.borderColor = "red";
        passed = false;
    }
    else if (age.value == "") {
        alert("You need to fill out all the boxes");
        document.getElementById("age").style.borderColor = "red";
        passed = false;
    }
    else if (genderFemale.checked != true && genderMale.checked != true){
            alert("You need to fill out all the boxes");
            document.getElementById("genderFemale" && "genderMale").style.borderColor = "red";
            passed = false;
        }

    if (password.value != confirmPassword.value) {
        alert("The passwords you have typed are not identical!");
        document.getElementById("password" && "confirmPassword").style.borderColor = "red";
        passed = false;
    }
    if (password.value.length>0 && password.value.length<8) {
        alert("Your password must be atleat 8 characters");
        document.getElementById("password").style.borderColor = "red";
        passed = false;
    }
    if (calculateAge()<18){
        alert("You need to be atleast 18 years to create an account")
        passed = false;
    }*/
    //if( der er tal i lastname OR first name){
        //alert("Der må ikke være tal bla bla)
        // passed = false;
    //Create function that makes sure that day of birth cannot be set to anything else than an actual date.
    // Create function that makes sure that name cannot consist of anything else than letters

    return passed;
}
// Denne funktion skal skiftes til at være en onclick funktion. SKal bruge var signUpButton men ved ikke hvordan
   /* function Sign_Up() {
        if (checkInputs () == true) {
            storeUsers();
        }
        alert ("You have now created a user! We will now direct you to the booking system!");

    }*/

