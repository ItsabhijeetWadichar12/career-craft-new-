



import { useUser } from "@clerk/clerk-react"

import GlobalApi from "../../../service/GlobalApi";
import { useEffect, useState } from "react";
import ResumeItemsTemplates from "../component/ResumeItemsTemplates";



function Templates() {


 
    const {user} = useUser();
    const [resumeList , setResumeList] = useState([]);
  
    useEffect(()=>{
      user&&GetResumesList()
    },[user]);
  
    // used to Get users Resume list
  
    const GetResumesList = () =>{
      GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress).then(resp=>{
        console.log(resp?.data);
        setResumeList(resp?.data?.data);
      })
    }
  
    // const data = resumeList.data[].attributes.title;
  
    // console.log(data)
  
    return (
     
        <>
        
            {/* <AddResume/> */}
            
  
            
            {resumeList.map((resume,index)=>(  
              // eslint-disable-next-line react/jsx-key
              <>
              <ResumeItemsTemplates  resume={resume} key={index} refreshData={GetResumesList} />
              
              </>
              
              
            ))
  
            }
          </>
  
        
      
    )
  }
export default Templates;

















