import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../config/firebase";
import { useEffect, useState, useRef } from "react";
import { ICart } from "../Interface/Cart";
import { addDoc, collection } from "firebase/firestore";
import {IProduct} from '../Interface/Product'
type propTypes = {
  detail: IProduct
};
function ProductInfo({ detail }: propTypes) {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ICart>({
    id: "",
    product_title: "",
    product_price: 0,
    product_category: "",
    product_rating: 0,
    quatity: 0,
  });
  const isMounted = useRef<boolean>(true);
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({
            id: user.uid,
            product_title: detail.product_title,
            product_category: detail.product_category,
            product_price: detail.product_price,
            product_rating: detail.product_rating,
            quatity: 1,
          });
        } else {
          navigate("/signin");
        }
      });
    }
  }, [auth, detail, navigate]);

  const handleCart = async () => {
    try {
      await addDoc(collection(db, "carts"), formData);

      navigate("/cart");
    } catch (error) {
      alert("Something has got wrong");
    }
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
       
            <div className="col-span-6" >
              <img src={detail?.product_image} alt="" style={{height:"300px",width:"auto"}}/>
            </div>
            <div className="col-span-6">
                <h1 className=" text-[PlayFairDisplay] text-[2rem]">
                  {detail?.product_title}
                </h1>
                <div className="flex flex-row gap-4 ">
                  <p className="text-justify text-[Satoshi] text-[1.2rem]">
                    ${detail?.product_price}
                  </p>
                  <button
                    className="w-[100px] bg-[#000] text-[#fff] rounded-lg text-[PlayFairDisplay] text-[16px] "
                    onClick={() => handleCart()}
                  >
                    cart
                  </button>
                </div>

                <p className="text-[Satoshi] text-[16px]">Category:{detail?.product_category}</p>
                <Rating value={detail?.product_rating}  />

              </div>
              
           

        

      </div>
      </>
  );
}

export default ProductInfo;
