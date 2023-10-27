import React from 'react'
import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai';
import { FaCheck, FaHeart } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import { MdAccessTime, MdShare } from 'react-icons/md';
import { useGetSingleGigQuery, useGetSingleUserQuery } from '../../redux/api/apiSlice.js';
import toaster from '../../utilities/toast';
import { Link, useParams } from 'react-router-dom';
import { Slider } from "infinite-react-carousel/lib";
import Reviews from '../../components/reviews/Reviews.jsx';


const Gig = () => {

    const { id } = useParams();

    const { isLoading, error, data } = useGetSingleGigQuery(id, {
        onSuccess: (result) => {
            return result.data
        },
        onError: (error) => {
            toaster("warn", error.data.message);
        }
    });

    const { isLoading : loadingUser, error : errorUser, data : userData } = useGetSingleUserQuery(data?.gig?.userId, {
        onSuccess: (result) => {
            return result.data
        },
        onError: (error) => {
            toaster("warn", error.data.message);
        }
    });

    // if (data && data.gig) {
    //     const gig = data.gig;
    //     console.log(gig.userId);
    // } else {
    //     console.log(data?.gig?.userId);
    // }

  return (
    <>
    
        <div className={`border-y-[2px] border-[#ddd] duration-300 bg-white mt-[124px]`}>
          <div className="navContainer flex justify-between items-center">
              <ul className="flex justify-between items-center text-[#909090] w-[800px]">
                  <li><a className="text-[18px] font-semibold py-3 block" href="/">Overview</a></li>
                  <li><a className="text-[18px] font-semibold py-3 block" href="/">Description</a></li>
                  <li><a className="text-[18px] font-semibold py-3 block" href="/">About the Seller</a></li>
                  <li><a className="text-[18px] font-semibold py-3 block" href="/">Compare packages</a></li>
                  <li><a className="text-[18px] font-semibold py-3 block" href="/">Recommendations</a></li>
                  <li><a className="text-[18px] font-semibold py-3 block" href="/">Reviews</a></li>
              </ul>

              <ul className="w-[300px] flex justify-end items-center">
                <FaHeart className="text-xl text-[gray]"/>
                <div className="w-[70px] h-[30px] rounded-md flex justify-center items-center border-[2px] border-[#ddd] ml-3">294</div>
                <div className="w-[40px] h-[30px] rounded-md flex justify-center items-center border-[2px] border-[#ddd] ml-3"><MdShare className="text-lg text-[#57CF97]"/></div>
              </ul>
          </div>
        </div>

        <div>
            {
                isLoading ? "Loading . . ." : error ? "Something went wrong!" : (
                <div className="container flex justify-between">

                    <div className="w-[850px]">

                        <h4 className="text-[12px] text-[#52aeff] mb-5 font-bold uppercase mt-5">Fiverr {">"} Ai Artist</h4>
                        <h4 className="text-[35px] text-[#3e3e3e] mb-4 font-bold">{data.gig.title}</h4>
                        
                        <div className="flex justify-start items-center mb-5">
                            <img className="w-[35px] h-[35px] rounded-full object-cover" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/984324cc32074c9b49abe052d70d9a22-1680159108075/c8c15f77-3eb0-495b-9917-2dae8748152f.png" alt="" />
                            <a className="text-[#292929] text-[23px] font-bold ml-3" href="/">Rohan</a>
                            <div className="flex justify-start mt-1">
                            <a className="text-[#a8a8a8] text-[18px] font-normal ml-3" href="/">@devrohan</a>
                            <a className="text-[#a8a8a8] text-[18px] font-normal ml-3 flex items-center" href="/">Label 2 Seller <span className="w-[10px] ml-2 mr-2 text-[#dcdcdc]">|</span></a>
                            <div className="flex justify-start items-center text-[#FFBE5B]">
                                <AiFillStar className="text-lg"/>
                                <AiFillStar className="text-lg"/>
                                <AiFillStar className="text-lg"/>
                                <AiFillStar className="text-lg"/>
                                <AiFillStar className="text-lg"/>
                                <span className="text-[16px] ml-2 font-bold">5.0</span>
                                <span className="text-[gray] ml-2">{"("}{Math.round(data.gig.totalReviews)}{")"}</span>
                            </div>
                            </div>
                        </div>

                        <div id="gigImageWrap" className="w-[800px] h-[450px] overflow-hidden gigImgWrap duration-500 mb-5">
                            <Slider slidesToShow={1} arrowsScroll={1} className="slider">

                                <img className="w-[100%] h-[100%] duration-300 object-cover" src={data.gig.gigCoverImg} alt="" />

                                {
                                    data.gig.gigImgs.map((img) => <img className="w-[100%] h-[100%] duration-300 object-cover" src={img} alt="" />)
                                }
                                
                            </Slider>
                        </div>

                        <h4 className="text-[30px] text-[#4b4b4b] mb-5 font-bold">About this gig</h4>
                        {/* <h4 className="text-[20px] text-[#6b6b6b] mb-5 font-bold w-[800px]">Note: Please discuss your project requirement in the message before placing an order for reasonable pricing.</h4> */}
                        <h4 className="text-[20px] text-[#6b6b6b] mb-5 font-medium w-[800px]">{data.gig.description}</h4>

                        <h4 className="text-[25px] text-[#4b4b4b] mb-5 font-bold">About the seller</h4>

                        <div className="flex justify-start items-center mb-5">
                            <img className="w-[120px] h-[120px] rounded-full object-cover" src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/27b0c8e25164df33452efcaa3f82ecb0-1598276419144/16a9d946-d767-4c2c-bd92-e74b6a49dfcc.jpg" alt="" />
                            <div className="">
                            <div className="ml-3">
                                {/* <a className="text-[#292929] text-[19px] font-bold" href="/">{userData.user.fullName}</a> */}
                                <a className="text-[#a8a8a8] text-[19px] font-normal" href="/">@devrohan</a>
                            </div>
                            <h4 className="text-[19px] text-[#6b6b6b] font-medium w-[800px] ml-3">Hello World</h4>
                            { !isNaN(Math.round(data.gig.totalReviews / data.gig.reviewStar)) && (<div className="flex justify-start items-center text-[#FFBE5B] ml-3">
                                {
                                    Array(data.gig.reviewStar).fill().map((item, index) => 
                                    
                                        <AiFillStar className="text-lg"/>

                                    )
                                }
                                <span className="text-[16px] ml-2 font-bold">5.0</span>
                                <span className="text-[gray] ml-2">{"("}{Math.round(data.gig.totalReviews)}{")"}</span>
                            </div>) }

                            <button className="bg-transparent border-[2px] border-[#393939] duration-500 text-[#393939] hover:bg-[#393939] hover:text-white px-5 py-[7px] rounded-md text-[17px] font-bold ml-3 mt-3">Contact me</button>
                            </div>
                        </div>

                        <div className="p-7 border-[3px] border-[#dadada] rounded-md w-[800px] mb-5">
                        <div className="flex justify-between">
                            <div className="w-[50%]">
                            <h4 className="text-[20px] text-[#6b6b6b] font-medium w-[800px]">From</h4>
                            <h4 className="text-[20px] text-[#6b6b6b] mb-4 font-bold w-[800px]">Bangladesh</h4>

                            <h4 className="text-[20px] text-[#6b6b6b] font-medium w-[800px]">Avg. response time</h4>
                            <h4 className="text-[20px] text-[#6b6b6b] mb-4 font-bold w-[800px]">1 hour</h4>

                            <h4 className="text-[20px] text-[#6b6b6b] font-medium w-[800px]">Languages</h4>
                            <h4 className="text-[20px] text-[#6b6b6b] mb-4 font-bold w-[800px]">Bengali, Hindi, Urdu, English</h4>
                            </div>

                            <div className="w-[50%]">
                            <h4 className="text-[20px] text-[#6b6b6b] font-medium w-[800px]">Member since</h4>
                            <h4 className="text-[20px] text-[#6b6b6b] mb-4 font-bold w-[800px]">May 2020</h4>

                            <h4 className="text-[20px] text-[#6b6b6b] font-medium w-[800px]">Last delivery</h4>
                            <h4 className="text-[20px] text-[#6b6b6b] mb-4 font-bold w-[800px]">2 days</h4>
                            </div>
                        </div>

                        <h4 className="text-[18px] text-[#6b6b6b] font-medium pt-4 border-t-[2px] border-[#dadada] ">I{"'"}m here to build a scalable Web Application for you. Using the cutting edge MERN stack web development technologies. Your full-stack web app will be unique in looking, fast, and user-friendly. With 4 years of MERN stack and programming skills in general I can guarantee that you will be 100% satisfied with the outcome.</h4>
                        </div>

                        <div className="pt-10 border-t-[2px] border-[#dadada] w-[800px]">

                            <Reviews gigId={id}/>

                        </div>

                    </div>

                    <div className="w-[450px]">
                        <div className="w-[450px] border-[2px] mt-7 border-[#cecece] rounded-sm">
                            <div className="flex justify-between border-b-[2px] border-[#cecece]">
                                <div className="w-[150px] h-[60px] flex justify-center items-center text-[18px] font-bold border-r-[2px] border-[#cecece] text-[#626262] after:absolute after:bottom-[-2px] after:left-0 after:w-[100%] after:h-[4px] after:bg-[#57CF97] after:content-[''] relative">Basic</div>
                                <div className="w-[150px] h-[60px] flex justify-center items-center text-[18px] font-bold border-r-[2px] border-[#cecece] text-[#626262]">Standard</div>
                                <div className="w-[150px] h-[60px] flex justify-center items-center text-[18px] font-bold text-[#626262]">Premium</div>
                            </div>

                            <div className="py-7 px-6">
                                <div className="flex justify-between mb-5">
                                <h4 className="text-[20px] text-[#3e3e3e] font-medium">{data.gig.shortTitle}</h4>
                                <h4 className="text-[22px] text-[#3e3e3e] font-medium">${data.gig.price}</h4>
                                </div>
                                <h4 className="text-[18px] text-[#3e3e3e] mb-7 font-medium">{data.gig.shortDesc}</h4>
                                
                                <div className="flex justify-start mb-3">
                                <h4 className="text-[15px] text-[#595959] font-bold flex justify-start items-center"><MdAccessTime className="text-xl mr-1"/>{data.gig.deliveryTime} Days Delivery</h4>
                                <h4 className="text-[15px] ml-4 text-[#595959] font-bold flex justify-start items-center"><BsArrowRepeat className="text-xl mr-1"/>{data.gig.revision} Revisions</h4>
                                </div>

                                <div className="mt-3 mb-7">
                                    {
                                        data.gig.features.map((item) => <h4 className="text-[16px] text-[#8d8d8d] font-medium flex justify-start items-center"><FaCheck className="text-xl mr-2 mt-1 text-[#57CF97]"/>{item}</h4>)
                                    }
                                </div>

                                <Link to={`/payment/${data.gig._id}`} className="hover:bg-[#19A463] w-[100%] duration-500 bg-[#18b76d] text-white px-5 py-[10px] text-center rounded-md text-[18px] font-bold block">Continue (${data.gig.price})</Link>
                                <h4 className="text-[18px] text-[#57CF97] mt-4 font-medium text-center">Compare Packages</h4>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    
    </>
  )
}

export default Gig;
