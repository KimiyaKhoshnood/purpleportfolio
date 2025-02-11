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
    const len = RecentWorksEachProp.length    
    const prevId = (Number(id) == 1) ? len :Number(id)-1
    const nextId = (Number(id) == len) ? 1 :Number(id)+1
    const prevProject = RecentWorksEachProp[prevId-1]
    const nextProject = RecentWorksEachProp[nextId-1]    

    if (!ProjectData) {
      return <div>Project Not Found</div>;
    }
    
  return (
    <div className=''>
      <HeroProject/>
      <ProjectDetails img={ProjectData.img} title={ProjectData.title} about={ProjectData.about} StartDate={ProjectData.StartDate} client={ProjectData.client} description={ProjectData.description} prevTitle={prevProject.title} nextTitle={nextProject.title} prevId={prevId} nextId={nextId} link={ProjectData.link}/>
    </div>
  )
}

export default page