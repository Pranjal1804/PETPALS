"use client"
import Header from '@/Components/Header'
import React from 'react'
import { useGSAP } from '@gsap/react'
import About from "@/Components/About"
import gsap from 'gsap'
const Home = () => {
  useGSAP(()=>{
    gsap.from("#intro1",{
      x:-1000,
      stagger:0.3,
      duration:2
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
    <Header />
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
    </>
  )
}

export default Home