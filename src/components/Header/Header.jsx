'use client'
import Image from 'next/image';
import Logo from '@/app/assets/Images/Logo.png';

const Header = () => {
  return (
    <div>
      <div className="container my-[30px]">
        <Image src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;