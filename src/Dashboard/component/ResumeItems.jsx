
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,


  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,

  AlertDialogAction,

  AlertDialogCancel,

  AlertDialogContent,
  AlertDialogDescription,


  AlertDialogFooter,


  AlertDialogHeader,


  AlertDialogTitle,

} from "@/components/ui/alert-dialog"
import { Loader2Icon, MoreVertical} from 'lucide-react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import GlobalApi from "./../../../service/GlobalApi";
import { toast } from "sonner";


// eslint-disable-next-line react/prop-types


function ResumeItems({resume , refreshData}) {

  const navigation=useNavigate();
  const [openAlert,setOpenAlert]=useState(false);
  const [loading,setLoading]=useState(false);

  const onDelete=()=>{
    setLoading(true);
    GlobalApi.DeleteResumeById(resume?.documentId).then(resp=>{
      console.log(resp);
      toast('Resume Deleted!');
      refreshData()
      setLoading(false);
      setOpenAlert(false);
    },(error)=>{
      setLoading(false);
    })
  }
  return (
    

      <div className="text-center ">

      <Link to={'/dashboard/resume/' + resume?.documentId+"/edit"}>
      <div className='mt-10 ml-5 border rounded-lg h-[280px] w-[200px] hover:scale-105
        translate-all hover:shadow-lg cursor-pointer flex items-center pl-14
        bg-gradient-to-r from-fuchsia-600 to-pink-600'
            style={{
              borderColor:resume?.themeColor
            }} 
            >
         
      
                {/* <Notebook/> */}
                <img src="/public/resumeicon.png" width={100} height={150}/>
              
        </div>
      </Link>

      
      <div className=' p-3 flex justify-between mt-0 ml-5 text-red-50 border rounded-lg md:w-[200px] sm:w-[100px]'
         style={{
          background:resume?.themeColor
        }}
        >
          <h2 className='text-sm'>{resume?.title}</h2>

          <DropdownMenu>
          <DropdownMenuTrigger>
          <MoreVertical className='h-4 w-4 cursor-pointer'/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
           
            <DropdownMenuItem  onClick={()=>navigation('/dashboard/resume/'+resume?.documentId+"/edit")}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>navigation('/my-resumes/'+resume?.documentId+"/view")}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>navigation('/my-resumes/'+resume?.documentId+"/view")}>Download</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setOpenAlert(true)}>Delete</DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
        
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete} 
            disabled={loading}>
              {loading? <Loader2Icon className='animate-spin'/>:'Delete'}
              </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>


      </div>
    </div>
  )
}

export default ResumeItems