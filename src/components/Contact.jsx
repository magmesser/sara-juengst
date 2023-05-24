/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#274C77]  flex justify-center items-center p-4">
        <form action='https://getform.io/f/4b8d4d0a-1fec-4f8d-9cc0-7b5f323ec5d1' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1] text-[#E7ECEF]">Contact</p>
                <p className='text-[#E7ECEF] py-4'>//Submit the form below or shoot me an email - sarajuengst@uncc.edu</p>
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