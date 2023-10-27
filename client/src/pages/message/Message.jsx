import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import toaster from '../../utilities/toast';
import { useCreateMessageMutation, useGetMessagesQuery, useGetSingleUserQuery } from '../../redux/api/apiSlice.js';


const Message = () => {

    const { id } = useParams();
    const loginUser = JSON.parse(localStorage.getItem("loginUser"));
    const [ createMessage ] = useCreateMessageMutation();
    const [ input, setInput ] = useState({
        description : ""
    });

    const { data, isLoading, error } = useGetMessagesQuery(id);
    const { data : userData } = useGetSingleUserQuery(data?.messages?.userId);

    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    }

    const handleInboxSubmit = (e) => {
        e.preventDefault();
        if(!input.description){
            toaster("warn", "Field is required!");
        }else{
            createMessage({
                conversationId : id,
                description : input.description
            }).then((res) => {

            }).catch((error) => {
                toaster("warn", error.data.message);
            });
        }
    }

    return (
        <>
        
            <div className="py-[60px] mt-[125px]">
                <div className="container">
                    <div className="">
                        <h4 className="text-[10px] text-[gray] mb-3 font-bold uppercase">messages {">"} {loginUser.username}</h4>
                        <h4 className="text-[30px] text-[#3e3e3e] mb-5 font-bold">Inbox</h4>

                        <div className="inboxWrapper">

                            {data?.messages?.map((item) => 
                                <div className={`flex items-start mt-3 ${loginUser._id !== item.userId ? "justify-start flex-row" : "justify-right flex-row-reverse"}`}>
                                    <img className="w-[35px] h-[35px] rounded-full object-cover overflow-hidden" src={loginUser._id !== item.userId ? userData?.user?.avatar ? userData?.user?.avatar : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" : loginUser.avatar ? loginUser.avatar : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"} alt="" />

                                    <div className={`w-[500px] p-4 rounded-xl ml-3 mr-3 ${loginUser._id === item.userId ? "bg-[#3E5FD0] text-white rounded-se-none" : "bg-[#DBDBDB] rounded-ss-none"}`}>
                                        {item.description}
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="mt-7 w-[1000px] mx-auto">

                            <form onSubmit={handleInboxSubmit} className="w-[100%] flex justify-between items-center">
                                <textarea onChange={handleInputChange} name="description" rows="2" className="block p-2.5 w-[900px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                                <button type="submit" className="bg-[#1DBF73] hover:bg-[#1ed982] text-white px-5 py-[10px] rounded-md text-[17px] font-bold ml-4">SEND</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Message;
