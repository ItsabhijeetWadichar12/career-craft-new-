import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeinfoContext';
import { EyeIcon } from 'lucide-react';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

function ResumePreview3() {

    const {resumeInfo , setResumeInfo} =  useContext(ResumeInfoContext);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
    <div className="w-full max-w-4xl bg-white shadow-lg p-6 md:flex">
        {/* Left Column */}
        <div className="md:w-2/3 px-4">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-orange-600">{resumeInfo?.firstName}</h1>
                <h2 className="text-4xl font-bold text-blue-900"> {resumeInfo?.lastName}</h2>
            </div>

            {/* Experience Section */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-900 border-b-2 border-orange-500 pb-2">Experience</h3>
                <div className="mt-4">

                {
            resumeInfo?.experience.map((experience , index)=>(
                <div key={index} className="mt-4">
                <p className="text-lg font-semibold">{experience?.startDate} [To] {experience?.endDate} </p>
                    <p className="text-sm text-gray-700">{experience?.title}• {experience?.companyName}</p>
                    <p className="text-sm text-gray-500">{experience?.city} {experience?.state}</p>
                    <div className='text-[12px] ' dangerouslySetInnerHTML={{__html:experience?.workSummery}}/>
                
                </div>
            ))
        }
              
                    
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-900 border-b-2 border-orange-500 pb-2">Education</h3>
                <div className="mt-4">

                    
            {resumeInfo?.education.map((education, index) => (
        <div key={index} className="mt-4">
           <p className="text-lg font-semibold">{education?.universityName}, {education?.degree} in {education?.major}</p>
                    <p className="text-sm">{education?.startDate} - {education?.endDate}</p>
                    <p className="text-sm text-gray-700">{education?.description}</p>
        </div>
      ))}
                  
                </div>
            </section>

            {/* Communication Section */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-900 border-b-2 border-orange-500 pb-2">Summery</h3>
                <div className="mt-4">
                    <p className="text-gray-600">
            {resumeInfo?.summery}
                        
                    </p>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-900 border-b-2 border-orange-500 pb-2">Experince</h3>
                
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
              
            </section>

            <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2" style={{
            color:resumeInfo?.themeColor
        }}>Achivments</h2>

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
        

            </section>
        </div>

        {/* Right Column */}
        <div className="md:w-1/3 bg-orange-500 text-white p-6 rounded-lg mt-8 md:mt-0">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img
                    src={resumeInfo?.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contact Info */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Contact</h3>
                <ul className="mt-4 space-y-2 text-sm">
                    <li>📍 {resumeInfo?.address}</li>
                    <li>📞 {resumeInfo?.phone}</li>
                    <li>✉️ {resumeInfo?.email}</li>
                   
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-semibold">Skills</h3>
                <ul className="mt-4 space-y-2 text-sm">

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
        </div>
    </div>
</div>
  )
}

export default ResumePreview3