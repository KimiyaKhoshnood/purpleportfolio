"use client"

const DownloadResumeBtn = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/KimiaKhoshnoodResume.pdf';
        link.download = 'KimiaKhoshnoodResume.pdf';   
        link.click();
      };
    
  return (
    <button onClick={handleDownload} className="py-3 px-7 flex w-fit rounded-3xl font-medium border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all duration-200 ease-linear cursor-pointer">
        Download CV
    </button>
  )
}

export default DownloadResumeBtn