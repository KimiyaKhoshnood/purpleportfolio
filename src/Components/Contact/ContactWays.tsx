// import Icon from 'react-icons-kit'
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export type ContactWaysProps = {
    svg: string,
    title: string,
    content: string,
}

const ContactWays = ({svg, title, content}:ContactWaysProps) => {
    return(
        <>
        <div className="flex items-center gap-5">
            <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-t from-[#8650F6] to-[#2A1455] p-2">
                {svg=="phone"?<FaPhone className='text-white p-1' size={"100%"}/>:null}
                {svg=="mail"?<MdMail className='text-white p-1' size={"100%"}/>:null}
                {svg=="map"?<FaMapMarkerAlt className='text-white p-1' size={"100%"}/>:null}
            </div>
            <div className="lg:w-[300px] w-[250px]">
                <h5 className="text-lg">{title}</h5>
                <a className="font-medium lg:text-xl text-lg text-[#2A1454]" href="">{content}</a>
            </div>
        </div>
        </>
    )
}

export default ContactWays