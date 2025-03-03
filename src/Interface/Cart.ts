export interface ICart {
    id:string,
    product_title:string,
    product_price:number,
    product_category:string,
    product_rating:number,
    quatity:number
}


export interface CartState {
    cart:ICart[],
    totalPrice:number,
    status : 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null,
    cartId:string,
}