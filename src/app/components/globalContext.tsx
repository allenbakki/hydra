'use client'
import React, { useRef, useContext, createContext, RefObject } from 'react'

const GlobalContext = createContext({})

export default function GlobalContextProvider({ children }: any) {
  const about = useRef<HTMLDivElement | null>(null)
  const services = useRef<HTMLDivElement | null>(null)
  const technology = useRef<HTMLDivElement | null>(null)
  const howto = useRef<HTMLDivElement | null>(null)

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
