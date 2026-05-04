import humanize from './utils/humanize';

// UTILITIES

function humanizeDate ($date){
    const datetime = $date.getAttribute("datetime");
    const humanizeDate = humanize(datetime);

    $date.textContent = humanizeDate;
}


function sortByDate($a, $b){
    const dateA = new Date($a.querySelector("time").getAttribute("datetime"));
    const dateB = new Date($b.querySelector("time").getAttribute("datetime"));
    return dateB - dateA;
}

/*
    PASOS PARA LA FUNCION HUMANIZAR FECHA

1. Por cada nodo ($date), humanizamos la fecha => Es decir, 
hacemos un forEach aplicando la funcion humanizeDate
2. Creamos la funcion humanizeDate($date) y como param pasamos el nodo del DOM
3. Creamos una const que almacene el datetime, tomando el atributo del nodo "datetime"
4. Creamos una const que almacene la fecha humanizada, 
por la cual utilizamos la funcion humanize() creada en el archivo humanize.js
5. Reemplazar el contenido del texto del DOM-HTML ($date.textContent) con la fecha humanizada.

*/

function humanizeArticlesDate(){
    // $ = elementos del DOM (nodos - tienen metodos, atributos)
    const $dates =  document.querySelectorAll("time")
    
    //Recibe una funcion callback - podemos pasar como param
    $dates.forEach(humanizeDate)
}

/*
    ORDENAR ARTICULOS (CARDS) POR FECHAS

Para ello, se debe utilizar el metodo sort()
Su funcionamiento es a traves de sumas y restas, y determinar el < y > de izq a der.
.sort((a,b) => a - b)
Debemos hacer una resta de fechas

*/

function sortArticlesByDate(){
    //ORDER CARDS
    const $cards = document.querySelectorAll(".card");
    const $cardsSorted = [...$cards].sort(sortByDate);
    //CLEAR CARDS
    const $postList = document.querySelector(".content");
    [...$postList.children].forEach($child => $child.remove());
    //Add cardSorted a cada nodo de $postList
    $postList.append(...$cardsSorted);

    console.log(
        $cardsSorted.map(($card) =>
            $card.querySelector("time").getAttribute("datetime")
        )
    );
}

// FUNCTION MAIN

function main(){
    humanizeArticlesDate();
    sortArticlesByDate()
}
main();
