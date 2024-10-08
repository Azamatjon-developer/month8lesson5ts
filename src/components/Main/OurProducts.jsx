'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const OurProducts = () => {
  const [ourData, setOutData] = useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=8')
      .then((res) => setOutData(res.data.products))
  }, [])

  return (
    <div className=" py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {ourData?.map((item) => (
          <Link href={`./${item.id}`}

            key={item.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={item.images[0]}
              alt={item.title}
              width={285}
              height={301}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title.substring(0, 12)}...
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Category: {item.category}
              </p>
              <p className="text-lg text-[#FF7F50] mt-2 font-semibold">
                $ {item.price}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[20px] text-[#3A3A3A]">
                  Rating: {item.rating}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OurProducts
