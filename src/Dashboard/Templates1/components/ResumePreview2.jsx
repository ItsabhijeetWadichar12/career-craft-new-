import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeinfoContext';
import { EyeIcon } from 'lucide-react';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

function ResumePreview2() {

    const {resumeInfo , setResumeInfo} =  useContext(ResumeInfoContext);

  return (
//     <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
//     {/* Container */}
//     <div className="grid grid-cols-4 gap-8">
//         {/* Left Sidebar */}
//         <div className="col-span-1 bg-gray-100 p-6 rounded-lg">
//             {/* Profile Image */}
//             <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
//                 <img 
//                     src="https://via.placeholder.com/150" 
//                     alt="Profile" 
//                     className="w-full h-full object-cover"
//                 />
//             </div>
            
//             {/* Contact Information */}
//             <div className="text-center">
//                 <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
//                 <p className="text-sm text-gray-600 mt-2">Software Engineer</p>
//             </div>

//             <div className="mt-6 text-sm text-gray-600">
//                 <p>Email: johndoe@example.com</p>
//                 <p>Phone: +123456789</p>
//                 <p>Location: New York, USA</p>
//                 <p>LinkedIn: linkedin.com/in/johndoe</p>
//                 <p>GitHub: github.com/johndoe</p>
//             </div>

//             {/* Skills Section in Sidebar */}
//             <div className="mt-8">
//                 <h3 className="text-lg font-bold text-gray-700">Skills</h3>
//                 <ul className="list-disc ml-5 mt-2 text-gray-600">
//                     <li>JavaScript, TypeScript</li>
//                     <li>React, Node.js</li>
//                     <li>GraphQL, RESTful APIs</li>
//                     <li>AWS, Docker, Kubernetes</li>
//                     <li>CI/CD, Git, GitHub</li>
//                 </ul>
//             </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-span-3">
//             {/* Professional Summary */}
//             <section className="mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2">Professional Summary</h2>
//                 <p className="text-gray-600 mt-4">
//                     A dedicated and innovative software engineer with 8+ years of experience in designing, 
//                     developing, and deploying web applications. Specializing in JavaScript frameworks and cloud 
//                     computing technologies, with a proven track record of building scalable applications.
//                 </p>
//             </section>

//             {/* Experience */}
//             <section className="mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2">Experience</h2>

//                 <div className="mt-4">
//                     <h3 className="text-lg font-bold text-gray-800">Senior Software Engineer | XYZ Technologies</h3>
//                     <p className="text-sm text-gray-500">Jan 2020 - Present</p>
//                     <ul className="list-disc ml-5 mt-2 text-gray-600">
//                         <li>Led the development of a real-time data analytics platform using React, Node.js, and AWS Lambda.</li>
//                         <li>Collaborated with cross-functional teams to enhance performance and scalability by 35%.</li>
//                         <li>Architected and deployed microservices using Docker and Kubernetes.</li>
//                     </ul>
//                 </div>

//                 <div className="mt-4">
//                     <h3 className="text-lg font-bold text-gray-800">Software Developer | ABC Solutions</h3>
//                     <p className="text-sm text-gray-500">Jun 2016 - Dec 2019</p>
//                     <ul className="list-disc ml-5 mt-2 text-gray-600">
//                         <li>Developed e-commerce websites using React and Node.js.</li>
//                         <li>Integrated third-party APIs to enhance user experience and automate processes.</li>
//                         <li>Optimized application performance, reducing load times by 25%.</li>
//                     </ul>
//                 </div>
//             </section>

//             {/* Education */}
//             <section className="mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2">Education</h2>

//                 <div className="mt-4">
//                     <h3 className="text-lg font-bold text-gray-800">Bachelor of Science in Computer Science</h3>
//                     <p className="text-sm text-gray-500">University of Technology | Graduated: May 2016</p>
//                 </div>
//             </section>

//             {/* Certifications */}
//             <section className="mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2">Certifications</h2>
//                 <ul className="list-disc ml-5 mt-4 text-gray-600">
//                     <li>AWS Certified Solutions Architect</li>
//                     <li>Certified Kubernetes Administrator</li>
//                     <li>Scrum Master Certified (SMC)</li>
//                 </ul>
//             </section>
//         </div>
//     </div>

//     {/* Footer */}
//     <footer className="text-center mt-8">
//         <p className="text-gray-500">© 2024 John Doe. All Rights Reserved.</p>
//     </footer>
// </div>


<div className="min-h-screen flex justify-center bg-gray-100 p-6">
<div className="w-full max-w-5xl bg-white shadow-lg grid grid-cols-3">
    
    {/* Sidebar */}
    <div className="col-span-1 bg-blue-900 text-white p-8">
        <div className="mb-8">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                <img
                    src={resumeInfo?.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-center text-2xl font-bold mt-4">{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
            <p className="text-center text-sm text-gray-300">{resumeInfo?.jobTitle}</p>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
            <h3 className="font-bold text-lg">Contact</h3>
            <ul className="text-sm mt-4 space-y-2">
                <li>Email: {resumeInfo?.email}</li>
                <li>Phone: {resumeInfo?.phone}</li>
                <li>{resumeInfo?.address}</li>
               
            </ul>
        </div>

        {/* Skills */}
        <div className="mb-8">
            <h3 className="font-bold text-lg">Skills</h3>
            <ul className="mt-4 space-y-4">

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

        {/* Education */}
        <div>


       

            <h3 className="font-bold text-lg">Education</h3>

            {resumeInfo?.education.map((education, index) => (
        <div key={index} className="mt-4">
          <p className="text-sm mt-4">{education?.universityName}</p>
          <p className="text-sm">{education?.degree} in {education?.major}</p>
            <p className="text-sm">{education?.startDate} - {education?.endDate}</p>
            <p className="text-sm">{education?.description}</p>
        </div>
      ))}
            
        </div>
    </div>

    {/* Main Content */}
    <div className="col-span-2 p-8">
        {/* Summary */}
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Summary</h2>
            <p className="text-gray-600 leading-relaxed">
            {resumeInfo?.summery}
            </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Experience</h2>
            <div className="mb-6">

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
</div>
</div>
  )
}

export default ResumePreview2