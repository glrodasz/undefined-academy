// undefined functions
function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello World");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);


// other functions

//* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

document.getElementById("myIcon").addEventListener("click", myFunction);

function myFunction() {
    var respomenu = document.getElementById("myTopnav");
    if (respomenu.className === "topnav") {
        respomenu.className += " responsive";
    } else {
        respomenu.className = "topnav";
    }
}


