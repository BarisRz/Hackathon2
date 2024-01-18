import { useContext } from "react";
import ProductContext from "../Context/ProductContext";

function Magasin() {
  const { selectedProduct } = useContext(ProductContext);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      Vous avez sélectionné ce magasin. Merci de remplir ce formulaire afin que
      nos équipes puissent préparer vos produits.
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="Name">Nom</label>
          <input
            value=""
            type="text"
            name="Name"
            id="Name"
            placeholder="Dupond"
          />
        </div>

        <div className="input">
          <label htmlFor="firstName">Prénom</label>
          <input
            value=""
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Jean"
          />
        </div>
        <div className="input">
          <label htmlFor="mail">Adresse mail</label>
          <input
            value=""
            type="mail"
            name="mail"
            id="mail"
            placeholder="jeandupont@jean.fr"
          />
        </div>
        <div className="input">
          <label htmlFor="tel">Numéro de téléphone</label>
          <input
            value=""
            type="text"
            name="tel"
            id="tel"
            placeholder="+33 6 70 32 54 98"
          />
        </div>
        <button type="submit" className="w-48 h-16 bg-black text-white">
          Recherche
        </button>
      </form>
    </div>
  );
}

export default Magasin;
