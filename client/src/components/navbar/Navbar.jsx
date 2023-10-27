import React, { useEffect, useRef, useState } from 'react';
import Logow from "../../assets/img/fiverrw.png"
import Logo from "../../assets/img/fiverr.png";
import { BiSearch } from 'react-icons/bi';
import { IoEarthSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import toaster from '../../utilities/toast';
import { useLogoutMutation } from '../../redux/api/apiSlice.js';

const Navbar = () => {

    const navigate = useNavigate();
    const [logout] = useLogoutMutation();
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);
    const [titleSearch, setTitleSearch] = useState("");
    const title = useRef();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    const loginUser = JSON.parse(localStorage.getItem("loginUser"));

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        setTitleSearch(title?.current?.value);
        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, [titleSearch]);

    const handleUserLogOut = (e) => {
        e.preventDefault();
        logout().unwrap().then((res) => {
            localStorage.setItem("loginUser", null);
            toaster("success", `You has been logged out successfull!`);
            navigate("/");
            window.location.reload();
        }).catch((error) => {
            toaster("warn", error.data.message);
        });
    }

    const handleSearch = () => {
        setTitleSearch(title?.current?.value);
        navigate(`/gigs?search=${titleSearch}`);
    }

    const handleShow = () => {
        setShow(!show);
    }

  return (
    <>
        <div className="relative">
            <div className={`main fixed w-[100%] top-0 left-0 ${active || window.location.pathname !== "/" ? "active" : ""}`}>
                <dic className="navContainer">
                    <div className="topHeader">
                        <Link to={"/"}>
                            <div className="w-[100px]">
                                <img className="w-[100%] object-fill" src={active || window.location.pathname !== "/" ? Logo : Logow} alt="" />
                            </div>
                        </Link>

                        <div className={`w-[450px] flex duration-400 justify-between rounded-md overflow-hidden border-[2px] border-[#e1e1e1] ${active || window.location.pathname !== "/" ? "opacity-1 delay-75" : "opacity-0"}`}>
                            <input ref={title} type="text" placeholder="What service looking for today" className="py-[10px] px-4  outline-none w-[400px] text-[#292929]" />
                            <button onClick={handleSearch} type='submit' className="h-[44px] w-[50px] hover:bg-[#404145] bg-[#2e2e2f] flex justify-center items-center"><BiSearch className="text-2xl text-white"/></button>
                        </div> 

                        <div className="w-[700px]">
                            <ul className="flex justify-end items-center">
                                <li><a href='/' className="text-[18px] font-semibold mr-8">Fiverr Business</a></li>
                                <li><a href='/' className="text-[18px] font-semibold mr-8">Explore</a></li>
                                <li className='flex items-center'><IoEarthSharp className="text-xl mr-3"/> <a href='/' className="text-[18px] font-semibold mr-8">English</a></li>
                                {!loginUser?.isSeller && <li><a href='/' className="text-[18px] font-semibold mr-8">Become a Seller</a></li>}
                                {loginUser ? (
                                    <>
                                    
                                        <div className="relative">
                                            <div onClick={handleShow} className={`flex cursor-pointer justify-end items-center ${active || window.location.pathname !== "/" ? "text-[#3c3c3c]" : "text-[#fff]"}`}>
                                                <img className="w-[33px] h-[33px] object-cover rounded-full" src={(loginUser.avatar) ? loginUser.avatar : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"} alt="" />

                                                <div className="font-bold text-[17px] pl-2">{loginUser.username}</div>
                                            </div>

                                            {show && <ul className={`absolute right-0 top-[55px] shadow-md w-[200px] p-3 rounded-md bg-white text-[#3c3c3c]`}>
                                                {loginUser.isSeller && <><li><Link to='/my-gigs' className="text-[17px] font-semibold py-1 block">Gigs</Link></li>
                                                <li><Link to='/add-new-gig' className="text-[17px] font-semibold py-1 block">Add New Gig</Link></li></>}
                                                <li><Link to='/orders' className="text-[17px] font-semibold py-1 block">Orders</Link></li>
                                                <li><Link to='/messages' className="text-[17px] font-semibold py-1 block">Messages</Link></li>
                                                <li><a onClick={handleUserLogOut} href='/' className="text-[17px] font-semibold py-1 block">Logout</a></li>
                                            </ul>}
                                        </div>
                                    
                                    </>
                                ) : (<><li><Link to='/login' className="text-[18px] font-semibold mr-8">Sign in</Link></li>
                                <li><Link to='/register' className="text-[17px] font-semibold px-4 py-2 rounded-md border-[3px] border-[#fff]">Join</Link></li></>)}
                            </ul>
                        </div>
                    </div>
                </dic>

                <div className={`border-y-[2px] border-[#ddd] duration-300 ${active || window.location.pathname !== "/" ? "opacity-1 delay-75 block" : "opacity-0 hidden"}`}>
                    <div className="navContainer">
                        <ul className="flex justify-between items-center text-[#909090]">
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=graphics-design">Graphics & Design</Link></li>
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=digital-marketing">Digital Marketing</Link></li>
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=writing-translation">Writing & Translation</Link></li>
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=video-animation">Video & Animation</Link></li>
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=music-audio">Music & Audio</Link></li>
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=programming-tech">Programming & Tech</Link></li>
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=photography">Photography</Link></li>
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=business">Business</Link></li>
                            <li><Link className="text-[18px] font-semibold py-2 block" to="/gigs?cat=ai-services">AI Services</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar