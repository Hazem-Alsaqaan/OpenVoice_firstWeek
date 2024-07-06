interface Product {
  id: number;
  title: string;
  description: string;
  picture: string;
  price: number;
  quantity: number;
}
interface Props {
  productList: Product[];
  onDelete: (id: number) => void;
}

const CartPage = ({ productList, onDelete }: Props) => {
  return (
    <div
      id="cart"
      className="min-h-screen bg-neutral-100 mt-20 mx-4 max-xs:mx-2"
    >
      <table className="bg-white w-full  shadow-2xl mt-2 mb-52 text-center font-medium rounded">
        <thead className="bg-violet-500 text-white">
          <tr>
            <th className="py-3 max-xs:text-[10px]">picture</th>
            <th className="py-3 max-xs:text-[10px]">title</th>
            <th className="py-3 max-xs:text-[10px]">quantity</th>
            <th className="py-3 max-xs:text-[10px]">description</th>
            <th className="py-3 max-xs:text-[10px]">price</th>
            <th className="py-3 max-xs:text-[10px]"></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item) =>
            Object.keys(item).length === 0 ? null : (
              <tr
                key={item?.id}
                className=" border-b-2 border-b-neutral-100 border-solid"
              >
                <td className="py-4 border-r-2 border-r-neutral-100 border-solid flex items-center justify-center">
                  <img
                    src={item.picture}
                    alt=""
                    className="w-14 h-14 max-xs:w-6 max-xs:h-6"
                  />
                </td>
                <td className="py-4 border-r-2 border-r-neutral-100 border-solid max-xs:text-[10px]">
                  {item.title}
                </td>
                <td className="py-4 border-r-2 border-r-neutral-100 border-solid max-xs:text-[10px]">
                  {item.quantity}
                </td>
                <td className="py-4 border-r-2 border-r-neutral-100 border-solid max-xs:text-[10px]">
                  {item.description}
                </td>
                <td className="py-4 border-r-2 border-r-neutral-100 border-solid max-xs:text-[10px]">
                  {`$${
                    item.quantity && item.price
                      ? item.quantity * item.price
                      : item.price
                  }`}
                </td>
                <td>
                  <button
                    className="bg-rose-50 text-rose-500 px-2 py-1 border-2 border-solid border-rose-500 rounded-md text-xs hover:bg-rose-500 hover:text-white duration-100 max-xs:text-[10px] max-xs:p-0.5"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
        <tfoot>
          <tr>
            <td className="font-bold py-4 border-r-2 border-r-neutral-100 border-solid max-xs:text-xs">
              total
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-rose-500 max-xs:text-xs">
              $
              {productList.reduce(
                (acc, item) =>
                  item?.price && item.quantity
                    ? acc + item?.price * item.quantity
                    : 0,
                0
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartPage;
