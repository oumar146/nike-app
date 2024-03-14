import React from "react";
import "../styles/Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer space">
        <div className="column">
          <ul className="small_title">
            <li>cartes cadeaux</li>
            <li>trouver un magasin</li>
            <li>nike journal</li>
            <li>devenir membre</li>
            <li>réduction pour étudiants</li>
            <li>commentaires</li>
            <li>codes promo</li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li className="small_title ">Aide</li>
            <li>Statut de la commande</li>
            <li>Expédition et livraison</li>
            <li>Retours</li>
            <li>Modes de paiement</li>
            <li>Nous contacter</li>
            <li>Avis</li>
            <li>Aide - Codes promo Nike</li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li className="small_title">Entreprise</li>
            <li>À propos de Nike</li>
            <li>Actualités</li>
            <li>Carrières</li>
            <li>Investisseurs</li>
            <li>Développement durable</li>
            <li>Mission</li>
          </ul>
        </div>
        <div className="icons">
          <a href="">
            <img
              src="https://cdn-icons-png.freepik.com/256/10092/10092202.png?ga=GA1.1.477338102.1699264301&"
              alt="logo facebookr"
            />
          </a>
          <a href="">
            <img
              src="https://cdn-icons-png.freepik.com/256/10092/10092221.png?ga=GA1.1.477338102.1699264301&"
              alt="logo instagram"
            />
          </a>
          <a href="">
            <img
              src="https://cdn-icons-png.freepik.com/256/10092/10092328.png?ga=GA1.1.477338102.1699264301&"
              alt="logo twitter"
            />
          </a>
        </div>
      </div>
      <div className="footer">
        <ul>
          <li>France © 2023 Nike, Inc. Tous droits réservés</li>

        </ul>
      </div>
    </footer>
  );
}

export default Footer;
