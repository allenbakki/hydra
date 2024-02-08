'use client'
import React from 'react'
import Image from 'next/image'
import legs from '../images/legslady.svg'
import Hydra1 from '../images/Hydra-Tech1 1.svg'
import Hydra2 from '../images/Hydra-Tech2 1.svg'
import Hydra3 from '../images/Hydra-Tech3 1.svg'
import Hydra4 from '../images/Hydra-Tech4 1.svg'
import vecttor14 from '../images/Vector 14.svg'
import shape from '../images/shape.svg'
import eclipse from '../images/Ellipse 5.png'
import eclipse2 from '../images/Ellipse 7.svg'
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/chevron-small-down.svg'
import { useGlobalContext } from './globalContext'

export default function FooterLegLady() {
  const { technology }:any = useGlobalContext()
  return (
    <div ref={technology} className="relative md:mt-20 mt-10 p-3">
      <div className="relative md:rounded-full rounded-[40px]   overflow-hidden z-1 flex justify-evenly w-full z-0">
        <Image
          src={legs}
          alt="img"
          className="object-fill md:rounded-full rounded-[40px] "
        />

        <div className="absolute md:top-32  top-5 flex flex-col   md:text-3xl text-xl h-full items-center">
          <div>TECHNOLOGIES & HARDWARE</div>
          <div className="font-thin">USED BY HYDRA VR.</div>
        </div>
      </div>
      {/* <div className="absolute right-2/4 bottom-1/2 top-1/2 z-10">
        <Image src={eclipse} alt="shape" className="relative" />

        <Image src={shape} alt="shape" className="absolute top-7 left-6" />
      </div> */}
      <div className="hidden sm:block">
        <div className="flex justify-evenly">
          <Image src={Hydra1} alt="img" className="object-fill rounded-full" />
          <Image src={Hydra2} alt="img" className="object-fill rounded-full" />
          <Image src={Hydra3} alt="img" className="object-fill rounded-full" />
          <Image src={Hydra4} alt="img" className="object-fill rounded-full" />
        </div>
      </div>
      <div className="block sm:hidden relative">
        <div className="flex justify-evenly">
          <button className="border p-1.5 px-3.5 rounded-full bg-[#c0b7e8]  absolute left-6 top-20 hover:scale-95 block sm:hidden">
            <Image src={arrowLeft} alt="arrow" className="mt-2 " />
          </button>

          <Image
            src={Hydra4}
            alt="img"
            className="object-fill rounded-full"
            height={200}
          />
          <button className="border  rounded-full bg-[#c0b7e8] p-1  absolute right-6 top-20 hover:scale-95 block sm:hidden">
            <Image
              src={arrowRight}
              alt="arrow"
              className=""
              width={40}
              height={10}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
