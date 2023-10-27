import React from 'react';
import NotFountImg from "../../assets/img/404Img.webp";
import {Link} from "react-router-dom";
import { FaSadTear } from 'react-icons/fa';


const NotFoundPage = () => {


  return (
    <>
        <div className="mainBlock">

            <div>
                
                <div className="w-[100%] py-[70px] mt-[125px] flex justify-center items-center">
                    <div className="w-[900px] rounded-lg bg-[#94a3b876] p-5 flex justify-start items-center">

                        <div className="w-[450px] bg-[#94a3b876] rounded-md">
                            <img className='w-[100%] h-[100%]' src={NotFountImg} alt="dev-rohan"/>
                        </div>

                        <div className="ml-7">
                            <h3 className="text-[90px] font-bold text-[#16C074] flex justify-start items-center">404 <FaSadTear className="text-[70px] ml-4 text-[#F1AF95]"/></h3>
                            <p className="text-[25px] text-white font-medium mt-[-20px] mb-3">Oops! It seems you broke the internet</p>
                            <Link to={"/"}>
                                <span className="text-[18px] font-semibold text-white after:content-[''] after:w-[100px] after:h-[4px]  after:rounded-md duration-500 relative after:absolute after:bg-white after:top-[25px] after:left-[150px] hover:after:w-[70px] py-3 after:duration-500 hover:after:bg-[#16C074]">Take me home</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NotFoundPage;