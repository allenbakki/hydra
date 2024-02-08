'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import map from '../images/Page-1.svg'
import call from '../images/call.svg'
import mail from '../images/mail.svg'
import arrowRight from '../images/chevron-circle-right.svg'
import arrowLeft from '../images/arrowLeft.svg'

export default function Contact() {
  const [state, setState] = useState(1)
  const contactDetails = [
    {
      id: 1,
      name: 'Pay Us a Visit',
      descrition: 'Union St, Seattle, WA 98101, United States',
      img: map,
    },
    {
      id: 2,
      name: 'Give Us a Call',
      descrition: '(110) 1111-1010 ',
      img: call,
    },
    {
      id: 3,
      name: 'Send Us a Message',
      descrition: 'Contact@HydraVTech.com',
      img: mail,
    },
  ]

  const contact = contactDetails.find((item) => item.id === state)

  const increment = () => {
    setState((prevState) =>
      prevState >= contactDetails.length ? 1 : prevState + 1,
    )
  }
  const decrement = () => {
    setState((prevState) =>
      prevState <= 1 ? contactDetails.length : prevState - 1,
    )
  }
  console.log(state)
  return (
    <div className="relative z-10">
      <div className="p-20 pt-[10px]  hidden sm:block ">
        <div className="border rounded-full flex justify-around py-8 bg-gradient-to-r from-[#343045]  via-[#544D78] via-40% to-[#343045]">
          <div className="flex items-center gap-5">
            <div>
              <Image src={map} alt="map" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl">Pay Us a Visit</div>
              <div className="text-sm">
                Union St, Seattle, WA 98101, United States
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div>
              <Image src={call} alt="call" />
            </div>
            <div className="flex flex-col">
              <div>
                <div className="text-2xl">Give Us a Call</div>
                <div className="text-sm">(110) 1111-1010 </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div>
              <Image src={mail} alt="mail" />
            </div>
            <div className="flex flex-col">
              <div>
                <div className="text-2xl">Send Us a Message</div>
                <div className="text-sm">Contact@HydraVTech.com </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden pb-8  ">
        <div className=" flex items-center justify-between  bg-gradient-to-r from-[#343045] px-12 via-[#544D78] via-20% to-[#343045] py-8 border border-cinder-900 rounded-full ">
          <button onClick={decrement} className="hover:scale-95">
            <Image src={arrowRight} alt="mail" />
          </button>
          {contact && (
            <div className="flex items-center gap-1">
              <div>
                <Image src={contact.img} alt="mail" />
              </div>
              <div className="flex flex-col">
                <div>
                  <div className="text-xl">{contact.name}</div>
                  <div className="text-sm">{contact.descrition} </div>
                </div>
              </div>
            </div>
          )}
          <button onClick={increment} className="hover:scale-95">
            <Image src={arrowLeft} alt="mail" />
          </button>
        </div>
      </div>
    </div>
  )
}
