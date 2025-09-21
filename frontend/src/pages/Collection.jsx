// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {

//   const { products , search , showSearch } = useContext(ShopContext);
//   const [showFilter,setShowFilter] = useState(false);
//   const [filterProducts,setFilterProducts] = useState([]);
//   const [category,setCategory] = useState([]);
//   const [subCategory,setSubCategory] = useState([]);
//   const [sortType,setSortType] = useState('relavent')

//   const toggleCategory = (e) => {

//     if (category.includes(e.target.value)) {
//         setCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setCategory(prev => [...prev,e.target.value])
//     }

//   }

//   const toggleSubCategory = (e) => {

//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setSubCategory(prev => [...prev,e.target.value])
//     }
//   }

//   const applyFilter = () => {

//     let productsCopy = products.slice();

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//     }

//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
//     }

//     if (subCategory.length > 0 ) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
//     }

//     setFilterProducts(productsCopy)

//   }

//   const sortProduct = () => {

//     let fpCopy = filterProducts.slice();

//     switch (sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
//         break;

//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
//         break;

//       default:
//         applyFilter();
//         break;
//     }

//   }

//   useEffect(()=>{
//       applyFilter();
//   },[category,subCategory,search,showSearch,products])

//   useEffect(()=>{
//     sortProduct();
//   },[sortType])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
//       {/* Filter Options */}
//       <div className='min-w-60'>
//         <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//         </p>
//         {/* Category Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> kids
//             </p>
//           </div>
//         </div>
//         {/* SubCategory Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className='flex-1'>

//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//             <Title text1={'ALL'} text2={'COLLECTIONS'} />
//             {/* Porduct Sort */}
//             <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//               <option value="relavent">Sort by: Relavent</option>
//               <option value="low-high">Sort by: Low to High</option>
//               <option value="high-low">Sort by: High to Low</option>
//             </select>
//         </div>

//         {/* Map Products */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {
//             filterProducts.map((item,index)=>(
//               <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//             ))
//           }
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Collection

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 my-2 text-xl cursor-pointer"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>
        {/* Category Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Home Decor"}
                onChange={toggleCategory}
                checked={category.includes("Home Decor")}
              />
              Home Decor
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Fashion Accessories"}
                onChange={toggleCategory}
                checked={category.includes("Fashion Accessories")}
              />
              Fashion Accessories
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Personal Care"}
                onChange={toggleCategory}
                checked={category.includes("Personal Care")}
              />
              Personal Care
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Textiles"}
                onChange={toggleCategory}
                checked={category.includes("Textiles")}
              />
              Textiles
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Kitchenware"}
                onChange={toggleCategory}
                checked={category.includes("Kitchenware")}
              />
              Kitchenware
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Stationery"}
                onChange={toggleCategory}
                checked={category.includes("Stationery")}
              />
              Stationery
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Pet Accessories"}
                onChange={toggleCategory}
                checked={category.includes("Pet Accessories")}
              />
              Pet Accessories
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Garden Decor"}
                onChange={toggleCategory}
                checked={category.includes("Garden Decor")}
              />
              Garden Decor
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Garden Furniture"}
                onChange={toggleCategory}
                checked={category.includes("Garden Furniture")}
              />
              Garden Furniture
            </label>
          </div>
        </div>
        {/* Sub Category Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Subcategories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Woodwork"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Woodwork")}
              />
              Woodwork
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Ceramics"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Ceramics")}
              />
              Ceramics
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Textiles"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Textiles")}
              />
              Textiles
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Candles"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Candles")}
              />
              Candles
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Wall Art"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Wall Art")}
              />
              Wall Art
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Mirrors"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Mirrors")}
              />
              Mirrors
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Organizers"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Organizers")}
              />
              Organizers
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Coasters"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Coasters")}
              />
              Coasters
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Glassware"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Glassware")}
              />
              Glassware
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Signs"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Signs")}
              />
              Signs
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Feeders"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Feeders")}
              />
              Feeders
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                className="w-3"
                type="checkbox"
                value={"Flags"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Flags")}
              />
              Flags
            </label>
          </div>
        </div>
        {/* Clear Filters Button */}
        <button
          className={`px-4 py-2 mt-1 text-white bg-black rounded hover:bg-gray-900 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* View Product Items */}
      <div className="flex-1">
        <div className="flex justify-between mb-4 text-base sm:text-2xl">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="px-2 text-sm border-2 border-gray-300"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

