import HeroProject from '@/Components/HeroProject/HeroProject'
import ProjectDetails from '@/Components/ProjectDetails/ProjectDetails'
import { RecentWorksEachProp } from '@/Components/RecentWorks/RecentWorksInfo'
import React from 'react'

interface EachProduct {
  params: Promise<{id: string}>,
  searchParams: Promise<Record<string, string | undefined>>
}

const page = async ({params}:EachProduct) => {
    const { id } = await params
    const ProjectData = RecentWorksEachProp[Number(id)-1]    

    if (!ProjectData) {
      return <div>Project Not Found</div>;
    }
    
  return (
    <div className=''>
      <HeroProject/>
      <ProjectDetails img={ProjectData.img} title={ProjectData.title} about={ProjectData.about} StartDate={ProjectData.StartDate} client={ProjectData.client} description={ProjectData.description}/>
    </div>
  )
}

export default page