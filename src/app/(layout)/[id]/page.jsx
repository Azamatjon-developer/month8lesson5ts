'use client'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'

const About = ({ params }) => {
  const [singleData, setSingleData] = useState([])

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => setSingleData(res.data))
  }, [params.id])

  return (
    <div className="container mt-[80px] mx-auto">
      <div className="w-full">
        <div className="flex gap-[60px] mb-[140px] bg-white shadow-2xl w-[90%] h-[60vh] rounded-lg p-8">
          <div className="bg-[#F9F1E7] p-6 rounded-lg">
            <Image
              src={singleData.images?.[0] || '/placeholder-image.jpg'}
              alt={singleData.title}
              width={423}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-[#333333] text-[42px] font-semibold mb-4">
              {singleData.title}
            </h2>
            <h3 className="text-[24px] mb-2">
              Price:
              <span className="text-[#9F9F9F] ml-2">${singleData.price}</span>
            </h3>
            <h3 className="text-[24px] text-[#FFC700] mb-2">
              Rating: {singleData.rating}
            </h3>
            <p className="text-[#666666] text-[18px] leading-relaxed mb-4">
              {singleData.description}
            </p>
            <h3 className="text-[18px] text-[#999999]">
              Return Policy: {singleData.returnPolicy}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
