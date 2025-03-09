import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import React, { useEffect, useState } from "react";
import {  fetchCart, setFilteredCart, } from "../reducers/cartSlice";
import { useAuthStatus } from "../Hook/useAuthStatus";
import { updateProfile, getAuth } from "firebase/auth";
import { Rating } from "@mui/material";
import Loading from '../Components/Loading'
import { deleteDoc,doc } from "firebase/firestore";
import {db} from '../config/firebase'
function Cart() {
  const { userName, loggedIn, userId } = useAuthStatus();
  const dispatch = useDispatch<AppDispatch>();
  const auth = getAuth();
  const { filteredCart,status } = useSelector((state: RootState) => state.cart);
  useEffect(() => {

    dispatch(fetchCart());
    dispatch(setFilteredCart(userId));
  }, [dispatch, userId]);

  const [name, setName] = useState<string>();
  const handleUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>,id:string) => {
    e.preventDefault();
    try{
        await deleteDoc(doc(db,"carts",id))
    }catch(error){
      alert('Something went wrong')
    }
  }


  if(status === "loading"){
    return <Loading />
  }


 return (
    <div>
      <div>
        {userName !== null ? (
          <h1 className="text-[3rem] font-[PlayFairDisplay] ml-[2%]">
            Hi {userName},
          </h1>
        ) : (
          <p>Please update your name </p>
        )}
        {loggedIn !== false ? (
          ""
        ) : (
          <div>
            {" "}
            <input
              placeholder="Enter Your full Name"
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <button onClick={handleUser}>EditName</button>
          </div>
        )}
        {filteredCart.length === 0 ? <p className="text-center font-[Satoshi] text-[20px]">There is no Product yet</p> : <p className="text-center font-[Satoshi] text-[20px]">List of your product in cart</p>
         }
      </div>

      <div className="w-screen ">

        {filteredCart.map((item) => (
         
                      <div className="flex flex-row justify-center items-center gap-[20px]" key={item.id}>
           <img src={item.product_image} alt={item.id}
           className="flex-3 w-half h-[20vh]"
           /> 
           <div className="flex-2 flex flex-col justify-center items-center">
            <h1>{item.product_title}</h1>
            <p>${item.product_price}</p>
            <Rating defaultValue={item.product_price} />
            <div className="flex items-center space-x-4 p-4  w-64">
            <button
              className="px-2 py-1 bg-black rounded text-white"
              
            >
              -
            </button>
            <span>{item.quatity}</span>
            <button
              className="px-2 py-1 bg-black rounded text-white"
              
            >
              +
            </button>
            <button
              className="w-full h-[10vh] bg-red-600 text-[#fff] rounded-lg text-[PlayFairDisplay] text-[20px] font-[Satoshi]" onClick={ (e:React.MouseEvent<HTMLButtonElement>)=> handleDelete(e,item.id)}
                          >
              delete
            </button>
          </div>
           </div>
          </div>


))}
        </div>
      </div>
  );
}

export default Cart;
