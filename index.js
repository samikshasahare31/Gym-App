function home() {
    document.getElementById("homes").style.color = "red";
    document.getElementById("plans").style.color = "white";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "white";
}

function program() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "white";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "red";
}
function plan() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "red";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "white";
}
function blog() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "white";
    document.getElementById("contacts").style.color = "white";
    document.getElementById("blogs").style.color = "red";
    document.getElementById("programs").style.color = "white";
}
function contact() {
    document.getElementById("homes").style.color = "white";
    document.getElementById("plans").style.color = "white";
    document.getElementById("contacts").style.color = "red";
    document.getElementById("blogs").style.color = "white";
    document.getElementById("programs").style.color = "white";
}

function submit() {
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if (name.value == "") {
        alert("Please Enter Name")
    } else if (number.value == "") {
        alert("Please Enter Number")
    } else {
        alert("Thanks for Join : " + name.value)
    }
}