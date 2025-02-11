import React from 'react'
import Image from 'next/image'
import ErrorPlug from "../../public/ErrorPlug.svg"
import Link from 'next/link'

const notfound = () => {
  return (
    <div className='bg-gradient-to-bl from-[#F0ECFB] to-[#E3D6FC] flex flex-col justify-center items-center w-full h-[100vh]'>
        <h1 id='textextGradiant' className='text-[180px] font-bold text-purple-950'>404</h1>
        <div className='w-full'>
            <Image src={ErrorPlug} alt='' className='w-[75%]'/>
        </div>
        <h2 className='text-3xl text-purple-950 font-bold pt-5'>Page Not Found</h2>
        <p className='text-center w-[50%] text-base py-5'>
            Sorry, the page you’re looking for does not exist or has been moved please go back to the Home page
        </p>
        <Link href={"/"} className='block rounded-3xl w-[50%] text-white font-bold bg-gradient-to-r from-[#8750F7] to-[#2A1455] p-3 text-center'>Go Back Home</Link>
    </div>
  )
}

export default notfound