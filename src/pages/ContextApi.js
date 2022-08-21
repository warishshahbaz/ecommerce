
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router';
import { useCart } from 'react-use-cart';

const AppContext = React.createContext();
const AppProvider = ({children}) => {
  const navigate = useNavigate();
  const[loginToggle,SetLoginToggle] = useState(false);
  const [data,setData] = useState([]);
  const [duplicateData,setDuplicateData] = useState([]);
  const [productItem,setProductItem] = useState([]);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const fetchData = async() =>{
    let result = await fetch("https://fakestoreapi.com/products")
              .then((res)=> res.json())
              .then((data)=> {
                setData(data)
                setDuplicateData(data)
                 //console.log(data)
                })
              .catch((err)=> console.log(err.message));
              
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const FilterCategoris = (category) =>{

    if(category == "all"){
     
      return setData(duplicateData);
    }
    if(category == "men"){
      let res = duplicateData.filter((x)=> x.category == "men's clothing")
      return setData(res);
    }

    if(category == "jewellory"){
      let res = duplicateData.filter((x)=> x.category == "jewelery")
      return setData(res);
    }
    if(category == "electronic"){
      let res = duplicateData.filter((x)=> x.category == "electronics")
      return setData(res);
    }
    
    if(category == "women"){
      let res = duplicateData.filter((x)=> x.category == "women's clothing")
      return setData(res);
    }
   
  }


  const SortValue = (sortBy) =>{
    if(sortBy == "increase"){
      let res = duplicateData.sort((a,b)=> a.price > b.price);
      console.log(res);
      return setData(res);
    }
    if(sortBy == "decrease"){
      let res = duplicateData.sort((a,b)=> a.price < b.price);
      console.log(res);
      return setData(res);
    }
  }

  //** moved one Item */
  const moveToProduct = (idx) => {
    let res = data.filter((x,i)=> x.id == idx);
    setProductItem(res);
    console.log(res);
    navigate('/product');
    
}
  // *** cart provider ************



  return <AppContext.Provider value={{ isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalUniqueItems,
    productItem,
    moveToProduct,
    SortValue,
    FilterCategoris,
    data,
    loginToggle,
    SetLoginToggle
    }} >
    {children}
  </AppContext.Provider>
}


// custom hook
const useGlobaleContext = () =>{
  return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobaleContext}