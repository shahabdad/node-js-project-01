
import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'animate.css'; 
import { FaEnvelope } from 'react-icons/fa'; 

const Home = () => {
  const email = useSelector((state) => state.user.email);


  const products = [
    { Id: 1, name: 'Running Shoes', price: '$20', imageUrl: 'she-2.jpg' },
   { Id: 2, name: 'Beautiful Runner', price: '$30', imageUrl: 'shoes2.webp' },
   { Id: 3, name: 'Elegant Gold Ring', price: '$40', imageUrl: 'she-1.jpg' },
  { Id: 4, name: 'Casual Sneakers', price: '$50', imageUrl: 'big-3.jpg' },
   { Id: 5, name: 'Luxury Handbag', price: '$60', imageUrl: 'pexels-joey-nguy-n-1056657-2113994.jpg' },
    { Id: 6, name: 'Classic Watch', price: '$70', imageUrl: 'pexels-ferarcosn-190819.jpg' }
  ];

  return (
    <div style={styles.container}>
      {/* Bootstrap Carousel___________ Section */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        data-bs-pause="hover"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="super-m.jpeg" className="d-block w-100" alt="Product 1" />
          </div>
          <div className="carousel-item">
            <img src="shoes2.webp" className="d-block w-100" alt="Product 2" />
          </div>
          <div className="carousel-item">
            <img src="big-2.avif" className="d-block w-100" alt="Product 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
      <h1 style={styles.heading}>Welcome</h1>

    
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div  key={product.Id}
            style={styles.productCard}
            className="animate__animated animate__fadeInUp animate__delay-2s" >
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              style={styles.productImage} 
              className="product-image-hover" />
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productPrice}>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Footer _______________*/}
      <footer style={styles.footer}>
        <p>
          <FaEnvelope style={styles.emailIcon} />
          &nbsp; Contact Us: Shahabdad50@gmail.com
        </p>
        {email && (
          <p>
            <FaEnvelope style={styles.emailIcon} />
            &nbsp; Logged in as: <strong>{email}</strong>
          </p>
        )}
      </footer>
    </div>
  );
};


const styles = {
  container: {
    padding: '10px',
    
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    marginTop:"12px",
    color: 'red',
    marginBottom: '30px',
    textAlign: 'center',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
  },
  productCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '5px',
  },
  productPrice: {
    fontSize: '1.2rem',
    color: '#888',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: ' #1c1c1c',
    color: '#fff',
  },
  emailIcon: {
    fontSize: '1.5rem',
    color: '#fff',
  },
};

const additionalStyles = `
.product-image-hover:hover {
  animation-play-state: paused;  
}
`;

export default Home;
