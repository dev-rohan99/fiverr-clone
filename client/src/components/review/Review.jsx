import React from 'react'
import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai'
import { useGetSingleUserQuery } from '../../redux/api/apiSlice.js';

const Review = ({review}) => {

    const { data, isLoading, error } = useGetSingleUserQuery(review.userId);

    const user = data?.user;

    return (
        <>
        
            <div className="flex justify-start items-start pb-10 border-b-[2px] border-[#dadada]">
                <img className="w-[60px] h-[60px] rounded-full object-cover" src={user.avatar ? user.avatar : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"} alt="" />
                <div className="">
                <div className="ml-3">
                    <a className="text-[#3e3e3e] text-[19px] font-bold" href="/">{user.username}</a>
                </div>
                <h4 className="text-[#808080] text-[18px] font-medium ml-3 flex justify-start items-center"><img src="https://cdn.iconscout.com/icon/free/png-256/flag-1767775-1502355.png" className="mr-2" alt="" /> {user.country ? user.country : "Not found yet!"}</h4>
                <div className="flex justify-start items-center text-[#FFBE5B] ml-3">
                    {Array(review.reviewNumb).fill().map((item, i) => (
                        <AiFillStar className="text-lg"/>
                    ))}
                    <span className="text-[16px] ml-2 text-[#FFBE5B] font-bold">5.0</span>
                    <span className="text-[gray] ml-2"> ~&nbsp; 2 days ago</span>
                </div>
                <h4 className="text-[#808080] text-[18px] mt-2 mb-2 font-medium ml-3">{review.description}</h4>
                <div className="flex justify-start items-center ml-3">
                    <a href="/" className="text-[#575757] text-[18px] font-bold">Helpful?</a>
                    <a href="/" className="text-[#575757] text-[18px] font-bold ml-3 flex justify-start items-center"><AiFillLike className="text-lg mr-1 text-[#a5a5a5]"/> like</a>
                    <a href="/" className="text-[#575757] text-[18px] font-bold ml-3 flex justify-start items-center"><AiFillDislike className="text-lg mr-1 text-[#a5a5a5]"/> dislike</a>
                </div>
                </div>
            </div>
        
        </>
    )
}

export default Review