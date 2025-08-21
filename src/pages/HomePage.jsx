import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const handleMobileMenu = ()=> {
    setIsMobile((prev)=> prev == true ? false : true)
  }
  return (
<div>
      <header className='px-4 md:px-5 lg:px-25 py-4'>
        <nav className='w-full flex justify-between items-center-safe'>
          <div className='w-30'>
            <img src="/logo.png" alt="logo" className='w-full object-cover object-center' />
          </div>
          <div className='hidden md:flex md:gap-10 g:gap-25 text-lg text-black'>
           <div className='flex justify-between gap-6 font-normal  items-center-safe text-nowrap'>
             <p>How it works</p>
             <p>Host a space</p>
             <p>About</p>
           </div>
            <div className='flex justify-between gap-6 items-center-safe'>
              <p className='font-bold'>Become a Host</p>
              <button className='bg-[#F25417] text-white py-1 px-3 rounded-lg font-semibold'>Sign Up</button>
            </div>
          </div>
          <div className="block md:hidden">
            <button onClick={handleMobileMenu}>
              <IoIosMenu className={`${!isMobile ? 'block': 'hidden'} size-10`}/>
              <RxCross1 className={`${isMobile ? 'block': 'hidden'}  size-8`}/>
            </button>
          </div>
        </nav>

        <div className={`${isMobile ? 'absolute top-0 bottom-0 left-0': 'hidden'} md:hidden  bg-white top-0 bottom-0 left-0 w-full max-w-90 px-4 py-4`}>
           <div className='w-30 mb-7'>
            <img src="/logo.png" alt="logo" className='w-full object-cover object-center' />
          </div>

          <div className="text-xl mb-10 flex flex-col gap-4">
             <p className="w-full">How it works</p>
             <p className="w-full">Host a space</p>
             <p className="w-full">About</p>
          </div>

          <div className="text-xl flex flex-col gap-6">
              <p className='font-bold'>Become a Host</p>
              <button className='bg-[#F25417] text-white py-1 px-3 rounded-lg font-semibold w-full'>Sign Up</button>
          </div>
        </div>
      </header>

      <main>
        <article className='w-full h-150 bg-gradient-to-b from-[#632209]/90 to-[#011e38] flex flex-col justify-center-safe items-center-safe gap-4'>
          <h1 className='text-center font-bold text-[clamp(2.5rem,4vw,5rem)] text-white px-2'>Choose How You Work <br /> <span className='text-[#F25417]'>With Gridspace</span></h1>
          <p className='text-white text-[clamp(1rem,3vw,1.5rem)] text-center px-2'>One platform. Three ways to connect with opportunities.</p>
        </article>

        <article className='bg-[#F9F3F1] flex flex-wrap lg:flex-nowrap justify-center-safe gap-6 px-4 md:px-8 lg:px-15 py-20'>
          <section className='bg-white shadow-sm shadow-black/30 flex flex-col gap-7 w-full   justify-center-safe items-center-safe pt-10 pb-23  lg:min-w-60  lg:max-w-110 px-4 rounded-xl'>
            <div className='bg-[#EDF6FF] w-24 p-4 rounded-md mb-4'><img src="../../src/assets/images/buildings.png" alt="building" className='w-full object-center object-cover' /></div>
            <div className='text-2xl font-medium'>Cowork Spaces</div>
            <button className="bg-[#002F5B] text-white font-medium text-xl rounded-xl w-full py-2.5">Explore Spaces</button>
          </section>
          <section className='bg-white shadow-sm shadow-black/30 flex flex-col gap-7 w-full   justify-center-safe items-center-safe pt-10 pb-23  lg:min-w-60  lg:max-w-110 px-4 rounded-xl'>
            <div className='bg-[#FFEBE3] w-24 p-4 rounded-md mb-4'><img src="../../src/assets/images/people.png" alt="building" className='w-full object-center object-cover' /></div>
            <div className='text-2xl font-medium'>Start Recruiting</div>
            <button className="bg-[#F25417] text-white font-medium text-xl rounded-xl w-full py-2.5">Explore Spaces</button>
          </section>
          <section className='bg-white shadow-sm shadow-black/30 flex flex-col gap-7 w-full   justify-center-safe items-center-safe pt-10 pb-23  lg:min-w-60  lg:max-w-110 px-4 rounded-xl'>
            <div className='bg-[#EDF6FF] w-24 p-4 rounded-md mb-4'><img src="../../src/assets/images/folder.png" alt="building" className='w-full object-center object-cover' /></div>
            <div className='text-2xl font-medium'>Discover Project</div>
            <button className="bg-[#002F5B] text-white font-medium text-xl rounded-xl w-full py-2.5">Explore Spaces</button>
          </section>
          
          
        </article>
      </main>

      <footer className='py-15 px-5 md:px-30'>
        <section className='flex justify-between mb-10'>
           <div className='w-30'>
            <img src="/logo.png" alt="logo" className='w-full object-cover object-center' />
          </div>
          <div className='flex gap-3  lg:gap-8 lg:items-center-safe text-xl  flex-col  lg:flex-row '>
            <p>About</p>
            <p>Contact</p>
            <p>Terms</p>
            <p>Investors and Patners</p>
          </div>
        </section>
        <div className='w-full bg-black/10 h-0.5'></div>
        <section className='flex justify-between flex-wrap gap-3 items-center-safe mt-5'>
          <div className='font-bold text-lg'>
            <p>Copyright © 2025, GridSpace. All rights reserved.</p>
          </div>
          <div className='flex gap-5 text-md mr-29'>
            <p>Privacy Policy</p>
            <p>Terms and Services</p>
          </div>
        </section>
      </footer>
</div>
  )
}

export default HomePage