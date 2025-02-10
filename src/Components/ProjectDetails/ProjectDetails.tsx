import React from 'react'
import Image, { StaticImageData } from 'next/image'

const ProjectDetails = ({img, title, about, StartDate, client, description}:{img:StaticImageData, title:string, about:string, StartDate:string, client: string, description:string}) => {
    
  return (
    <div className='md:p-10 p-5 flex flex-col gap-5'>
        <div className='md:p-10 flex justify-center'><Image src={img} alt='sth'></Image></div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
          <div>
            <h2 id='' className='font-bold text-4xl leading-relaxed'>{title}</h2>
            <p className='leading-relaxed text-justify'>{about}</p>
          </div>
          <div className='grid grid-cols-2 items-center'>
            <div>
                <h5 className='text-gray-500 text-lg'>Start Date:</h5>
                <span className='text-xl'>{StartDate}</span>
            </div>
            <div>
                <h5 className='text-gray-500 text-lg'>Client:</h5>
                <span className='text-xl'>{client}</span>
            </div>
          </div>
        </div>

        <div>
            <h2 className='font-bold text-3xl leading-relaxed'>Project Description:</h2>
            <p className='leading-relaxed text-justify'>{description}</p>
            <button className="px-9 py-3 rounded-3xl text-white font-medium bg-gradient-to-r from-[#8650F6] to-[#2A1455] my-4" type="submit">live preview</button>
        </div>

        <div className='h-40 w-full bg-[#8750F7] flex justify-between text-white font-bold text-4xl items-center p-10'>
            <div>Next</div>
            <div>Prev</div>
        </div>
    </div>
  )
}

export default ProjectDetails