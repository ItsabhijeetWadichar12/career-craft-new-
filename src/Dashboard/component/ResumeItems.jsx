
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
    <div >

      <div className="text-center">
  
      
      <h3 className="text-emerald-400 ml-10 ">Template1</h3>
      <Link to={'/dashboard/resume/' + resume?.documentId+"/edit"}>
          <div className='p-14 bg-secondary flex items-center justify-center mt-10 m-2 h-[280px] 
            cursor-pointer mb-0 hover:scale-105
        translate-all hover:shadow-lg
           bg-gradient-to-b
            from-pink-100 via-purple-400 to-blue-500
          h-[280px] 
            rounded border border-dashed border-b-0 border-2 mt-0'
            style={{
              borderColor:resume?.themeColor
            }}
            
            >
         
          <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/template1.png" width={80} height={80} />
              </div>
        </div>
      </Link>

      <h3 className="text-emerald-400">Template2</h3>

      <Link to={'/dashboard/Templates/resume/' + resume?.documentId+"/edit"}>
          <div className='p-14 bg-secondary flex items-center justify-center mt-10 m-2 h-[280px] 
            cursor-pointer mb-0 hover:scale-105
        translate-all hover:shadow-lg
           bg-gradient-to-b
            from-pink-100 via-purple-400 to-blue-500
          h-[280px] 
            rounded border border-dashed border-b-0 border-2'
            style={{
              borderColor:resume?.themeColor
            }} 
            >
         
          <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/template2.png" width={80} height={80} />
              </div>
        </div>
      </Link>
      <h3 className="text-emerald-400">Template3</h3>

      <Link to={'/dashboard/Templates1/resume/' + resume?.documentId+"/edit"}>
          <div className='p-14 bg-secondary flex items-center justify-center mt-10 m-2 h-[280px] 
            cursor-pointer mb-0 hover:scale-105
        translate-all hover:shadow-lg
           bg-gradient-to-b
            from-pink-100 via-purple-400 to-blue-500
          h-[280px] 
            rounded border border-dashed border-b-0 border-2'
            style={{
              borderColor:resume?.themeColor
            }} 
            >
         
          <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/template3.png" width={80} height={80} />
              </div>
        </div>
      </Link>
      <h3 className="text-emerald-400">Template4</h3>


      <Link to={'/dashboard/Templates2/resume/' + resume?.documentId+"/edit"}>
          <div className='p-14 bg-secondary flex items-center justify-center mt-10 m-2 h-[280px] 
            cursor-pointer mb-0 hover:scale-105
        translate-all hover:shadow-lg
           bg-gradient-to-b
            from-pink-100 via-purple-400 to-blue-500
          h-[280px] 
            rounded border border-dashed border-b-0 border-2'
            style={{
              borderColor:resume?.themeColor
            }} 
            >
         
          <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/template2.png" width={80} height={80} />
              </div>
        </div>
      </Link>

      <h3 className="text-emerald-400">Template5</h3>

      <Link to={'/dashboard/Templates3/resume/' + resume?.documentId+"/edit"}>
          <div className='p-14 bg-secondary flex items-center justify-center mt-10 m-2 h-[280px] 
            cursor-pointer mb-0 hover:scale-105
        translate-all hover:shadow-lg
           bg-gradient-to-b
            from-pink-100 via-purple-400 to-blue-500
          h-[280px] 
            rounded border border-dashed border-b-0 border-2'
            style={{
              borderColor:resume?.themeColor
            }} 
            >
         
          <div className='flex 
        items-center justify-center h-[180px] '>
                {/* <Notebook/> */}
                <img src="/template2.png" width={150} height={150} />
              </div>
        </div>
      </Link>

      </div>

    

      


      
      <div className=' p-3 flex justify-between mt-0 text-red-50 border rounded-xl '
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
            <DropdownMenuItem onClick={()=>navigation('/my-resume/'+resume?.documentId+"/view")}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>navigation('/my-resume/'+resume?.documentId+"/view")}>Download</DropdownMenuItem>
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