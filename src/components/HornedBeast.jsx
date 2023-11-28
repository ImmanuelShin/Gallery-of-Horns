function HornedBeast ({
    id,
    title,
    img,
    description,
    horns,
    key,
}) {
    return (
        <figure className="horned-beast">
            <h2>{title}</h2>
            <img src={img} alt={title} title={title} />
            <figcaption>{description}</figcaption>
        </figure>
    )
}

export default HornedBeast;