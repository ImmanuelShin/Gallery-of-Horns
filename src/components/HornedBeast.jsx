import Figure from 'react-bootstrap/Figure';

function HornedBeast(props) {
  return (
    <Figure>
      <h2>{props.title}</h2>
      <button>
        <img 
          src={props.img} 
          alt={props.title} 
          title={props.title}
          className='carousel-image'
        />
      </button>
      <figcaption>{props.description}</figcaption>
      <figcaption>&#10084;: {props.favCounts[props.Id] || 0}</figcaption>
    </Figure>
  )
}

export default HornedBeast;