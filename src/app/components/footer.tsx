import React from 'react'
import Image from 'next/image'
import hydra from '../images/Hydra.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import facebook from '../images/facebook.svg'
import printrest from '../images/pinterest.svg'
import insta from '../images/instagram.svg'
import youtube from '../images/youtube.svg'
import vector19 from '../images/Vector 19.svg'
import vector18 from '../images/Vector 18.svg'

export default function Footer() {
  return (
    <div className="relative ">
      <div className="md:flex md:justify-evenly mt-20 relative z-10 flex flex-col sm:flex-row  ">
        <div className=" flex justify-center md:flex md:justify-around">
          <Image src={hydra} alt="hydra logo" className="h-[200px] size-40 " />
        </div>

        <div className="border-r border-transparent w-1 linear-gradient "></div>
        <div className="md:flex md:flex-col md:justify-around hidden sm:block ">
          <div> ABOUT</div>
          <div> SERVICES</div>
          <div> TECHNOLOGIES</div>
          <div> HOW TO</div>
          <div> JOIN HYDRA</div>
        </div>
        <div className="border-r border-transparent w-1 linear-gradient "></div>

        <div className="md:flex md:flex-col md:justify-around hidden sm:block ">
          <div className="flex">F.A.Q </div>
          <div>SITEMAP </div>
          <div> CONDITIONS </div>
          <div> LICENSES</div>
        </div>
        <div className="border-r border-transparent w-1 linear-gradient  hidden sm:block"></div>

        <div className=" flex flex-col items-center md:flex md:items-baseline">
          <div>SOCIALIZE WITH HYDRA</div>
          <div className="flex gap-5">
            <Image src={facebook} alt="hydra logo" className="h-40" />
            <Image src={twitter} alt="hydra logo" className="h-40" />
            <Image src={linkedin} alt="hydra logo" className="h-40" />
            <Image src={youtube} alt="hydra logo" className="h-40" />
            <Image src={insta} alt="hydra logo" className="h-40" />

            <Image src={printrest} alt="hydra logo" className="h-40" />
          </div>
          <button className=" bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:p-2 sm:p-3 p-4 md:px-6  px-16 rounded-full text-slate-900 text-lg sm:px-20 ">
            BUILD YOUR WORLD
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 p-3 ">
        <div className="border-b-4 border-none  2xl:w-[1600px] xl:w-[1200px] lg:w-[1100px]  md:w-[1000px] sm:w-[500px] w-80 h-1 flex justify-center items-center linear-gradient-footer "></div>
        <div className="flex  pt-10 pb-10  items-center justify-center  p-10 ">
          2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
        </div>
        <Image
          src={vector19}
          alt="vector19"
          className="absolute z-0  bottom-[335px]"
        />
        <Image
          src={vector18}
          alt="vector19"
          className="absolute z-0  bottom-[155px]"
        />
      </div>
    </div>
  )
}
