import "../styles/SportsSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

function SportsSection() {
    const sports = [
        {
          id: 1,
          name: "Basketball",
          image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_465,c_limit/38ed4b8e-9cfc-4e66-9ddd-02a52314eed9/nike-just-do-it.jpg"
        },
        {
          id: 2,
          name: "Tennis",
          image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_465,c_limit/7ce96f81-bf80-45b9-918e-f2534f14015d/nike-just-do-it.jpg"
        },
        {
          id: 3,
          name: "Football",
          image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_465,c_limit/e4695209-3f23-4a05-a9f9-d0edde31b653/nike-just-do-it.jpg"
        },
        {
          id: 4,
          name: "Running",
          image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_465,c_limit/a3c971bc-bc0a-4c0c-8bdf-e807a3027e53/nike-just-do-it.jpg"
        },
        {
          id: 5,
          name: "Danse",
          image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_338,c_limit/c779e4f6-7d91-46c3-9282-39155e0819e5/nike-just-do-it.jpg"
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
            <h2>Tout pour ton sport</h2>
          <Slider  {...settings}>
            {sports.map((sport) => (
              <div key={sport.id} className="image-wrapper">
                <img  src={sport.image} alt={sport.name} className="Item"/>
                <Button value={sport.name} buttonClass={"button_section_sport"} />
              </div>
            ))}
            </Slider>
        </div>
      );
}

export default SportsSection