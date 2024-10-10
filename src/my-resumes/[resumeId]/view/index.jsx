
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GlobalApi from "../../../../service/GlobalApi";

import { Button } from "@/components/ui/button";
import ResumePreview from "@/Dashboard/resume/components/ResumePreview";
import { RWebShare } from "react-web-share";
import { ResumeInfoContext } from "@/context/ResumeinfoContext";
import ResumePreview1 from "@/Dashboard/Templates/components/ResumePreview1";
import ResumePreview2 from "@/Dashboard/Templates1/components/ResumePreview2";
import ResumePreview3 from "@/Dashboard/Templates2/components/ResumePreview3";
import ResumePreview4 from "@/Dashboard/Templates3/components/ResumePreview4";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";


function ViewResume() {

    const [resumeInfo,setResumeInfo]=useState();
    const {resumeId}=useParams();

    useEffect(()=>{
        GetResumeInfo();
        console.log(resumeId)
    },[])
    const GetResumeInfo=()=>{
        GlobalApi.GetResumeById(resumeId).then(resp=>{
            console.log(resp?.data?.data);
            setResumeInfo(resp?.data?.data);
        })
    }

    const HandleDownload=()=>{
        window.print();
    }

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}} >
        <div id="no-print">
            
        

        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
            <h2 className='text-center text-2xl font-medium'>
                Congrats! Your Ultimate AI generates Resume is ready ! </h2>
                <p className='text-center text-gray-400'>Now you are ready to download your resume and you can share unique 
                    resume url with your friends and family </p>
            <div className='flex justify-between px-44 my-10'>
            <Button ><ArrowBigLeft/></Button>
                <Link to={'/'} >
                <Button>Home</Button>
                </Link>
                
                <Button onClick={HandleDownload}>Download</Button>

               
                <RWebShare
        data={{
          text: "Hello Everyone, This is my resume please open url to see it",
          url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+"/view",
          title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
        }}
        onClick={() => console.log("shared successfully!")}
      > <Button>Share</Button>
      </RWebShare>

      <Button ><ArrowBigRight/></Button>
      
            </div>
        </div>
            
        </div>

        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <div id="print-area" >   
           <ResumePreview/>
        </div>
        </div>

        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <div id="print-area" >   
        <ResumePreview1/>

        </div>
        </div>


        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <div id="print-area" >   
        <ResumePreview2/>

        </div>
        </div>
        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <div id="print-area" >   
        <ResumePreview3/>

        </div>
        </div><div className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <div id="print-area" >   
        <ResumePreview4/>

        </div>
        </div>
          
    </ResumeInfoContext.Provider>

    
  )
}

export default ViewResume;