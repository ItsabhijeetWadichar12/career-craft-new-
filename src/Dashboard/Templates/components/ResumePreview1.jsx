
import { ResumeInfoContext } from '@/context/ResumeinfoContext';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';

function ResumePreview1() {
    const {resumeInfo , setResumeInfo} =  useContext(ResumeInfoContext);

    return (
        <>
        

<div className="max-w-4xl mx-auto p-8 bg-white shadow-lg" style={{
            color:resumeInfo?.themeColor
        }}>
            {/* Header */}
            <div className="flex items-center justify-center mb-6">
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6">
                    <img 
                        src={resumeInfo?.image}
                        alt="Profile" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900" style={{
            color:resumeInfo?.themeColor
        }} >{resumeInfo?.firstName} {resumeInfo?.lastName}</h1>
<p className="text-gray-600" style={{
            color:resumeInfo?.themeColor
        }}>{resumeInfo?.jobTitle}</p>

                    <p className="text-gray-600" style={{
            color:resumeInfo?.themeColor
        }}>Email: {resumeInfo?.email} | Phone: {resumeInfo?.phone}</p>
                    <p className="text-gray-600" style={{
            color:resumeInfo?.themeColor
        }}>Address: {resumeInfo?.address} </p>
                </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2" style={{
            color:resumeInfo?.themeColor
        }}>Professional Summary</h2>
                <p className="text-gray-600 mt-4" style={{
            color:resumeInfo?.themeColor
        }}>
                {resumeInfo?.summery}
                </p>
            </section>

            {/* Skills */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2" style={{
            color:resumeInfo?.themeColor
        }}>Skills</h2>
                <div className="grid grid-cols-2 gap-4 mt-4" style={{
            color:resumeInfo?.themeColor
        }}>
                    <ul className="list-disc ml-5 text-gray-600" style={{
            color:resumeInfo?.themeColor
        }}> 
                      {
            resumeInfo?.skills?.map((skills , index)=>(
                <div key={index} className='flex items-center justify-between'>
                    <h2 className='text-xs'>{skills?.name}</h2>

                    <div className='h-2 bg-gray-600 w-[120px]'>

                        <div className='h-2' 
                        style={{
                        backgroundColor:resumeInfo?.themeColor,
                        width:skills?.rating*20+'%'
                    }}>

                        </div>
                        
                    </div>
                    
                </div>
            ))
        }
                        
                    </ul>
                
                </div>
            </section>

            {/* Experience */}
            <section className="mb-6" >
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2" style={{
            color:resumeInfo?.themeColor
        }}>Professional Experience</h2>
        


{
            resumeInfo?.experience.map((experience , index)=>(
                <div key={index} className="mt-4">
                     
                    <h3 className="text-lg font-bold text-gray-800" style={{
            color:resumeInfo?.themeColor
        }}>
           {experience?.title} | {experience?.companyName}</h3>

           
           <p className="text-sm text-gray-500 flex justify-between" style={{
            color:resumeInfo?.themeColor
        }}>{experience?.city} {experience?.state}</p>

                    <p className="text-sm text-gray-500" style={{
            color:resumeInfo?.themeColor
        }}>{experience?.startDate} - {experience?.endDate}</p>
                  
                        
                        <div className='text-[12px] ' dangerouslySetInnerHTML={{__html:experience?.workSummery}}/>
                       
                  
                </div>
                  
                      
              
            ))
        }

              

            </section>

            {/* Education */}


            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2" style={{
            color:resumeInfo?.themeColor
        }}>Education</h2>

{resumeInfo?.education.map((education, index) => (
        <div key={index} className="mt-4">
          
            <h3 className="text-lg font-bold text-gray-800" style={{
            color:resumeInfo?.themeColor
        }}>{education?.universityName}</h3>
          <h2 className="text-xs flex justify-between"> {education?.degree} in {education?.major}
            <span>{education?.startDate} - {education?.endDate}</span>
          </h2>
          <p className="text-xs my-2 ">{education.description}</p>
        </div>
      ))}
                
            
                

               
            </section>

            {/* Certifications */}
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

      </>

    )
}

export default ResumePreview1