import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setEmail, clearEmail } from './Component/userSlice';
import Table from './Component/Table';
import Home from './Home';
import About from './About';
import Login from './Component/Login';
import Contact from './Contact';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Electronics from './Component/sidebar/Electronics';
import Clothing from './Component/sidebar/Clothing';
import HomeKitchen from './Component/sidebar/HomeKitchen';
import Books from './Component/sidebar/Books';
import Sports from './Component/sidebar/Stor';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation(); 

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      dispatch(setEmail(email));
      setIsLoggedIn(true);
    }
  }, [dispatch]);

  const handleLogin = () => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      dispatch(setEmail(email));
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    dispatch(clearEmail());
    setIsLoggedIn(false);
  };

  // Animation Variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div style={styles.appContainer}>
      {/* Sidebar is always visible */}
      <Sidebar />
      <div style={styles.mainContent}>
        <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        {/* AnimatePresence ensures animations work for routes */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* General Routes */}
            <Route
              path="/"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                  <Contact />
                </motion.div>
              }
            />
            
            {isLoggedIn ? (
              <Route
                path="/table"
                element={
                  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                    <Table />
                  </motion.div>
                }
              />
            ) : (
              <Route path="/table" element={<Navigate to="/login" />} />
            )}

            {!isLoggedIn ? (
              <Route
                path="/login"
                element={
                  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                    <Login onLogin={handleLogin} />
                  </motion.div>
                }
              />
            ) : (
              <Route path="/login" element={<Navigate to="/" />} />
            )}

            {/* Sidebar Category Routes */}
            <Route
              path="/electronics"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                  <Electronics />
                </motion.div>
              }
            />
            <Route
              path="/clothing"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                  <Clothing />
                </motion.div>
              }
            />
            <Route
              path="/home-kitchen"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                  <HomeKitchen />
                </motion.div>
              }
            />
            <Route
              path="/books"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                  <Books />
                </motion.div>
              }
            />
            <Route
              path="/sports"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                  <Sports />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
  },
  mainContent: {
    marginLeft: '150px',
    padding: '10px',
    flex: 1,
  },
};

export default App;
