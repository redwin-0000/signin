import React from 'react'

const LandingScreen = () => {
  return (
   <>
   <section>
    <div className='bg-gray-100 w-full min-h-screen px-[40rem] py-20'>
    <div className='bg-gray-100 h-[80vh] w-[25vw] border-2 border-gray-400'>
      <div className='flex flex-col items-center py-32'>
        <p className='text-3xl font-bold'>Welcom to PopX</p>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
      </div>
      <div className='flex flex-col mt-18 items-center space-y-4'>
        <a className='bg-[#3234a8] h-10 w-[60%] rounded-md flex justify-center items-center' href='SignupScreen'>Create Account</a>
        <a className='bg-[#9b71b0] h-10 w-[60%] rounded-md flex justify-center items-center' href='LoginScreen'>Already Registered? Login</a>
      </div>
    </div>
    </div>
   </section>
   </>
  )
}

export default LandingScreen