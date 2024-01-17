import { Link } from "react-router-dom";
import logo from "../assets/Loreal.png";
import cart from "../assets/market.png";
import search from "../assets/search.svg";
import "../styles/nav.scss";

function Navbar() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <p>Besoin d'aide ?</p>
        <ul className="user">
          <li>Inscription newsletter</li>
          <li>Mon Compte</li>
          <li>Mon Panier (0)</li>
          <img src={cart} alt="" width={20} />
        </ul>
      </div>
      <nav>
        <div className="navbar">
          <ul>
            <li>
              <Link className="link">NOS OFFRES</Link>
            </li>
            <li>
              <Link className="link">MAQUILLAGE</Link>
            </li>
            <li>
              <Link className="link">SOIN</Link>
            </li>
            <li>
              <Link className="link">COLORATION</Link>
            </li>
            <li>
              <Link className="link">CHEVEUX</Link>
            </li>
            <li>
              <Link className="link">HOMME</Link>
            </li>
            <li>
              <Link className="link">SERVICES EXCLUSIFS</Link>
            </li>
            <li>
              <Link className="link">NOS ENGAGEMENTS</Link>
            </li>
          </ul>
          <button type="button" className="overflow-hidden">
            {" "}
            <img src={search} alt="" width={30} />{" "}
            <p>Rechercher un produit...</p>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
