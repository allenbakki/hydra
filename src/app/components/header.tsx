'use client'

import React from 'react'
import Image from 'next/image'
import hydra from '../images/Hydra.svg'
import hamburgerButton from '../images/Hamburger-Button.svg'
import { useGlobalContext } from './globalContext'

export default function Header() {
  const {
    services,
    about,
    technology,
    howto,
    scrollsection,
  }: any = useGlobalContext()

  return (
    <div className="flex items-center md:justify-around sm:justify-between pt-2 md:pt-0 justify-between">
      <div className="flex items-center gap-0  md:gap-2">
        <Image src={hydra} alt="hydra logo" className="md:h-40 h-20" />
        <div className="text-[#C0B7E8] md:text-4xl font-serif text-2xl">
          HYDRA
        </div>
      </div>
      <div className="sm:hidden pr-2">
        <Image src={hamburgerButton} alt="hamburger button" />
      </div>
      <div className="hidden items-center gap-5 sm:flex cursor-pointer ">
        <div onClick={() => scrollsection(about)}>ABOUT</div>
        <div onClick={() => scrollsection(services)}>SERVICES</div>
        <div onClick={() => scrollsection(technology)}>TECHNOLOGIES</div>
        <div onClick={() => scrollsection(howto)}>HOW TO</div>
      </div>
      <div className="hidden items-center gap-5 sm:flex">
        <button className="border border-slate-200 p-2 px-6 rounded-full">
          CONTACT US
        </button>
        <button className=" bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] p-2 px-6 rounded-full text-slate-900">
          JOIN HYDRA
        </button>
      </div>
    </div>
  )
}
