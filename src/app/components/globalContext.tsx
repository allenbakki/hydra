'use client'
import React, { useRef, useContext, createContext, RefObject } from 'react'

const GlobalContext = createContext({})

export default function GlobalContextProvider({ children }: any) {
  const about = useRef(null)
  const services = useRef(null)
  const technology = useRef(null)
  const howto = useRef(null)

  const scrollsection = (eleRef: any) => {
    if (eleRef && eleRef.current) {
      window.scrollTo({
        top: eleRef.current.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div>
      <GlobalContext.Provider
        value={{ about, services, technology, howto, scrollsection }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
