import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Product_Context } from './App';
import './detailProductListCSS.css'

export function DetailProductList() {
    const { id } = useParams();
    const { products, setProducts } = useContext(Product_Context);

    const product = products.find(p => p.id === parseInt(id)); // find product by id

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <>
            <div className="product-detail">
                <div className='left-main-DetailProduct'>
                    <div className='img_cont'>
                        <img className='img_detail' src={`/assets/${product.product_image}`} alt={product.product_name} />
                    </div>
                </div>
                <div className='right-main-DetailProduct'>
                    <div>{product.product_name}</div>
                    <div>${product.product_price}</div>
                    <div>Rating: {product.product_rating}</div>
                    <div>{product.product_description}</div>
                    <div> Category: {product.product_category}</div>
                    <button>Add to Cart</button>
                    
                </div>
                
            </div>
        </>
    );
}