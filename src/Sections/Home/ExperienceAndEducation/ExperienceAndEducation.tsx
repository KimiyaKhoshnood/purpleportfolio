import ExperienceAndEducationEach, { ExperienceAndEducationEachProp } from "./ExperienceAndEducationEach"
import { PiStudentBold } from "react-icons/pi";
import { PiMedal } from "react-icons/pi";

// ----------------------------------------------------------------------

const ExperienceAndEducation = () => {
    const ExperienceProps: ExperienceAndEducationEachProp[] = [
        { date: "Jun 10 - Aug 10 2024", title: "Manual QA Intern", span: "SD Studio, Tehran" },
        { date: "Apr 2025 - Present", title: "Front-end Developer", span: "Hazareh Sevom (HZ3), Tehran" },
        { date: "Mar 2026 - Present", title: "Software Engineer", span: "Orchid Pharmed, Tehran" },
    ];
    const EducationProps: ExperienceAndEducationEachProp[] = [
        { date: "2022 - 2025", title: "STATISTICS", span: "University of Tehran" },
        { date: "2025 - Present", title: "SOFTWARE ENGINEERING", span: "Islamic Azad University" },
    ];


    return (
        <>
            <div className="bg-[#F6F3FC] lg:px-20 px-5 py-20 gap-5 flex md:flex-row flex-col">
                <div className="md:w-1/2 w-full">
                    <h2 className="w-fit font-bold lg:text-5xl text-4xl py-7 flex items-center" id="textGradiant"><PiMedal className="w-[40px] text-[#8650F6]" size={"100%"} /> My Experience</h2>
                    <div className="flex flex-col gap-5">
                        {
                            ExperienceProps.map((elem, index) => {
                                return (<ExperienceAndEducationEach date={elem.date} title={elem.title} span={elem.span} key={index} />)
                            })
                        }
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <h2 className="w-fit font-bold lg:text-5xl text-4xl py-7 flex items-center" id="textGradiant"><PiStudentBold className="w-[40px] text-[#8650F6]" size={"100%"} /> My Education</h2>
                    <div className="flex flex-col gap-5">
                        {
                            EducationProps.map((elem, index) => {
                                return (<ExperienceAndEducationEach date={elem.date} title={elem.title} span={elem.span} key={index} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceAndEducation