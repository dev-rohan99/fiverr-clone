import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import image from "../../assets/img/man.png"
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();
    const [titleSearch, setTitleSearch] = useState("");
    const title = useRef();

    useEffect(() => {
        setTitleSearch(title?.current?.value);
    }, [titleSearch])

    const handleSearch = () => {
        setTitleSearch(title?.current?.value);
        navigate(`/gigs?search=${titleSearch}`);
    }

    return (
        <>
        
            <div className="w-[100%] h-[100vh]">
                <div className="h-[100vh] bg-[#005a00]">
                    <div className="h-[80px] opacity-0">fghfg</div>

                    <div className="w-[1350px] h-[89%] mx-auto flex justify-between items-end">
                        <div className="leftBanner mb-[220px]">
                            <h1 className="text-[58px] font-bold leading-[75px] mb-4">Find the perfect <span className="font-thin text-[58px] text-white">freelance</span> services for your business</h1>
                            <div className="search">
                                <div className="searchInput">
                                    <span className="pl-3"><BiSearch className="text-2xl text-[gray]"/></span>
                                    <input ref={title} className="h-[45px] w-[500px] outline-none text-[#292929]" type="text" placeholder='Try "building mobil app"' />
                                </div>
                                <button type="submit" onClick={handleSearch} className='w-[150px] h-[45px] rounded-r-md bg-[#19A463] text-[18px] font-semibold'>Search</button>
                            </div>

                            <div className="popular">
                                <span className="text-white">Popular:</span>
                                <button>Web Design</button>
                                <button>WordPress</button>
                                <button>Logo Design</button>
                                <button>AI Services</button>
                            </div>
                        </div>

                        <div className="rightBanner">
                            <img className="w-[100%] h-auto" src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Banner