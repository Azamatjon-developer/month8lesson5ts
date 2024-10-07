import React from 'react'

const Home = () => {
  return (
    <div>
      <div className={'bg-hero-background bg-cover h-[90vh] relative'}>
        <div
          className={
            'absolute w-[643px] h-[443px] bg-[#FFF3E3] top-[153px] left-[759px] rounded-[10px] pt-[62px] pl-[42px] pb-[37px] pr-[30px]'
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
            Discover Our <br /> New Collection
          </h3>
          <p
            className={
              'text-[18px] text-[#333333] tracking-normal font-medium pb-[46px]'
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className={"mb-10"}>
            <button
              className={
                'pt-[25px] pb-[25px] pl-[72px] pr-[72px] text-white font-bold text-[16px] rounded-sm cursor-pointer bg-[#B88E2F]'
              }
            >
              {' '}
              BUY NOW{' '}
            </button>
          </div>
        </div>
      </div>
      <div className={"pt-[59px] pb-[63px] text-center"}>
        <h2 className={"text-[#333333] font-bold text-[32px] pb-[8px]"}>Browse The Range</h2>
        <p className={"text-[#666666] font-normal text-center text-[20px]"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default Home
