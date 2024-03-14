import React from 'react'
import '../styles/MembreAcces.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
function MembreAcces() {
  const sports = [
    {
      id: 1,
      categorie: "Acheter",
      text : "Ton accès exclusif",
      image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_465,c_limit/82581424-385a-4f79-816d-0f91e6a531a3/nike-just-do-it.png"
    },
    {
      id: 2,
      categorie: "Célébrer",
      text : "Notre façon de dire merci",
      image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_338,c_limit/d9ef237f-b6cf-40ca-8432-928a0bb3abae/nike-just-do-it.jpg"
    },
    {
      id: 3,
      categorie: "Bouger",
      text : "Bouge à ton rythme",
      image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_338,c_limit/e3d043ee-e826-448f-9213-3ab2cdef1f10/nike-just-do-it.jpg"
    },
    {
      id: 4,
      categorie: "Personnaliser",
      text : "Rend ta paire unique",
      image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_338,c_limit/5e36df8e-007f-4b18-bea3-47af5a7ea0d2/nike-just-do-it.png"
    },
    {
      id: 5,
      categorie: "Découvrir",
      text : "Autres avantages",
      image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_338,c_limit/1163f9d5-7b28-46e5-b73b-4d3d2ff4dbc3/nike-just-do-it.png"
    }
  ];
  
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
    <div  className="slider-container ">
        <h2>Accès Membre Nike</h2>
      <Slider  {...settings}>
        {sports.map((sport) => (
          <div key={sport.id} className="image-wrapper">
            <img  src={sport.image} alt={sport.categorie} className="Item"/>
            <p className='text'>{sport.text}</p>
            <Button value={sport.categorie} buttonClass={"button_section_sport"} />
          </div>
        ))}
        </Slider>
    </div>
  );
}

export default MembreAcces