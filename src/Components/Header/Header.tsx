"use client"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoK from "../../../public/LogoK.png"

const Header = () => {
    const [HamMenu, setHamMenu] = useState(false)
    // #E8DEFD
    return(
        <>
        <div className=" z-10 flex justify-between h-fit w-full items-center pb-6 md:pt-6 pt-6 md:px-20 px-5 text-[18px] font-medium text-[#2a1454]">
            <div className="flex items-center">
                <Link aria-label="Link to Home" href={"/"}><Image src={LogoK} alt="" width={50} height={45}></Image></Link>
                <span className="md:block hidden text-[16px]">Kimiya.Khoshnood@gmail.com</span>
            </div>
            <div className="lg:flex hidden gap-8 items-center text-[17px]">
                <Link className="hover:border-b-2 border-[#2A1455]" href="/#servicesID">Services</Link>
                <Link className="hover:border-b-2 border-[#2A1455]" href="/#worksID">Works</Link>
                <Link className="hover:border-b-2 border-[#2A1455]" href="/#skillsID">Skills</Link>
                <Link className="hover:border-b-2 border-[#2A1455]" href="/#contactID">Contact</Link>
                <Link className="py-3 px-7 hover:bg-gradient-to-l bg-gradient-to-r from-[#8750F7] to-[#2A1455] rounded-3xl text-white" href="/">Hire me!</Link>
            </div>
            <div className="lg:hidden flex items-center gap-3">
                <a className="flex py-3 px-7 bg-gradient-to-r from-[#8750F7] to-[#2A1455] rounded-3xl text-white text-[17px]" href="">Hire me!</a>
                
                <FaBars className={`w-[25px] text-[#8750F7] ${HamMenu?"bg-purple-100":""}`} size={"100%"} onClick={()=>setHamMenu(!HamMenu)}/>
            </div>
        </div>
        <div className="px-5">
            <div className={`lg:hidden ${HamMenu?"flex":"hidden"} flex-col gap-1 text-[17px] bg-purple-100 shadow-lg py-5 rounded-xl w-full`}>
                <Link className="hover:bg-purple-50 border-[#2A1455] px-5 py-2"  href="/#servicesID">Services</Link>
                <Link className="hover:bg-purple-50 border-[#2A1455] px-5 py-2" href="/#worksID">Works</Link>
                <Link className="hover:bg-purple-50 border-[#2A1455] px-5 py-2" href="/#skillsID">Skills</Link>
                <Link className="hover:bg-purple-50 border-[#2A1455] px-5 py-2" href="/#contactID">Contact</Link>
            </div>
        </div>
        </>
    )
}

export default Header;