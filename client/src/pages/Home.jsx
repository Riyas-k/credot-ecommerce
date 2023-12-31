import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Card from "../components/Card";
import { ShoeProducts, BagProducts } from "../Data/sampleData";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <h1 className="text-black font-bold text-2xl ml-36">Shoes</h1>
      <div className="flex flex-wrap justify-center">
        {ShoeProducts?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <h1 className="text-black font-bold text-2xl ml-36">BackPack</h1>
      <div className="flex flex-wrap justify-center">
        {BagProducts?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
