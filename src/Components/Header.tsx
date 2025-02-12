import  Account from "../assets/img/svg/account.svg";
import Cart from "../assets/img/svg/cart.svg";
import Search from "../assets/img/svg/search.png";
// import Shop from '../Pages/Shop';
function Header() {
  return (
    <div className="w-auto h-[20vh]">
        <div className='bg-[#000] p-1 text-center '>
        <h4 className='text-[#fff] text-[14px] font-["Satoshi"]'>Sign Up and get 20% to your first order.</h4>
        </div>
        <div className='bg-[#fff] w-auto h-[4rem] p-2 flex items-center justify-center gap-6'>
          <h1 className="font-['PlayfairDisplay'] text-[32px] font-bold">SHOP.CO</h1>
         <div className='flex items-center justify-evenly gap-2 '>
         <select className='bg-[#fff] font-["Satoshi"] text-[16px]'>
          <option value="Shop">Shop</option>
          </select>
          <h3 className='font-["Satoshi"] text-[16px]'>On Sale</h3>
          <h3 className='font-["Satoshi"] text-[16px]'>New Arrivals</h3>
          <h3 className='font-["Satoshi"] text-[16px]'>Brands</h3>

         </div>
          <div className='flex jusitfy-center items-center'>
        
          <img src={Search} alt="" style={{width:"20.27px",height:"20.27px", marginRight:"-30px", zIndex:1,marginLeft:"2%"}} />
          <input type='search' placeholder='Search for products' 
          className="bg-gray-300 text-black-200 w-[577px] h-[48px] p-2 rounded-lg placholder:text-[#000] placeholder:text-end
          text-end
          "
          />
         
          </div>
          <div className="flex gap-[20px]">
            <Cart />
            <Account />
          </div>
          <div >
        

          </div>
        </div>
    <div>
        
    </div>
    </div>
  )
}

export default Header