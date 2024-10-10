import React from 'react'

function AboutUs() {
  return (
    <div className='bg-slate-500 '>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
    <div className="max-w-3xl ">
      <h2 className="text-3xl font-bold sm:text-4xl text-white">
      Crafting the Future with Precision
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
      <div className="relative h-80 overflow-hidden sm:h-90 lg:h-full">
        <img
          alt=""
          src="/public/template5.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-[140px]">
        <article className="  text-white">
          <p>
           Career Craft, help you build a standout resume with accuracy and attention to detail. Our platform guides you step-by-step, ensuring that every aspect of your professional profile is tailored to showcase your unique skills and experience, empowering you to craft a future filled with opportunity.
          </p>

        

        </article>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutUs