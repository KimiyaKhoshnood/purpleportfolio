"use client"
import { useState } from "react"
import RecentWorksEach from "./RecentWorksEach"
import { RecentWorksEachProp } from "./RecentWorksInfo"


const RecentWorks = () => {
    
    const [s,sets] = useState<0|1|2|3>(0)
    // baadan bejaye addad ha All, Apps, UI, Branding bezar

    return(
        <>
        <div id="worksID" className="flex flex-col items-center md:p-20 p-10 md:gap-10 gap-6">
            <h2 className="font-bold md:text-5xl text-3xl p-3" id="textGradiant">My Recent Works</h2>
            <div className="flex bg-[rgb(246,243,252)] w-fit py-1 px-2 rounded-3xl text-[#8750F7]">
                <div onClick={()=>sets(0)} className={`md:py-2 py-1 md:px-6 px-3 cursor-pointer rounded-3xl ${s==0?"text-white bg-gradient-to-r from-[#8650F6] to-[#2A1455]":""}`}>All</div>
                <div onClick={()=>sets(1)} className={`md:py-2 py-1 md:px-6 px-3 cursor-pointer rounded-3xl ${s==1?"text-white bg-gradient-to-r from-[#8650F6] to-[#2A1455]":""}`}>Apps</div>
                <div onClick={()=>sets(2)} className={`md:py-2 py-1 md:px-6 px-3 cursor-pointer rounded-3xl ${s==2?"text-white bg-gradient-to-r from-[#8650F6] to-[#2A1455]":""}`}>UI/UX</div>
                <div onClick={()=>sets(3)} className={`md:py-2 py-1 md:px-6 px-3 cursor-pointer rounded-3xl ${s==3?"text-white bg-gradient-to-r from-[#8650F6] to-[#2A1455]":""}`}>Branding</div>
            </div>
            <div className="flex flex-wrap justify-between gap-y-8 gap-x-3">
                {
                    RecentWorksEachProp.map((elem)=>{
                        if (elem.tags.includes(s) || s==0){
                        return(
                            <RecentWorksEach img={elem.img} title={elem.title} about={elem.about} id={elem.id} key={elem.id}/>
                        )}
                    })
                }
            </div>
        </div>
        </>
    )
}

export default RecentWorks