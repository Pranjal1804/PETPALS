"use client"
import React from 'react'
import Header from "@/Components/Header"
import { useGSAP } from '@gsap/react'
import About from "@/Components/About"
import Contact from "@/Components/Contact"
import gsap from 'gsap'
const page = () => {
  useGSAP(()=>{
    gsap.from("#intro1",{
      x:-1000,
      stagger:0.3,
      duration:1
    })
    gsap.from("#image",{
      x:1000,
      duration:2
    })
    gsap.from("#about",{
      x:-2000,
      duration:2,
      scrollTrigger:{
        trigger:"#about"
      },
      delay:1.8,
      start:"top top"
    })
  })
  return (
    <>
    <div id='intro'>
      <div id="text">
        <p id='intro1'>Lorem ipsum dolor</p>
        <p id='intro1'>sit amet, consectetur adipiscing</p>
        <p id='intro1'>prgrt paro fres elit.</p>
        </div>
        <div id="image">
        <img src="/Designer.jpeg" alt='picture' id='pic1'/>
        </div>
    </div>
    <About />
    <Contact />
    </>
  )
}

export default page