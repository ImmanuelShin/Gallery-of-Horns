import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';
import Footer from '../src/components/Footer';
import SelectedBeast from '../src/components/SelectedBeast';
import Container from 'react-bootstrap/Container';
import beastData from '../src/components/data/data.json';

function App() {
  const [headSpin, setHeadSpin] = useState(false);
  const [gallerySpin, setGallerySpin] = useState(false);
  const [footSpin, setFootSpin] = useState(false);

  const spinOnClick = (c) => {
    if (c === 'header') {
      setHeadSpin(!headSpin);
    } else if (c === 'gallery') {
      setGallerySpin(!gallerySpin);
    } else if (c === 'footer') {
      setFootSpin(!footSpin);
    }
  };

  const [selectedBeast, setSelectedBeast] = useState(null);

  const carouselSelection = (selectedBeastData) => {
    console.log('Selected Beast:', selectedBeastData);
    setSelectedBeast(selectedBeastData);
  }

  const closeModal = () => {
    setSelectedBeast(null);
  }

  const [favCounts, setFavCounts] = useState({});

  const increaseFavCount = (beastId) => {
    setFavCounts((prevCounts) => ({
      ...prevCounts,
      [beastId]: (prevCounts[beastId] || 0) + 1,
    }));
  }

  return (
    <Container>
      <Header 
        heading="Horned Beasts" 
        onSpinClick={() => spinOnClick('header')} 
        spin={headSpin}
      />
      <Gallery 
        title="Horned Beast Gallery"
        onSpinClick={() => spinOnClick('gallery')} 
        spin={gallerySpin}
        beastData={beastData}
        onCarouselClick={carouselSelection}
        favCounts={favCounts}
        increaseFav={increaseFavCount}
      />
        {selectedBeast && (
          <SelectedBeast 
            title={selectedBeast.title}
            img={selectedBeast.image_url}
            description={selectedBeast.description}
            closeModal={closeModal}
            favCount={favCounts[selectedBeast._id] || 0}
            increaseFav={() => increaseFavCount(selectedBeast._id)}
          />
        )}
      <Footer 
        name="Immanuel Shin" 
        onSpinClick={() => spinOnClick('footer')} 
        spin={footSpin}
      />
    </Container>
  )
}

export default App
