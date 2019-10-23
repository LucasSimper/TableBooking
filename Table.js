//This class keeps table data and decides whether or not a table is red or green. WIP
function testTable() {

    if (localStorage.getItem('nbOfGuestsX') <= 8) {

        document.getElementById('1A').style.backgroundColor = '#006400';
        console.log('available')
    }
    // make table green -- pre code work see to check if table is available
    else {
        document.getElementById('1A').style.backgroundColor = '#b22222';
        document.getElementById("1A").disabled = true;
        // make table red -- pre code work see to check if table is available
    }
}

function table1() {

    if (localStorage.getItem('nbOfGuestsX') <= 2 && localStorage.getItem('isReserved1') === false){

        document.getElementById('table1').style.backgroundColor = '#006400';
        console.log('available')
    }
    // make table green -- pre code work see to check if table is available
    else {
        document.getElementById('table1').style.backgroundColor = '#b22222';
        // make table red -- pre code work see to check if table is available  
    }
}
