import React from 'react'
import { FaDiscord, FaYoutube, FaTwitter  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    const data = new Date()
    const now = data.getFullYear()
  return (
    <div className='flex flex-col gap-10 max-w-[1050px] mb-6'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-5 w-1/3'>
                <img src="/devto-light.svg" alt="logo" className="size-12"/>
                <h5 className='text-h5 text-text-label'>NFT marketplace UI created with Anima for Figma.</h5>
                <div className='flex flex-col gap-2'>
                    <p className='text-base text-text-label'>Join our community</p>
                    <article className='w-1/2 flex justify-between'>
                        <FaDiscord className='text-text-label'/>
                        <FaYoutube className='text-text-label'/>
                        <FaTwitter className='text-text-label'/>
                        <AiFillInstagram className='text-text-label'/>
                    </article>
                </div>
            </div>
            <div className='flex flex-col gap-5 w-1/3'>
                <h5 className='font-secondary text-h5 text-text'>Explore</h5>
                <div className='flex flex-col gap-2'>
                    <Link className='text-text-label'>Marketplace</Link>
                    <Link className='text-text-label'>Rankings</Link>
                    <Link className='text-text-label'>Connect a wallet</Link>
                </div>
            </div>
            <div className='flex flex-col gap-5 w-1/3'>
                <h5 className='font-secondary text-h5 text-text'>Join our weekly digest</h5>
                <p className='text-base text-text-label'>Get exclusive promotions & updates straight to your inbox.</p>
                <form className='relative'>
                    <input type="search" id="search" className="block w-full p-4 ps-10 text-sm  border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 text-text-label" placeholder="Enter your email here..." required />
                    <button type="submit" className="text-white absolute end-0 bottom-[1px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4">Suscribe</button>
                </form>
            </div>
        </div>
        <div>
            <hr className="border-t-[3px] border-solid border-text-label"/>
            <p className='text-sm text-text-label pt-2.5'>Copyright Ⓒ {now}</p>
        </div>
    </div>
  )
}

export default Footer