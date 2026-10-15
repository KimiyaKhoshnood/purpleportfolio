import HeroProject from '@/Sections/Project/HeroProject/HeroProject'
import ProjectDetails from '@/Sections/Project/ProjectDetails/ProjectDetails'
import { RecentWorksEachProp } from '@/Sections/Home/RecentWorks/RecentWorksInfo'
import React from 'react'
import { notFound } from 'next/navigation'

interface EachProduct {
  params: Promise<{lang: string, id: string}>,
  searchParams: Promise<Record<string, string | undefined>>
}

const page = async ({params}:EachProduct) => {
    const { lang, id } = await params
    // project write-ups are English-only
    if (lang !== 'en') notFound()
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