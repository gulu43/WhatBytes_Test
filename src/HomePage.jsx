import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Product_Context } from './App';
import './hp.css'

export function HomePage() {
    return (
        <>
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
            </>
        </>
    );
}