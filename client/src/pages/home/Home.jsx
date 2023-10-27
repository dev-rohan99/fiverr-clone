import React from 'react';
import Banner from '../../components/banner/Banner';
import GigCard from '../../components/gig-card/GigCard';
import ServiceCard from '../../components/service-card/ServiceCard';
import { FaRegCheckCircle } from 'react-icons/fa';
import { exploreData, servicesData } from '../../data/data.js';
import Slider from 'infinite-react-carousel';
import ExploreCard from '../../components/explore-card/ExploreCard';
import ProjectCard from '../../components/project-card/ProjectCard';


const Home = () => {


  return (
    <>
    
        <Banner/>

        <div className="">
            <div className="w-[1350px] mx-auto flex justify-center items-center h-[100px] bg-[#FAFAFA]">
                <span className="text-[20px] font-bold text-[#C7C7CA]">Trusted by:</span>
                <img className="ml-10 mt-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" alt="" />
                <img className="ml-10 mt-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png" alt="" />
                <img className="ml-10 mt-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png" alt="" />
                <img className="ml-10 mt-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png" alt="" />
                <img className="ml-10 mt-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png" alt="" />
            </div>
        </div>


        <div className="py-10 pt-10 bg-[#fff]">
            <div className="w-[1350px] mx-auto">
                <h1 className="text-[30px] font-bold text-[#4a4a4a] mb-7">Recently Viewed & More </h1>

                {/* <div className="grid grid-cols-5 gap-[32px]"> */}

                    <Slider slidesToShow={5} arrowsScroll={5}>

                        <GigCard width={"245px"} imgHeight={"136px"}/>
                        <GigCard width={"245px"} imgHeight={"136px"}/>
                        <GigCard width={"245px"} imgHeight={"136px"}/>
                        <GigCard width={"245px"} imgHeight={"136px"}/>
                        <GigCard width={"245px"} imgHeight={"136px"}/>
                        <GigCard width={"245px"} imgHeight={"136px"}/>

                    </Slider>

                {/* </div> */}
            </div>
        </div>


        <div className="py-[60px] bg-[#fff]">
            <div className="w-[1350px] mx-auto">
                <h1 className="text-[30px] font-bold text-[#4a4a4a] mb-7">Popular professional services</h1>

                {/* <div className="grid grid-cols-5 gap-[32px]"> */}
                    <Slider slidesToShow={5} arrowsScroll={5}>
                        {
                            servicesData.map((item) => {

                                return (
                                    <><ServiceCard title={item.title} subTitle={item.subTitle} image={item.image}/></>
                                )
                            
                            })
                        }
                    </Slider>
                {/* </div> */}
            </div>
        </div>


        <div className="py-[60px] pb-10 bg-[#F1FDF7]">
            <div className="w-[1350px] mx-auto flex justify-between items-center">
                <div className="w-[510px]">
                    <h1 className="text-[32px] font-bold text-[#4a4a4a] mb-7">A whole world of freelance talent at your fingertips</h1>

                    <div className="text-xl text-[#4a4a4a] mb-5">
                        <h3 className="flex justify-start items-center mb-3 font-semibold"><FaRegCheckCircle className="text-2xl mr-3 text-[#828282]"/>The best for every budget</h3>
                        <p className='font-medium text-[23px] text-[#828282]'>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                    </div>

                    <div className="text-xl text-[#4a4a4a] mb-5">
                        <h3 className="flex justify-start items-center mb-3 font-semibold"><FaRegCheckCircle className="text-2xl mr-3 text-[#828282]"/>Quality work done quickly</h3>
                        <p className='font-medium text-[23px] text-[#828282]'>Find the right freelancer to begin working on your project within minutes.</p>
                    </div>

                    <div className="text-xl text-[#4a4a4a] mb-5">
                        <h3 className="flex justify-start items-center mb-3 font-semibold"><FaRegCheckCircle className="text-2xl mr-3 text-[#828282]"/>Protected payments, every time</h3>
                        <p className='font-medium text-[23px] text-[#828282]'>Always know what you{"'"}ll pay upfront. Your payment isn{"'"}t released until you approve the work.</p>
                    </div>

                    <div className="text-xl text-[#4a4a4a] mb-5">
                        <h3 className="flex justify-start items-center mb-3 font-semibold"><FaRegCheckCircle className="text-2xl mr-3 text-[#828282]"/>24/7 support</h3>
                        <p className='font-medium text-[23px] text-[#828282]'>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                </div>

                <div className="w-[650px]">
                    <iframe width="650" height="415" src="https://www.youtube.com/embed/5TOC2hwdW1c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        

        <div className="py-[60px] bg-[#fff]">
            <div className="w-[1350px] mx-auto">
                <h1 className="text-[30px] font-bold text-[#4a4a4a] mb-7">Explore the marketplace</h1>

                <div className="grid grid-cols-5 gap-[32px]">

                    {
                        exploreData.map((item) => {
                            return (
                                <>
                                    <ExploreCard title={item.title} image={item.image}/>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div>


        <div className="py-[60px] bg-[#0D084D] text-white">
            <div className="w-[1350px] mx-auto flex justify-between items-center">
                <div className="w-[550px]">
                    <h1 className="text-[37px] font-medium mb-7"><span className="font-bold text-[#fff] text-[37px]">Fiverr</span> Business</h1>
                    <h1 className="text-[40px] font-bold mb-7 pr-5">A business solution designed for <span className="font-thin text-[#fff] text-[37px]">teams</span></h1>
                    <p className="text-[20px] font-medium mb-5">Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>

                    <div className="text-xl mb-7">
                        <h3 className="flex justify-start items-start mb-3 font-medium"><FaRegCheckCircle className="text-2xl w-[30px] mr-3 mt-1"/>Connect to freelancers with proven business experience</h3>
                        <h3 className="flex justify-start items-start mb-3 font-medium"><FaRegCheckCircle className="text-2xl w-[30px] mr-3 mt-1"/>Get matched with the perfect talent by a customer success manager</h3>
                        <h3 className="flex justify-start items-start mb-3 font-medium"><FaRegCheckCircle className="text-2xl w-[30px] mr-3 mt-1"/>Manage teamwork and boost productivity with one powerful workspace</h3>
                    </div>

                    <button className="bg-[#1DBF73] px-5 py-3 rounded-md text-[18px] font-bold">Explore Fiverr Business</button>
                </div>

                <div className="w-[650px]">
                    <iframe width="650" height="415" src="https://www.youtube.com/embed/5TOC2hwdW1c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div className="py-10 pt-10 bg-[#fff]">
            <div className="w-[1350px] mx-auto">
                <h1 className="text-[30px] font-bold text-[#4a4a4a] mb-7">Get inspired with projects made by our freelancers</h1>

                {/* <div className="grid grid-cols-5 gap-[32px]"> */}

                    <Slider slidesToShow={4} arrowsScroll={4}>

                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>

                    </Slider>

                {/* </div> */}
            </div>
        </div>

        <div className="py-[60px]">
            <div className="w-[1350px] h-[430px] rounded-md mx-auto relative overflow-hidden">
                <img className='w-[1350px] h-[430px] object-cover absolute left-0 top-0' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="" />
                <div className="absolute left-9 top-[90px] w-[700px] text-white">
                    <h1 className="text-[48px] font-bold mb-7">Find the talent needed to get your business growing.</h1>
                    <button className="bg-[#1DBF73] text-white px-5 py-3 rounded-md text-[18px] font-bold">Get started</button>
                </div>
            </div>
        </div>
    
    </>
  );
}

export default Home;
