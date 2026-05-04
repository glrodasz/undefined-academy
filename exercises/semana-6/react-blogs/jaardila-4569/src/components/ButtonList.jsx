export const ButtonList = ({ categories, filterCategory }) => {
    return (
        <section className="categories">
            {categories.map(category => (
                <button
                    type="button" className="btn-category"
                    onClick={() => filterCategory(category)} key={category}>
                    {category}
                </button>
            ))}
        </section>
    )
}