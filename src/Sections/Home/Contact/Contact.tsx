import { MdMail } from "react-icons/md";
import ContactWays, { ContactWaysProps } from "./ContactWays"
import SocialLinks from "@/Sections/Layout/SocialLinks";

// ----------------------------------------------------------------------

const Contact = () => {
    const ContactWaysProps: ContactWaysProps[] = [
        {svg: "phone", title:"Phone", content:"+98 910 879 3797", href: "tel:+989108793797"},
        {svg: "mail", title:"Email", content:"Kimiya.khoshnod@gmail.com", href: "mailto:kimiya.khoshnod@gmail.com"},
        {svg: "map", title:"Address", content:"District 5, Tehran, Iran"},
    ]

    return(
        <>
        <div id="contactID" className="bg-brand-soft xl:p-20 px-5 py-16">
            <div className="relative overflow-hidden bg-white rounded-[2rem] ring-1 ring-brand-dark/5 shadow-xl shadow-brand/5 lg:p-14 sm:p-10 p-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="absolute -top-24 -start-24 w-72 h-72 rounded-full bg-brand-light/70 blur-3xl" aria-hidden />
                <div className="relative flex flex-col gap-4">
                    <h2 className="font-bold lg:text-5xl text-4xl tracking-tight pb-1" id="textGradiant">Let’s work together!</h2>
                    <p className="text-[17px] leading-relaxed text-[#140C1C]/70 max-w-[440px]">I design and code beautifully simple things and I love what I do. Just simple like that!</p>
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a href="mailto:kimiya.khoshnod@gmail.com" className="flex items-center gap-2 py-3 px-7 rounded-full font-medium text-white bg-gradient-to-r from-brand to-brand-dark shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-200">
                            <MdMail size={18} />
                            Say Hello
                        </a>
                        <SocialLinks />
                    </div>
                </div>
                <div className="relative flex flex-col gap-7 md:ps-10 md:border-s border-brand-dark/10">
                    {
                        ContactWaysProps.map((elem, index) => {
                            return <ContactWays svg={elem.svg} title={elem.title} content={elem.content} href={elem.href} key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
