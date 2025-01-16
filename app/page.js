"use client"
import React from 'react'
import Header from "@/Components/Header"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const page = () => {
  useGSAP(()=>{
    gsap.from("p",{
      x:-1000,
      stagger:0.3,
      duration:2
    })
    gsap.from("#image",{
      x:1000,
      duration:2
    })
  })
  return (
    <>
    <Header />
    <div id='intro'>
      <div id="text">
        <p>Lorem ipsum dolor</p>
        <p>sit amet, consectetur adipiscing</p>
        <p>prgrt paro fres elit.</p>
        </div>
        <div id="image">
        <img src="/Designer.jpeg" alt='picture' id='pic1'/>
        </div>
    </div>
    </>
  )
}

export default page