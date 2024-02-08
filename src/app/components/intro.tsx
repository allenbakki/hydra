'use client'
import React from 'react'
import Image from 'next/image'
import arrowLine from '../images/Component 1.svg'
import { useGlobalContext } from './globalContext'

export default function Into() {
  const { about }:any = useGlobalContext()
  return (
    <div ref={about} className="flex justify-around items-center mt-10 ">
      <div className="flex ">
        <div className=" flex flex-col gap-2 ">
          <div className="md:text-5xl sm:text-3xl text-3xl ">INTRODUCTION</div>
          <div className="text-3xl md:text-5xl sm:text-3xl font-thin flex items-center gap-2">
            {' '}
            TO HYDRA VR
            <div className=" hidden sm:block     ">
              <Image src={arrowLine} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
        Feugiat
        <br /> nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
        mauris commodo <br />
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
        tellus. Ornare
        <br /> lectus sit amet est placerat in. Lectus magna fringilla urna
        porttitor rhoncus vitae.
      </div>
    </div>
  )
}
