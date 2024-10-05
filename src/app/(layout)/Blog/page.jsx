import React from 'react'
import brand from "../../../../public/assets/Images/Brand.png"
import Image from 'next/image'
const Contact = () => {
  return (
    <div>
      <div className={"bg-shop-background bg-cover h-[80vh] flex flex-col items-center justify-center "}>
        <Image src={brand} alt={"brand"}/>
        <h2 className={"text-[#000000] text-[48px] font-medium"}>Blog</h2>
        <p>Blog  Contact </p>
      </div>
    </div>
  )
}

export default Contact
