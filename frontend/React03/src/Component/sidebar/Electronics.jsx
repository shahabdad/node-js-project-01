import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Electronics.css';

const Electronics = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); 

  useEffect(() => {
    axios
      .get('http://localhost:7005/api/electronics')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter the data based on the search query
  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search?.toLowerCase() || '')
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <h1>✨ Product Showcase ✨</h1>
        <p>Discover the best products tailored for you!</p>
      </header>

      {/* Search Bar */}
      <aside className="app-aside">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <FaSearch className="search-icon" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="app-main">
        <div className="container">
          <div className="row">
            {currentItems.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 mb-4">
                <div className="card product-card">
                  {/* Product Image */}
                  <img
                    src={item.image_url || 'https://via.placeholder.com/150'}
                    alt={item.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <span className="price">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Pagination */}
      <nav className="pagination text-center my-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="btn btn-primary me-2"
        >
          <FaArrowLeft /> Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="btn btn-primary ms-2"
        >
          Next <FaArrowRight />
        </button>
      </nav>

      {/* Footer Section */}
      <footer className="app-footer text-center py-3">
        <p>&copy; {new Date().getFullYear()} Product Showcase. All rights reserved.</p>
        <p>
          Built with ❤️ by <a href="mailto:shahabdad@gmail.com">Shahab Dad</a>.
        </p>
      </footer>
    </div>
  );
};

export default Electronics;