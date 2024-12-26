import React from 'react'
import Navbar from '@/components/Navbar'
import Herosection from '@/components/Herosection'
// import Feacture from '@/components/Feacture'
import Testimonial from '@/components/Testimonial'
function page() {
  return (
    <>
      <Navbar/>
      <Herosection/>
      {/* <Herosection/> */}
      <Testimonial/>
      {/* <Feacture/> */}
    </>
  )
}

export default page
