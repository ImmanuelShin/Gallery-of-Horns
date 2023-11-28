import { useState } from 'react';
function HornedBeast({
  id,
  title,
  img,
  description,
  horns,
  key,
}) {
  const [fav, setFav] = useState(0);

  const favClick = () => {
    setFav(fav + 1);
  }

  return (
    <figure className="horned-beast">
      <h2>{title}</h2>
      <button onClick={favClick}>
        <img src={img} alt={title} title={title} />
      </button>
      <figcaption>{description}</figcaption>
      <figcaption>&#10084;: {fav}</figcaption>
    </figure>
  )
}

export default HornedBeast;