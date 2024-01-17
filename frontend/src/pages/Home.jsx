import { useState } from "react";
import Product from "../components/Product";
import dataProduct from "../data/data.json";
import "../styles/home.scss";

function Home() {
  const [pageActuel, setPageActuel] = useState(0);
  const [numberPage, setNumberPage] = useState(1);

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

  const tableauimg = [
    "fragrance1.png",
    "fragrance2.png",
    "fragrance3.png",
    "fragrance4.png",
    "haircare1.png",
    "haircare2.png",
    "haircare3.png",
    "harecare4.png",
    "makeup1.png",
    "makeup2.png",
    "makeup3.png",
    "makeup4.png",
    "shampoo1.png",
    "shampoo2.png",
    "shampoo3.png",
    "shampoo4.png",
    "skincare1.png",
    "skincare2.png",
    "skincare3.png",
    "skincare4.png",
  ];

  function rand() {
    return Math.floor(Math.random() * Math.floor(tableauimg.length));
  }

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
        <div className="flex-[3] flex flex-wrap">
          {dataProduct
            .slice(pageActuel, pageActuel + taillepage)
            .map((product) => (
              <Product
                product={product}
                key={product.id}
                img={tableauimg[rand()]}
              />
            ))}
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
