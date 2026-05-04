export const Card_component=({tags}) =>{
    const tagsArray = [...tags]
    return (
    <div className="tagsGroup">
    {tagsArray.map(tag => <div className="tags">{tag}</div>)}
    </div>
    )
}