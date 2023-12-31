import { ShoeProducts } from "../Data/sampleData";
import Card from "../components/Card";

const Shoes = () => {
  return (
    <>
      <h1 className="text-black font-bold text-2xl ml-36 mt-6">Shoes</h1>
      <div className="flex flex-wrap justify-center">
        {ShoeProducts?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shoes;
