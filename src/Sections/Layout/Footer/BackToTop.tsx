"use client"
import { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

// ----------------------------------------------------------------------

const BackToTop = ({ label }: { label: string }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <button
            aria-label={label}
            onClick={() => window.scrollTo({ top: 0 })}
            className={`fixed bottom-5 end-5 z-40 flex justify-center items-center w-11 h-11 rounded-full text-white bg-gradient-to-br from-brand to-brand-dark shadow-lg shadow-brand/30 hover:-translate-y-1 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
            <IoMdArrowRoundUp size={20} />
        </button>
    )
}

export default BackToTop
