import css from "./Home.module.css";
import React,{useEffect} from "react";
import { Card,CardBody, CardTitle } from "reactstrap";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Learn code with Ankita";
},[]);
    return(
        <div>
            <div className={css.bg}>
            </div>
          <Card className="text-center" border="success">
            <CardBody>
                <CardTitle>
                    <p>
                        WELCOME TO SIMPLIFLEX LAPTOP SHOP
                    </p>
                </CardTitle>
            </CardBody>
          </Card>
        </div>
   
    );
};
export default Home;