import HornedBeast from '../components/HornedBeast';
import beastData from '../components/data/data.json';

  function Gallery() {
    return (
      <main>
        <h2>Test</h2>
        {beastData.map((beast) => (
          <HornedBeast
            id={beast._id}
            title={beast.title}
            img={beast.image_url}
            description={beast.description}
            horns={beast.horns}
            key={beast.keyword}
          />
        ))}
      </main>
    )
  }

export default Gallery;