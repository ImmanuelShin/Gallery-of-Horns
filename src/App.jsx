import './App.css';
import Header from '../src/components/Header.jsx';
import Gallery from '../src/components/Gallery.jsx';
import Footer from '../src/components/Footer.jsx';

function App() {
  return (
    <>
      <Header heading="Horned Beasts" />
      <Gallery />
      <Footer name="Immanuel Shin" />
    </>
  )
}

export default App
