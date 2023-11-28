import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HornedBeast from '../components/HornedBeast';
import beastData from '../components/data/data.json';

function Gallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main>
      <h2>Test</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {beastData.map((beast) => (
          <Carousel.Item className="horned-beast" key={beast.id}>
            <HornedBeast
              key={beast._id}
              title={beast.title}
              img={beast.image_url}
              description={beast.description}
              horns={beast.horns}
              keyword={beast.keyword}
            />
          </Carousel.Item>
        ))}
      </Carousel>

    </main>
  )
}

export default Gallery;