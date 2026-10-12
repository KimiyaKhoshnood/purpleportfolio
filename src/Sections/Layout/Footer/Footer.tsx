import Image from "next/image";
import Link from "next/link";
import LogoK from "../../../../public/LogoK.png"
import SocialLinks from "../SocialLinks";
import BackToTop from "./BackToTop";

// ----------------------------------------------------------------------

const Footer = () => {
    return(
        <>
        <footer className="relative overflow-hidden flex flex-col bg-brand-dark items-center pt-14 pb-8 gap-7">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-brand/30 blur-3xl" aria-hidden />
            <Image className="relative" src={LogoK} alt="" width={64} height={64}></Image>
            <nav className="relative flex gap-8 text-white/80 font-semibold">
                <Link className="hover:text-white transition-colors" href={"/#servicesID"}>Services.</Link>
                {/* <Link href={"/#worksID"}>Works.</Link> */}
                <Link className="hover:text-white transition-colors" href={"/#skillsID"}>Skills.</Link>
                <Link className="hover:text-white transition-colors" href={"/#contactID"}>Contact.</Link>
            </nav>
            <div className="relative">
                <SocialLinks dark />
            </div>
            <div className="relative w-full max-w-5xl px-5 pt-6 border-t border-white/10 text-center text-sm text-white/50">
                © {new Date().getFullYear()} <span className="font-semibold text-white/80">Kimia Khoshnood</span>. All rights reserved.
            </div>
        </footer>
        <BackToTop />
        </>
    )
}

export default Footer
