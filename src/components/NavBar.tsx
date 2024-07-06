import { FaCartShopping } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

interface Props {
  counterItems: number;
}

const NavBar = ({ counterItems }: Props) => {
  return (
    <nav className="bg-indigo-500 py-2 fixed px-10 rounded-r-full z-50">
      <ul className="flex items-center justify-center gap-8">
        <a href="#">
          <li className="text-white font-medium flex flex-col items-center justify-center cursor-pointer">
            <div className=" text-neutral-100 text-3xl">
              <IoIosHome />
            </div>
            <p className="text-xs text-neutral-200">Home</p>
          </li>
        </a>
        <a href="#cart">
          <li className="text-white font-medium flex flex-col items-center justify-center cursor-pointer">
            <div className=" text-neutral-100 text-3xl relative">
              <FaCartShopping />
              <span className=" absolute -top-1 -right-2 w-5 h-5 bg-indigo-800 rounded-full flex items-center justify-center text-white text-xs">
                {counterItems}
              </span>
            </div>
            <p className="text-xs text-neutral-200">Cart</p>
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
