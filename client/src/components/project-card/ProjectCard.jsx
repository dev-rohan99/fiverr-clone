import React from 'react';


const ProjectCard = () => {


  return (
    <>
    
        <div className="w-[295px] border-[3px] border-[#ddd] rounded-md overflow-hidden">
            <div className="imageOrVideoWrap h-[237px]">
                <img className="w-[100%] h-[100%]" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png" alt="" />
            </div>

            <div className="content p-3">
                <div className="flex justify-start items-center">
                    <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/984324cc32074c9b49abe052d70d9a22-1680159108075/c8c15f77-3eb0-495b-9917-2dae8748152f.png" alt="" />
                    <div className="">
                        <h3 className="text-[#292929] text-[18px] font-semibold ml-3 mb-[-3px]" href="/">Logo Design</h3>
                        <a className="text-[#a1a1a1] text-[18px] font-semibold ml-3" href="/">rohan-mostofa</a>
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}

export default ProjectCard;
