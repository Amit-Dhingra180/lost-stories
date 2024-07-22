import React, { useState } from 'react';
const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
 
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {selectedProduct ? (
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full">
          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-4 text-blue-500"
          >
            Back to Products
          </button>
          <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
          <p className="text-xl mb-4">{selectedProduct.price}</p>
          <p className="text-gray-700">Here are more details about the product...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-red-500 text-white p-4 rounded-lg cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-lg">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
