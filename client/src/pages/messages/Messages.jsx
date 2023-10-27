import React from 'react';
import { Link } from 'react-router-dom';
import { useGetConversationsQuery, useUpdateConversationMutation } from '../../redux/api/apiSlice.js';
import moment from "moment";
import toaster from '../../utilities/toast.js';


const Messages = () => {

  const loginUser = JSON.parse(localStorage.getItem("loginUser"));

  const { data, isLoading, error } = useGetConversationsQuery();
  const [ updateConversation ] = useUpdateConversationMutation();
  
  const handleRead = (id) => {
    updateConversation(id).unwrap().then((res) => {
      toaster("success", "You have read this message!");
    }).catch((error) => {
      toaster("warn", error.data.message);
    });
  }


  return (
    <>
    
      <div className="py-[60px] mt-[125px]">
          <div className="container">
            <div className="">
              <h4 className="text-[30px] text-[#3e3e3e] mb-5 font-bold">Messages</h4>

              <div className="relative overflow-x-auto w-[100%]">
                  { data?.conversations?.length > 0 ?
                      (
                        <table className="w-full text-sm text-left text-[#292929] dark:text-gray-400">
                          <thead className="text-lg text-[#353535] uppercase bg-transprent dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" className="px-6 py-3">
                                      {loginUser.isSeller ? "Buyer" : "Seller"}
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      Last message
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      Date
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      Action
                                  </th>
                              </tr>
                          </thead>
                          
                          <tbody>

                            {
                                data?.conversations?.map((item) => 
                                
                                  <tr className="bg-[#cfffe7] border-b font-semibold text-[15px] dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-bold">
                                        {loginUser.isSeller ? item.sellerId : item.buyerId}
                                    </td>
                                    <td className="px-6 py-4 w-[500px]">
                                      <Link to={`/message/${item.id}`}>
                                        <div className="line-clamp-1">{item.lastMessage ? item.lastMessage : "No conversation yet!"}</div>
                                      </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        {moment(item.updatedAt).fromNow()}
                                    </td>
                                    <td className="px-6 py-4">
                                      {(( loginUser.isSeller && !item.readBySeller ) || ( !loginUser.isSeller && !item.readByBuyer )) && (<button onClick={(e) => handleRead(item.id)} className="bg-[#1DBF73] hover:bg-[#1ed982] text-white px-5 py-[10px] rounded-md text-[17px] font-bold ml-4">Mark as Read</button>)}
                                    </td>
                                  </tr>
                                
                                )
                            }

                          </tbody>
                        </table>
                      ) : (
                        <h5 className="text-[45px] font-bold text-[#3E3E3E] text-center">Data not found</h5>
                      )
                  }
              </div>
            </div>
          </div>
      </div>
    
    </>
  );
}

export default Messages;
