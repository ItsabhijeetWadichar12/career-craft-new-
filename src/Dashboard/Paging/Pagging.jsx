import { Button } from '@/components/ui/button';
import { Item } from '@radix-ui/react-dropdown-menu';
import React from 'react'
import { Link } from 'react-router-dom';

function Pagging({resume , }) {

    const resumeTemplates = [
        {
          id: 1,
          name: "Professional Resume",
          image: "/template1.png",
          price: "₹FREE",
          description: "A clean and modern resume template for professionals.",
          url: `'/dashboard/resume/'${resume?.documentId}"/edit"` // Consistent template literal
        },
        {
          id: 2,
          name: "Creative Resume",
          image: "/template2.png",
          price: "₹FREE",
          description: "A vibrant, colorful template for creative roles.",
          url: `/dashboard/Templates/resume/${resume?.documentId}/edit` // Fixed URL concatenation
        },
        {
          id: 3,
          name: "Simple Resume",
          image: "/template3.png",
          price: "₹100",
          description: "A minimalist resume template with simple design elements.",
          url: `/dashboard/Templates1//resume/${resume?.documentId}/edit` // Fixed URL concatenation
        },
        {
          id: 4,
          name: "Elegant Resume",
          image: "/template4.png",
          price: "₹FREE",
          description: "An elegant, formal resume template with a sleek layout.",
          url: `/dashboard/Templates2/resume/${resume?.documentId}/edit`
        },
        {
          id: 5, // Fixed duplicate ID
          name: "Modern Resume",
          image: "/template5.png",
          price: "₹FREE",
          description: "A modern resume template with a unique design.",
          url: `/dashboard/Templates3/resume/${resume?.documentId}/edit`
        }
      ];
  return (
   
        <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4'>

            {resumeTemplates.map((template) => (
                <div key={template.id} className="relative block rounded-tr-3xl border border-gray-100">
<span
    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
  >
    {template.price}
  </span>
  <img
    src={template.image}
    alt=""
    className="-ml-6 -mt-6 h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300 object-cover"
  />

  
<div className="p-4 text-center">
    <strong className="text-xl font-medium text-gray-900"> {template.name} </strong>

    <p className="mt-2 text-pretty text-gray-700">
      {template.description}
    </p>

    <Link to={template.url}>

   
    
      <Button className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">View Template</Button>
    
    </Link>

  </div>
                </div>
            ))}
        
        <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
  

  

</a>




    </div>
   
  )
}

export default Pagging