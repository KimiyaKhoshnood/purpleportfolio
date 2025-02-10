import Header from '@/Components/Header/Header'
import HeroProject from '@/Components/HeroProject/HeroProject'
import ProjectDetails from '@/Components/ProjectDetails/ProjectDetails'
import { ExtendedRecentWorksProps, RecentWorksEachProp } from '@/Components/RecentWorks/RecentWorksInfo'
import React from 'react'

interface EachProduct {
  params: {id: string}
  searchParams: {}
}

const page = async({params}:EachProduct) => {
    const { id } = await params
    // console.log("params: ", params);

    const ProjectData = await RecentWorksEachProp[Number(id)-1]
    // console.log("id: ", id,"data: ", ProjectData, );
    
  return (
    <div className=''>
      <HeroProject/>
      <ProjectDetails img={ProjectData.img} title={ProjectData.title} about={ProjectData.about} StartDate={ProjectData.StartDate} client={ProjectData.client} descripstion={ProjectData.descripstion}/>
    </div>
  )
}

export default page