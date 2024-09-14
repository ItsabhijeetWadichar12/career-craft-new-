import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeinfoContext';
import { EyeIcon } from 'lucide-react';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

function ResumePreview4() {

    const {resumeInfo , setResumeInfo} =  useContext(ResumeInfoContext);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
    <div className="w-full max-w-4xl bg-white shadow-lg p-8 md:flex">
        {/* Left Column */}
        <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img
                    src={resumeInfo?.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contact Info */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-900">Contact</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>📞 {resumeInfo?.phone}</li>
                    <li>✉️ {resumeInfo?.email}</li>
                    <li>📍 {resumeInfo?.address}</li>
                  
                </ul>
            </div>

            {/* Skills */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-900">Skills</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">

                {
            resumeInfo?.skills?.map((skills , index)=>(
                <div key={index} >
                     <li>
                    <span className="font-semibold">{skills?.name}</span>
                    
               

                   <div className="w-full bg-gray-700 h-1 rounded">
                        <div className="bg-white h-1 rounded" style={{
                        backgroundColor:resumeInfo?.themeColor,
                        width:skills?.rating*20+'%'
                    }}></div>
                    </div>
                    </li>
                    
                </div>
                
            ))
        }
                  
                   
                </ul>
            </div>


            <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-900">Achivments</h3>
                
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


           
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 p-6">
            {/* Name and Title */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-blue-900">{resumeInfo?.firstName} {resumeInfo?.lastName}</h1>
                <h2 className="text-xl text-gray-600">{resumeInfo?.jobTitle}</h2>
            </div>

            {/* Summary */}
            <p className="text-gray-700 mb-8">
            {resumeInfo?.summery}
            </p>

            {/* Professional Experience */}
            <section className="mb-8">
                <h3 className="text-lg font-semibold text-blue-900 border-b-2 border-blue-300 pb-2">
                    Professional Experience
                </h3>
                <div className="mt-4">

                {
            resumeInfo?.experience.map((experience , index)=>(
                <div key={index} className="mt-4">
                     
                <h3 className="text-xl font-semibold text-gray-800"> {experience?.title} </h3>
                <p className="text-sm text-gray-500">{experience?.city} {experience?.state}</p>
                <p className="text-sm text-gray-500">{experience?.companyName} | {experience?.startDate} - {experience?.endDate}</p>
                <div className='text-[12px] ' dangerouslySetInnerHTML={{__html:experience?.workSummery}}/>
                </div>
            ))
        }
            
                </div>

               
            </section>

            {/* Education */}
            <section>
                <h3 className="text-lg font-semibold text-blue-900 border-b-2 border-blue-300 pb-2">
                    Education
                </h3>
                {resumeInfo?.education.map((education, index) => (
        <div key={index} className="mt-4">
          <p className="text-sm mt-4">{education?.universityName}</p>
          <p className="text-sm">{education?.degree} in {education?.major}</p>
            <p className="text-sm">{education?.startDate} - {education?.endDate}</p>
            <p className="text-sm">{education?.description}</p>
        </div>
      ))}
                    
               

                
            </section>
        </div>
    </div>
</div>
  )
}

export default ResumePreview4