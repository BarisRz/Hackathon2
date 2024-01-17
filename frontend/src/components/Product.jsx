import photo from "../assets/content/fragrance1.png";

function Product() {
  return (
    <div className="w-1/3 h-[500px] p-2">
      <div className="bg-blue-300 h-full w-full grid grid-rows-2">
        <img src={photo} alt="produit de beauté" className="mx-auto" />
        <div className="flex flex-col justify-end items-center">
          <p>Produit</p>
          <div>les etoiles random</div>
          <p>Prix</p>
          <button
            type="button"
            className="font-camptonbold bg-black text-white p-4 hover:bg-[#e32847] transition w-11/12"
          >
            Trouver en magasin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
