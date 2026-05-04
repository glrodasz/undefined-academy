import './Tag.css'

export function Tag({link = "#", dataTag, name}) {
    return (
        <a href={link}>
            <span key={dataTag} className="tag" data-tag={dataTag}>
                {name}
            </span>
        </a>
    )
}