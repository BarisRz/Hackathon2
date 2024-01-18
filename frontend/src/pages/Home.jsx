/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Product from "../components/Product";
import "reactjs-popup/dist/index.css";
import firstDataProduct from "../data/data.json";
import ProductContext from "../Context/ProductContext";
import "../styles/home.scss";

function Home() {
  const { selectedProduct } = useContext(ProductContext);
  const [pageActuel, setPageActuel] = useState(0);
  const [numberPage, setNumberPage] = useState(1);
  const [dataProduct, setDataProduct] = useState(firstDataProduct);
  const tailletableau = dataProduct.length;
  const taillepage = 21;

  function handlePageNext(slice) {
    if (!(slice + taillepage > tailletableau)) {
      setPageActuel(pageActuel + taillepage);
      setNumberPage(numberPage + 1);
    }
  }

  function handlePagePrevious(slice) {
    if (!(slice - taillepage < 0)) {
      setPageActuel(pageActuel - taillepage);
      setNumberPage(numberPage - 1);
    }
  }
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
  function randPrice() {
    return Math.floor(Math.random() * 20);
  }
  function randItem() {
    return Math.floor(Math.random() * 115);
  }
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  let randomProduct = firstDataProduct[randItem()];

  useEffect(() => {
    const updatedDataProduct = firstDataProduct.map((product) => {
      let productImgRand;
      const randomPrice = randPrice();
      if (product.productCategory.includes("Fragrance")) {
        productImgRand = fragranceArray[rand()];
      } else if (product.productCategory.includes("Hair")) {
        productImgRand = haircareArray[rand()];
      } else if (product.productCategory.includes("Skin")) {
        productImgRand = skincareArray[rand()];
      } else if (product.productCategory.includes("Shampoo")) {
        productImgRand = shampooArray[rand()];
      } else if (product.productCategory.includes("Make")) {
        productImgRand = makeupArray[rand()];
      }
      return {
        ...product,
        productImg: productImgRand,
        price: randomPrice,
        star: Math.max(3, Math.floor(Math.random() * 6)),
      };
    });

    setDataProduct(updatedDataProduct);
  }, []);

  return (
    <div className="max-w-[1200px] flex-col mx-auto">
      <div className="mt-4">
        <div className="flex gap-2 text-sm">
          <p className="text-gray-500 underline">Home</p>
          <p>{">"}</p>
          <p className="text-gray-500 underline">Nos produits</p>
        </div>
      </div>
      <div className="flex">
        <aside className="flex-1 flex-col mt-11">
          <div className="font-bold">Nos produits</div>
          <div className="w-10/12 h-[1px] bg-gray-400 m-2" />
          <div className="flex flex-col gap-3 pt-2">
            <div className="text-gray-400 text-sm">
              <a href="#">Eyeliners et crayons</a>
            </div>
            <div className="text-gray-400 text-sm">
              <a href="#">Sourcils</a>
            </div>
            <div className="text-gray-400 text-sm">
              <a href="#">Ombre à paupières</a>
            </div>
          </div>
        </aside>
        <div>
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            {/* <a className="close" onClick={closeModal}>
                  &times;
                </a> */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedProduct.productImgRand}
                alt="productimg"
                className="w-6/12"
              />
              {/* {selectedProduct.productName} de la marque{" "}
                {selectedProduct.brand}.{" "} */}
            </div>
            <div className="flex-1 flex justify-center px-10 flex-col">
              <p className="font-bold text-3xl">
                {selectedProduct.productName}
              </p>
              <p className="text-xs text-gray-500 pt-2">
                {selectedProduct.productName}
              </p>
              <p className="text-base font-bold text-gray-500 pt-2">
                {selectedProduct.price}€
              </p>
              <p className="text-sm text-gray-700 pt-2">
                Ne manquez pas cette opportunité unique ! Cliquez sur le bouton
                ci-dessous pour trouver le magasin le plus proche de chez vous.
                Nos experts sont prêts à vous fournir des conseils personnalisés
                et vous bénéficierez d'une remise spéciale sur ce produit
                complémentaire. Agissez maintenant et découvrez ce que nous
                avons à offrir !
              </p>
              <div className="flex items-center pt-8 flex-col">
                <Link
                  to="/Map"
                  className="bg-black text-white mt-2 p-4 hover:bg-[#e32847] text-center transition w-11/12 font-bold"
                >
                  Trouver en magasin
                </Link>
                {/* <p className="w-10/12 py-2 text-xs">
                  Nous avons sélectionné ces produits spécialement pour vous, en
                  tenant compte de vos préférences et de vos besoins. Nous
                  pensons qu'ils pourraient être parfaits pour vous. Jetez un
                  œil et découvrez ce que nous avons à offrir !
                </p>
                <ul className="p-4 transition w-full font-bold text-center flex flex-col gap-2 text-white">
                  <li className="font-black bg-black">
                    {randomProduct.productName}
                  </li>
                  <li className="bg-black"> {randomProduct.brand}</li>
                  <li className="bg-black"> {randomProduct.productCategory}</li>
                </ul> */}
              </div>
            </div>
          </Popup>
        </div>
        <div className="flex-[3] flex flex-wrap">
          {dataProduct
            .slice(pageActuel, pageActuel + taillepage)
            .map((product) => {
              return (
                <Product
                  key={product.productId}
                  product={product}
                  setOpen={setOpen}
                />
              );
            })}{" "}
          <div className="mx-auto w-full flex justify-center my-8">
            <button
              type="button"
              onClick={() => {
                handlePagePrevious(pageActuel);
              }}
              disabled={pageActuel - taillepage < 0}
              className="mx-2 py-1 w-32 bg-black transition text-white hover:bg-[#e32847] disabled:bg-gray-200 disabled:text-white"
            >
              Précédent
            </button>
            <p className="mx-4 bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center">
              {numberPage}
            </p>
            <button
              type="button"
              onClick={() => {
                handlePageNext(pageActuel);
              }}
              disabled={pageActuel + taillepage >= tailletableau}
              className="mx-2 py-1 w-32 bg-black transition text-white hover:bg-[#e32847] disabled:bg-gray-200 disabled:text-white"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
