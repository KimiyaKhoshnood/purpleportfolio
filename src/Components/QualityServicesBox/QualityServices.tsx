import QualityServicesBox, { QualityServicesBoxProps } from "./QualityServicesBox"
const QualityServices = () => {
    const QualityServicesProps: QualityServicesBoxProps[] = [
        {num : "01", h3 : "Custom Web Design", p : "I build responsive, fast-loading websites with a focus on user experience. From concept to deployment, I ensure that each project is crafted to meet your unique needs and expectations using the latest web technologies."},
        {num : "02", h3 : "UI/UX Design", p : "I combine intuitive user interface design with an excellent user experience. By focusing on usability and aesthetics, I create interfaces that engage users and make navigation effortless and enjoyable."},
        {num : "03", h3 : "Browser Compatibility", p : "I ensure that your website looks and works great on every browser. I address potential issues with compatibility and implement fixes that guarantee a smooth experience, whether your visitors are using Chrome, Firefox, Safari, or Edge."},
        {num : "04", h3 : "SEO Best Practices", p : "I integrate search engine optimization (SEO) best practices directly into the development process. From clean code to metadata optimization, I ensure your website has a strong foundation for search engine ranking."},
    ]

    return (
        <>
        <div id="servicesID" className="xl:p-20 px-5 py-10 bg-[#F6F3FC] flex flex-col gap-5 justify-center items-center">
            <h2 className="font-bold md:text-5xl text-3xl p-3" id="textGradiant">My Quality Services</h2>
            <p className="max-w-[660px] text-center pb-10 text-[17px]">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            <div className="w-full">
                {
                    QualityServicesProps.map((elem, index)=>{
                        return(
                            <div key={index}>
                            <QualityServicesBox num={elem.num} h3={elem.h3} p={elem.p}/>
                            <hr/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default QualityServices