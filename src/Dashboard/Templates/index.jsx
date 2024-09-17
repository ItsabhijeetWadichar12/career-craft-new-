import React from 'react'
import ResumePreview from '../resume/components/ResumePreview'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Templates() {
  const resumeTemplates = [
    {
        id: 1,
        name: "Professional Resume",
        image: "/template1.png",
        price: "$FREE",
        description: "A clean and modern resume template for professionals."
    },
    {
        id: 2,
        name: "Creative Resume",
        image: "/template2.png",
        price: "$FREE",
        description: "A vibrant, colorful template for creative roles."
    },
    {
        id: 3,
        name: "Simple Resume",
        image: "/template3.png",
        price: "$FREE",
        description: "A minimalist resume template with simple design elements."
    },
    {
        id: 4,
        name: "Elegant Resume",
        image: "/template4.png",
        price: "$FREE",
        description: "An elegant, formal resume template with a sleek layout."
    },
    {
      id: 4,
      name: "Elegant Resume",
      image: "/template5.png",
      price: "$FREE",
      description: "An elegant, formal resume template with a sleek layout."
  }
];

return (
    <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
       

        {/* Store Section */}
        <div className="container mx-auto py-12 px-4 md:px-0">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Choose Your Resume Template</h2>

            {/* Template Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {resumeTemplates.map(template => (
                    <div key={template.id} className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
                        <img 
                            src={template?.image} 
                            alt={template?.name} 
                            className="h-48 w-full object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{template.name}</h3>
                        <p className="text-gray-600 mb-4">{template.description}</p>
                        <div className="text-lg font-semibold text-blue-600">{template.price}</div>
                        <Link to='/dashboard' >
                        <Button variant='secondary' className=' flex text' >View Templates</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-600 py-6 text-white text-center">
            <p>© 2024 Carrer Craft. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Templates