

function saveUn() {
    var theDate= document.getElementById("un");
    localStorage.setItem("", theDate.value)
}

function testB() {
    var storedValue = localStorage.getItem("email");
    console.log("email");
}

/* function saveUb() {
    var guestNb = document.getElementById('ub').value;
    alert(guestNb);

}

function saveUn() {
    var arrivalTime = document.getElementById('un').value;
    alert(arrivalTime);
}


 */
/* Date and Time of Arrival<input type="datetime-local" id="un" size="200" /><br />
<input type="submit" onclick="saveUn();" />

function saveUn() {
    var arrivalTime = document.getElementById('un').value;
    alert(arrivalTime);
}

 */

/* function saveDate() {
    var dateAndTime = document.getElementById('xb').value;
    alert(username);
}


 */