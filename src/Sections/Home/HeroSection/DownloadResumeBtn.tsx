"use client"
import { FiDownload } from "react-icons/fi";

// ----------------------------------------------------------------------

const DownloadResumeBtn = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'KimiaKhoshnoodResume.pdf';
    link.download = 'KimiaKhoshnoodResume.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload} className="group py-3 px-7 flex items-center gap-2 w-fit rounded-full font-medium text-white bg-gradient-to-r from-brand to-brand-dark shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer">
      Download CV
      <FiDownload className="transition-transform duration-200 group-hover:translate-y-0.5" size={18} />
    </button>
  )
}

export default DownloadResumeBtn
