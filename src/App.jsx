import { useState, useEffect  } from 'react';
import { createContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import { DetailProductList } from './DetailProductList';
import { Cart } from './Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

export const Product_Context = createContext()

function App() {

  const product_details = [
    {
      id: 1,
      product_image: "earbuds.png",
      product_category: "electronics",
      product_price: 50,
      product_name: "Wireless Earbuds",
      product_rating: 4.2,
      product_description:
        "Compact wireless earbuds with noise cancellation.\nCrystal-clear sound quality.\nLong-lasting battery life.\nLightweight and comfortable design.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 2,
      product_image: "smartwatch.png",
      product_category: "electronics",
      product_price: 120,
      product_name: "Smart Watch",
      product_rating: 3.8,
      product_description:
        "Stylish smartwatch with fitness tracking.\nHeart rate and sleep monitoring.\nWater-resistant body.\nCompatible with Android and iOS.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 3,
      product_image: "bluetooth-speaker.png",
      product_category: "electronics",
      product_price: 180,
      product_name: "Bluetooth Speaker",
      product_rating: 4.5,
      product_description:
        "Portable Bluetooth speaker with deep bass.\nUp to 12 hours playtime.\nWaterproof and dustproof.\nCompact travel-friendly design.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 4,
      product_image: "tablet.png",
      product_category: "electronics",
      product_price: 350,
      product_name: "Android Tablet",
      product_rating: 4.1,
      product_description:
        "High-resolution display tablet.\nSmooth multitasking performance.\nExpandable storage support.\nPerfect for work and entertainment.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 5,
      product_image: "laptop.png",
      product_category: "electronics",
      product_price: 700,
      product_name: "Laptop",
      product_rating: 4.6,
      product_description:
        "Powerful laptop for everyday use.\nFast processor with SSD storage.\nLightweight and portable.\nIdeal for students and professionals.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 6,
      product_image: "iphone.png",
      product_category: "electronics",
      product_price: 999,
      product_name: "iPhone 14",
      product_rating: 4.9,
      product_description:
        "Latest iPhone with advanced camera.\nSuper Retina display for vivid visuals.\nFast performance with A-series chip.\nPremium build and design.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 7,
      product_image: "tshirt.png",
      product_category: "clothings",
      product_price: 20,
      product_name: "Cotton T-Shirt",
      product_rating: 4.0,
      product_description:
        "Soft cotton t-shirt for casual wear.\nBreathable and lightweight fabric.\nAvailable in multiple colors.\nPerfect for daily use.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 8,
      product_image: "jeans.png",
      product_category: "clothings",
      product_price: 45,
      product_name: "Blue Jeans",
      product_rating: 3.9,
      product_description:
        "Classic blue denim jeans.\nSlim fit and stretchable fabric.\nDurable and long-lasting.\nSuitable for casual and semi-formal wear.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 9,
      product_image: "hoodie.png",
      product_category: "clothings",
      product_price: 60,
      product_name: "Casual Hoodie",
      product_rating: 4.3,
      product_description:
        "Comfortable hoodie for winter.\nSoft fleece lining.\nTrendy and stylish design.\nKeeps you warm and cozy.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 10,
      product_image: "jacket.png",
      product_category: "clothings",
      product_price: 110,
      product_name: "Leather Jacket",
      product_rating: 4.6,
      product_description:
        "Premium leather jacket.\nDurable material with modern fit.\nPerfect for bikers and outings.\nAdds a stylish look.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 11,
      product_image: "dress.png",
      product_category: "clothings",
      product_price: 220,
      product_name: "Evening Dress",
      product_rating: 4.4,
      product_description:
        "Elegant evening dress for special occasions.\nComfortable yet stylish.\nMade with high-quality fabric.\nAvailable in multiple sizes.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 12,
      product_image: "suit.png",
      product_category: "clothings",
      product_price: 500,
      product_name: "Men’s Formal Suit",
      product_rating: 4.7,
      product_description:
        "Classic men’s formal suit.\nPerfect for office and events.\nHigh-quality stitching.\nGives a professional look.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 13,
      product_image: "mug.png",
      product_category: "home",
      product_price: 10,
      product_name: "Ceramic Coffee Mug",
      product_rating: 3.8,
      product_description:
        "Stylish ceramic coffee mug.\nPerfect for daily tea or coffee.\nDishwasher safe.\nDurable and lightweight.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 14,
      product_image: "kettle.png",
      product_category: "home",
      product_price: 35,
      product_name: "Electric Kettle",
      product_rating: 4.2,
      product_description:
        "Quick heating electric kettle.\nAuto shut-off safety feature.\nCompact and stylish design.\nEasy to clean and maintain.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 15,
      product_image: "toaster.png",
      product_category: "home",
      product_price: 60,
      product_name: "2-Slice Toaster",
      product_rating: 4.0,
      product_description:
        "Compact 2-slice toaster.\nMultiple browning settings.\nRemovable crumb tray.\nPerfect for quick breakfasts.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 16,
      product_image: "vacuum.png",
      product_category: "home",
      product_price: 200,
      product_name: "Vacuum Cleaner",
      product_rating: 4.3,
      product_description:
        "Powerful vacuum cleaner for home.\nEasy to use and lightweight.\nStrong suction power.\nKeeps your home dust-free.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 17,
      product_image: "microwave.png",
      product_category: "home",
      product_price: 450,
      product_name: "Microwave Oven",
      product_rating: 4.5,
      product_description:
        "Modern microwave oven with grill.\nEasy cooking presets.\nEnergy efficient.\nPerfect for quick meals.",
      quantity_by_user: 0,
      inCart: false,
    },
    {
      id: 18,
      product_image: "sofa.png",
      product_category: "home",
      product_price: 900,
      product_name: "3-Seater Sofa",
      product_rating: 4.7,
      product_description:
        "Comfortable seater sofa.\nDurable fabric and cushioning.\nModern design for living room.\nAdds elegance to your home.",
      quantity_by_user: 0,
      inCart: false,
    },
  ];
  // const [products, setProducts] = useState(product_details);

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("product_details_localStorage");
    return saved ? JSON.parse(saved) : product_details;
  });

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("product_details_localStorage", JSON.stringify(products));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [products]);

  return (
    <Product_Context.Provider value={{ products, setProducts }}>

      <ToastContainer
        position="top-left"
        autoClose={2500}  
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>


    </Product_Context.Provider>
  )
}

export default App
