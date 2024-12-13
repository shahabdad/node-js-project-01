// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('userEmail', email);
//     localStorage.setItem('userPassword', password);
//     onLogin();
//   };

//   return (
//     <form onSubmit={handleSubmit} style={style.form}>
//       <div style={style.wrapper}>
//         <div style={style.formContainer}>
//           <h2>Login</h2>
//           <div style={style.inputGroup}>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={style.input}
//             />
//           </div>
//           <div style={style.inputGroup}>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={style.input}
//             />
//           </div>
//           <button type="submit" style={style.button}>
//             Login
//           </button>
//         </div>

//         <div style={style.imageContainer}>
//           <img
//             src="e-commerce.webp"
//             alt="Login illustration"
//             style={style.image}
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// const style = {
//   form: {
//     maxWidth: '900px',
//     margin: '0 auto',
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//   },
//   formContainer: {
//     flex: '1',
        // maxWidth: '400px',
//     marginRight: '20px',
//   },
//   inputGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: '15px',
//   },
//   input: {
//     padding: '8px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   imageContainer: {
//     flex: '1',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//   },
//   button: {
//     backgroundColor: '#28a745',
//     color: '#fff',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginTop: '20px',
//   },
//   // Media query for responsiveness
//   '@media (max-width: 768px)': {
//     wrapper: {
//       flexDirection: 'column',
//     },
//     imageContainer: {
//       marginTop: '20px',
//     },
//   },
// };



// '@media (max-width: 768px)': {
//     wrapper: {
//       flexDirection: 'column', // Stack form and image vertically on smaller screens
//       alignItems: 'center',
//     },
//     formContainer: {
//       marginRight: '0',
//       width: '100%',
//     },
//     imageContainer: {
//       marginTop: '20px', // Add space when the image is below the form
//     },
//   },
// };

// export default Login;
