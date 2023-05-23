import React,{useEffect} from "react";
import { Button,Card,CardBody, CardTitle, Container } from "reactstrap";

const Contact=()=>{
    useEffect(()=>{
        document.title="Home || Learn code with Ankita";
},[]);
    return(
        <div>
        
          <Card className="text-center" border="success">
            <CardBody>
                <CardTitle>
                    <p>Email Id  : patilankita3107@gmail.com</p>
                    <p>Mobile No : 9673596138</p>
                    <Container className="text-center">
                        <Button color="primary" outline>Thank You</Button>
                    </Container>
                </CardTitle>
            </CardBody>
          </Card>
        </div>
   
    );
};
export default Contact;