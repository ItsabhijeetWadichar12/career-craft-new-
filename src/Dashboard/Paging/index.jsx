import React, { useEffect, useState } from 'react'
import Pagging from './Pagging';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from '../../../service/GlobalApi';

function Paging() {

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

  return (
   <>

      {resumeList.map((resume,index)=>(  
            // eslint-disable-next-line react/jsx-key
            <>
            <Pagging  resume={resume} key={index} refreshData={GetResumesList}/>
            </>

          ))

          }
</>
  )
}

export default Paging