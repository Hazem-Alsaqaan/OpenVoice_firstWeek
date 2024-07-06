import { MdAddCircle } from "react-icons/md";
interface Product {
  id: number;
  title: string;
  description: string;
  picture: string;
  price: number;
  quantity: number;
}
interface Props {
  item: Product;
  increaseItemsHandler: (item: Product) => void;
}

const ProductBox = ({ item, increaseItemsHandler }: Props) => {
  return (
    <div className="bg-white  py-10 px-5 rounded-md border-2 border-solid border-neutral-100 shadow-2xl max-sm:px-3 relative overflow-auto">
      <div>
        <img
          src={item?.picture}
          alt="web development"
          className=" min-w-8 max-w-18"
        />
      </div>
      <div>
        <h1 className="text-blue-900 text-center font-[900] text-base mb-2 whitespace-nowrap max-sm:text-base">
          {item?.title}
        </h1>
        <p className="font-medium max-sm:text-sm max-xsm:text-xs capitalize">
          <span>description: </span>
          {item?.description}
        </p>
        <p className="font-bold max-sm:text-sm max-xsm:text-xs capitalize">
          <span>Price: </span>${item?.price}
        </p>
      </div>
      <div className=" absolute bottom-0 right-0">
        <MdAddCircle
          className="text-indigo-500 text-5xl cursor-pointer"
          onClick={() => increaseItemsHandler(item)}
        />
      </div>
    </div>
  );
};

export default ProductBox;
