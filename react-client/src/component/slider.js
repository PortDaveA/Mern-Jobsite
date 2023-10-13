import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import jobSlide1 from "./images/jobslide1.jpg";
import jobSlide2 from "./images/jobslide2.jpg";

const images = [jobSlide1, jobSlide2];

function Slider() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true} showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img alt="Job slide" src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;