import Account from "../assets/img/svg/account.svg";
import Cart from "../assets/img/svg/cart.svg";
import Search from "../assets/img/svg/search.png";
import { Link } from "react-router-dom";
import { useAuthStatus } from "../Hook/useAuthStatus";
function Header() {
  const {loggedIn,checkingStatus} = useAuthStatus();
  return (
    <div className="w-screen h-[20vh]">
      <div className="bg-[#000] p-1 text-center ">
        <h4 className='text-[#fff] text-[14px] font-["Satoshi"]'>
          Sign Up and get 20% to your first order.
        </h4>
      </div>
      <div className="bg-[#fff] w-auto h-[4rem] p-2 flex items-center justify-center gap-6 ">
        <h1 className="font-['PlayfairDisplay'] text-[32px] font-bold">
          SHOP.CO
        </h1>

        <div className=" relative mt-2 w-full hidden laptop:block desktop:block ">
          <img
            src={Search}
            alt="searchicon"
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
          />
          <input
            type="search"
            placeholder="Search for products"
            className="bg-gray-300 text-black-200 w-[577px] h-[48px] p-2 rounded-lg placholder:text-[#000] placeholder:text-end
          text-end
          "
          />
        </div>
        <div className="flex gap-[20px]">
          <Link to={"/cart"} >
          <Cart />
          </Link>
<button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
<Account />
</button>
     {
      loggedIn === false && checkingStatus === true ? (<>
      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
        <ul className="py-2 text-gray-700">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign Out</li>
        </ul>
      </div>
      </>) :(<>
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
        <div className="py-2 text-gray-700">
          <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign Out</p>
        </div>
      </div>
      </>) 
     }
        </div>
       
      </div>

    </div>
  );
}

export default Header;
