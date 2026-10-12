import QualityServicesBox, { QualityServicesBoxProps } from "./QualityServicesBox"

// ----------------------------------------------------------------------

const QualityServices = () => {
    const QualityServicesProps: QualityServicesBoxProps[] = [
        {num : "01", h3 : "Full-Stack Development", p : "I develop web applications using React, Next.js, and NestJS, building responsive user interfaces and backend services that work together seamlessly."},
        {num : "02", h3 : "Backend Development & API Integration", p : "I build backend services and REST APIs, integrate external systems, and work with databases to support reliable data flow and application functionality."},
        {num : "03", h3 : "Database Design & Integration", p : "I work with PostgreSQL and Prisma to structure application data, define relationships, and integrate databases with backend services to support maintainable applications."},
        // {num : "04", h3 : "SEO Best Practices", p : "I integrate search engine optimization (SEO) best practices directly into the development process. From clean code to metadata optimization, I ensure your website has a strong foundation for search engine ranking."},
    ]

    return (
        <>
        <div id="servicesID" className="xl:p-20 px-5 py-16 bg-brand-soft flex flex-col gap-4 justify-center items-center">
            <h2 className="font-bold md:text-5xl text-3xl tracking-tight p-2" id="textGradiant">My Quality Services</h2>
            <p className="max-w-[660px] text-center pb-8 text-[17px] leading-relaxed text-[#140C1C]/70">I build reliable web applications by combining frontend development, backend engineering, and thoughtful technical decisions to turn ideas into functional products.</p>
            <div className="w-full flex flex-col divide-y divide-brand-dark/10">
                {
                    QualityServicesProps.map((elem, index)=>{
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