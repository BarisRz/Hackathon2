import Product from "../components/Product";
import dataProduct from "../data/data.json";
import "../styles/home.scss";

function Home() {
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
          <div className="text-gray-400 text-sm">
            <a href="#">Eyeliners et crayons</a>
          </div>
          <div className="text-gray-400 text-sm">
            <a href="#">Sourcils</a>
          </div>
          <div className="text-gray-400 text-sm">
            <a href="#">Ombre à paupières</a>
          </div>
        </aside>
        <div className="flex-[3] flex flex-wrap">
          {dataProduct.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
