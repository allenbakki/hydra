import React from 'react'
import Image from 'next/image'
import vector15 from '../images/Vector 15.svg'
import eclipse from '../images/Ellipse 7.svg'
import arrowRight from '../images/arrow-small-right.svg'
import { FaArrowRight } from 'react-icons/fa6'
import arrowLeft from '../images/arrow-left.svg'
import arrowRight2 from '../images/chevron-small-down.svg'

export default function Flowchart() {
  return (
    <div className="relative mt-20">
      <div className="relative md:flex items-center justify-center pt-5 pb-14 hidden sm:block">
        <Image src={vector15} alt="vector" />
      </div>
      <div className="hidden sm:block">
        <div className="absolute top-2 flex  justify-evenly w-full">
          <div className="relative">
            <Image src={eclipse} alt="vector" />

            <div className="absolute top-5 left-5">
              <div className=" rounded-full bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] p-4 w-40 h-40 flex items-center justify-center text-5xl text-[#343045] font-extrabold shadow-inherit">
                01
              </div>
            </div>
            <div className="flex items-center  mt-6 ">
              <div>
                <Image src={arrowRight} alt="vector" />
              </div>
              <div className="text-xl flex self-end">
                3D Conception <br />& Design
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image src={eclipse} alt="vector" />

              <div className="absolute top-5 left-5  rounded-full bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] p-4 w-40 h-40 flex items-center justify-center text-5xl text-[#343045]  font-extrabold shadow-inherit">
                02
              </div>
            </div>

            <div className="flex items-center mt-6 ">
              <div>
                <Image src={arrowRight} alt="vector" />
              </div>
              <div className="text-xl flex self-end">
                Interaction <br />
                Design
              </div>
            </div>
          </div>{' '}
          <div>
            <div className="relative">
              <Image src={eclipse} alt="vector" />
              <div className="absolute top-5 left-5  rounded-full bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] p-4 w-40 h-40 flex items-center justify-center text-5xl text-[#343045]  font-extrabold shadow-inherit">
                03
              </div>
            </div>

            <div className="flex items-center mt-6 ">
              <div>
                <Image src={arrowRight} alt="vector" />
              </div>
              <div className="text-xl">
                VR World <br />
                User Testing
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image src={eclipse} alt="vector" />
              <div className="absolute top-5 left-5  rounded-full bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] p-4 w-40 h-40 flex items-center justify-center text-5xl text-[#343045]  font-extrabold shadow-inherit">
                04
              </div>
            </div>

            <div className="flex items-center mt-6 ">
              <div>
                <Image src={arrowRight} alt="vector" />
              </div>
              <div className="text-xl">
                Hydra VR <br />
                Deploy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden  ">
        <div className="flex flex-col items-center">
          <div className="relative ">
            <Image src={eclipse} alt="vector" />

            <div className="absolute top-5 left-5">
              <div className=" rounded-full bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] p-4 w-40 h-40 flex items-center justify-center text-5xl text-[#343045] font-extrabold shadow-inherit">
                01
              </div>
            </div>
            <div className="flex items-center  mt-6  justify-center ">
              <div className="relative flex justify-evenly">
                <button className="border p-1.5 px-3.5 rounded-full bg-[#c0b7e8]  absolute -left-24 hover:scale-95 block sm:hidden">
                  <Image src={arrowLeft} alt="arrow" className="mt-2 " />
                </button>
                <div className="text-xl flex self-end ">
                  3D Conception <br />& Design
                </div>
                <button className="border  rounded-full bg-[#c0b7e8] p-1  absolute -right-24 hover:scale-95 block sm:hidden">
                  <Image
                    src={arrowRight2}
                    alt="arrow"
                    className=""
                    width={40}
                    height={10}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
