import React from 'react'

const Home = () => {
  return (
    <div>
      <div className={'bg-hero-background bg-cover h-[90vh] relative'}>
        <div
          className={
            'absolute w-[643px] h-[443px] bg-[#FFF3E3] top-[153px] left-[759px] rounded-[10px] py-[62px] px-[40px]'
          }
        >
          <h2
            className={
              'text-[16px] text-[#333333] tracking-normal font-semibold pb-[5px]'
            }
          >
            New Arrival
          </h2>
          <h3
            className={
              'text-[52px] text-[#B88E2F] tracking-wider font-bold pb-[17px]'
            }
          >
            Discover Our New Collection
          </h3>
          <p
            className={
              'text-[18px] text-[#333333] tracking-normal font-medium pb-[46px]'
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button
            className={
              'py-[25px] px-[72px] text-white font-bold text-[16px] rounded-sm cursor-pointer bg-[#B88E2F]'
            }
          >
            {' '}
            BUY NOW{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
