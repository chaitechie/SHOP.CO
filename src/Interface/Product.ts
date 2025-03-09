export interface IProduct  {
    category: string
   
    id:string,
    product_title:string,
    product_description:string,
    product_category:string,
    product_rating:number,
    product_price:number,
    product_image:string
}

export interface ProductState {
    items:IProduct[],
    filteredItems:IProduct[],
    status : 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null,
    caterBy:string | null,
    rateBy:number,
    sortBy:string,
    productId:string,
    productDetail:IProduct
}





