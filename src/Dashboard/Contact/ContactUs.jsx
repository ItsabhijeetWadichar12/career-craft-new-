import { Input } from '@/components/ui/input';
// import { ResumeInfoContext } from '@/context/ResumeinfoContext';
import React, { useContext, useEffect, useState } from 'react';
import GlobalApi from '../../../service/GlobalApi';
import { useParams } from 'react-router-dom';


function ContactUs({resume , resumeInfo}) {

  const params = useParams();

  const [contactData, setContactData] = useState({
    UName: '',
    UEmail: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  useEffect(()=>{
    
    console.log(contactData);

  })

  // Handles input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactData({
      ...contactData,
      [name]: value,
    });

    // Update global resume info
    
  };

  // Handles form submission
  const onSave = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const data = {
        data: contactData
      };

      // Call the API to update the resume/contact data
      const response = await GlobalApi.UpdateResumeData(resume?.documentId, data);
      console.log('Response:', response);

      // Show success message
      setResponseMessage('Your enquiry has been submitted successfully!');

      // Clear the form
      
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('There was an error submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                We are wholly owned and independent, giving you confidence that we will only recommend what is right for you.
              </p>
              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">0151 475 4450</a>
                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form className="space-y-4" onSubmit={onSave}>
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <Input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    name="UName"
                    placeholder="Name"
                    value={contactData.UName}
                    // defaultValue={resumeInfo?.UName}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <Input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      name="UEmail"
                      value={contactData.UEmail}
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <Input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      name="phone"
                      value={contactData.phone}
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    name="message"
                    value={contactData.message}
                    required
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </div>
              </form>
              {responseMessage && <p className="mt-4 text-sm text-green-600">{responseMessage}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
