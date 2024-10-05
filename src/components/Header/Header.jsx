'use client'
import Image from 'next/image'
import Logo from '@/app/assets/Images/Logo.png'
import user from '@/app/assets/Images/user.svg'
import search from '@/app/assets/Images/search.svg'
import heart from '@/app/assets/Images/heart.svg'
import basket from '@/app/assets/Images/basket.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container my-[30px] flex justify-around items-center">
      <div className="">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex items-center gap-[75px]">
        <Link className={'text-black text-[16px] font-medium'} href="/">
          Home
        </Link>
        <Link className={'text-black text-[16px] font-medium'} href="/Shop">
          Shop{' '}
        </Link>
        <Link className={'text-black text-[16px] font-medium'} href="/About">
          About
        </Link>
        <Link className={'text-black text-[16px] font-medium'} href="/Contact">
          Contact
        </Link>
      </div>
      <div className={'flex items-center gap-[45px] cursor-pointer'}>
        <Image src={user} alt={'user'} />
        <Image src={search} alt={'user'} />
        <Image src={heart} alt={'user'} />
        <Image src={basket} alt={'user'} />
      </div>
    </div>
  )
}

export default Header
