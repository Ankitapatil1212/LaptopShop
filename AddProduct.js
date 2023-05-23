import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AddProduct=()=>{
    useEffect(()=>{
        document.title=" ADD Product ";
},[]);

    const [product,setproduct]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(product);
        postDatatoServer(product);
        e.preventDefault();

    }
//creating function to post data on server
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/products`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Product added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-3">Fill Product Details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="ProductId">Product Id</label>
                <Input
                        Type="text"
                        placeholder="Enter ProductID here"
                        name="ProductId"
                        Id="ProductId"
                        onChange={(e)=>{
                            setproduct({...product,pro_Id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="name">Product Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Product Name here"
                        name="name"
                        Id="name"
                        onChange={(e)=>{
                            setproduct({...product,pro_Name:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="description">Product Description</label>
                <Input
                        Type="textarea"
                        placeholder="Enter Product description here "
                        Id="description"
                        style={{height:100}}
                        onChange={(e)=>{
                            setproduct({...product,pro_desc:e.target.value});
                        }}
                />
                </FormGroup>
                 <FormGroup>
                <label for="Model">Product Model</label>
                <Input
                        Type="text"
                        placeholder="Enter Product Model here "
                        Id="Model"
                        name="Model"
                        onChange={(e)=>{
                            setproduct({...product,pro_model:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="Price">Product Price</label>
                <Input
                        Type="textarea"
                        placeholder="Enter Product Price here "
                        Id="Price"
                        name="Price"
                        onChange={(e)=>{
                            setproduct({...product,pro_price:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="Type">Product Type</label>
                <Input
                        Type="text"
                        placeholder="Enter Product Type here "
                        Id="Type"
                        name="Type"
                        onChange={(e)=>{
                            setproduct({...product,pro_type:e.target.value});
                        }}
                />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Product</Button>{' '}
                    <Button type="reset" color="primary ml-2">  Clear  </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default AddProduct;