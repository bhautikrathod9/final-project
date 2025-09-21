import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
               <p>Welcome to HandyMart, where craftsmanship meets creativity. Our mission is to bring you the finest handcrafted items, all curated with a passion for quality and artistry. We believe that every piece tells a story, and we're here to help you discover unique treasures that reflect your personal style.</p>
              <p>At HandyMart, we prioritize your satisfaction. From the moment you explore our collection to the day your handcrafted items arrive, we are dedicated to providing a seamless shopping experience. Our team is always on the lookout for talented artisans, ensuring that you have access to the most exquisite handmade products available. Thank you for choosing HandyMart. We’re excited to be a part of your journey into the world of handcrafted artistry.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At HandyMart, our mission is to empower artisans and provide you with high-quality, unique handcrafted products. We strive to make artisanal goods accessible to all, offering a diverse range of items that inspire creativity and individuality.</p>
              <b className='text-gray-800'>Our Vision</b>
              <p>At HandyMart, our vision is to be a leading marketplace for handcrafted goods, known for exceptional quality and creativity. We aim to inspire appreciation for artisanal craftsmanship, making HandyMart the go-to destination for unique and meaningful products.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Quality Assurance</b>
            <p className='text-gray-600'>At HandyMart, quality is our top priority. Every product is carefully selected and inspected to meet our high standards. Shop with confidence, knowing that we ensure excellence in every handcrafted detail.</p>
          </div>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
            <b>Convenience</b>
            <p className='text-gray-600'>HandyMart ensures a smooth shopping experience with easy browsing, fast shipping, simple returns, and multiple payment options. Your comfort and satisfaction are our priorities.</p>
          </div>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>At HandyMart, exceptional service is our promise. Our dedicated support team is here to assist you with any questions or concerns, ensuring a smooth and satisfying shopping experience.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
