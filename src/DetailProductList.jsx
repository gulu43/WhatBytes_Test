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


    function increaseQuantity() {
        setProducts(prev =>
            prev.map(item =>
                item.id === product.id
                    ? { ...item, quantity_by_user: item.quantity_by_user + 1 }
                    : item
            )
        );
    };


    function decreaseQuantity() {
        setProducts(prev =>
            prev.map(item =>
                item.id === product.id
                    ? { ...item, quantity_by_user: Math.max(1, item.quantity_by_user - 1) }
                    : item
            )
        );
    };

    return (
        <>
            <div className="product-detail">
                <div className='left-main-DetailProduct'>
                    <div className='img_cont'>
                        <img className='img_detail' src={`/assets/${product.product_image}`} alt={product.product_name} />
                    </div>
                </div>
                <div className='right-main-DetailProduct'>
                    <div className='header-dp'>{product.product_name}</div>
                    <div className='price-dp'>${product.product_price}</div>
                    <div className='rating-dp'>Rating: {product.product_rating}</div>
                    <div className='discription-db'>{product.product_description}</div>
                    <div className='cetegory-dp'> Category: {product.product_category}</div>
                    <div className='quentity-control-div'>
                        <div className='quantity-txt'>Quantity: </div>
                        <button className='btn-var' onClick={increaseQuantity}>+</button>
                        <div className='quentity-dp'>{product.quantity_by_user}</div>
                        <button className='btn-var' onClick={decreaseQuantity}>-</button>
                    </div>
                    <div className='remove-dp'>
                        <div className='remove-txt'>Remove</div>
                        <button className='btn-del' onClick={() => {
                            setProducts(prevProducts =>
                                prevProducts.map(item =>
                                    item.id === product.id
                                        ? { ...item, quantity_by_user: 0, inCart: false }
                                        : item
                                )
                            );
                        }}>Click</button>
                    </div>
                    

                </div>

            </div>
        </>
    );
}