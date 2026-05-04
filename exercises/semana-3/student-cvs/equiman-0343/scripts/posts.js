let postList = []

document.addEventListener("DOMContentLoaded", function(){
    getPosts()
});

const getPosts = () => {
    const url = new URL('https://dev.to/api/articles')
    url.searchParams.set('username', 'equiman');

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            postList.length = 0
            postList = [...data]
        })
        .catch((error) => console.error(error));
}
