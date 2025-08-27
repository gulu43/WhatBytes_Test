import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Product_Context } from './App';
import './cartCSS.css';

export function Cart() {
  const { products, setProducts } = useContext(Product_Context);
  return (
    <>
      <div>Cart Items</div>
      <div>Already included all features in detail list</div>
    </>
  )
}