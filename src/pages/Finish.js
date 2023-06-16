import logo from '../pages/logo.svg'


export default function Finish() {

    return (
<div className="bg-[#CE2829] h-screen w-screen bg-cover bg-center flex flex-col items-center">
  <div className="flex flex-col items-center justify-start h-screen">
    <img src={logo} alt="Logo" />
    <div className='flex flex-col flex-1 items-center justify-center  text-[40px]'>
      <p className="font-barlow size text-white mb-0">TEBRİKLER!</p>
      <p className="font-barlow text-white mt-0">SİPARİŞİNİZ TAMAMLANDI!</p>
    </div>
  </div>
</div>
    )
}