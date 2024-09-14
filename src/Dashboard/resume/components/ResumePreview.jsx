import { ResumeInfoContext } from "@/context/ResumeinfoContext"
import { useContext } from "react"
import PersonalDetailsPreview from "./preview/PersonalDetailsPreview";
import SummeryPreview from "./preview/SummeryPreview";
import ProfessionExperience from "./preview/ProfessionExperience";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";
import AchivmentPreview from "./preview/AchivmentPreview";




function ResumePreview() {

    const {resumeInfo , setResumeInfo} =  useContext(ResumeInfoContext);

  return (
    <div className="shadow-lg h-full p-14 border-t-[20px]"
    style={{
        borderColor:resumeInfo?.themeColor
    }}
    >
        {/* Personal Detail */}
        <PersonalDetailsPreview resumeInfo={resumeInfo}/>
        {/* Summery */}

        <SummeryPreview resumeInfo={resumeInfo}/>

        {/* Porfessional Education  */}

        <ProfessionExperience resumeInfo={resumeInfo}/>

        {/* Educational  */}

        <EducationalPreview resumeInfo={resumeInfo}/>

        {/* Skills  */}

        <SkillsPreview resumeInfo={resumeInfo}/>

        {/* Achivments // Documents  */}

        <AchivmentPreview resumeInfo={resumeInfo}/>
       

    </div>
  )
}

export default ResumePreview