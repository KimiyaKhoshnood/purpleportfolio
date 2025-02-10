import { FaArrowRightLong } from "react-icons/fa6";

export type QualityServicesBoxProps = {
    num: string,
    h3: string,
    p: string,
}
const QualityServicesBox = ({num, h3, p}:QualityServicesBoxProps) => {
    return (
        <>
        <div className="flex items-center justify-between md:flex-nowrap flex-wrap w-full py-6 hover:bg-gradient-to-r from-[#8650F6] to-[#2A1455] hover:text-white group">
            <div className="flex items-center text-[#8750F7] group-hover:text-white">
                <span className="font-bold md:text-2xl text-xl lg:px-6 px-2">{num}</span>
                <h3 className="lg:w-[250px] sm:w-[200px] font-bold lg:text-3xl text-2xl text-nowrap">{h3}</h3>
            </div>
            <p className="md:w-[570px] w-full text-[17px] px-8 py-1 md:order-none order-last">{p}</p>
            <FaArrowRightLong className='md:w-[35px] md:h-[35px] w-[25px] h-[25px] text-[#8750F7]  rotate-45 group-hover:-rotate-45 group-hover:text-white' size={"100%"}/>
        </div>
        </>
    )
}
export default QualityServicesBox