import "../styles/NavBar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a  href="" className="navbar-logo">
          <img src="https://spgeng.rosselcdn.net/sites/default/files/dpistyles_v2/sp_16_9_864w/2023/06/30/node_682229/54905592/public/2023/06/30/10994232-logo-nike-icone-de-conception-de-vetements-noirs-illustrationle-abstraite-de-football-avec-fond-blanc-gratuit-vectoriel.jpeg" alt="Nike Logo" />
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#">Hommes</a></li>
          <li className="navbar-item"><a href="#">Femmes</a></li>
          <li className="navbar-item"><a href="#">Enfants</a></li>
          <li className="navbar-item"><a href="#">Personnaliser</a></li>
          <li className="navbar-item"><a href="#">Promotions</a></li>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Rechercher" className="search-input" />
          <button className="search-button">Rechercher</button>
        </div>
        <div className="navbar-icons">
          <a href="" className="navbar-icon-heart">
            <img src="https://cdn-icons-png.freepik.com/256/9466/9466428.png?ga=GA1.1.477338102.1699264301&" alt="icone articles favoris"/>
          </a>
          <a href="" className="navbar-icon-cart">
            <img src="https://cdn-icons-png.freepik.com/256/7156/7156253.png?ga=GA1.1.477338102.1699264301&" alt="icone panier"/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

