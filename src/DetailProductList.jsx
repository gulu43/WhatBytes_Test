import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Product_Context } from './App';
import './Dp.css'

export function DetailProductList() {
    return (
        <>
        {/* top div */}
            <div className='div-main'>
                <div>Logo</div>
                <div> 
                    <input type="text" id="search" placeholder='Search for products...' />
                </div>
                <div>
                    <button>Cart</button>
                </div>
            </div>
        </>
    );
}