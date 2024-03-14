import React from "react";
import "../styles/NikeInvincibleSection.css";

function NikeInvincibleSection() {
  return (
    <section>
      <div className="nike-invincible-section">
        <p>Nike Invincible 3</p>
        <h2>Des sensations incroyables</h2>
        <p>
          Notre chaussure de running sur route avec le meilleur amorti, pour des
          kilomètres de bonheur.
        </p>
        <a href="">Acheter</a>
      </div>

      <div className="image-section">
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1513,c_limit/0096d650-83e2-4b7b-a1b0-961af43b848f/nike-just-do-it.jpg"
          alt="chaussure nike invincible 3"
          title="chaussure nike invincible 3"
        />
      </div>
    </section>
  );
}

export default NikeInvincibleSection;
