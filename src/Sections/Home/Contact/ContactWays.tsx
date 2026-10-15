import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

// ----------------------------------------------------------------------

export type ContactWaysProps = {
    svg: string,
    title: string,
    content: string,
    href?: string,
    // phone numbers and emails must stay left-to-right inside RTL text
    ltr?: boolean,
}

// ----------------------------------------------------------------------

const ContactWays = ({svg, title, content, href, ltr}:ContactWaysProps) => {
    const body = (
        <>
            <div className="shrink-0 w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-3 shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-105">
                {svg=="phone"?<FaPhone className='text-white p-0.5' size={"100%"}/>:null}
                {svg=="mail"?<MdMail className='text-white' size={"100%"}/>:null}
                {svg=="map"?<FaMapMarkerAlt className='text-white p-0.5' size={"100%"}/>:null}
            </div>
            <div className="min-w-0">
                <h5 className="text-sm font-medium text-[#140C1C]/50">{title}</h5>
                <span dir={ltr ? "ltr" : undefined} className="block font-semibold lg:text-lg text-base text-brand-dark break-words rtl:text-end">{content}</span>
            </div>
        </>
    )
    const className = "group flex items-center gap-4 rounded-2xl p-3 -m-3 transition-colors duration-200"

    return href
        ? <a href={href} className={`${className} hover:bg-brand-soft`}>{body}</a>
        : <div className={className}>{body}</div>
}

export default ContactWays
