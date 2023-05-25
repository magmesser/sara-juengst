/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#274C77]  flex justify-center items-center p-4">
        <form action='https://getform.io/f/d62448d4-c8e1-4d6e-9921-e9506ece99b8' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1] text-[#E7ECEF]">Contact</p>
                <p className='text-[#E7ECEF] py-4'>// Submit the form below or shoot me an email - sjuengst@charlotte.edu </p>
            </div>
            <input className='p-2 bg-[#A3CEF1]' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#A3CEF1]' type="text" placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#A3CEF1]'name="message" rows="10" placeholder='Message'></textarea>
            <button className="text-[#E7ECEF] border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#6096BA] hover:border-[#6096BA]">Let's Collaborate</button>
        </form>
        
    </div>
  )
}

export default Contact