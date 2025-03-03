import  Twitter from '../assets/img/svg/twitter.svg'
import Instagram from '../assets/img/svg/instagram.svg'
import Facebook from '../assets/img/svg/facebook.svg'
function Footer() {
  return (
    <>
    <div className=" relative p-[2%] ml-[2%] mr-[2%] mb-[-8%] bg-[#000] rounded-[30px] h-[180px]  z-[99] grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-2 ">

    <h1 className="text-[18px] laptop:text-[40px] desktop:text-[40px] font-['PlayfairDisplay'] cols-span-4 text-[#fff]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

  <div className='flex flex-col justify-center items-center gap-[10px] cols-span-8'>
    <input type="email" name="" id="" placeholder='Enter your email Address' className='w-[349px] h-[46px] rounded-[30px] placeholder:font-["Satoshi"] text-center text-[16px] regular'/>
    <button type="submit" className="w-[349px] h-[46px] rounded-[30px] font-['Satoshi'] text-[24px] regular bg-[#fff]" >Subscribe to Newsletter</button>
  </div>
 </div>
 <div className="w-screen bg-[#f2eff0]
  absolute z-50 h-screen">
 
 
 <div className="grid grid-cols-2 gap-4 place-items-center gap-4 mt-[8%]
 laptop:grid-cols-4 desktop:grid-cols-4 tablet:grid-cols-2 p-2
  ">
 <div className='cols-span-4 flex flex-col justify-center items-center gap-[10px]'>
             <h1 className="font-['PlayfairDisplay'] font-[5rem] font-bold">SHOP.CO</h1>
             <p className='font-regular font-[16px] font-["Satoshi"] 
             
             '>We have clothers that suits yours style and which you&apos;re product to wear. 
             </p>
             <div className='flex flex-row gap-[15px]'>
                 <Twitter className='w-[14px] h-[14px]'/>
                 <Instagram  className='w-[14px] h-[14px]'/>
                 <Facebook className='w-[14px] h-[14px] bg-[#000] rounded-[30px]'/>
             </div>
 </div>
 <div className=' flex flex-col justify-center items-start gap-[10px]'>
                 <h3 className="font-['PlayfairDisplay'] font-[1rem]">COMPANY</h3>
                 <p>About</p>
                 <p>Features</p>
                 <p>Works</p>
                 <p>Career</p>
             </div>
             <div className=' flex flex-col justify-center items-start gap-[10px]'>
                 <h3 className="font-['PlayfairDisplay'] font-[1rem]">HELP</h3>
                 <p>Customer Support</p>
                 <p>Delivery Details</p>
                 <p>Terms & Conditions</p>
                 <p>Privacy Policy</p>
             </div>
             <div className=' flex flex-col justify-center items-start gap-[10px]'>
                 <h3 className="font-['PlayfairDisplay'] font-[2rem]">FAQ</h3>
                 <p>Account</p>
                 <p>Manage Deliveries</p>
                 <p>Orders</p>
                 <p>Payments</p>
             </div>
             {/* <div className=' flex flex-col justify-center items-start gap-[10px] sm:hidden'>
               <h3 className="font-['PlayfairDisplay'] font-[2rem] ">RESOURCES</h3>
               <p>Free Books</p>
               <p>Development Tutorials</p>
               <p>How to - Blog</p>
               <p>YouTube Playlist</p>
             </div> */}
 
 </div>
 
 </div>

    </>

  )
}

export default Footer