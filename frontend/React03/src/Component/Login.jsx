import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    onLogin(); // Call the parent function to set login state
  };

  return (
    <div style={style.pageWrapper}>
      <form onSubmit={handleSubmit} style={style.form}>
        <div style={style.wrapper}>
          {/* Image on the left */}
          <div style={style.imageContainer}>
            <img
              src="e-commerce.webp" // Replace with your image URL
              alt="Login illustration"
              style={{ ...style.image, animation: 'fadeIn 1.5s forwards' }} // Apply animation here
            />
          </div>

          {/* Form fields container on the right */}
          <div style={style.formContainer}>
            {/* Welcome Paragraph */}
            <p style={style.paragraph}>
              Welcome to our e-commerce platform! Please log in to continue shopping and exploring our exciting products.
            </p>

            {/* Instruction Paragraph */}
            <p style={style.paragraph}>
              Enter your email and password to access your account. If you don't have an account yet, feel free to sign up!
            </p>

            {/* Input Group for Email */}
            <div style={style.inputGroup}>
              <label style={style.label}>
                <FontAwesomeIcon icon={faEnvelope} style={style.icon} /> Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={style.input}
              />
            </div>

            {/* Input Group for Password */}
            <div style={style.inputGroup}>
              <label style={style.label}>
                <FontAwesomeIcon icon={faLock} style={style.icon} /> Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={style.input}
                // autoComplete="current-password"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" style={style.button}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const style = {
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f0f0f0',
    padding: 0,
    margin: 0,
  },
  form: {
    width: '80%',
    maxWidth: '1200px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
  },
  formContainer: {
    flex: '1',
    maxWidth: '500px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    fontWeight: '800',
    marginBottom: '8px',
    color: '#ffcc00', // Yellow
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    fontSize: '16px',
  },
  imageContainer: {
    flex: '1',
    minWidth: '250px',
    maxWidth: '60%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    opacity: 0,
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    transition: 'background-color 0.3s',
  },
  icon: {
    marginRight: '8px',
    color: '#000', // Black color for icons
  },
  paragraph: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '20px',
    lineHeight: '1.5',
  }
};

// Add CSS animation globally in your app (style.css or similar)
const fadeInAnimation = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export default Login;
