import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { useGetSingleGigQuery } from '../../redux/api/apiSlice.js';
import toaster from '../../utilities/toast.js';
import { BsArrowRepeat } from 'react-icons/bs';
import { MdAccessTime, MdPayment } from 'react-icons/md';

const Payment = () => {

    const { id } = useParams();

    const { data } = useGetSingleGigQuery(id, {
        onSuccess: (result) => {
            return result.data
        },
        onError: (error) => {
            toaster("warn", error.data.message);
        }
    });

    return (
        <>
        
            <div className="py-[60px] mt-[125px]">
                <div className="container flex justify-between">
                    <div className="w-[850px]">

                        {/* <div className="">
                            <div className="p-3 text-[18px]">Billing information</div>
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="text-[16px]"></p>
                                </div>
                                <button className="hover:bg-[#3b3b3b] duration-500 bg-[#262626] text-white px-5 py-[10px] rounded-md text-[18px] font-bold block">Edit</button>
                            </div>
                        </div> */}

                        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                            <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{maxWidth: "600px"}}>
                                <div className="w-full pt-1 pb-5">
                                    <div className="bg-[#19A463] text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                        <MdPayment className="mdi mdi-credit-card-outline text-3xl"/>
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <h1 className="text-center font-bold text-xl uppercase">Payment Info</h1>
                                </div>
                                <div className="mb-3 flex -mx-2">
                                    <div className="px-2">
                                        <label htmlFor="type1" className="flex items-center cursor-pointer">
                                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked/>
                                            <img alt="fiverr" src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3 w-[100%]"/>
                                        </label>
                                    </div>
                                    <div className="px-2">
                                        <label htmlFor="type2" className="flex items-center cursor-pointer">
                                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                                            <img alt="fiverr" src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 w-[100%] ml-3"/>
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                                    <div>
                                        <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                                    <div>
                                        <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                                    </div>
                                </div>
                                <div className="mb-3 -mx-2 flex items-end">
                                    <div className="px-2 w-1/2">
                                        <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                                        <div>
                                            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                <option value="01">01 - January</option>
                                                <option value="02">02 - February</option>
                                                <option value="03">03 - March</option>
                                                <option value="04">04 - April</option>
                                                <option value="05">05 - May</option>
                                                <option value="06">06 - June</option>
                                                <option value="07">07 - July</option>
                                                <option value="08">08 - August</option>
                                                <option value="09">09 - September</option>
                                                <option value="10">10 - October</option>
                                                <option value="11">11 - November</option>
                                                <option value="12">12 - December</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="px-2 w-1/2">
                                        <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                                    <div>
                                        <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                                    </div>
                                </div>
                                <div>
                                    <button className="block w-full max-w-xs mx-auto bg-[#19A463] hover:bg-[#19a463ee] focus:bg-[#19a463ee] text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-[450px]">
                        <div className="w-[450px] border-[2px] border-[#cecece] rounded-sm">
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

                                <button className="hover:bg-[#19A463] w-[100%] duration-500 bg-[#18b76d] text-white px-5 py-[10px] rounded-md text-[18px] font-bold block">Continue (${data.gig.price})</button>
                                <h4 className="text-[18px] text-[#57CF97] mt-4 font-medium text-center">Compare Packages</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Payment;
