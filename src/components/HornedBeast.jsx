function HornedBeast ({
    id,
    title,
    img,
    description,
    horns,
    key,
}) {
    return (
        <section className="horned-beast">
            <h2>{title}</h2>
            <img src={img} alt={title} title={title} />
            <p>{description}</p>
        </section>
    )
}

export default HornedBeast;