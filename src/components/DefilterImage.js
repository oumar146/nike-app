import React from "react";
import "../styles/DefilterImage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DefilterImage({products,title}) {

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="slider-container">
      <h2>{title}</h2>
      <Slider  {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <img className="item" src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
        </Slider>
    </div>
  );
}

export default DefilterImage;
