import { Link } from "react-router-dom";
import photo from "../assets/content/fragrance1.png";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";

function Product() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="w-1/3 h-[500px] p-2 font-montserrat">
      <div className="h-full w-full grid grid-rows-2">
        <img src={photo} alt="produit de beauté" className="mx-auto h-" />
        <div className="flex flex-col justify-end items-center">
          <p className="font-black">Black Opium</p>
          <p className="font-montserrat font-light">
            Parfum de l'abîme hurlant
          </p>

          <Rating
            onClick={handleRating}
            className="rating scale-50"
            SVGclassName={"inline-block"}
            transition
            fillColorArray={[
              "#e22746",
              "#e22746",
              "#e22746",
              "#e22746",
              "#e22746",
            ]}
            emptyColor={"#333232"}
          />
          <p className="font-extrabold">14,90€</p>
          <Link
            to="/Map"
            className="bg-black text-white mt-2 p-4 hover:bg-[#e32847] text-center transition w-11/12 font-bold"
          >
            Trouver en magasin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
