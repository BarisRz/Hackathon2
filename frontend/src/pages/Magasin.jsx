/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import data from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

function Magasin() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const popupOpener = (e) => {
    e.preventDefault();
    setOpen((o) => !o);
  };
  const random = Math.round(Math.random() * data.length);
  const productOffer = data[random];

  const fragranceArray = [
    "fragrance1.png",
    "fragrance2.png",
    "fragrance3.png",
    "fragrance4.png",
  ];
  const haircareArray = [
    "haircare1.png",
    "haircare2.png",
    "haircare3.png",
    "hairecare4.png",
  ];
  const makeupArray = [
    "makeup1.png",
    "makeup2.png",
    "makeup3.png",
    "makeup4.png",
  ];
  const shampooArray = [
    "shampoo1.png",
    "shampoo2.png",
    "shampoo3.png",
    "shampoo4.png",
  ];
  const skincareArray = [
    "skincare1.png",
    "skincare2.png",
    "skincare3.png",
    "skincare4.png",
  ];

  function rand() {
    return Math.floor(Math.random() * 4);
  }
  let productImgRand;

  if (productOffer.productCategory.includes("Fragrance")) {
    productImgRand = fragranceArray[rand()];
  } else if (productOffer.productCategory.includes("Hair")) {
    productImgRand = haircareArray[rand()];
  } else if (productOffer.productCategory.includes("Skin")) {
    productImgRand = skincareArray[rand()];
  } else if (productOffer.productCategory.includes("Shampoo")) {
    productImgRand = shampooArray[rand()];
  } else if (productOffer.productCategory.includes("Make")) {
    productImgRand = makeupArray[rand()];
  }
  return (
    <div>
      Vous avez sélectionné ce magasin. Merci de remplir ce formulaire afin que
      nos équipes puissent préparer vos produits. Profitez d'une remise de 50%
      sur un produit complémentaire:
      <div>
        <img src={productImgRand} alt="imgproductOffer" />
        <p>{productOffer.productName}</p>
        <p>{productOffer.brand}</p>
      </div>
      <form className="formContainer" onSubmit={popupOpener}>
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
        <div className="buttonSubmit">
          <button type="submit" className="w-48 h-16 bg-black text-white ">
            Recherche
          </button>
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="modal">
              <a className="close" onClick={closeModal}>
                &times;
              </a>
              Merci d'avoir réservé nos produits. Un mail de confirmation vous à
              été envoyé. Voici votre numéro de réservation{" "}
              {uuidv4().slice(0, 8)}
            </div>
          </Popup>
        </div>
      </form>
    </div>
  );
}

export default Magasin;
