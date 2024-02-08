import React from 'react'

export default function HydraForm() {
  return (
    <div className=" relative z-10 flex justify-center w-full md:mt-40 mt-20 md:p-0 p-5">
      <div className=" md:h-[700px] md:max-w-[1200px] 2xl:max-w-[1600px] w-full h-full rounded-[100px] radial-gradient pb-5  ">
        <div className="flex flex-col gap-5 items-center mt-5">
          <div className="md:text-5xl text-3xl border-b border-slate-200  pb-5  ">
            JOIN HYDRA
          </div>
          <div className="md:text-4xl font-thin text-xl">
            Let’s Build Your VR Experience
          </div>
        </div>
        <div className="md:flex  md:flex-row flex flex-col gap-5 w-full items-center justify-center mt-10">
          <input
            type="text"
            className="rounded-full outline-none bg-[#343045] 2xl:max-w-[600px] xl:max-w-[400px] sm:w-full w-[350px] md:h-10 md:p-8 p-3 border-2 border-slate-200"
            placeholder="First Name"
          />
          <input
            type="text"
            className="rounded-full outline-none bg-[#343045] 2xl:max-w-[600px] xl:max-w-[400px] sm:w-full w-[350px] md:h-10 md:p-8 p-3 border-2 border-slate-200"
            placeholder="Last Name"
          />
        </div>
        <div className="md:flex  md:flex-row flex flex-col gap-5 w-full items-center justify-center mt-5">
          <input
            type="email"
            className="rounded-full outline-none bg-[#343045] 2xl:max-w-[600px] xl:max-w-[400px] sm:w-full w-[350px] md:h-10 md:p-8 p-3 border-2 border-slate-200"
            placeholder="Email"
          />
          <input
            type="text"
            className="rounded-full outline-none bg-[#343045] 2xl:max-w-[600px] xl:max-w-[400px] sm:w-full w-[350px] md:h-10 md:p-8 p-3 border-2 border-slate-200"
            placeholder="Phone Number"
          />
        </div>
        <div className="flex flex-col gap-5 w-full items-center justify-center mt-5 p-3">
          <input
            type="text"
            className="rounded-full outline-none bg-[#343045] 2xl:max-w-[1240px] xl:max-w-[820px] sm:w-full w-[350px] md:h-10 md:p-8 p-3 border-2 border-slate-200"
            placeholder="Subject"
          />
          <textarea
            className="rounded-xl outline-none bg-[#343045] 2xl:max-w-[1240px] xl:max-w-[820px]  sm:w-full w-[350px] h-40 p-3 flex items-start border-2 border-slate-200"
            placeholder="Tell us about it.."
          />
        </div>
        <div className="flex justify-center md:mt-1 mt-5">
          <button className=" bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] md:p-2  p-4 md:px-6  px-16 rounded-full text-slate-900 text-lg  ">
            SEND TO HYDRA
          </button>
        </div>
      </div>
    </div>
  )
}
