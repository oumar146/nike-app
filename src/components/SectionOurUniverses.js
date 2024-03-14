import "../styles/SectionOurUniverses.css";
import Button from "./Button";
function SectionOurUniverses() {
  return (
    <div>
      <h2 className="merge">Nos univers</h2>
      <div className="container">
        <div className="image-container">
          <div className="image-wrapper">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_465,c_limit/fb5a9aac-a115-4f55-ae75-9bb04ce64aa4/nike-just-do-it.png"
              alt="image d'une femme"
            />
            <Button value={"Femmes"} buttonClass={"button_univers"} />
          </div>
          <div className="image-wrapper">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_465,c_limit/0f99a8f5-c34c-4e3d-b646-e424cfe3bd6d/nike-just-do-it.png"
              alt="image d'une femme"
            />
            <Button value={"Hommes"} buttonClass={"button_univers"} />
          </div>
          <div className="image-wrapper">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_338,c_limit/bc15663f-b8a7-48fa-a06c-e8c55236ebdf/nike-just-do-it.png"
              alt="image d'une femme"
            />
            <Button value={"Ado / Enfants"} buttonClass={"button_univers"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOurUniverses;
