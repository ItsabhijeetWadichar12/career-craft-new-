import Header from "@/components/Custom/Header"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";



function Home() {

  const { user, isSignedIn } = useUser();

  return (
    <div className="min-h-screen">
            {/* Navbar */}
            <Header/>

            {/* Hero Section */}
            <header className="bg-slate-400 shadow-md py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-600">Build Your Professional Resume in Minutes!</h2>
                    <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                        Our easy-to-use online resume builder helps you create a professional and impressive resume
                        in just a few clicks. Choose from a variety of templates, customize the content, and get ready to land your dream job!
                    </p>

                    {isSignedIn ? (
        <div className="flex gap-2 items-center ml-[40%] ">
          <Link to={'/dashboard'}>
            <Button>DashBoard</Button>

            </Link>
            <Link to={'https://nexmeet-lake.vercel.app/'}>
            <Button className="ml-5" variant="outline">Check Out >> Next Meet</Button>

            </Link>
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
                </div>
            </header>

            {/* Features Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold text-blue-600 mb-8">Why Choose Our Resume Builder?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h4 className="text-2xl font-semibold text-gray-800">Professional Templates</h4>
                            <p className="mt-4 text-gray-600">
                                Choose from a wide selection of templates that suit your style and professional needs.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h4 className="text-2xl font-semibold text-gray-800">Easy Customization</h4>
                            <p className="mt-4 text-gray-600">
                                Customize fonts, colors, and layout effortlessly to match your personal brand.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h4 className="text-2xl font-semibold text-gray-800">Download & Share</h4>
                            <p className="mt-4 text-gray-600">
                                Download your resume in PDF format or share it directly online.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 bg-white">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold text-gray-800">Ready to Build Your Resume?</h3>
                    <p className="text-gray-600 mt-4">Get started with our user-friendly resume builder and impress your potential employers.</p>
                    {isSignedIn ? (
        <div className="flex gap-2 items-center ml-[50%]">
          <Link to={'/'}>
            <Button >Home</Button>
            </Link>
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started Now</Button>
        </Link>
      )}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 py-6 text-white text-center">
                <p>© 2024 Carrer Craft . All rights reserved.</p>
            </footer>
        </div>
  )
}

export default Home