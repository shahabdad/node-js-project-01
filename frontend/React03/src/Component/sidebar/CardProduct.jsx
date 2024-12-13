// // // import React from "react";

// // // const ProductCard = ({ product, handleAddToCart }) => {
// // //   return (
// // //   <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
// // // <div className="card h-100">
// // // <img  src={product.image}className="card-img-top product-image" alt={product.product_name} />
// // //         <div className="card-body">
// // //           <h5 className="card-title">{product.product_name}</h5>
// // //  <p className="card-text">Brand: {product.brand}</p>
// // //     <p className="card-text">Category: {product.category}</p>
// // //     <p className="card-text">Price: ${product.price.toFixed(2)}</p>
// // //  <p className="card-text">Quantity: {product.quantity}</p>
// // //   <button className="btn btn-primary"  onClick={() => handleAddToCart(product)} >
// // //             Add to Cart
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductCard;


// // import React from "react";
// // import { FaCartPlus } from "react-icons/fa"; // Importing cart icon

// // const ProductCard = ({ product, handleAddToCart }) => {
// //   return (
// //     <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
// //       <div className="card h-100">
// //         <img
// //           src={product.image}
// //           className="card-img-top product-image"
// //           alt={product.product_name}
// //         />
// //         <div className="card-body">
// //           <h5 className="card-title">{product.product_name}</h5>
// //           <p className="card-text">Brand: {product.brand}</p>
// //           <p className="card-text">Category: {product.category}</p>
// //           <p className="card-text">Price: ${product.price.toFixed(2)}</p>
// //           <button
// //             className="btn btn-primary d-flex align-items-center justify-content-center"
// //             onClick={() => handleAddToCart(product)}
// //           >
// //             <FaCartPlus className="me-2" /> Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;


// import React from "react";
// import { FaCartPlus } from "react-icons/fa"; 

// const ProductCard = ({ product, handleAddToCart }) => {
//   return (
//     <div className="col-sm-6 col-md-4 col-lg-3 mb-4  ">
//       <div className="card h-100 shadow">
//         <img
//           src={product.image}
//           className="card-img-top product-image"
//           alt={product.product_name}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{product.product_name}</h5>
//           <p className="card-text">Brand: {product.brand}</p>
//           <p className="card-text">Category: {product.category}</p>
//           <p className="card-text">Price: ${product.price.toFixed(2)}</p>
//           <p className="card-text-profession">Profession: {product.profession}</p>
//           <button
//             className="btn btn-primary d-flex align-items-center justify-content-center mt-3"
//             onClick={() => handleAddToCart(product)}
//           >
//             <FaCartPlus className="me-2" /> Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product, handleAddToCart }) => {
  const price = typeof product.price === "number" ? product.price.toFixed(2) : "N/A";

  return (
    <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={product.image}
          className="card-img-top product-image"
          alt={product.product_name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.product_name}</h5>
          <p className="card-text">Brand: {product.brand || "Unknown"}</p>
          <p className="card-text">Category: {product.category || "Unknown"}</p>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text-profession">Profession: {product.profession || "N/A"}</p>
          <button
            className="btn btn-primary d-flex align-items-center justify-content-center mt-3"
            onClick={() => handleAddToCart(product)}
          >
            <FaCartPlus className="me-2" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

