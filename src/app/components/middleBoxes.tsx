'use client'

import React, { useState } from 'react'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import outdoor from '../images/outdoor.png'
import simulation from '../images/simulation.png'
import selfCare from '../images/selfCare.png'
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/chevron-small-down.svg'

import education from '../images/education.png'
import { useGlobalContext } from './globalContext'

const image: StaticImageData = education
const image1: StaticImageData = simulation
const image2: StaticImageData = outdoor
const image3: StaticImageData = selfCare

interface MiddleBoxesProps {
  name: string
  img: StaticImageData
  length: number
  setStates: React.Dispatch<React.SetStateAction<number>>
  states: number
}

function MiddleBoxes({
  name,
  img,
  length,
  setStates,
  states,
}: MiddleBoxesProps) {
  const increment = () => {
    setStates((states) => (states >= length ? 1 : states + 1))
  }
  const decrement = () => {
    setStates((states) => (states <= 1 ? length : states - 1))
  }
  return (
    <div className=" ">
      <div className="relative border h-[500px] w-[300px] rounded-[40px] flex flex-col justify-center items-center gap-5 radial-gradient">
        <div className="border rounded-full h-40 w-40 overflow-hidden">
          <Image src={img} alt="img" className="object-fill" />
        </div>

        <div className="border-b border-b-slate-200 pb-3 text-3xl">{name}</div>

        <div className="text-[12px]">
          Vitae sapien pellentesque habitant morbi
          <br />
          nunc. Viverra aliquet porttitor rhoncus <br />
          libero justo laoreet sit amet vitae.
        </div>
        <br />
        <button className=" bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:p-2 sm:p-3 p-4 md:px-6  px-14 rounded-full text-slate-900 text-lg sm:px-10">
          TRY IT NOW{' '}
        </button>

        <button
          className="border p-1 px-3 rounded-full bg-[#c0b7e8] absolute -left-4 hover:scale-95 block sm:hidden"
          onClick={decrement}
        >
          <Image src={arrowLeft} alt="arrow" className="mt-2 " />
        </button>
        <button
          className="border  rounded-full bg-[#c0b7e8] absolute -right-4 hover:scale-95 block sm:hidden"
          onClick={increment}
        >
          <Image src={arrowRight} alt="arrow" className="" width={40} />
        </button>
      </div>
    </div>
  )
}

export default function BoxesData() {
  const { services }:any = useGlobalContext()

  const [states, setStates] = useState(1)

  const Data = [
    {
      id: 1,
      name: 'SIMULATION',
      img: image1,
    },
    {
      id: 2,
      name: 'EDUCATION',
      img: image,
    },
    {
      id: 3,
      name: 'OUTDOOR',
      img: image2,
    },
    {
      id: 4,
      name: 'SELF-CARE',
      img: image3,
    },
  ]
  const dataBox = Data.find((item) => item.id === states)

  return (
    <div>
      <div
        ref={services}
        className="hidden md:flex md:justify-evenly justify-evenly sm:block"
      >
        <div className="flex gap-6 mt-20">
          {Data &&
            Data.map((item, index) => {
              const { name, img } = item
              return (
                <MiddleBoxes
                  key={index}
                  name={name}
                  img={img}
                  length={Data.length}
                  setStates={setStates}
                  states={states}
                />
              )
            })}
        </div>
      </div>
      <div className=" sm:hidden mt-10 w-full  flex  justify-center ">
        <div className="flex justify-center gap-1">
          {dataBox && (
            <MiddleBoxes
              name={dataBox.name}
              img={dataBox.img}
              length={Data.length}
              setStates={setStates}
              states={states}
            />
          )}
        </div>
      </div>
    </div>
  )
}
