import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeinfoContext";
import { LoaderCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../service/GlobalApi";
import { toast } from "sonner";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../../service/firbase";

// eslint-disable-next-line react/prop-types
function PersonalDetail({ enableNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);

  const [selectFile, setSelectFile] = useState();



  useEffect(() => {
    console.log("----", resumeInfo);
    console.log(formData);
  }, []);

  const handleInputChange = async (e) => {
    enableNext(false);
    const { name, value } = e.target;
   
    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });

    console.log(formData);
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };
    GlobalApi.UpdateResumeData(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enableNext(true);
        setLoading(false);
        toast("Details updated");
      },
      () => {
        setLoading(false);
      }
    );
  };

  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    // Create a local URL for image preview
    setSelectFile(URL.createObjectURL(file));
  
    // Define the file name and storage reference
    const fileName = `${Date.now()}.jpg`;
    const storageRef = ref(storage, `ai-resume/${fileName}`);
  
    try {
      // Upload the file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);
      console.log("Uploaded a blob or file!");
  
      // Get the download URL from Firebase Storage
      const downloadUrl = await getDownloadURL(storageRef);
      console.log("Download URL:", downloadUrl);
  
      // Prepare data to send to Strapi
      const imageData = {
        data: {
          image: downloadUrl,
          // Add any additional metadata if needed
        }
      };
  
      // Upload the download URL to Strapi
      const response = await uploadToStrapi(imageData);
      console.log("Image data uploaded to Strapi:", response);
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };


  const uploadToStrapi = async (imageData) => {
    try {
        console.log(imageData)
      GlobalApi.UpdateResumeData(params?.resumeId , imageData).then(resp=>{
        console.log(resp);
      })

    } catch (error) {
      console.error('Error uploading to Strapi:', error);
      throw error;
    }
  };


  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={handleInputChange}
              defaultValue={resumeInfo?.lastName}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>

      <div>
        <label className="text-sm cursor-pointer " htmlFor="image-pic">
          {" "}
          <span>Upload Image</span>
          <img
            src={selectFile ? selectFile : "/person-icon.png"}
            width={100}
            height={100}
            defaultValue={resumeInfo?.image}
            className="rounded-sm object-cover"
          />
          <input
            type="file"
            name="image"
            id="image-pic"
            className="opacity-0"
            onChange={onFileSelected}
          />
        </label>
      </div>
    </div>
  );
}

export default PersonalDetail;
