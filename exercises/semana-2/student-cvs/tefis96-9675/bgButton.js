function changeWebMode(){
    let webMode = document.body;
    webMode.classList.toggle("darkMode");
}


function scrollTop(){
    let topScroll = document.getElementById('btnScroll');
    let imgScroll = document.getElementById('arrowImg')
    if(document.body.scroll > 20 || document.documentElement.scrollTop > 20){
        topScroll.style.visibility = 'visible';
        imgScroll.style.visibility = 'visible';
    }else{
        topScroll.style.visibility = 'collapse';
        imgScroll.style.visibility = 'collapse';
    }
}

function upButton(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}
window.onscroll = function(){
    scrollTop()
}