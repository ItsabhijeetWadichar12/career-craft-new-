import { Button } from '@/components/ui/button'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Template1 from './template/Template1';

function Templates() {
  const params = useParams();
    
  return (
    <div className="p-10 md:px-20 lg:px-32">
    <h2 className="font-bold text-3xl">Templates</h2>
    <p>Start Creating Ai Resume to your next job</p>

    <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-5">
     
    <Template1/>

    </div>


  </div>
  )
}

export default Templates