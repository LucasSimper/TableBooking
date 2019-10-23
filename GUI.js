// The next two functions take the inputted data regarding number of guests and date of arrival and saves that to local
// storage to be used in determining whether a table should be red or green
function saveDate() {
    let theDate= document.getElementById('ub').value;
    localStorage.setItem("theDateX", theDate);
    console.log("theDateX");
}

function saveNb() {
    let nbOfGuests= document.getElementById("un").value;
    localStorage.setItem("nbOfGuestsX", nbOfGuests);
    console.log("nbOfGuestsX")
}

// Test functions to see if above functions work

function testDate () {
    let x = localStorage.getItem('theDateX');
    console.log(x);
    alert(x)
}

function testNumber () {
    let x = localStorage.getItem('nbOfGuestsX');
    console.log(x);
    alert(x)
}
