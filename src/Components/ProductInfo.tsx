/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import {useAuthStatus} from '../Hook/useAuthStatus';
import { db } from "../config/firebase";
import { ICart } from "../Interface/Cart";
import { addDoc, collection } from "firebase/firestore";
import { IProduct } from "../Interface/Product";
import {useEffect,useState} from 'react'
type propTypes = {
  detail: IProduct;
};
function ProductInfo({ detail }: propTypes) {
  const {loggedIn,checkingStatus,userId} = useAuthStatus()
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);
  const [formData, setFormData] = useState<ICart>({
    quatity: 0,
    id:"",
    product_title: "",
    product_price: 0,
    product_rating: 0,
    product_image:"",
    userUid:""
  });
  
  useEffect(() => {
   if(loggedIn === true && checkingStatus === false){
    setFormData({
      quatity: quantity,
      id: detail.id,
      product_title: detail.product_title,
      product_price: detail.product_price * quantity,
      product_rating: detail.product_rating,
      product_image:detail.product_image,
      userUid:userId
    });
   }
  }, [checkingStatus, detail, loggedIn, navigate, quantity, userId]);
  const handleCart = async () => {
   console.log(formData)
    try {

      await addDoc(collection(db, "carts"),formData);

      navigate("/cart");
      
     
    } catch (error) {
      console.log(error)
      alert("Something has got wrong");
    }
  };
  const subQuantity = () => {
    if (quantity > 1) setQuantity((prev: number) => prev - 1);
  };
  const addQuantity = () => {
    setQuantity((prev: number) => prev + 1);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-2 laptop:grid-cols-12 desktop:grid-cols-12 laptop:p-4 desktop:p-4 p-2 place-items-center">
        <div className="col-span-4">
          <img
            src={detail?.product_image}
            alt=""
            style={{ height: "70%", width: "auto" }}
          />
        </div>
        <div className="col-span-8">
          <h1 className=" text-[PlayFairDisplay] text-[2rem]">
            {detail?.product_title}
          </h1>
          <div className="flex flex-row gap-4 ">
            <p className="text-justify text-[Satoshi] text-[1.2rem]">
              ${detail?.product_price}
            </p>
          </div>
          <div className="flex items-center space-x-4 p-4  w-64">
            <button
              className="px-2 py-1 bg-black rounded text-white"
              onClick={() => subQuantity()}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-2 py-1 bg-black rounded text-white"
              onClick={() => addQuantity()}
            >
              +
            </button>
            <button
              className="w-full h-[10vh] bg-[#000] text-[#fff] rounded-lg text-[PlayFairDisplay] text-[20px] font-[Satoshi]"
              onClick={() => handleCart()}
            >
              cart
            </button>
          </div>
          <p className="font-[Satoshi] text-[16px]">
            Category:{detail?.product_category}
          </p>
          <Rating value={detail?.product_rating} />

          <p className="font-[Satoshi] text-justify text-[14px]">
            {detail.product_description}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;

