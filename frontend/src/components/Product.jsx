/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable object-shorthand */
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import ProductContext from "../Context/ProductContext";

function Product({ product, productImgRand, randomPrice, setOpen }) {
  const { setSelectedProduct } = useContext(ProductContext);

  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="w-1/3 h-[500px] p-2 font-montserrat">
      <div className="h-full w-full grid grid-rows-2">
        <img
          src={product.productImg}
          alt="produit de beauté"
          className="mx-auto h-[200px]"
        />
        <div className="flex flex-col justify-end items-center">
          <p className="font-black">{product.productName}</p>
          <p className="font-montserrat font-light">{product.brand}</p>
          <p className="font-montserrat font-light">
            {product.productCategory}
          </p>

          <Rating
            onClick={handleRating}
            className="rating scale-50"
            SVGclassName="inline-block"
            initialValue={product.star}
            transition
            fillColorArray={[
              "#e22746",
              "#e22746",
              "#e22746",
              "#e22746",
              "#e22746",
            ]}
            emptyColor="#333232"
          />
          <p className="font-extrabold">{(product.price + 0.9).toFixed(2)} €</p>
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  product: PropTypes.func.isRequired,
};
export default Product;
