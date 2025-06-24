import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 pt-12 pb-8'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* company detail section */}
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold text-white'>Orange Mint</h1>
                    <p className='text-gray-200 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Aspernatur placeat omnis consequuntur perspiciatis a odit quaerat 
                        repellat ipsam officia eum in pariatur voluptatem dolor tempora?</p>
                </div>

                {/* NavLink Section */}
                <div>
                    <h2 className='text-white text-xl font-semibold mb-4'>Quick Links</h2>
                    {/* Add your nav links here */}
                </div>

                {/* social links section */}
                <div>
                    <h2 className='text-white text-xl font-semibold mb-4'>Follow Us</h2>
                    <div className='flex space-x-4 text-white text-2xl'>
                        <FaFacebook className='hover:text-blue-300 cursor-pointer' />
                        <FaInstagram className='hover:text-pink-300 cursor-pointer' />
                        <FaTelegram className='hover:text-blue-300 cursor-pointer' />
                        <FaGoogle className='hover:text-red-300 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer