

function PersonalDetailsPreview({resumeInfo}) {
  return (
    <div>
       
            <img width={100} height={100}
            
            style={{}}
            className='ml-auto mr-auto block border rounded-[50%] w-[20%]'
            src={resumeInfo?.image} alt="no img" />
        
        <h2 className='font-bold text-xl text-center mt-2'
        style={{
            color:resumeInfo?.themeColor
        }}
        >{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>

        <h2 className='text-center text-sm font-medium'
         style={{
            color:resumeInfo?.themeColor
        }}
        >{resumeInfo?.jobTitle}</h2>

        <h2 className='text-center font-normal text-xs'
         style={{
            color:resumeInfo?.themeColor
        }}
        >{resumeInfo?.address}</h2>

        <div className='flex justify-between'>
        <h2 className='font-normal text-xs'
         style={{
            color:resumeInfo?.themeColor
        }}
        >{resumeInfo?.phone}</h2>

        <h2 className='font-normal text-xs'
         style={{
            color:resumeInfo?.themeColor
        }}>{resumeInfo?.email}</h2>
        </div>

        <hr className='border-[1.8px] my-2'
         style={{
            borderColor:resumeInfo?.themeColor
        }}
        />

       


    </div>
  )
}

export default PersonalDetailsPreview