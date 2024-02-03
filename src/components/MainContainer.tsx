import Header from '../layout/Header'
import Footer from '../layout/Footer'

type Props = {
   children: any
}

export default function MainContainer({ children }: Props) {
   return (
      <div>
         <Header isvisible={true} />
         <div className='flex justify-center w-full items-center'>
            {children}
         </div>
         <Footer />
      </div>
   )
}