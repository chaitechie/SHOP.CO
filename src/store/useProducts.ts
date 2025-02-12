/* eslint-disable @typescript-eslint/no-explicit-any */
 import {create } from 'zustand';
 import {devtools,persist} from 'zustand/middleware';
 import {IProducts} from '../Interface/IProducts';
 import {db} from '../config/firebase';
 import {getDocs,collection,limit,query,DocumentData} from 'firebase/firestore'
 

const useProducts = create<IProducts>()(
    devtools(persist((set)=> ({
        product:[],
        loading:false,
        loadingRated:false,
        error:null,
        errorRated:null,
        productRated:[],
        setProduct : async () => {
            set({loading:false,error:null});
            try{
            const productRef = collection(db,"products");
            const q = query(productRef,limit(4));
            const product:DocumentData[] = [];
            const querySnap = await getDocs(q);
            querySnap.forEach((doc) => {
                product.push({
                    id:doc.id,
                    data:doc.data()
                });
            });
            set({product:product,loading:false})
            }
            catch(error:any){
                set({error:error.message,loading:true})
            }
        },
        setProductRated : async () => {
            set({loadingRated:false,errorRated:null})
            try{
               
            const productRef = collection(db,"products");
            const q = query(productRef,limit(4));
            const product:DocumentData[] = [];
            const querySnap = await getDocs(q);
            querySnap.forEach((doc) => {
                product.push({
                    id:doc.id,
                    data:doc.data()
                });
            }); 
            set({productRated:product,loadingRated:false})
            }
            catch(error:any){
                set({errorRated:error.message,loadingRated:true})
            }
        }
        
    }),{name:"product store"}))
)

export default useProducts;

