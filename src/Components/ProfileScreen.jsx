import React from 'react'
import img from "../Components/img/camera.png"
import img1 from "../Components/img/logoimg.jpg"
const ProfileScreen = () => {
  return (
    <>
    <section>
     <div className='bg-gray-100 w-full min-h-screen px-[40rem] py-20'>
     <div className='bg-gray-100 h-[80vh] w-[25vw] border-2 border-gray-400 '>
     <div className='flex flex-col px-4 py-5 bg-white'>
        <p className='text-xl'>Account Setting</p>
      </div>
     <div className='px-4 py-4'>
        <div className='flex flex-row gap-8'>
            <img className='w-[5vw] h-[10vh] rounded-full bg-red-500' src={img1} alt=''/>
            <div className='py-14 -ml-12'>
            <img src={img} alt='imgss' className='h-[2vh]' />
            </div>
            <div>
                <p>Marry Doe</p>
                <p>Marry@Gamil.com</p>
            </div>
        </div>
        <div className='-mt-5 px-5 text-sm text-gray-500'>
            <p>Lorem lpsum Dolor Sit Amet, Consetetur Sadipscing<br/>
            Elitr,Sed Diam Nonumy Ermod Tempor Invidunt Ut <br/> Labore Et Dolore Margna 
            Aliquyam Erat, Sed Diam.
            </p>
        </div>
     </div>
     <div className="border-2 border-gray-400 border-dotted"></div>

     </div>
     </div>
    </section>
    </>
  )
}

export default ProfileScreen