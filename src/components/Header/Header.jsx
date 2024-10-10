'use client'
import Image from 'next/image'
import Logo from '../../../public/assets/Images/Logo.png'
import user from '../../../public/assets/Images/user.svg'
import search from '../../../public/assets/Images/search.svg'
import heart from '../../../public/assets/Images/heart.svg'
import basket from '../../../public/assets/Images/basket.svg'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import '../../i18n'

const Header = () => {
  let { t, i18n } = useTranslation()
  const [lange, setLange] = useState('en')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('i18nextLng') || 'en'
      setLange(storedLang)
      i18n.changeLanguage(storedLang)
    }
  }, [i18n])

  const handleLanguageChange = (lang) => {
    setLange(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18nextLng', lang)
    }
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <div className="container my-[30px] flex justify-around items-center">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-[75px]">
          <Link className={'text-black text-[16px] font-medium'} href="/">
            {t('navbar.Home')}
          </Link>
          <Link className={'text-black text-[16px] font-medium'} href="/Shop">
            {t('navbar.Shop')}
          </Link>
          <Link className={'text-black text-[16px] font-medium'} href="/Blog">
            {t('navbar.Blog')}
          </Link>
          <Link
            className={'text-black text-[16px] font-medium'}
            href="/Contact"
          >
            {t('navbar.Contact')}
          </Link>
        </div>
        <div className={'flex items-center gap-[45px] cursor-pointer'}>
          <Image src={user} alt={'user'} />
          <Image src={search} alt={'search'} />
          <Image src={heart} alt={'heart'} />
          <Image src={basket} alt={'basket'} />
        </div>
        <div className={'flex gap-10'}>
          <Link className={'text-black text-[16px] font-medium'} href="/Login">
            {t('navbar.Login')}
          </Link>
          <Link className={'text-black text-[16px] font-medium'} href="/SignUp">
            {t('navbar.SignUp')}
          </Link>
        </div>
        <div className="bg-[# B88E2F]">
          <select
            onClick={(e) => handleLanguageChange(e.target.value)}
            name=""
            id=""
          >
            <option value="en">English </option>
            <option value="uz">Uzbek </option>
            <option value="ru">Russian </option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Header
