import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import { ResumeInfoContext } from '@/context/ResumeinfoContext';
// import dummy from '@/data/dummy';

import ResumePreview1 from '@/Dashboard/Templates/components/ResumePreview1';
import GlobalApi from '../../../../../../service/GlobalApi';
import FormSection from '@/Dashboard/resume/components/FormSection';
import ResumePreview4 from '@/Dashboard/Templates3/components/ResumePreview4';



function  EditResume4() {
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
        
         <ResumePreview4/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume4