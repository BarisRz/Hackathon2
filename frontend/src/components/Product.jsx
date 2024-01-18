/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable object-shorthand */
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Rating } from "react-simple-star-rating";

function Product({
  product,
  productImgRand,
  randomPrice,
  setOpen,
  setSelectedProduct,
}) {
  const keepValue = useMemo(() => {
    product = product;
  }, [product, productImgRand, randomPrice]);
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const info = {
    productName: product.productName,
    brand: product.brand,
    productImgRand: productImgRand,
  };

  const popupOpener = () => {
    setOpen((o) => !o);
    setSelectedProduct(info);
  };

  return (
    <div className="w-1/3 h-[500px] p-2 font-montserrat">
      <div className="h-full w-full grid grid-rows-2">
        <img
          src={productImgRand}
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
            initialValue={3}
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
          <p className="font-extrabold">{(randomPrice + 0.9).toFixed(2)} €</p>
          <Link
            to="/Map"
            className="bg-black text-white mt-2 p-4 hover:bg-[#e32847] text-center transition w-11/12 font-bold"
          >
            Trouver en magasin
          </Link>
          <button
            type="button"
            className="bg-black text-white mt-2 p-4 hover:bg-[#e32847] text-center transition w-11/12 font-bold"
            onClick={popupOpener}
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  product: PropTypes.func.isRequired,
};
export default Product;
