let pin = 12345;
let bal = 2000;

checkPin = () => {
    const p = document.getElementById('pin').value;

    if (p == pin) {
        document.getElementById('pin').value = "";
        document.getElementById('chkPin').disabled = true;
        document.getElementById('pinResult').innerHTML = "Select Action:";
        document.getElementById("pinResult").style.color = "black";
        document.getElementById('options').style.display = 'block';
        document.getElementById('logout').style.display = 'block';
    }
    else {
        document.getElementById("pinResult").innerHTML = "Invalid pin";
        document.getElementById("pinResult").style.color = "red";
    }
}

options = val => {

    if (val == 1)
    {
        document.getElementById('display1').innerHTML = "Your balance is: $" + bal;
        document.getElementById('display2').innerHTML = ""
        document.getElementById('withdraw').style.display = 'none';
        document.getElementById('changePin').style.display = 'none';
    }
    if (val == 2)
    {
        document.getElementById('display1').innerHTML = "";
        document.getElementById('display2').innerHTML = "";
        document.getElementById('withdraw').style.display = 'block';
        document.getElementById('changePin').style.display = 'none';
    }
    if (val == 3)
    {
        document.getElementById('display1').innerHTML = "";
        document.getElementById('display2').innerHTML = ""
        document.getElementById('withdraw').style.display = 'none';
        document.getElementById('changePin').style.display = 'block';
    }
}

withdraw = () => {
    const w = document.getElementById('withdrawAmount').value;
    if (w <= bal){
        bal = bal - w;
        document.getElementById('display1').innerHTML = "You have withdrawn $" + w + ".";
        document.getElementById('display2').innerHTML = "You have $" + bal + " remaining in your bank account.";
    }
    else {
        document.getElementById('display1').innerHTML = "You have insufficient cash.";
        document.getElementById('display2').innerHTML = "";
    }
}

changePin = () => {
    let p = document.getElementById("newPin").value
    if (p != pin){
        pin = p;
        document.getElementById('display1').innerHTML = "You have successfully changed your PIN."
    } else {
        document.getElementById('display1').innerHTML = "You have entered the same PIN."
    }
}

logoutAcc = () => {
    document.getElementById("pinResult").innerHTML = "";
    document.getElementById('options').style.display = "none";
    document.getElementById('withdraw').style.display = "none"
    document.getElementById('changePin').style.display = "none"
    document.getElementById('display1').innerHTML = ""
    document.getElementById('display2').innerHTML = ""
    document.getElementById('logout').style.display = "none";
    document.getElementById('chkPin').disabled = false;
}