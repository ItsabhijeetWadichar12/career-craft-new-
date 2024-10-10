import Footer from "@/components/Custom/Footer";
import Header from "@/components/Custom/Header"
import { Button } from "@/components/ui/button";
import Contact from "@/Dashboard/Contact";
import Paging from "@/Dashboard/Paging";
import Reviews from "@/Dashboard/Reviews";

import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Link} from "react-router-dom";



function Home() {
  
 

  const { user, isSignedIn } = useUser();


  return (
    <div className="h-full">
      <Header/>


           
 
<section className="bg-gray-900 text-white ">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl  animate-bounce   font-extrabold text-transparent sm:text-5xl"
      >
          Crafting the Future with Precision

        
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-md animate-out">
      Career Craft helps you create a professional resume with precision, highlighting your skills and experience to unlock future opportunities.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

      {isSignedIn ? (
        
          <Link to={'/'}>
            <Button  className=" w-full rounded border border-blue-600 bg-blue-600 px-12 py-4 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >Home</Button>
            </Link>
        
      ) : (
        <Link to="/auth/sign-in">
            <Button  className=" w-full rounded border border-blue-600 bg-blue-600 px-12 py-4 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >Get Started..</Button>
        </Link>
      )}

<Button  className=" w-full rounded border border-blue-600 bg-blue-600 px-12 py-4 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >Learn More</Button>
      
    

      </div>
    </div>
  </div>
  
</section> 



            {/* Features Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto text-center">
                       <Paging/>
                </div>
            </section>


            <section className="py-12 bg-gray-50">
                <div className="container mx-auto text-center">
                    
                       <Reviews/>
                </div>
            </section>

            <section>
              <div className="container mx-auto text-center">
                <div className="flex items-center justify-center">
                  <h2 className="font-bold text-[48px] underline">Contact Us </h2>
                </div>
                <Contact/>
              </div>
            </section>

            
            <section>
              <div className="container mx-auto text-center">
                <Footer/>
              </div>
            </section>

        </div>
  )
}

export default Home