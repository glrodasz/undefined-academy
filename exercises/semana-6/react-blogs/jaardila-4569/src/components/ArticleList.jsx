export const ArticleList = ({ articles }) => {
    return (
        <main className="article-list">
            {articles.map(article => (
                <article className="article-container" key={article.id}>
                    <section className="img-container">
                        <img src={article.image} alt={article.title} />
                    </section>
                    <section className="article-body">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <footer className="article-footer">
                            <span>{article.date} · </span>
                            <span>{article.ReadingTime}</span>
                        </footer>
                    </section>
                </article>
            ))}
        </main>
    )
}