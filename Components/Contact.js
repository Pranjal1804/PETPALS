import React from 'react'

const page = () => {
  return (
    <>
    <div id='contact_form_header'>
        Contact Us
    </div>
    <div id='form'>
    <div id='contact_form'>
        <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" /><br></br>
        <label htmlFor="messg">Message</label>
        <input type="text" id="messg" name="messg" />  
        </form>
        <div id='sendbutton'>
        <a href='#send'><button id='sb' type='button'>Send</button></a>
    </div>
    </div>
    </div>
    </>
  )
}

export default page