import ProductBox from "./ProductBox";
interface Product {
  id: number;
  title: string;
  description: string;
  picture: string;
  price: number;
  quantity: number;
}
interface Props {
  items: Product[];
  increaseItemsHandler: (product: Product) => void;
}

const HomePage = ({ items, increaseItemsHandler }: Props) => {
  return (
    <div id="#" className="min-h-screen py-10 px-14 max-sm:px-3">
      <h1 className="text-center my-10 font-bold">Products</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        {items.map((item) => (
          <ProductBox
            key={item?.id}
            item={item}
            increaseItemsHandler={increaseItemsHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
