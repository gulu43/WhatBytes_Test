import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Product_Context } from './App';
import './hp.css'

export function HomePage() {
    const product_details = useContext(Product_Context);
    const [maxPrice, setMaxPrice] = useState(300);
    const [categoryRadio, setCategoryRadio] = useState('all');
    const [inpSearch, setInpSearch] = useState('');


    // console.log(product_details[15].id);

    useEffect(() => {

        console.log(inpSearch);

    }, [inpSearch])


    return (
        <>

            {/* top div */}
            <div className='div-main'>
                <div className="logo-div">
                    <img src="./src/assets/logo.png" className="logo" alt="Logo" />
                </div>
                <div>
                    <input type="text" id="search" placeholder='Search for products...' className='inp-search' onChange={(e) => {
                        setInpSearch(e.target.value)
                    }} />
                </div>
                <div className='cart-div'>
                    <span className='cart-wapper'>
                        <span className='cart-img'>
                            <img src="./src/assets/cart.png" alt="Cart" />
                        </span>
                        <button className='btn-cart'>Cart</button>
                    </span>

                </div>
            </div>

            {/* body */}
            <div className='main-body'>

                <div className='left-main'>
                    <div className='filter-div'>
                        <div className='heading'>Filters</div>
                        <div className='heading'>Category</div>
                        <div className='radio-labels'>
                            <label>
                                <input type="radio" name="category" value="all" onClick={(e) => {
                                    setCategoryRadio(e.target.value)
                                }} defaultChecked />
                                All
                            </label>
                            <label>
                                <input type="radio" name="category" value="electronics" onClick={(e) => {
                                    setCategoryRadio(e.target.value)
                                }} />
                                Electronics
                            </label>
                            <label>
                                <input type="radio" name="category" value="clothings" onClick={(e) => {
                                    setCategoryRadio(e.target.value)
                                }} />
                                Clothing
                            </label>
                            <label>
                                <input type="radio" name="category" value="home" onClick={(e) => {
                                    setCategoryRadio(e.target.value)
                                }} />
                                Home
                            </label>
                        </div>
                        <div className='heading'>Price</div>
                        <input type="range" className='inp-range' name="price" value={maxPrice} min="0" max="1000" step="1" onInput={(e) => { setMaxPrice(e.target.value) }} />
                        <div>Max: {maxPrice}</div>
                    </div>

                </div>

                <div className='rigth-main'>
                    <span className='Listing-txt'>{'Product Listing'}</span>
                    <div className='rigth-main-safe-area' >
                        {inpSearch != '' ? (
                            product_details
                                .filter((item) => (item.product_name.toLowerCase().includes( inpSearch.toLowerCase() ) ))
                                .map((item) => (
                                        <div key={item.id} className="card">


                                            <div className="card-image-holder">
                                                <img src={`/assets/${item.product_image}`} alt={item.product_name} />
                                            </div>
                                            <div className="txt-card">
                                                <div>{item.product_name}</div>
                                                <div>${item.product_price}</div>
                                                <div>Rating {item.product_rating}</div>
                                            </div>
                                            <button>Add to Cart</button>
                                        </div>

                                ))
                            ) :
                            ( product_details
                                .filter((item) => {
                                    // Category filter
                                    const categoryMatch =
                                        categoryRadio === "all" || item.product_category === categoryRadio;

                                    // Price filter
                                    const priceMatch = item.product_price <= maxPrice;


                                    return categoryMatch && priceMatch;
                                })
                                .map((item) => (
                                    <div key={item.id} className="card">


                                        <div className="card-image-holder">
                                            <img src={`/assets/${item.product_image}`} alt={item.product_name} />
                                        </div>
                                        <div className="txt-card">
                                            <div>{item.product_name}</div>
                                            <div>${item.product_price}</div>
                                            <div>Rating {item.product_rating}</div>
                                        </div>
                                        <button>Add to Cart</button>
                                    </div>

                                )))}
                    </div>

                </div>
            </div>

            <div className="footer">
                <div>
                    <div className="heading-footter">Filters</div>
                    <div>All Items</div>
                    <div>&copy; 2025 WhatBytes</div>
                </div>
                <div>
                    <div className="heading-footter">About Us</div>
                    <div>About Us</div>
                    <div>Contact</div>
                </div>
                <div>
                    <div className="heading-footter">Follow Us</div>
                    <div>
                        <img src="./src/assets/footer-logo.png" className="footer-img" alt="logo" />
                    </div>
                </div>
            </div>

        </>
    );
}