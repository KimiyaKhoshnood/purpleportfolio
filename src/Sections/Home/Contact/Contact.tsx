import { MdMail } from "react-icons/md";
import ContactWays, { ContactWaysProps } from "./ContactWays"
import SocialLinks, { Socials } from "@/Sections/Layout/SocialLinks";
import { Dictionary } from "@/i18n/dictionaries";

// ----------------------------------------------------------------------

type ContactProps = {
    dict: Dictionary["contact"],
    text: string,
    email: string,
    phone: string | null,
    address: string,
    socials: Socials,
}

const Contact = ({ dict, text, email, phone, address, socials }: ContactProps) => {
    const ContactWaysProps: ContactWaysProps[] = [
        ...(phone ? [{svg: "phone", title: dict.phone, content: phone, href: `tel:${phone.replace(/[^+\d]/g, "")}`, ltr: true}] : []),
        {svg: "mail", title: dict.email, content: email, href: `mailto:${email}`, ltr: true},
        ...(address ? [{svg: "map", title: dict.address, content: address}] : []),
    ]

    return(
        <>
        <div id="contactID" className="bg-brand-soft xl:p-20 px-5 py-16">
            <div className="relative overflow-hidden bg-white rounded-[2rem] ring-1 ring-brand-dark/5 shadow-xl shadow-brand/5 lg:p-14 sm:p-10 p-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="absolute -top-24 -start-24 w-72 h-72 rounded-full bg-brand-light/70 blur-3xl" aria-hidden />
                <div className="relative flex flex-col gap-4">
                    <h2 className="font-bold lg:text-5xl text-4xl tracking-tight pb-1" id="textGradiant">{dict.heading}</h2>
                    <p className="text-[17px] leading-relaxed text-[#140C1C]/70 max-w-[440px]">{text}</p>
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a href={`mailto:${email}`} className="flex items-center gap-2 py-3 px-7 rounded-full font-medium text-white bg-gradient-to-r rtl:bg-gradient-to-l from-brand to-brand-dark shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-200">
                            <MdMail size={18} />
                            {dict.sayHello}
                        </a>
                        <SocialLinks links={socials} />
                    </div>
                </div>
                <div className="relative flex flex-col gap-7 md:ps-10 md:border-s border-brand-dark/10">
                    {
                        ContactWaysProps.map((elem, index) => {
                            return <ContactWays svg={elem.svg} title={elem.title} content={elem.content} href={elem.href} ltr={elem.ltr} key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
