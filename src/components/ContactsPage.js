import React from 'react'

export const ContactsPage = () => {
  return (
    <div className='ContactPage' id='contacts'>
        <div className='ContactPage-header'>
            <p className='ContactPage-info'>Send me a message!
            </p>
        </div>

        <div className='Form-Container'>
    
            <form className='Message-form' action="https://formsubmit.co/surrojozel@gmail.com" method="POST">
                <label for="Name">Name</label>
                <input type='text' required id='Name' name='name' className='input'/>
               
                <label for="Email">Email</label>
                <input type='email' required id='Email' name="email" className='input'/>
                
                <label for="Message">Message</label>
                <textarea id='Message' required name='message' rows={3} cols={50} className='input' placeholder='Shoot me a message!'/>

                <button type='submit' id='mybtn' className='mybtn'>Submit</button>
            </form>
  
        </div>

        <hr className='styled-hr'/>

        <div className='Footer-container'>
            <p className='Footer-info'>Jozel Surro Copyright 2023</p>
            <p className='Footer-info'>Made with React, CSS, Javascript and HTML</p>
        </div>




    </div>
  )
}
