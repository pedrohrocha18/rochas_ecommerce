import { CiMobile3 } from 'react-icons/ci'
import { PiTelevisionSimple, PiAirplane } from 'react-icons/pi'
import { RiComputerLine } from 'react-icons/ri'
import { HiMusicNote } from 'react-icons/hi'
import { TiVendorApple, TiVendorAndroid, TiVendorMicrosoft } from 'react-icons/ti'

type Props = {}

export default function MainList({ }: Props) {

   return (
      <div className='mainlist'>
         <ul>
            <li>
               <CiMobile3 className="icon" /><span>Celulares</span>
            </li>
            <li>
               <PiTelevisionSimple className="icon" /><span>Televisores</span>
            </li>
            <li>
               <RiComputerLine className="icon" /><span>Informática</span>
            </li>
            <li>
               <HiMusicNote className="icon" /><span>Artigos Sonoros</span>
            </li>
            <li>
               <PiAirplane className="icon" /><span>Passagens</span>
            </li>
            <li>
               <TiVendorApple className="icon" /><span>Apple</span>
            </li>
            <li>
               <TiVendorAndroid className="icon" /><span>Android</span>
            </li>
            <li>
               <TiVendorMicrosoft className="icon" /><span>Microsoft</span>
            </li>
         </ul>
      </div>
   )
}