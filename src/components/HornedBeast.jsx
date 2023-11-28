import Figure from 'react-bootstrap/Figure';
import { useState } from 'react';

function HornedBeast({
  title,
  img,
  description,
  horns,
  keyword,
}) {
  const [fav, setFav] = useState(0);

  const favClick = () => {
    setFav(fav + 1);
  }

  return (
    <Figure>
      <h2>{title}</h2>
      <button onClick={favClick}>
        <img 
          src={img} 
          alt={title} 
          title={title}
          className='carousel-image'
        />
      </button>
      <figcaption>{description}</figcaption>
      <figcaption>&#10084;: {fav}</figcaption>
    </Figure>
  )
}

export default HornedBeast;