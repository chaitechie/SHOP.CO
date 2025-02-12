

import {DocumentData} from "firebase/firestore"
export interface IProducts {
    product: DocumentData[] ,
    loading:boolean,
    loadingRated:boolean,
    error:null,
    errorRated:null,
    setProduct:() => void,
    productRated:DocumentData[],
    setProductRated: () => void,
}