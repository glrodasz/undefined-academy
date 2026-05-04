const bodyElement = document.getElementById('bodyMode');
const btnScr = document.getElementById('btnScroll');
const changeMode = document.querySelectorAll('.buttonMode');
const menuBtn = document.querySelector('.btnMenu');

//Btn change background color
changeMode.forEach(element => {
    element.addEventListener('click', changeWebMode);
});

btnScr.addEventListener('click',upButton);

function changeWebMode(){
    bodyElement.classList.toggle("darkMode");
}

//Btn Scroll Up
function scrollTop(){
    let topScroll = document.getElementById('btnScroll');
    let imgScroll = document.getElementById('arrowImg')
    if(bodyElement.scroll > 20 || document.documentElement.scrollTop > 20){
        topScroll.style.visibility = 'visible';
        imgScroll.style.visibility = 'visible';
    }else{
        topScroll.style.visibility = 'collapse';
        imgScroll.style.visibility = 'collapse';
    }
}

function upButton(){
    bodyElement.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function(){
    scrollTop()
}

//DropDown menu

menuBtn.addEventListener('click', dropMenu);
function dropMenu() {
    let menuItems = document.querySelectorAll('.menuItem');
    console.log("click")
    menuItems.forEach(function(item) {
      if (item.style.display === 'none') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }