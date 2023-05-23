import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container} from "reactstrap";

import base_url from "../api/bootapi";

const Product=({product,update})=>{

  //delete product
  const deleteProduct=(pro_Id)=>{
    axios.delete(`${base_url}/products/${pro_Id}`)
    .then((response)=>{
        console.log(response.data);
        toast.success("Product deleted successfully");
        update(pro_Id);
      })
       .catch((error)=>{ 
        console.error(error);
        toast.success("Product deleted successfully");
      });
  };
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
        toast.success("Product deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
              <CardSubtitle className="font-weight-bold">{product.pro_Name}</CardSubtitle>
              <CardSubtitle className="font-weight-bold">{product.pro_model}</CardSubtitle>
              <CardSubtitle className="font-weight-bold">{product.pro_type}</CardSubtitle>
              <CardSubtitle className="font-weight-bold">{product.pro_price}</CardSubtitle>
              <CardSubtitle className="font-weight-bold">{product.pro_Name}</CardSubtitle>
              <CardText>{product.pro_desc}</CardText> 
               <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteProduct(product.pro_Id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-product">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Product;