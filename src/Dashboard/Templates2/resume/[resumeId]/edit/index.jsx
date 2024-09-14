import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import { ResumeInfoContext } from '@/context/ResumeinfoContext';
// import dummy from '@/data/dummy';


import GlobalApi from '../../../../../../service/GlobalApi';
import FormSection from '@/Dashboard/resume/components/FormSection';
import ResumePreview3 from '@/Dashboard/Templates2/components/ResumePreview3';



function  EditResume3() {
    const {resumeId}=useParams();
    const [resumeInfo,setResumeInfo]=useState();
    useEffect(()=>{
       
        GetResumeInfo();
        
    },[])


    const GetResumeInfo=()=>{
        GlobalApi.GetResumeById(resumeId).then(resp=>{
          console.log(resp.data.data);
          setResumeInfo(resp.data.data);
        })
    }

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        {/* Form Section  */}
          <FormSection/>
        {/* Preview Section  */}
        
         <ResumePreview3/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume3