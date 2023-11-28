import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';
import Footer from '../src/components/Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Header heading="Horned Beasts" />
      <Gallery />
      <Footer name="Immanuel Shin" />
    </Container>
  )
}

export default App
