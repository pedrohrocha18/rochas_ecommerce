import Image from 'next/image'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from '../components/cart/index'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectProductsTotalPrice } from '@/redux/cart/cart.selectors'

type Props = {
   isvisible: any
}

export default function Header({ }: Props) {

   const [cartIsVisible, setCartIsVisible] = useState(false);

   const { products } = useSelector((rootReducer: any) => rootReducer.cartReducer);

   const productsTotalPrice = useSelector(selectProductsTotalPrice)

   const handleCartClick = () => {
      setCartIsVisible(true);
   };

   return (
      <div>
         <div className="header">
            <Image src='/cart.png' priority height={60} width={60} alt='cart' className='logo' />
            <p className='marca'><span>Rocha's</span>e-commerce</p>
            <div className='div_icons'>
               <button>
                  <AiOutlineHeart className="icon_heart" />
               </button>
               <button>
                  <AiOutlineShoppingCart className="icons cart" onClick={handleCartClick} />
               </button>
               <div className='div_descCart'>
                  <p className='descCart'>R$ {productsTotalPrice.toFixed(2)}</p>
                  {products.length > 1 ? (
                     <p className='descCart'>{products.length} itens</p>
                  ) : <p className='descCart '>{products.length} item</p>}
               </div>
            </div>
         </div>
         <div>
            {cartIsVisible && <Cart isvisible="true" setIsVisible={setCartIsVisible} />}
         </div>
      </div>
   )
}