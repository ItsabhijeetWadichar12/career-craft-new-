import { Button } from '@/components/ui/button'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function AchivmentPreview({resumeInfo}) {
  return (
    <div className="my-6">
    <h2 className='text-center font-bold text-sm mb-2'
      style={{
          color:resumeInfo?.themeColor
      }}
      >Achivements</h2>

      <hr style={{
          borderColor:resumeInfo?.themeColor
      }}/>

      <div className='text-center font-bold text-sm mb-2 mt-5'>
        <Link to={resumeInfo?.document} className='flex justify-center' >
        <h2 className='text-sm mr-10'>Click on eye icon to see Documents</h2>
        <Button className="flex justify-end " 
        style={{
          background:resumeInfo?.themeColor
      }} >
        <EyeIcon />
       </Button>
        </Link>
      </div>
        
    </div>
  )
}

export default AchivmentPreview