import React ,{useState}from 'react'
import axios from 'axios'

export const ContactsPage = () => {


  const [formData , setFormData] = useState({
    name:"",
    email:"",
    message:"",
  });


  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormData({...formData, [name] : value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
        const response = await axios.post('http://localhost:3001/submit', formData);
        alert('Message sent successfully!');
        console.log(response.data);
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send the message.');
    }
};





  return (
    <div className='ContactPage' id='contacts'>
        <div className='ContactPage-header'>
            <p className='ContactPage-info'>Send me a message!
            </p>
        </div>

        <div className='Form-Container'>
    
            <form className='Message-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type='text' required id='name' name='name' onChange={handleChange} value={formData.name} className='input'/>
               
                <label htmlFor="email">Email</label>
                <input type='email' required id='email' name="email" onChange={handleChange} value={formData.email} className='input'/>
                
                <label htmlFor="message">Message</label>
                <textarea id='message' onChange={handleChange} value={formData.message} required name='message' rows={3} cols={50} className='input' placeholder='Shoot me a message!'/>

                <button type='submit' id='mybtn' className='mybtn'>Submitt</button>
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
