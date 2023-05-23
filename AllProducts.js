import React, { useState,useEffect } from "react";
import Product from "./Product";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllProducts =() => {

    useEffect(() => {
            document.title="All Products";
    });

    //Function to call servers
    const getAllProductsFromServer = () => {
        axios.get(`${base_url}/products`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success("Products has been loaded",{position:"bottom-center"});
                setproducts(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllProductsFromServer();
        },[]);

    const [products,setproducts]=useState([]);

    const UpdateProduct=(pro_Id)=>{
        setproducts(products.filter((c)=>c.pro_Id!==pro_Id));
    };

    
    return(
        <div>
            <h1>All Products</h1>
            <p>list of products as follows</p>
           {products.length > 0 
            ? products.map((item) => <Product key={item.pro_Id} product={item}/>) 
            :"No Products"}
       </div>

    );
};

export default AllProducts;