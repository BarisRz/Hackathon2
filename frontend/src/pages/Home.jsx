import Product from "../components/Product";
import dataProduct from "../data/data.json";
import "../styles/home.scss";

function Home() {
  return (
    <div className="max-w-[1440px] flex-col mx-auto">
      <div>TESSSSSSSSSSST</div>
      <div className="flex">
        <aside className="bg-red-400 flex-1 flex-col">
          <div className="">Filtre1</div>
          <div className="">Filtre2</div>
          <div className="">Filtre3</div>
          <div className="">Filtre4</div>
          <div className="">Filtre5</div>
        </aside>
        <div className="bg-green-400 flex-[3] flex flex-wrap">
          {dataProduct.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
