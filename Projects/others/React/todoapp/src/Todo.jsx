import React, { useState, useEffect } from 'react';

const App = () => {
  // Mock product data
  const PRODUCTS = [
    { id: 1, name: 'Product A', brand: 'Nike', color: 'Red', size: 'Medium', price: 100 },
    { id: 2, name: 'Product B', brand: 'Adidas', color: 'Blue', size: 'Large', price: 80 },
    { id: 3, name: 'Product C', brand: 'Nike', color: 'Green', size: 'Small', price: 120 },
    { id: 4, name: 'Product D', brand: 'Adidas', color: 'Red', size: 'Medium', price: 150 },
    { id: 5, name: 'Product E', brand: 'Apple', color: 'Blue', size: 'Large', price: 200 },
    { id: 6, name: 'Product F', brand: 'Apple', color: 'Green', size: 'Medium', price: 250 },
    { id: 7, name: 'Product G', brand: 'Nike', color: 'Yellow', size: 'Small', price: 110 },
    { id: 8, name: 'Product H', brand: 'Adidas', color: 'Purple', size: 'Large', price: 90 },
    { id: 9, name: 'Product I', brand: 'Apple', color: 'Red', size: 'Medium', price: 130 },
    { id: 10, name: 'Product J', brand: 'Nike', color: 'Blue', size: 'Large', price: 140 },
  ];

  // State hooks
  const [products, setProducts] = useState(PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 500]);

  // Dynamically get the available options for brands, colors, and sizes
  const getUniqueValues = (field) => {
    return [...new Set(products.map((product) => product[field]))];
  };

  // Available filter options
  const availableBrands = getUniqueValues('brand');
  const availableColors = getUniqueValues('color');
  const availableSizes = getUniqueValues('size');

  // Handle brand checkbox change
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Handle color checkbox change
  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // Handle size checkbox change
  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Handle price range change
  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
  };

  // Filter products based on selected criteria
  const filterProducts = () => {
    let filtered = [...products];

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand));
    }

    // Filter by selected colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) => selectedColors.includes(product.color));
    }

    // Filter by selected sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) => selectedSizes.includes(product.size));
    }

    // Filter by selected price range
    filtered = filtered.filter(
      (product) => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
    );

    setFilteredProducts(filtered);
  };

  // Apply filters whenever criteria change
  useEffect(() => {
    filterProducts();
  }, [selectedBrands, selectedColors, selectedSizes, selectedPriceRange]);

  // Dynamically update dependent filters based on selected options
  const getAvailableOptions = () => {
    let filtered = [...products];

    // Filter by selected filters
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand));
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) => selectedColors.includes(product.color));
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) => selectedSizes.includes(product.size));
    }

    return {
      availableColors: getUniqueValues('color').filter((color) =>
        filtered.some((product) => product.color === color)
      ),
      availableSizes: getUniqueValues('size').filter((size) =>
        filtered.some((product) => product.size === size)
      ),
      availableBrands: getUniqueValues('brand').filter((brand) =>
        filtered.some((product) => product.brand === brand)
      ),
    };
  };

  const { availableColors: filteredColors, availableSizes: filteredSizes, availableBrands: filteredBrands } =
    getAvailableOptions();

  return (
    <div>
      <h1>Product Filter</h1>

      {/* Filters Section */}
      <div>
        <h3>Brands</h3>
        {filteredBrands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <div>
        <h3>Colors</h3>
        {filteredColors.map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>

      <div>
        <h3>Sizes</h3>
        {filteredSizes.map((size) => (
          <label key={size}>
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />
            {size}
          </label>
        ))}
      </div>

      <div>
        <h3>Price Range</h3>
        <label>
          <input
            type="radio"
            name="priceRange"
            checked={selectedPriceRange[0] === 0 && selectedPriceRange[1] === 500}
            onChange={() => handlePriceRangeChange([0, 500])}
          />
          $0 to $500
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            checked={selectedPriceRange[0] === 0 && selectedPriceRange[1] === 100}
            onChange={() => handlePriceRangeChange([0, 100])}
          />
          Under $100
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            checked={selectedPriceRange[0] === 100 && selectedPriceRange[1] === 200}
            onChange={() => handlePriceRangeChange([100, 200])}
          />
          $100 to $200
        </label>
        <label>
          <input
            type="radio"
            name="priceRange"
            checked={selectedPriceRange[0] === 200 && selectedPriceRange[1] === 500}
            onChange={() => handlePriceRangeChange([200, 500])}
          />
          $200 to $500
        </label>
      </div>

      {/* Products Table */}
      <div>
        <h3>Filtered Products</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.color}</td>
                <td>{product.size}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
