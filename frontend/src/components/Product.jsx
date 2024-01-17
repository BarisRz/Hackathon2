import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";
import photo from "../assets/content/fragrance1.png";

function Product({ product }) {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="w-1/3 h-[500px] p-2 font-montserrat">
      <div className="h-full w-full grid grid-rows-2">
        <img src={photo} alt="produit de beauté" className="mx-auto h-" />
        <div className="flex flex-col justify-end items-center">
          <p className="font-black">
            {(console.info(product.productName), product.productName)}
          </p>
          <p className="font-montserrat font-light">
            Parfum de l'abîme hurlant
          </p>

          <Rating
            onClick={handleRating}
            className="rating"
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
            className="bg-black text-white p-4 hover:bg-[#e32847] transition w-11/12 font-bold"
          >
            Trouver en magasin
          </Link>
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  product: PropTypes.func.isRequired,
};
export default Product;
