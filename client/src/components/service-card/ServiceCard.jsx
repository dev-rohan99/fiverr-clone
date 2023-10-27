import React from 'react';


const ServiceCard = ({title, subTitle, image}) => {

  return (
    
    <div className="w-[245px] h-[355px] rounded-md overflow-hidden relative">
        <img className="absolute left-0 right-0 bottom-0 top-0 w-[245px] h-[355px]" src={image} alt="" />
        <div className="absolute left-[19px] top-[19px]">
            <h4 className="text-[#fff] font-semibold text-[17px]">{subTitle}</h4>
            <h4 className="text-[#fff] font-semibold text-[29px]">{title}</h4>
        </div>
    </div>

  )
}

export default ServiceCard;
