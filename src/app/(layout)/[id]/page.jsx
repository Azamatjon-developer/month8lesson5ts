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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="flex flex-col items-center">
          <Image
            src={singleData.images?.[0] || '/placeholder-image.jpg'}
            alt={singleData.title}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-800">{singleData.title}</h1>
          <p className="text-gray-600 mt-2 text-center">{singleData.description}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">
            Price: ${singleData.price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
