import { useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Product_Context } from './App';
import './hp.css'

export function HomePage() {

    const [maxPrice, setMaxPrice] = useState(0);

    return (
        <>

            {/* top div */}
            <div className='div-main'>
                <div>
                    <img src="./src/assets/logo.png" alt="Logo" />
                </div>
                <div>
                    <input type="text" id="search" placeholder='Search for products...' className='inp-search' />
                </div>
                <div className='cart-div'>
                    <span className='cart-wapper'>
                        <span className='cart-img'>
                            <img src="./src/assets/cart.png" alt="" />
                        </span>
                        <button className='btn-cart'>Cart</button>
                    </span>

                </div>
            </div>


            <div className='main-body'>

                <div className='left-main'>
                    <div className='filter-div'>
                        <div className='heading'>Filters</div>
                        <div className='heading'>Category</div>
                        <div className='radio-labels'>
                            <label>
                                <input type="radio" name="category" value="All" />
                                All
                            </label>
                            <label>
                                <input type="radio" name="category" value="Electronics" />
                                Electronics
                            </label>
                            <label>
                                <input type="radio" name="category" value="Clothing" />
                                Clothing
                            </label>
                            <label>
                                <input type="radio" name="category" value="Home" />
                                Home
                            </label>
                        </div>
                        <div className='heading'>Price</div>
                        <input type="range"  className='inp-range' name="price" value={maxPrice} min="0" max="1000" step="1" onInput={(e) => {setMaxPrice(e.target.value)} }/>
                        <div>Max: {maxPrice}</div>
                    </div>

                </div>

                <div className='rigth-main'> 
                    <span className='Listing-txt'>{'Product Listing'}</span>
                    <div className='rigth-main-safe-area' >

                    </div>
                </div>
            </div>

        </>
    );
}