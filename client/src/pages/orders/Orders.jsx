import React from 'react';
import { MdContacts } from 'react-icons/md';
import { useCreateConversationMutation, useGetOrdersQuery } from '../../redux/api/apiSlice.js';
import toaster from '../../utilities/toast.js';


const Orders = () => {

    const { data, isLoading, error } = useGetOrdersQuery();
    const [ createConversation ] = useCreateConversationMutation();

    const handleContact = (e) => {
        e.preventDefault();
        createConversation().unwrap().then((res) => {

        }).catch((error) => {
            toaster("warn", error.data.message);
        });
    }

    return (
        <>
        
        <div className="py-[60px] mt-[125px]">
            <div className="container">
                <div className="">
                <h4 className="text-[30px] text-[#3e3e3e] mb-5 font-bold">Orders</h4>

                <div className="relative overflow-x-auto w-[100%]">
                    {data?.order?.length > 0 ? (<table className="w-full text-sm text-left text-[#292929] dark:text-gray-400">
                        <thead className="text-lg text-[#353535] uppercase bg-transprent dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact
                                </th>
                            </tr>
                        </thead>
                        
                        <tbody>

                            {
                            data?.order?.map((item, index) => 
                                <tr className="bg-[#cfffe7] border-b font-semibold text-[15px] dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-[80px] h-[50px] object-cover rounded-md" src={item.gigImage} alt="" />
                                    </th>
                                    <td className="px-6 py-4 w-[400px]">
                                    <div className="line-clamp-1">{item.gigTitle}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        ${item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a onClick={handleContact} href="/" className="w-[40px] h-[40px] rounded-full bg-[#5fa4ff] flex justify-center items-center"><MdContacts className="text-2xl text-[#ffffff]" /></a>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>) : (<>
                            
                            <h5 className="text-[45px] font-bold text-[#3E3E3E] text-center">Data not found</h5>
                        
                        </>)}
                </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Orders;
