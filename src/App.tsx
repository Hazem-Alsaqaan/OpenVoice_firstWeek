import { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import { dummyDataApp } from "./dummyData";

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
  const dummyData = dummyDataApp;

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
