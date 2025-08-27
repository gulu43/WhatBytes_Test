import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Product_Context } from './App';
import './cartCSS.css';

// export function Cart() {

//   const { products, setProducts } = useContext(Product_Context);

//   // function increaseQuantity(productId) {
//   //   setProducts(prev =>
//   //     prev.map(item =>
//   //       item.id === productId
//   //         ? { ...item, quantity_by_user: item.quantity_by_user + 1 }
//   //         : item
//   //     )
//   //   );
//   // };


//   // function decreaseQuantity(productId) {
//   //   setProducts(prev =>
//   //     prev.map(item =>
//   //       item.id === productId
//   //         ? { ...item, quantity_by_user: Math.max(1, item.quantity_by_user - 1) }
//   //         : item
//   //     )
//   //   );
//   // };
//   // // inside your component
//   // const removeFromCart = (productId) => {
//   //   setProducts(prevProducts =>
//   //     prevProducts.map(item =>
//   //       item.id === productId
//   //         ? { ...item, quantity_by_user: 0, inCart: false }
//   //         : item
//   //     )
//   //   );
//   // };

//   return (
//     <>
//       <div className='main-cart'>
//         {
//           products.filter((item) => (
//             item.inCart == true
//           ))
//             .map((item) => (
//               <div key={item.id} className='card-of-cart'>
//                 <div className="card-image-holder">
//                   <img src={`/assets/${item.product_image}`} alt={item.product_name} />
//                 </div>
//                 <div className="txt-card">
//                   <div>{item.product_name}</div>
//                   <div>${item.product_price}</div>
//                   <div>Rating {item.product_rating}</div>
//                 </div>
//                 {/* <div className='quentity-control-div'>
//                   <div className='quantity-txt'>Quantity: </div>
//                   <button className='btn-var' onClick={()=> increaseQuantity(item.id)}>+</button>
//                   <div className='quentity-dp'>{item.quantity_by_user}</div>
//                   <button className='btn-var' onClick={()=> decreaseQuantity(item.id)}>-</button>
//                 </div>
//                 <div className='remove-dp'>
//                         <div className='remove-txt'>Remove</div>
//                         <button className='btn-rm-cart' onClick={()=> removeFromCart(item.id)}>Click</button>
//                 </div> */}
//               </div>
//             ))
//         }
//       </div>
//     </>
//   );
// }
export function Cart() {
  const { products, setProducts } = useContext(Product_Context);
  return (
    <>
      <div>Cart Items</div>
      <div>Already included all features in detail list</div>
    </>
  )
}