import React from 'react'
import ProductList from '../../components/productList/ProductList'

function ProductsPage({ addToCart, decreaseCartBalance, increaseCartBalance }) {
  return (
    <div className="products-page">
      <ProductList 
        addToCart={ addToCart }
        decreaseCartBalance={ decreaseCartBalance }
        increaseCartBalance={ increaseCartBalance }
      />
    </div>
  )
}

export default ProductsPage
