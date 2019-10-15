var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmPassword")
var phoneNumber = document.getElementById("phoneNumber")
var eMail = document.getElementById("eMail")
var age = document.getElementById("age")
var genderFemale = document.getElementById("genderRadioFemale")
var genderMale = document.getElementById("genderRadioMale")

var signUpButton = document.getElementById(signUpButton)
//Age- virker ikke
/*
function calculateAge () {
    var b = Date.now();
    var a = age.getMilliseconds();
    var ageInMs = b-a;
    var ageInYears = ageInMs/(24*3600*365.25*1000);
   return ageInYears;
}
*/

//Create function that makes sure that day of birth cannot be set to anything else than an actual date.

function checkInputs() {

    var passed = true;
    // Variabel til at vise at det KUN må indeholde digits
    var numbers = /^\d+$/;

    if (phoneNumber.value.match(numbers) || phoneNumber.value<1) {
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
    if (password.value.length>0 && password.value.length<8){
        alert("Your password must be atleat 8 characters");
        document.getElementById("password").style.borderColor = "red";
        passed = false;
    }

    return passed
}

    function storeLogin() {
        if (checkInputs () == true) {
            storeUsers();
            /* localStorage.setItem ("firstName", firstName.value);
            localStorage.setItem("lastName", lastName.value);
            localStorage.setItem("password", password.value);
            if ( genderMale.checked == true){
                localStorage.setItem("gender", "Male");
            }
            else {
                localStorage.setItem("gender", "Female");
            }
            localStorage.setItem("phoneNumber", phoneNumber.value);
            localStorage.setItem("eMail", eMail.value);
            localStorage.setItem("age", age.value); */
        }

    }

