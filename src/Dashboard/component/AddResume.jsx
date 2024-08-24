import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { PlusSquare } from "lucide-react";
import { useState } from "react";



function AddResume() {

    const [openDialog , setOpenDialog] = useState(false);
  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center bg-inherit rounded-lg mt-10 h-[280px] hover:scale-105
        translate-all hover:shadow-lg cursor-pointer border-dashed"

        onClick={()=>setOpenDialog(true)}
      >
        <PlusSquare />

        <Dialog open={openDialog}>
         
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Resume </DialogTitle>
              <DialogDescription>
                <p>Add a title for your resume </p>
                <Input className="my-2 " placeholder="Ex. Full Stack Resume.."/>
              </DialogDescription>
              <div className="flex justify-end gap-5">

                <Button onClick={()=>setOpenDialog(false)} 
                variant='ghost' >Cancel</Button>
                <Button >Create</Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default AddResume;
