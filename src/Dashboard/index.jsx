import { useUser } from "@clerk/clerk-react"
import AddResume from "./component/AddResume"
import GlobalApi from "../../service/GlobalApi";
import { useEffect, useState } from "react";
import ResumeItems from "./component/ResumeItems";
import Templates from "./Templates";



function Dashboard() {

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
   
      <div className="p-10 md:px-20 lg:px-32">
        <h2 className="font-bold text-3xl">My resume</h2>
        <p>Start Creating Ai Resume to your next job</p>

        <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-5">
          <AddResume/>
          

          
          {resumeList.map((resume,index)=>(  
            // eslint-disable-next-line react/jsx-key
            <>
            <ResumeItems  resume={resume} key={index} refreshData={GetResumesList} />
            {/* <Templates resume={resume} key={index} refreshData={GetResumesList}/> */}
            </>
            
            
          ))

          }
        </div>

      </div>
    
  )
}

export default Dashboard