import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HornedBeast from '../components/HornedBeast';
import Search from '../components/Search';


function Gallery(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselClick = (event, beast) => {
    event.stopPropagation();
    props.onCarouselClick(beast);
  }

  const uniqueHorns = [...new Set(props.beastData.map(beast => beast.horns))];

  const [search, setSearch] = useState('');

  const handleSearch = (input) => {
    setSearch(input);
  };

  const filteredBeasts = props.beastData.filter((beast) => 
    beast.keyword.toLowerCase().includes(search.toLowerCase()) ||
    beast.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <h2 className={props.spin ? 'gallery-spin' : ''} onClick={props.onSpinClick}>
        {props.title}
      </h2>
      <section className='search-area'>
        <Search 
          onSearch={handleSearch}
          uniqueHorns={uniqueHorns}
        />
      </section>
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