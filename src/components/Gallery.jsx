import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HornedBeast from '../components/HornedBeast';


function Gallery(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselClick = (event, beast) => {
    event.stopPropagation();
    props.onCarouselClick(beast);
  }

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const attemptFuzzy = (text, search) => {
    let i = 0;
    let j = 0;

    while (i < text.length && j < search.length) {
      if (text[i] === search[j]) {
        j++;
      }
      i++;
    }
    return j === search.length;
  }

  const filteredBeasts = props.beastData.filter((beast) => 
    attemptFuzzy(beast.keyword.toLowerCase(), search.toLowerCase()) ||
    attemptFuzzy(beast.title.toLowerCase(), search.toLowerCase())
  );

  
  return (
    <main>
      <h2 className={props.spin ? 'gallery-spin' : ''} onClick={props.onSpinClick}>
        {props.title}
      </h2>
      <input
        type='text'
        placeholder='Search for keywords...'
        value={search}
        onChange={handleSearch}
      >
      </input>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {filteredBeasts.map((beast) => (
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