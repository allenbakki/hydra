import React from 'react'
import Image from 'next/image'
import vector7 from '../images/Vector 7.svg'
import vector8 from '../images/Vector 8.svg'
import person from '../images/pexels-shvets-production-7562014 1.png'
import arrowLine from '../images/Component 1.svg'

export default function AboutHydra() {
  return (
    <div>
      <div className="relative flex flex-col items-center md:flex-row  justify-center ">
        <div className="md:relative hidden sm:block">
          <Image src={vector7} alt="vector line7" />
          <Image src={vector8} alt="vector line7" />
        </div>

        <div className="md:absolute top-1 w-full mt-10 md:mt-20 md:flex md:justify-around flex flex-col md:flex-row   items-center justify-center   ">
          <div className="  overflow-hidden md:w-[350px] w-[350px] h-[370px] md:h-[370px] rounded-bl-[50px] rounded-tl-[150px] rounded-br-[150px] rounded-tr-[50px]   ">
            <Image src={person} alt="img" className="  object-fill   " />
          </div>
          <div className="flex flex-col md:flex  ">
            <div className="md:text-5xl text-3xl  hidden sm:block">ABOUT</div>
            <div className="md:text-5xl font-thin text-3xl  hidden sm:block">
              HYDRA VR
            </div>
            <br />
            <div className="md:text-base text-sm md:p-0 p-2 hidden sm:block ">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              <br />
              mattis rhoncus urna neque viverra eget arcu dictum. Ultrices
              gravida
              <br /> dictum fusce ut placerat orci. Aenean et tortor at risus
              viverra adipiscing at in.
              <br /> Mattis aliquam faucibus purus in massa. Est placerat in
              egestas erat imperdiet <br />
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam <br />
              etiam erat velit scelerisque in dictum non consectetur a. Laoreet
              sit amet <br />
              cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
              nulla pha <br />
              retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
              sollicitudi
              <br /> n tempor.
            </div>
            <div className="md:text-base text-sm md:p-0 p-4 block sm:hidden">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra eget arcu dictum. Ultrices
              gravida dictum fusce ut placerat orci. Aenean et tortor at risus
              viverra adipiscing at in. Mattis aliquam faucibus purus in massa.
              Est placerat in egestas erat imperdiet sed. Consequat semper
              viverra nam libero justo laoreet sit amet. Aliquam etiam erat
              velit scelerisque in dictum non consectetur a. Laoreet sit amet
              cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
              nulla pha retra diam sit amet nisl suscipit adipiscing bibendum.
              Leo a diam sollicitudi n tempor.
            </div>
            <br />
            <div className=" flex justify-center md:justify-normal">
              <button className=" bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:p-2  p-4 md:px-5 px-16  rounded-full text-slate-900 text-lg">
                LETS GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-around md:mt-[100px] mt-10 items-center ">
          <div className="flex ">
            <div className=" flex flex-col gap-3 md:gap-0 items-center md:items-baseline">
              <div className="md:text-5xl sm:text-3xl text-3xl ">WHY BUILD</div>
              <div className="text-3xl md:text-5xl sm:text-3xl font-thin flex items-center gap-2 ">
                {' '}
                WITH HYDRA?
                <div className="self-end hidden sm:block">
                  <Image src={arrowLine} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat
            <br /> nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
            mauris commodo <br />
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
            tellus. Ornare
            <br /> lectus sit amet est placerat in. Lectus magna fringilla urna
            porttitor rhoncus vitae. <br /> lectus sit amet est placerat in.
            Lectus magna fringilla urna porttitor rhoncus vitae.
          </div>
        </div>
      </div>
    </div>
  )
}
