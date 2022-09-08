import Carousel from 'react-bootstrap/Carousel';

function Head(props) {

  return (
    <Carousel fade className='mx-auto'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.src}
          alt=""
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https:\/\/www.freetogame.com\/g\/516\/thumbnail.jpg"
          alt=""
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https:\/\/www.freetogame.com\/g\/523\/thumbnail.jpg"
          alt=""
        />        
      </Carousel.Item>
    </Carousel>
  );
}

export default Head;