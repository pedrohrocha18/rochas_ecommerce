import React from 'react'
import Image from 'next/image'
import { MdRemove, MdAdd } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { removeProductsFromCart, increaseProducts, decreaseProducts } from '../../redux/cart/actions'

type Props = {
   product: any
}

function CartItem({ product }: Props) {

   const productId = product.id

   const dispatch = useDispatch()

   const handleRemoveClick = () => {
      dispatch(removeProductsFromCart(productId))
   }

   const handleIncreaseProduct = () => {
      dispatch(increaseProducts(productId))
   }

   const handleDecreaseProduct = () => {
      dispatch(decreaseProducts(productId))
   }



   return (
      <div className='flex h-[200px] max-w-[400px]'>
         <div className='flex justify-center items-center h-[180px] m-[20px]'>
            <div>
               <Image src={product.src} width={125} height={125} alt='product_cart' className='max-w-[125px]' />
            </div>
            <div className='flex flex-row justify-center ml-[25px] items-center text-[14px] h-[80px] font-medium'>
               <div>
                  <p>{product.name}</p>
                  <p>R${product.price}</p>
                  <div className="text-[16px] flex items-center justify-center text-center gap-[15px] flex-row border-[1px] rounded-[10px] w-[100px] h-[50px] border-zinc-400 mt-5">
                     {product.quantity > 0 ? <MdRemove className="text-[25px]" onClick={() => handleDecreaseProduct()} /> : <IoMdTrash className="text-[25px]" onClick={() => handleRemoveClick()} />} <p className='select-none'>{product.quantity}</p><MdAdd className="text-[25px]" onClick={() => handleIncreaseProduct()} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartItem