import Header from '@/Components/Header'
import React from 'react'

const Home = () => {
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

export default Home