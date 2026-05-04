import humanize from './utils/humanize';

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

function humanizeArticlesDate(){
    const $dates =  document.querySelectorAll("time")
    
    $dates.forEach(humanizeDate)
}

function sortArticlesByDate(){
    const $cards = document.querySelectorAll(".card");
    const $cardsSorted = [...$cards].sort(sortByDate);
    const $postList = document.querySelector(".content");
    [...$postList.children].forEach($child => $child.remove());
    $postList.append(...$cardsSorted);

    console.log(
        $cardsSorted.map(($card) =>
            $card.querySelector("time").getAttribute("datetime")
        )
    );
}

function main(){
    humanizeArticlesDate();
    sortArticlesByDate()
}
main();
