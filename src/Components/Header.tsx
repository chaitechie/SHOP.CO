import Account from "../assets/img/svg/account.svg";
import Cart from "../assets/img/svg/cart.svg";
import Search from "../assets/img/svg/search.png";
import { Link } from "react-router-dom";
import {useState} from 'react'
import { useAuthStatus } from '../Hook/useAuthStatus';
import {getAuth} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
function Header() {
const auth = getAuth();
const navigate = useNavigate();
  const {loggedIn,checkingStatus} = useAuthStatus();
  const [isOpen,setIsOpen]=  useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <div className="w-screen h-[20vh]">
      <div className="bg-[#000] p-1 text-center ">
        <h4 className='text-[#fff] text-[14px] font-["Satoshi"]'>
          Sign Up and get 20% to your first order.
        </h4>
      </div>
      <div className="bg-[#fff] w-screen h-[4rem] p-2 flex items-center justify-center gap-6 ">
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
        <div className="flex gap-[20px] mr-[5%]">
          <Link to={"/cart"} >
          <Cart />
          </Link>
          
            <div className="relative inline-block text-left">
          
          <Account  onMouseEnter={() => handleOpen()} onMouseLeave={() => handleClose()} />
          
          {
            isOpen && (<div   className="z-10 absolute bg-black divide-y divide-gray-100 rounded-lg shadow-sm w-28" id="dropdownDelay"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => handleClose()}>
            {loggedIn !== false && checkingStatus !== true ? (<ul>
              <li>
                <Link to={"/signin"} className="block px-4 py-2 hover:bg-gray-100 text-[14px]"> Sign In</Link>
                <Link to ={"/signup"}  className="block px-4 py-2 hover:bg-gray-100 text-[14px]">Sign Up</Link>
              </li>
            </ul>) :(<ul>
              <li><button  className="block px-4 py-2 hover:bg-gray-100 text-[14px]" onClick={onLogout}>Sign Out</button></li>
            </ul>)}
            </div>)
          }


            </div>
        </div>
       
      </div>

    </div>
  );
}

export default Header;
