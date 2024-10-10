"use client"

import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react';
import GlobalApi from '../../../service/GlobalApi';
import ContactUs from './ContactUs';


function Contact() {

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
            <ContactUs  resume={resume} key={index} refreshData={GetResumesList}/>
            </>

          ))

          }
</>
  )
}

export default Contact