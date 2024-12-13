import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing Font Awesome Icons

const About = () => {
  return (
    <div style={styles.container}>
      <h1 className="animate__animated animate__fadeIn animate__delay-1s" style={styles.heading}>
        About Us
      </h1>

      <div className="animate__animated animate__fadeIn animate__delay-2s" style={styles.profileContainer}>
        <img
          src="image.jpg" // Replace with your image path
          alt="Developer"
          className="animate__animated animate__zoomIn animate__delay-3s" // Animation for profile image
          style={styles.profileImage}/>
        
<div style={styles.info}>
<h2 className="animate__animated animate__fadeIn animate__delay-4s" style={styles.name}>
      Shahab Dad</h2>
 <p className="animate__animated animate__fadeIn animate__delay-5s" style={styles.role}>
  Full Stack Developer
</p>
<p className="animate__animated animate__fadeIn animate__delay-6s" style={styles.email}>
            Email: shahabdad@gmail.com </p>

  <p className="animate__animated animate__fadeIn animate__delay-7s" style={styles.bio}>
 I am a Full Stack Developer with experience in creating
 scalable website . I specialize in both front-end and back-end
 technologies, and I enjoy building seamless user experiences. I am dedicated
 to continuous learning and enhancing my skills.
 </p>

 <div style={styles.socialIcons}>
<a href="https://github.com/shahabdad" target="_blank" rel="noopener noreferrer">
              <FaGithub style={styles.icon} /> </a>
<a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
  <FaLinkedin style={styles.icon} /></a>
  <a href="mailto:shahabdad@gmail.com"><FaEnvelope style={styles.icon} /></a>
          </div>
        </div>
      </div>
    </div>)};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#333',
    fontWeight: 'bold',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ddd',
  },
  info: {
    textAlign: 'center',
  },
  name: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: '1.2rem',
    color: '#888',
  },
  email: {
    fontSize: '1.1rem',
    color: '#555',
  },
  bio: {
    fontSize: '1rem',
    color: '#444',
    marginTop: '20px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#333',
    transition: 'color 0.3s ease',
  },
};

export default About;
