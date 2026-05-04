import Card from './Card';

const articles = [
    {
        title: "Beach destinations 🌊",
        content: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi enetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim? Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        image: "https://source.unsplash.com/fvXHYhF7rvI",
        date: "2023-05-31",
    },
    {
       
        title: "Country 🏜️",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
        image: "https://source.unsplash.com/sYffw0LNr7s",
        date:"2022-07-23",
    },
    {   title:"Mountains ⛰️",
        content:"orem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
        image:"https://source.unsplash.com/V7WkmXntA8M",
        date:"2022-01-01",

    },
    {
        title:"Valleys 🏕️",
        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
        image:"https://source.unsplash.com/W5FdAcHp7l8",
        date:"2021-03-02" ,
    }
]

function Main() {
    return (
        <>
        <main className="container">
        {articles.map((article, key) => (
          <Card
            key={key}
            title={article.title}
            content={article.content}
            image={article.image}
            date={article.date}
          />
        ))}
        </main>

        </>
    )
}

export default Main;