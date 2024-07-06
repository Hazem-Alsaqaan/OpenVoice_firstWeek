import { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";

interface Product {
  id: number;
  title: string;
  description: string;
  picture: string;
  price: number;
  quantity: number;
}
type ProductListType = Product[];
function App() {
  const dummyData = [
    {
      id: 1,
      title: "Blender",
      picture:
        "https://img.freepik.com/free-photo/blender-juice-machine_1203-7838.jpg?t=st=1720218844~exp=1720222444~hmac=98d1420df1ddcc775b5f9da8201f3a9b8528acfe102ccedbab52394ec5ce4918&w=826",
      description: "an electric culinary grinding and mixing appliance",
      price: 65,
      quantity: 1,
    },
    {
      id: 2,
      title: "screen",
      picture:
        "https://img.freepik.com/free-psd/helmet-mock-up_1310-157.jpg?w=826&t=st=1720218999~exp=1720219599~hmac=c7739e47adc0ed865576f817a32cfb72abdb3f21354e5bf45477770467fad0bb",
      description: "Samsung 85 Inch TV Crystal Processor 4K LED",
      price: 1200,
      quantity: 1,
    },
    {
      id: 3,
      title: "screen",
      picture: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      description: "Tornado HD Smart TV 32 Inch, Built-In Receiver 32ES9300E",
      price: 3200,
      quantity: 1,
    },
    {
      id: 4,
      title: "screen",
      picture: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      description: "LG, UHD 4K TV, 65 inch UR78 series, WebOS Smart AI ThinQ",
      price: 4200,
      quantity: 1,
    },
  ];
  const [counterItems, setCounterItems] = useState(0);
  const [productList, setProductList] = useState<ProductListType>([]);

  // handle function to add product item to table
  const increaseItemsHandler = (product: Product) => {
    setCounterItems(counterItems + 1);
    const isFound = productList.find((item) => item.id === product.id);
    if (isFound) {
      isFound.quantity += 1;
    } else {
      setProductList([...productList, product]);
    }
  };
  // handle function which delete item from table
  const onDelete = (itemDeleted: Product) => {
    setCounterItems(counterItems - itemDeleted.quantity);
    setProductList(productList.filter((item) => item.id !== itemDeleted.id));
  };
  return (
    <>
      <div className="bg-neutral-50 min-h-screen py-12 mx-auto">
        <NavBar counterItems={counterItems} />
        <HomePage
          items={dummyData}
          increaseItemsHandler={increaseItemsHandler}
        />
        <CartPage productList={productList} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
