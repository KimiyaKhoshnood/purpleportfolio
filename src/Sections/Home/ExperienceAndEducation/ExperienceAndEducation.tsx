import ExperienceAndEducationEach, { ExperienceAndEducationEachProp } from "./ExperienceAndEducationEach"
import { PiStudentBold } from "react-icons/pi";
import { PiMedal } from "react-icons/pi";

// ----------------------------------------------------------------------

type Column = { heading: string, items: ExperienceAndEducationEachProp[] }

// items arrive already sorted newest first
const ExperienceAndEducation = ({ experience, education }: { experience: Column, education: Column }) => {
    const columns = [
        { ...experience, Icon: PiMedal },
        { ...education, Icon: PiStudentBold },
    ]

    return (
        <>
            <div className="bg-brand-soft lg:px-20 px-5 py-20 gap-10 flex md:flex-row flex-col">
                {
                    columns.map(({ heading, Icon, items }) => (
                        <div className="md:w-1/2 w-full" key={heading}>
                            <h2 className="flex items-center gap-3 pb-8 font-bold lg:text-4xl text-3xl tracking-tight">
                                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-brand shadow-sm ring-1 ring-brand-dark/5">
                                    <Icon size={26} />
                                </span>
                                <span id="textGradiant">{heading}</span>
                            </h2>
                            <ol className="relative ms-2 flex flex-col gap-5 border-s-2 border-brand-light">
                                {
                                    items.map((elem, index) => {
                                        return (<ExperienceAndEducationEach {...elem} key={index} />)
                                    })
                                }
                            </ol>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ExperienceAndEducation
