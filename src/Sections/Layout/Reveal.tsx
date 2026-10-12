"use client"
import { ReactNode, useEffect, useRef } from "react";

// ----------------------------------------------------------------------

// Fades its children in the first time they scroll into view.
const Reveal = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.classList.add("revealed")
                observer.disconnect()
            }
        }, { threshold: 0.1 })
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return <div ref={ref} className="reveal">{children}</div>
}

export default Reveal
