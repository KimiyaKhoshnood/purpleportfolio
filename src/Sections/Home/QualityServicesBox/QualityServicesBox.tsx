import { FaArrowRightLong } from "react-icons/fa6";

// ----------------------------------------------------------------------

export type QualityServicesBoxProps = {
    num: string,
    h3: string,
    p: string,
}
const QualityServicesBox = ({num, h3, p}:QualityServicesBoxProps) => {
    return (
        <>
        <div className="relative overflow-hidden rounded-2xl group">
            {/* gradient fades in on hover (gradients themselves can't transition) */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
            <div className="relative flex items-center justify-between md:flex-nowrap flex-wrap w-full py-7 md:px-4 transition-colors duration-300 group-hover:text-white">
                <div className="flex items-center text-brand group-hover:text-white transition-colors duration-300">
                    <span className="font-mono font-semibold md:text-xl text-lg lg:px-6 px-2 opacity-70">{num}</span>
                    <h3 className="lg:w-[340px] sm:w-[290px] font-bold lg:text-2xl text-xl tracking-tight text-wrap">{h3}</h3>
                </div>
                <p className="md:w-[570px] w-full text-[16px] leading-relaxed px-8 py-1 md:order-none order-last text-[#140C1C]/70 group-hover:text-white/90 transition-colors duration-300">{p}</p>
                <FaArrowRightLong className="me-4 md:w-[28px] md:h-[28px] w-[22px] h-[22px] shrink-0 text-brand rotate-45 group-hover:-rotate-45 group-hover:text-white transition-all duration-300 sm:block hidden" size={"100%"}/>
            </div>
        </div>
        </>
    )
}
export default QualityServicesBox
