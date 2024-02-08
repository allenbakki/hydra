import React from 'react'
import Image from 'next/image'
import burrontoSpecs from '../images/spec.png'
import { FaArrowRight } from 'react-icons/fa6'
import vector1 from '../images/Vector 1.svg'
import vector2 from '../images/Vector 2.svg'
import vector3 from '../images/Vector 3.svg'
import vector4 from '../images/Vector 4.svg'
import rectangel from '../images/Rectangle 4.svg'
import { StaticImageData } from 'next/image'

const image4: StaticImageData = burrontoSpecs

export default function DiveIntoBody() {
  return (
    <div className=" flex md:flex md:justify-around md:flex-row  md:pt-1 items-center flex-col-reverse gap-5 ">
      <div className="md:text-4xl text-3xl flex flex-col relative z-10 gap-3 md:gap-0">
        <div className="flex gap-2 items-center ">
          <div className=" text-[#C0B7E8] md:text-6xl text-5xl">Dive</div>
          <div className="text-3xl md:text-6xl self-end">Into The Depths</div>
        </div>
        <div className="flex gap-2 md:items-center md:justify-normal justify-center ">
          <div className="text-3xl md:text-6xl self-end">Of</div>
          <div className=" text-[#C0B7E8] md:text-6xl text-5xl">
            Virtual Reality
          </div>
        </div>
        <br />
        <div className="text-lg hidden sm:block ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore
          <br /> nisl tincidunt eget. Lectus mauris eros in vitae .
        </div>
        <br className="hidden sm:block" />
        <div className="flex items-center md:justify-normal justify-center gap-3">
          <button className=" relative z-10 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:p-2 sm:p-3 p-4 md:px-6  px-16 rounded-full text-slate-900 text-lg sm:px-20 ">
            BUILD YOUR WORLD
          </button>
          <div className="hidden sm:block">
            <FaArrowRight size="" />
          </div>
        </div>
      </div>
      <div className="relative md:pt-0 pt-10">
        <Image src={rectangel} alt="img" className="h-80 md:h-[480px]" />
        <div className="absolute md:top-10 z-10 md:left-3 top-14 right-16   h-72 w-80 border md:h-[410px] md:w-[500px]  md:rounded-[100px] md:rounded-bl-[250px] overflow-hidden  rounded-[50px] rounded-bl-[150px]">
          <Image
            src={image4}
            alt="img"
            className="  h-72  w-80  md:h-[410px] md:w-[500px]  object-fill "
          />
        </div>
      </div>
      <Image
        src={vector1}
        alt="imd"
        className="absolute md:top-20 z-0 right-0 2xl:right-[150px] 2xl:top-24 h-2/3 top-16 md:h-full"
      />
      <Image
        src={vector2}
        alt="imd"
        className="absolute z-0 md:left-2/3 h-2/3 top-3 right-4 md:h-full"
      />
      <Image
        src={vector3}
        alt="imd"
        className="absolute z-0 md:bottom-3 md:right-0 h-60 top-64 md:top-96 md:left-1/5  md:h-3/5"
      />
      <Image
        src={vector4}
        alt="imd"
        className="absolute z-0 left-0 bottom-12 2xl:left-12 hidden sm:block"
      />
    </div>
  )
}
