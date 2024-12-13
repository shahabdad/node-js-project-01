import React,{useState} from 'react';
import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
const Contact  =()=>{
  const [formData,setFormData] =useState  ({
    name:'',
    email:'',
    message:'',
  });
  const  [responseMessage ,setResponseMessage] =  useState('');
  const [errorMessage ,setErrorMessage ]  = useState('');
  const  handleChange  =(e) =>{
    setFormData ({...formData,[e.target.name] : e.target.value});
  };
  const  handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:7000/api/contacts',formData);
      setResponseMessage ('Your message has been sent  successfully!');
      setErrorMessage('');
      setFormData({name:'',email:'',message:''});

    }catch(error) {
      setResponseMessage('');
      setErrorMessage('An error  occured. Please try again.');
    }
  };
  return (
    <div className='container contact-container'>
      <header className='text-center mb-4'>
        <h2> Contact Us </h2>
        <p className='text-muted'>
Have  question or need assistance? Reach out  to us  the form below  or through out contact inforrmation.
        </p>
      </header>
<section className='row  mb-5'>
<aside className='col-sm-12 col-md-4 mb-4'>
  <div className='card text-center p-4 h-100'>
    <FontAwesomeIcon icon={faEnvelope} className="mb-3 text-primary" size='2x' />
    <h5>Email</h5>
    <p>ShahabDad50@gmail.com</p>
    
  </div>
</aside>
<aside className='col-sm-12 col-md-4 mb-4 '>
  <div className='card text-center p-4 h-100'>
  {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-3 text-primary" size="2x" /> */}
  <FontAwesomeIcon icon={faPhone} className="mb-3 text-primary" size="2x" />
    <h5 >Phone</h5>
    <p>+92 3191796621</p>
  </div>
</aside>
<aside  className='col-sm-12 col-md-4 mb-4'>
  <div   className='card text-center p-4 h-100'>
  <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-3 text-primary" size="2x" />
  <h5>Address</h5>
  <p> 123 E-commerce St,Mardan City</p>
  </div>
</aside>
</section>
<section>
  <form className='row g-3 ' onSubmit={handleSubmit}>
    <div className='col-smp-12'>
      <label htmlFor='name '  className ='form-lable'>Your name</label>
      <input
      type='text'
      id = 'name'
      name='name'
       className='form-control custom-input '
       placeholder='Enter your name '
       value={formData.name}
       onChange={handleChange}
       required
      /> </div>
      <div  className='col-sm-12'>
        <label htmlFor='email' className='form-label'>Your Email</label>
        <input
        type='email'
        id ='email'
        name='email'
        className='form-control custom-input '
        placeholder='Enter your email'
      value= {formData.email}
      onChange={handleChange}
      required />

      </div>
<div className='col-sm-12'>
  <label htmlFor='message'
  className='from-label'>
    Your Message

  </label>
  <textarea
  id = 'message '
  name='message'
  className='form-control custom-textarea'
  placeholder='Write your message '
  value={formData.message}
  onChange={handleChange}
  rows='4'
  required
  ></textarea>
</div>
<div className='col-sm-12'>
  <button type='submit ' className='btn btn-primary  w-100 custom-button'>Send Message  </button>
</div>
  </form>
</section>
    {responseMessage && <p className='text-success mt-3'>{responseMessage}</p>}
    {errorMessage  && <p  className='text-danger mt-3'>{errorMessage}</p>}

    </div>
  )
}
export default Contact;