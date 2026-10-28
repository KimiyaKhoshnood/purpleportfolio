import QualityServicesBox, { QualityServicesBoxProps } from "./QualityServicesBox"

// ----------------------------------------------------------------------

type QualityServicesProps = { heading: string, intro: string, items: QualityServicesBoxProps[] }

const QualityServices = ({ heading, intro, items }: QualityServicesProps) => {
    return (
        <>
        <div id="servicesID" className="xl:p-20 px-5 py-16 bg-brand-soft flex flex-col gap-4 justify-center items-center">
            <h2 className="font-bold md:text-5xl text-3xl tracking-tight p-2" id="textGradiant">{heading}</h2>
            <p className="max-w-[660px] text-center pb-8 text-[17px] leading-relaxed text-[#140C1C]/70">{intro}</p>
            <div className="w-full flex flex-col divide-y divide-brand-dark/10">
                {
                    items.map((elem, index)=>{
                        return(
                            <QualityServicesBox num={elem.num} h3={elem.h3} p={elem.p} key={index}/>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default QualityServices
