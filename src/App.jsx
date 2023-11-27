import './App.css';
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';
import Footer from '../src/components/Footer';

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
