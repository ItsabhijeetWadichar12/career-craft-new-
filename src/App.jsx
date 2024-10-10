
import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import Header from './components/Custom/Header';
import { Toaster } from 'sonner';
import Home from './Home';
import Footer from './components/Custom/Footer';


function App() {
  const {user , isLoaded , isSignedIn} = useUser();

  if(!isSignedIn && isLoaded) 
  {
    // console.log(isSignedIn);
    return <Navigate to={'/auth/sign-in'}/>
  }


  return (
    <>
    <Header/>
    
    <Outlet/>
    <Toaster/>
    </>
  )
}

export default App
