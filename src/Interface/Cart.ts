export interface ICart {
    id:string,
    product_title:string,
    product_price:number,
    product_rating:number,
    quatity:number,
    product_image:string,
    userUid:string
}


export interface CartState {
    cart:ICart[],
    totalPrice:number,
    status : 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null,
    cartId:string,
    userUid:string,
    filteredCart:ICart[]
}