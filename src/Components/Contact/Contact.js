import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import msg_icon_1 from '../../assets/msg_icon_1.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2fe5bf21-7327-4fb4-b9c3-26e34a8dfbe1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className='contact_col'>
        <h3>Send us a message <img src={msg_icon} alt=''/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={msg_icon_1} alt='msg_icon_1'/> bhargav.raju.p@gmail.com</li>
            <li><img src={phone_icon} alt='phone_icon'/> 01223456897</li>
            <li><img src={location_icon} alt='location_icon'/> USA, 800 Boylston Street, Suite 2475, Boston, MA 02199</li>
        </ul>
      </div>
      <div className='contact_col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your Phone Number' required />
            <label>Write your Message Hear</label>
            <textarea name='message' rows='6' placeholder='Enter you Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt='white_arrow'/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
