import { BagProducts } from "../Data/sampleData";
import Card from "../components/Card";

const BackPack = () => {
  return (
    <>
      <h1 className="text-black font-bold text-2xl ml-36 mt-6">BackPack</h1>
      <div className="flex flex-wrap justify-center">
        {BagProducts?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default BackPack;
