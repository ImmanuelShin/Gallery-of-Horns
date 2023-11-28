import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';
import Footer from '../src/components/Footer';
import Container from 'react-bootstrap/Container';

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
      />
      <Footer 
        name="Immanuel Shin" 
        onSpinClick={() => spinOnClick('footer')} 
        spin={footSpin}
      />
    </Container>
  )
}

export default App
