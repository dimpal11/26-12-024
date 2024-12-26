import React from 'react'
import Image from 'next/image'
import Vertor from '@/Image/Vector.svg'
import footer from '@/Image/footer.svg'
import whatsapp from '@/Image/whatsapp.svg'
import In from '@/Image/in.svg'
import instagram from '@/Image/instagram.svg'
import telegram from '@/Image/telegram.svg'
import twitter from '@/Image/twitter.svg'
import phone from '@/Image/phone (1).svg'
import email from '@/Image/phone (2).svg'

function Testimonial() {
  return (
    <>
      {/* <section className='container max-w-screen-xl py-0 md:py-5 relative px-0 md:px-4 mx-auto overflow-x-hidden'>
        <div className="flex  justify-center items-center gap-5 py-6  font-extrabold  uppercase">
            <Image src={Vertor} alt='image'></Image>
            Testimonial
            <Image src={Vertor} alt='image'></Image>
        </div>

        <div className='pb-5 p-3 lg:p-0 md:px-10'>
            <h2 className='text-center uppercase font-extrabold text-2xl sm:text-4xl text-[#372011] pb-4'>Our happy users</h2>
            <p className='text-center text-[#372011] outfit text-sm sm:text-base font-normal pb-10'>Lorem ipsum dolor sit amet consectetur. Quis faucibus senectus velit mauris <br/> nullam. Auctor vel lorem sed in felis. Morbi dignissim facilisis arcu posuere.</p>
        </div>
      </section> */}

<section className="bg-gray-50 container max-w-screen-xl py-0 md:py-5 px-0 md:px-4 mx-auto overflow-x-hidden">
  {/* Testimonial Heading */}
  <div className="flex justify-center items-center gap-5 py-6 font-extrabold uppercase text-sm md:text-lg">
    <Image src={Vertor} alt="image" className="w-4 md:w-6" />
    Testimonial
    <Image src={Vertor} alt="image" className="w-4 md:w-6" />
  </div>

  {/* Subheading and Description */}
  <div className="pb-5 px-3 lg:px-0 md:px-10">
    <h2 className="text-center uppercase font-extrabold text-xl sm:text-2xl md:text-4xl text-[#372011] pb-4">
      Our happy users
    </h2>
    <p className="text-center text-[#372011] outfit text-xs sm:text-base font-normal pb-10 leading-5 md:leading-7">
      Lorem ipsum dolor sit amet consectetur. Quis faucibus senectus velit mauris nullam. <br />
      Auctor vel lorem sed in felis. Morbi dignissim facilisis arcu posuere.
    </p>
  </div>

  {/* Contact Us Section */}
  <section className="py-10 bg-white mx-auto container px-4 md:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side */}
      <div>
        <div className="flex gap-4 items-center mb-7">
          <Image src={Vertor} alt="image" className="w-4 md:w-6" />
          <h3 className="text-lg md:text-xl font-bold text-[#372011]">Contact us</h3>
          <Image src={Vertor} alt="image" className="w-4 md:w-6" />
        </div>
        <p className="text-[#372011] text-base md:text-2xl font-extrabold uppercase mb-5">
          We value your input<br />
          Share with us
        </p>
        <p className="text-xs md:text-sm leading-5 md:leading-6 text-[#372011] mb-8">
          Lorem ipsum dolor sit amet consectetur. Tristique sociis nunc amet erat. Aenean magna lectus viverra eros nullam at ac. Et auctor massa tellus vestibulum. Posuere facilisis sed nunc elementum condimentum sed ultrices.
        </p>

        {/* Phone & Email */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-[#E6A371] p-3 rounded-lg w-12 h-12 flex justify-center items-center">
              <Image src={phone} alt="logo" />
            </div>
            <div>
              <p className="text-[#372011] font-semibold text-xs">Phone</p>
              <p className="text-[#372011] font-extrabold text-lg md:text-xl">+91 123 456 3698</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#E6A371] p-3 rounded-lg w-12 h-12 flex justify-center items-center">
              <Image src={email} alt="logo" />
            </div>
            <div>
              <p className="text-[#372011] font-semibold text-xs">Email ID</p>
              <p className="text-[#372011] font-extrabold text-lg md:text-xl">info@swarnim.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="p-6 rounded-lg shadow-md bg-gray-50">
        <h3 className="text-lg md:text-xl text-center font-bold mb-5">Need More Help?</h3>
        <form>
          <div className="grid grid-cols-1 gap-4 px-0 md:px-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-[#CFA767] p-3 focus:outline-none w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-[#CFA767] p-3 focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-[#CFA767] p-3 focus:outline-none w-full"
            />
            <textarea
              placeholder="Type a Message"
              className="border border-[#CFA767] p-3 focus:outline-none h-32 w-full"
            ></textarea>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#E6A371] uppercase font-bold text-white px-6 py-2 rounded-md w-full md:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  {/* Footer Section */}
  <footer className="py-8 bg-white flex flex-col justify-center items-center text-center text-sm text-gray-600">
    <div className="mb-5">
      <Image src={footer} alt="image" className="w-20 md:w-32" />
    </div>
    <div className="flex justify-center gap-3 mb-5">
      <Image src={whatsapp} alt="logo" className="w-5 md:w-6" />
      <Image src={In} alt="logo" className="w-5 md:w-6" />
      <Image src={instagram} alt="logo" className="w-5 md:w-6" />
      <Image src={telegram} alt="logo" className="w-5 md:w-6" />
      <Image src={twitter} alt="logo" className="w-5 md:w-6" />
    </div>
    <p className="mb-3 text-[#372011] text-base font-normal">Privacy | Terms | Legal | Cookie Preferences</p>
    <p className="text-[#372011] text-base font-normal">©2020 All Rights Reserved. Koffeekodes® is a registered trademark.</p>
  </footer>
</section>

    </>
  )
}

export default Testimonial
