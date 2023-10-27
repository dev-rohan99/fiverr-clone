import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import heart from "../../assets/img/heart.png";
import { useGetSingleUserQuery } from '../../redux/api/apiSlice.js';
import toaster from '../../utilities/toast';
import { Link } from 'react-router-dom';


const GigCard = ({width, imgHeight, gig}) => {

    const { isLoading, error, data } = useGetSingleUserQuery(gig?.userId, {
        onSuccess: (result) => {
            return result.data
        },
        onError: (error) => {
            toaster("warn", error.data.message);
        }
    });


  return (
    
    <Link to={`/gig/${gig?._id}`}>
        <div className={`w-[${width}] border-[3px] border-[#ddd] rounded-md overflow-hidden`}>
            <div className={`imageOrVideoWrap h-[${imgHeight}]`}>
                <img className="w-[100%] h-[100%]" src={gig?.gigCoverImg} alt="" />
            </div>

            <div className="content p-3">
                <div className="flex justify-start items-center mb-3">
                    {isLoading ? "Loading . . ." : error ? "Something went wrong!" : (
                        <>
                            <img className="w-[24px] h-[24px] rounded-full object-cover" src={data?.user?.avatar ? data?.user?.avatar : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"} alt="" />
                            <a className="text-[#292929] text-[18px] font-bold ml-3 mb-1" href="/">{data?.user?.username}</a>
                        </>
                    )}
                </div>

                <h3 className="text-[#292929] text-[18px] font-semibold leading-tight line-clamp-2 mb-3 h-[45px]">{gig?.title}</h3>

                <div className="flex justify-start items-center text-[#FFBE5B] border-b-[2px] border-[#eaeaea] pb-2">
                    <AiFillStar className="text-xl"/>
                    <span className="text-[17px] font-bold">5.0</span>
                    <span className="text-[gray] ml-2">(18)</span>
                </div>
                
                <div className="flex justify-between items-center pt-3">
                    <img className="w-[20px]" src={heart} alt="" />

                    <h3 className="text-[#4b4b4b] flex justify-end items-center">STARTING AT <span className="ml-2 font-semibold text-[23px]">${gig?.price}</span></h3>
                </div>

            </div>
        </div>
    </Link>
    
  )
}

export default GigCard;
