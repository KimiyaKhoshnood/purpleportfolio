import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundUp } from "react-icons/io";
import LogoK from "../../../public/LogoK.png"

const Footer = () => {
    return(
        <>
        <footer className="flex flex-col bg-[#2a1454] items-center py-10 gap-5">
            {/* <img className="w-[75px] h-[75px]" src="https://cdn-icons-png.flaticon.com/256/13309/13309357.png" alt="" /> */}
            <Image src={LogoK} alt="" width={75} height={75}></Image>
            <div className="flex gap-8 text-white font-bold">
                <Link href={"/#servicesID"}>Services.</Link>
                <Link href={"/#worksID"}>Works.</Link>
                <Link href={"/#skillsID"}>Skills.</Link>
                <Link href={"/#contactID"}>Contact.</Link>
            </div>
            <span className="text-[#8650F6]">Made in 2024 by <span className="font-bold">Kimia Khoshnood</span></span>
        </footer>
        <a href="" target="_top" aria-label="Link to Top" className="fixed bottom-5 right-5 flex justify-center items-center w-[40px] h-[40px] rounded-full border-2 border-[#8650F6] shadow-lg bg-transparent text-[#8650F6] p-2"><IoMdArrowRoundUp className='pb-[2px]' size={"100%"}/></a>
        </>
    )
}

export default Footer