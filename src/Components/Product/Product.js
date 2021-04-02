import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'
import { Card, Col, Container, Row , Button} from "react-bootstrap";


const Product = (props) => {
   const {Product_Name,Product_Price,Product_Weight,imageURL,_id} = props.product;
  // const handleBuyProduct= props.handleBuyProduct;
   console.log(props)

    
   const history = useHistory()
   const handleBuyProduct = id => {
     console.log(id);
     const url = `checkout/${id}`
     history.push(url)
   }

    return (

      <div className=" cards d-flex flex-wrap justify-content-between">
            <div className="col-md-4 col-sm-12 ">
                <Card className="singleCard" >
                    <Card.Img variant="top" className="img-fluid" src={imageURL} />
                    <Card.Body>
                        <Card.Title style={{color: 'aqua'}}> {Product_Name} </Card.Title>

                        <Card.Text>
                            <Row>
                                <Col md={6}>
                                    <strong  style={{color: 'skyblue'}}>Weight : {Product_Weight} </strong> <br />
                                  <strong style={{color: 'orange'}}>  Price : ${Product_Price}</strong>
                                </Col>
                                <Col md={6} >
                                    {<Button className="btnStyle" variant="primary" onClick={()=>handleBuyProduct(_id)}>Buy Now</Button>}
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
    //     <div className="col-md-4 products">
    //     <img style={{height: '300px'}} src={imageURL} alt=""/>
    //     <h3>{Product_Name}</h3>
    //      <h4>{Product_Weight}</h4>

    //     <div className="col-md-6 d-flex product">
    //       <h3>${Product_Price}</h3>
    //       <button className="btn btn-primary btn-sm" onClick={()=>handleBuyProduct(_id)}>Buy Now</button>
    //     </div>
        
    // </div>
    );
};

export default Product;