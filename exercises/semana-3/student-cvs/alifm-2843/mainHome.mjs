const myHomeIcon = document.querySelector('#myHomeIcon')

function myFunctionHome() {
    let respomenu = document.getElementById("myTopnav");
    if (respomenu.className === "topnav") {
        respomenu.className += " responsive";
    } else {
        respomenu.className = "topnav";
    }
}

myHomeIcon.addEventListener('click', myFunctionHome)