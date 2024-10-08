import React from 'react'

const ShowMore = ({ onClick }) => {
  return (
    <div
      className={'mx-auto flex items-center justify-center pb-[102px]'}
      onClick={onClick}
    >
      <button
        className={
          'text-[#B88E2F] pt-[12px] pb-[12px] pr-[74px] pl-[82px] border border-[#B88E2F] font-semibold'
        }
      >
        Show More
      </button>
    </div>
  )
}

export default ShowMore
