import React from "react";
//import { Container, Table } from "react-bootstrap";
import Image from "next/image";
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useState , useEffect } from "react";
import Head from "next/head";


const merch = {
  100 : 1.25,
  101 : 1.35,
  102 : 1.25,
  103 : 1.15,
  104 : 1.20,
  105 : 1.15,
  106 : 1.17,
  107 : 1.20,
  108 : 1.25
}

export default function Home(){
  const [currItem, setCurrItem] = useState(null);
  const [coinValue, setCoinValue] = useState(0);
  const [itemPrice, setItemPrice] = useState(null);

  function handleClick(id){
    setCurrItem(id);
    setItemPrice(merch[id]);
  }

  function addCoin(e){
    e.preventDefault();
    let coin = parseFloat(e.target[0].value)
  
   if (coin && itemPrice){

    setCoinValue(prev => prev + coin);

    if (coinValue > 0 && coinValue >= itemPrice) {
       setCoinValue(prev => prev - itemPrice);
       setItemPrice(0);
       console.log("if coin > price: ", coinValue, itemPrice);
     }
     else if(coinValue > 0 && coinValue < itemPrice){
       setItemPrice(prev => prev - coinValue);
       setCoinValue(0);
       console.log("if coin < price: ", coinValue, itemPrice);
     }
   }
    
  }

  return(
    <div>
      
      <Head>
        <title>The Vending Machine</title>
        <meta name="Main" content="The entire Vending Machine" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap" rel="stylesheet"></link>
      </Head>
    
    <Container style={{padding : "3%", overflow : "hidden"}}>
      <Row className="border">

        <Col className="border" md = {8} sm = {8}>

        <Row style={{padding : "3%"}}>

          <Col className="border m-auto text-center" style={{padding : "3%"}}>

            <Image className="mx-auto d-block border" src="/doll.png" alt="Doll Toy Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} />
            <div className="border text-center">100  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.25
            </span>   
            </div>

            <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(100)}}>s</button>

            </Col>

          <Col className="border m-auto text-center" style={{padding : "3%"}}><Image className="mx-auto d-block border" src="/donation.png" alt="Donation Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">101  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.35</span></div>
          <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(101)}}>s</button></Col>

          <Col className="border m-auto text-center" style={{padding : "3%"}}><Image className="mx-auto d-block border" src="/mouse-toy.png" alt="Mouse Toy Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">102  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.25</span></div>
          <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(102)}}>s</button>
          </Col>
      </Row>


      <Row>
        <Col className="border m-auto text-center" style={{padding : "3%"}}><Image className="mx-auto d-block border" src="/teddy-bear.png" alt="Teddy Bear Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">103  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.15</span></div>
        <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(103)}}>s</button>
        </Col>

        <Col className="border m-auto text-center" style={{padding : "3%"}}><Image className="mx-auto d-block border" src="/toy-car.png" alt="Toy Car Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">104  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.20</span></div>
        <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(104)}}>s</button>
        </Col>

        <Col className="border m-auto text-center" style={{padding : "3%"}}><Image className="mx-auto d-block border" src="/toy.png" alt="Moving Vehicle Toy Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">105  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.15</span></div>
        <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(105)}}>s</button>
        </Col>
      </Row>

      <Row>
        <Col className="border m-auto text-center" style={{padding : "3%"}}><Image className="mx-auto d-block border" src="/aeroplane.png" alt="Aeroplane Toy Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">106  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.17</span></div>
        <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(106)}}>s</button>
        </Col>
        <Col className="border m-auto text-center" style={{padding : "3%"}}><Image className="mx-auto d-block border" src="/rc-car.png" alt="Rc-Car Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">107  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.20</span></div>
        <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(107)}}>s</button>
        </Col>

        <Col className="border m-auto text-center" style={{padding : "3%"}}><Image className="mx-auto d-block border" src="/toy-shop.png" alt="Toy Shop Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">108  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.25</span></div>
        <button style={
              {
              border: "none", 
              borderRadius: "50%",  
              backgroundColor: "#fff",
              color: "#6d0e10",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              fontSize: "13px",
              }} onClick={() => {handleClick(108)}}>s</button>
        </Col>
      </Row>

      </Col>
      
        <Col className="d-flex align-items-center">
        
        <Row style={{fontFamily: "'Playfair Display', serif", fontSize: "20px"}}>
        
        <Col md = {12} className="d-flex justify-content-center">
        <div  
        style={{
              backgroundImage: `url('/Download free image of Aesthetic water iPhone wallpaper abstract design by Sasi about iphone background, pattern, water surface, pool water, .jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              width : "230px",
              height: "230px",
              padding: "30px",
              marginBottom: "20px"

            }}> 

            {currItem &&
            <p>Item : {currItem} <br />
              Price : ${itemPrice}<br />
              Credit : {coinValue}</p>}

          </div>
        </Col>

        <Col md = {12} className="d-flex justify-content-center">
        <Form className="d-flex" onSubmit={addCoin}>
            <Form.Control
              style={{
                width: "200px",
                height: "30px",
                borderRadius: "0",
              }}
              type="text"
              placeholder="Coin Value"
              className="me-2"
              aria-label="Search"
            />
            <Button type = "submit"
            style={{
              height: "30px",
              borderRadius: "0",
              padding: "3px",
              backgroundColor: "#F29C9E",
              borderRadius: "7%",
              border: "none",
              boxShadow: "0 2px 0 #6d0e10",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            }}>
             Add Coin</Button>
           </Form> 

        </Col>

        </Row>

      
        </Col>
      </Row>
      
        
      </Container>

      </div>

      // Put disclaimer that the goods are not actually for sale
      
      // <Container
      //   style={{
      //     backgroundImage: `url('/animated-gifs-of-fighting-game-backgrounds-36.gif.crdownload')`,
      //     backgroundSize: 'cover',
      //     backgroundPosition: 'center center',
      //     backgroundRepeat: 'no-repeat',
      //   }}
      // >

      //   <Table responsive className="tab">

      //     <tbody className="border">
      //         <tr className="border">
      //         <td ><Image className="img mx-auto d-block"  src="/alison-wang-mou0S7ViElQ-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td ><Image className="img mx-auto d-block"  src="/giorgio-trovato-p0OlRAAYXLY-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td ><Image className="img mx-auto d-block"  src="/jose-betancourt-NHIP7M3EB9w-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td>Screen</td>
      //       </tr>
      //       <tr className="border">
      //         <td ><Image className="img mx-auto d-block"  src="/anton-darius-WoRuw4l2Xyo-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td ><Image className="img mx-auto d-block"  src="/ryan-quintal-xioKwVlp5jE-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td ><Image className="img mx-auto d-block"  src="/danny-wage-Q4vWchoavUs-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td>Button</td>
      //       </tr>
      //       <tr className="border">
      //         <td ><Image className="img mx-auto d-block"  src="/paige-cody-nLdDrH53BkA-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td ><Image className="img mx-auto d-block"  src="/zane-lee-KYhAYwhpQH4-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td ><Image className="img mx-auto d-block"  src="/rock-n-roll-monkey-LEPhZkQbUrk-unsplash_adobe_express.svg" alt="Example Image" width = "100" height = "100" fluid="true" style={{ objectFit: "cover", width: "60%", height: "60%" }} /></td>
      //         <td>Pay</td>
      //       </tr>
      //       <tr>
      //       <td colSpan="5" rowSpan="3" className="border">Lower Box</td>
      //       </tr>
          
            
            
      //     </tbody>
      //   </Table>

      // </Container>

      
  )
}

