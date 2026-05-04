const bodyElement = document.getElementById('bodyMode');
const btnScr = document.getElementById('btnScroll');
const changeMode = document.querySelectorAll('.buttonMode');

changeMode.forEach(element => {
    element.addEventListener('click', changeWebMode);
});

btnScr.addEventListener('click',upButton);

function changeWebMode(){
    bodyElement.classList.toggle("darkMode");
}

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