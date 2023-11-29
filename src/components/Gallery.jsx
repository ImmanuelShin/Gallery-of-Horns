import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HornedBeast from '../components/HornedBeast';


function Gallery(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselClick = (event, beast) => {
    console.log("carouselCLick in gallery:", beast);
    event.stopPropagation();
    props.onCarouselClick(beast);
  }

  return (
    <main>
      <h2 className={props.spin ? 'gallery-spin' : ''} onClick={props.onSpinClick}>
        {props.title}
      </h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.beastData.map((beast) => (
          <Carousel.Item 
            className="horned-beast" 
            key={'carousel-' + beast._id}
            onClick={() => carouselClick(event, beast)}
          >
            <HornedBeast
              Id={beast._id}
              title={beast.title}
              img={beast.image_url}
              description={beast.description}
              horns={beast.horns}
              keyword={beast.keyword}
              favCounts={props.favCounts}
              increaseFav={props.increaseFavCount}
            />
          </Carousel.Item>
        ))}
      </Carousel>

    </main>
  )
}

export default Gallery;