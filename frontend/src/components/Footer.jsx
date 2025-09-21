import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <Link to='/'>
                    <img src={assets.logo} className='w-32 mb-5 cursor-pointer' alt="Trendify" />
                </Link>
                <p className='w-full text-gray-600 md:w-2/3'>Thank you for supporting our handcrafted marketplace! We are committed to bringing you the finest artisanal products and unique creations. Follow us on social media for updates on new arrivals, exclusive offers, and behind-the-scenes looks at our talented artisans. If you have any questions or need assistance, our friendly customer support team is here to help. Subscribe to our newsletter for special discounts and be the first to discover our latest handcrafted treasures. Your journey into the world of handmade artistry starts here—let's make it truly memorable!</p>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link to='/about'>
                        <li>Delivery</li>
                    </Link>
                    <Link to='/about'>
                        <li>Privacy & Policy</li>
                    </Link>
                </ul>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 99789 42342</li>
                    <li>contact.handymart@info.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 HandyMart. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
