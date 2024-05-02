import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carrossel1 from '../../assets/carrossel1.jpg'
import carrossel2 from '../../assets/carrossel2.jpg'
import carrossel3 from '../../assets/carrossel3.jpg'
import './Carrossel.css'

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>

        <div>
          <img src={carrossel1} alt="Imagem 1" className="slide-image"/>
        </div>

        <div>
          <img src={carrossel2}  alt="Imagem 2" className="slide-image"/>
        </div>

        <div>
          <img src={carrossel3}  alt="Imagem 3" className="slide-image"/>
        </div>

      </Slider>
    </div>
  );
};

export default Carousel;