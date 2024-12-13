import React, { useEffect, useState } from "react";
import ProductCard from "./CardProduct";
const Clothing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:7005/api/products");
        if (!response.ok) {
          throw new Error("Failed");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.product_name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      )
    );
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;

  return (
    <div className="container">
      <h2 className="text-center my-4">Store</h2>

      {/* Search Bar */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-75 mx-auto"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Product Cards */}
      <div className="row">
        {currentItems.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart} // Pass add-to-cart handler
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination text-center my-4">
        <button
          className="btn btn-primary me-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= filteredProducts.length}
        >
          Next
        </button>
      </div>

      {/* Footer____________ Section */}
      {/* <footer className="bg-light py-3 muted text-white">
        <div className="container text-center">
          {cart.length === 0 ? (
            <p>Your cart is empty</p> ) : (
  <>  <h5>Items in Cart:</h5>
 <ul className="list-unstyled">
{cart.map((item, index) => (
   <li key={index}>
    {item.product_name} - ${item.price.toFixed(2)}
  </li>))}
  </ul>
  </>)}
  </div>
</footer> */}
{/* Footer Section */}
<footer className="footer">
  <div className="container text-center text-white">
    {cart.length === 0 ? (
      <p className="footer-empty">Your cart is empty</p>
    ) : (
      <>
        <h5 className="footer-title">Items in Cart:</h5>
        <ul className="list-unstyled footer-cart-list">
          {cart.map((item, index) => (
            <li key={index} className="footer-cart-item">
              {item.product_name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </>
    )}
    <p className="footer-copy">
      &copy; {new Date().getFullYear()} Your E-commerce Store. All rights reserved.
    </p>
  </div>
</footer>

</div>
 );
};

export default Clothing