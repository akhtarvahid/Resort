import React from "react";
import Title from "../common/Title";
import Carousel from "../common/Carousel";
import { galleryData } from "../../utils/gallery-data";

const Gallery = () => {
  const [galleries] = React.useState(galleryData);

  return (
    <div>
      <Title title="Gallery" center />
      <div style={{ margin: 50 }}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {galleries.map(({ id, img, className, classImg, title }) => (
              <Carousel
                key={id}
                url={img}
                className={className}
                classImg={classImg}
                imgStyle={{ height: "800px", objectFit: "cover" }}
                altName={title}
              />
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
