import React from 'react'
import Image from 'next/image'
import arrowLine from '../images/Component 1.svg'

export default function WhyBuildHydra() {
  return (
    <div className="flex md:justify-around justify-center  items-center ">
      <div className="flex ">
        <div className=" flex flex-col gap-2 items-center md:items-baseline ">
          <div className="md:text-5xl sm:text-3xl text-3xl ">HOW WE BUILD</div>
          <div className="text-3xl md:text-5xl sm:text-3xl font-thin flex items-center gap-2">
            WITH HYDRA VR?
            <div className="self-end hidden sm:block">
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
