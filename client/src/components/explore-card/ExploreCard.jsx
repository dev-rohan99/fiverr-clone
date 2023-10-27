import React from 'react';


const ExploreCard = ({image, title}) => {

  return (
    <>
    
        <div className="w-[250px] flex flex-col justify-center relative wrap pt-7">
            <img src={image} alt="" className="w-[60px] h-[70px] mx-auto pb-2 mb-2" />
            <h3 className="text-[20px] text-[gray] text-center effUnderImg">{title}</h3>
        </div>
    
    </>
  )
}

export default ExploreCard;
