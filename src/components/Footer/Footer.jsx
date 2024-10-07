import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className={'pt-[48px] pr-[100px] pb-[38px] pl-[100px]'}>
        <div className={'flex justify-around items-center'}>
          <div>
            <h3 className={'text-[#000000] text-[24px] pb-[50px] font-bold'}>
              Funiro.
            </h3>
            <h4 className={'text-[#9F9F9F] text-[16px]'}>
              400 University Drive Suite 200 Coral <br /> Gables , <br /> FL
              33134 USA
            </h4>
          </div>
          <div className={'flex items-start justify-around gap-[100px]'}>
            <div className={'flex flex-col gap-[46px]'}>
              <h3
                className={'text-[#9F9F9F] font-medium text-[16px] pb-[28px]'}
              >
                Links
              </h3>
              <a
                href="/"
                className="text-[#000000] cursor-pointer  font-medium text-[16px] "
              >
                Home{' '}
              </a>
              <a
                href="/Shop"
                className="text-[#000000] cursor-pointer font-medium text-[16px]"
              >
                Shop{' '}
              </a>
              <a
                href="/About"
                className="text-[#000000] cursor-pointer font-medium text-[16px]"
              >
                About{' '}
              </a>
              <a
                href="/"
                className="text-[#000000] cursor-pointer font-medium text-[16px]"
              >
                Contact{' '}
              </a>
            </div>

            <div className={'flex flex-col gap-[46px]'}>
              <h3
                className={'text-[#9F9F9F] font-medium text-[16px] pb-[28px]'}
              >
                Help
              </h3>
              <h3 className="text-[#000000] cursor-pointer  font-medium text-[16px] ">
                Payment Options{' '}
              </h3>
              <h3
                href="/Shop"
                className="text-[#000000] cursor-pointer font-medium text-[16px]"
              >
                Returns{' '}
              </h3>
              <h3
                href="/About"
                className="text-[#000000] cursor-pointer font-medium text-[16px]"
              >
                Privacy Policies{' '}
              </h3>
            </div>
            <div className={'flex flex-col gap-[46px]'}>
              <h3
                className={'text-[#9F9F9F] font-medium text-[16px] pb-[28px]'}
              >
                Newsletter
              </h3>
              <div className={'flex items-center gap-[38px]'}>
                <div className={'flex gap-4'}>
                  <input
                    className={
                      'text-[#9F9F9F] text-[16px] border-b-[2px] outline-none font-medium'
                    }
                    type="text"
                    placeholder={'Enter Your Email Address'}
                  />
                  <div>
                    <button className={'text-[#000000] font-medium'}>
                      SUBSCRIBE
                    </button>
                    <hr className={'w-[75px] h-[4px]'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
