import { useParams } from "react-router-dom";
import { storage } from "../../../../../service/firbase";

import GlobalApi from "./../../../../../service/GlobalApi";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeinfoContext";
import { toast } from "sonner";



function Achivement() {

  const [selectFile, setSelectFile] = useState();
  const params = useParams();
  const [loading,setLoading]=useState(false);

  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);


  useEffect(()=>{
    selectFile&&setResumeInfo({
        ...resumeInfo,
        document:document
    })
},[document])


    const onFileSelected = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
      
        // Create a local URL for image preview
        setSelectFile(URL.createObjectURL(file));
      
        // Define the file name and storage reference
        const fileName = `${Date.now()}.jdf`;
        const storageRef = ref(storage, `achivments/${fileName}`);
      
        try {
          // Upload the file to Firebase Storage
          const snapshot = await uploadBytes(storageRef, file);
          console.log("Uploaded a blob or file!");
      
          // Get the download URL from Firebase Storage
          const downloadUrl = await getDownloadURL(storageRef);
          console.log("Download URL:", downloadUrl);
      
          // Prepare data to send to Strapi
          const documentData = {
            data: {
              document: downloadUrl,
              // Add any additional metadata if needed
            }
          };

          setResumeInfo({
            ...resumeInfo,
            [document]: downloadUrl,
          });

          console.log(resumeInfo)
      
          // Upload the download URL to Strapi
          const response = await uploadToStrapi(documentData);
          console.log("Image data uploaded to Strapi:", response);
        } catch (error) {
          console.error("Error during file upload:", error);
        }
      };
    
    
      const uploadToStrapi = async (documentData) => {
        try {
            console.log(documentData)
          GlobalApi.UpdateResumeData(params?.resumeId , documentData).then(resp=>{
            console.log(resp);
          })
    
        } catch (error) {
          console.error('Error uploading to Strapi:', error);
          throw error;
        }
      };


      const onSave=()=>{
        setLoading(true);
        toast("Updated ..");
        setTimeout(setLoading(false) , 50000)
               
      }



 



  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Achivments </h2>
    <p className="mb-5">Add Your educational details</p>



    <div>
        <label className="text-sm cursor-pointer  " htmlFor="image-pic">
          {" "}
          <span className="mt-4 text-lg">Upload Documents</span>
          <input
            type="file"
            name="document"
            id="image-pic"
            onChange={onFileSelected}
            
          />
        </label>
      </div>

      <div className='flex justify-end mt-3'>
              
              <Button disabled={loading} onClick={()=>onSave()}>
              {loading?<LoaderCircle className='animate-spin' />:'Save'}    
              </Button>
        </div>
      
    </div>
  )
}

export default Achivement