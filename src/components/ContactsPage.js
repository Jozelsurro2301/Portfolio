import React ,{useState, useEffect}from 'react'
import axios from 'axios'

export const ContactsPage = () => {


// Use when backend is Deployed


//   const [formData , setFormData] = useState({
//     name:"",
//     email:"",
//     message:"",
//   });


//   const handleChange = (e) =>{
//     const {name , value} = e.target;
//     setFormData({...formData, [name] : value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); 
//     try {
//         const response = await axios.post('http://localhost:3001/submit', formData);
//         alert('Message sent successfully!');
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error sending message:', error);
//         alert('Failed to send the message.');
//     }
// };


const [showModal, setShowModal] = useState(false);

useEffect(() => {
  // Check if the URL has the success parameter
  const params = new URLSearchParams(window.location.search);
  if (params.get('success')) {
    console.log("Detected")
    setShowModal(true);
  }

  console.log("Not Detected")
}, []);

const closeModal = () => {
  setShowModal(false);
  // Optionally clean the query parameter to avoid reopening the modal
  window.history.replaceState(null, '', window.location.pathname);
};




  return (
    <div className='ContactPage' id='contacts'>
        <div className='ContactPage-header'>
            <p className='ContactPage-info'>Send me a message!
            </p>
        </div>

        <div className='Form-Container'>
    
            {/* Use when Backend is deployed */}

            {/* <form className='Message-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type='text' required id='name' name='name' onChange={handleChange} value={formData.name} className='input'/>
               
                <label htmlFor="email">Email</label>
                <input type='email' required id='email' name="email" onChange={handleChange} value={formData.email} className='input'/>
                
                <label htmlFor="message">Message</label>
                <textarea id='message' onChange={handleChange} value={formData.message} required name='message' rows={3} cols={50} className='input' placeholder='Shoot me a message!'/>

                <button type='submit' id='mybtn' className='mybtn'>Submitt</button>
            </form> */}

            <form className='Message-form' action='https://formsubmit.co/surrojozel@gmail.com' method='POST' >
                <label htmlFor="name">Name</label>
                <input type='text' required id='name' name='name'  className='input'/>
               
                <label htmlFor="email">Email</label>
                <input type='email' required id='email' name="email"  className='input'/>
                
                <label htmlFor="message">Message</label>
                <textarea id='message' required name='message' rows={3} cols={50} className='input' placeholder='Shoot me a message!'/>


                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://jozelsurro2301.github.io/Portfolio/?success=true"/>
            
                <input type="hidden" name="_template" value="table"></input>

                <button type='submit' id='mybtn' className='mybtn'>Submitt</button>
            </form>


             {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>Message submitted successfully! I'll get back to you soon.</p>
              <button onClick={closeModal} className="close-modal-btn">
                Close
              </button>
            </div>
          </div>
         )}

        </div>




        <hr className='styled-hr'/>

        <div className='Footer-container'>
            <p className='Footer-info'>Jozel Surro Copyright 2023</p>
            <p className='Footer-info'>Made with React, CSS, Javascript and HTML</p>
        </div>




    </div>
  )
}
