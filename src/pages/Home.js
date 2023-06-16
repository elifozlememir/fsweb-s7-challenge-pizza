import logo from '../pages/logo.svg'
import adv from '../adv-form-banner.png';
import { Link } from 'react-router-dom';


export default function Home() {

    return (
<div className="bg-[#CE2829] h-screen w-screen bg-cover bg-center flex flex-col justify-between">
  <div className="flex flex-col items-center h-1/2">
    <img src={logo} alt="Logo" />
    <p className="font-barlow text-white mb-0 mt-20">KOD ACIKTIRIR</p>
    <p className="font-barlow text-white mt-0">PIZZA, DOYURUR</p>

        <Link to="/Order">      
           <button className="bg-[#FDC913] text-black rounded-full px-10 py-2 mt-10">SIPARIS VER</button>
        </Link>
  </div>
  <div className="flex justify-center ">
    <img src={adv} alt="Adv Banner" className="rotate-180 w-1/2 h-full" />
  </div>
</div>
    )
}