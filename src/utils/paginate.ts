/* eslint-disable @typescript-eslint/no-explicit-any */
 export const paginate = (array:any[],pageSize: number) => {
    const pageCount = Math.ceil(array.length/pageSize)
    return Array.from({length:pageCount},(_,index) => {
      array.slice(index * pageSize,(index + 1)* pageSize)
    })
  }