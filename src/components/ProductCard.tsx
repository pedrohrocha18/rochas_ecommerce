import { addProductToCart } from "@/redux/cart/actions"
import Image from "next/image"
import { IoAddCircle } from 'react-icons/io5'
import { useDispatch } from "react-redux"

export interface Product {
   id: string
   src: string
   name: string
   info: string
   tag: string
   price: number
}

export default function ProductCard(Product: any) {

   const dispatch = useDispatch() 

   const handleProductClick = () => {
      dispatch(addProductToCart(Product))
   }

   return (
      <li>
         <div className='flex flex-col items-center'>
            <Image src={Product.src} width={200} height={200} alt='product' className="w-auto h-auto" priority />
            <h4>{Product.name}</h4>
            <span>{Product.info}</span>
         </div>
         <div className='products_price'>
            <p>R${Product.price.toFixed(2)}</p>
            <IoAddCircle className="products_price_icon" onClick={handleProductClick} />
         </div>
         <div className='products_tags'>
            <p>Tags: {Product.tag}</p>
         </div>
      </li>
   )
}