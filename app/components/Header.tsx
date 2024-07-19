import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-fit py-2 flex flex-col font-semibold justify-center items-center text-extraxs'>
      <Link href="/">
        <Image src="/logo.svg" width={150} height={30} alt='Kostume' className='py-1 pb-4'/>
      </Link>
      <div className='flex gap-8'>
        <Link href="/">#47AW24</Link>
        <Link href="/">#46SS24</Link>
        <Link href="/">MEN</Link>
        <Link href="/">WOMEN</Link>
        <Link href="/">WILD OBJECT</Link>
      </div>
    </div>
  )
}

export default Header