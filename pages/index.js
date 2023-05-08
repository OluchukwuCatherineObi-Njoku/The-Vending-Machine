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
import { useRef } from 'react'
import Modal from 'react-bootstrap/Modal';

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


export function Disclaimer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>

      <div className="d-flex justify-content-end">
      <Button variant="primary" onClick={handleShow} style={{backgroundColor: "white", color: "black"}}>
        Disclaimer
      </Button>
      </div>
      
      
      <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Disclaimer</Modal.Title>
      </Modal.Header>
      <Modal.Body>These are not actually for sale, it is simply for a cool experience.<br />
      There is also no limit to purchasing. <br />
      Also, image references are situated at the bottom <br />
      Welcome to the Vending Machine.
       </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
      
      
    </>
  );
}


export function References() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>

      <div className="d-flex justify-content-end">
      <Button variant="primary" onClick={handleShow} style={{backgroundColor: "white", color: "black"}}>
        References
      </Button>
      </div>
      
      
      <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>References</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <a href="https://www.flaticon.com/free-icons/cat-toy" title="cat toy icons">Cat toy icons created by Freepik - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/bear" title="bear icons">Bear icons created by Freepik - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/doll" title="doll icons">Doll icons created by Freepik - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/kid-and-baby" title="kid and baby icons">Kid and baby icons created by Prashanth Rapolu 15 - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/donation" title="donation icons">Donation icons created by Freepik - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/toys" title="toys icons">Toys icons created by Freepik - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Freepik - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/toys" title="toys icons">Toys icons created by Smashicons - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/toy-shop" title="toy shop icons">Toy shop icons created by Smashicons - Flaticon</a><br />

       </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
      
      
    </>
  );
}



export function ReactionAudio() {
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current.play()
  }, [])

  return <audio ref={audioRef} src="/cash-register-purchase-87313.mp3" />
}

let prev = 0;
let i = 0;

export default function Home(){
  const [currItem, setCurrItem] = useState(null);
  const [coinValue, setCoinValue] = useState(0);
  const [itemPrice, setItemPrice] = useState(null);
  const [target, setTarget] = useState([]);


  useEffect(() => {

    if (coinValue && itemPrice > 0) {
      if (coinValue >= itemPrice) {
        setCoinValue(prev => prev -= itemPrice);
        setItemPrice(0);
      }
      else if(coinValue < itemPrice){
        setItemPrice(prev => prev -= coinValue);
        setCoinValue(0);
      }
    }


    if(currItem && itemPrice == 0){
      const selected = document.getElementById(currItem);    
      if (selected != prev)
        setTarget([...target,{src: selected.getAttribute('src'), alt: selected.getAttribute('alt')}]);
      prev = selected; 
      selected.classList.add('bg-success');
      
    }
    
  }, [coinValue, itemPrice])


  function handleClick(id){
    if(id != currItem || (id == currItem && itemPrice == 0)){
      setCurrItem(id);
      setItemPrice(merch[id]);
    }

    console.log(prev);
    if (prev) {
      prev.classList.remove('bg-success');
    }
  }

  function addCoin(e){
    e.preventDefault();
    let coin = parseFloat(e.target[0].value)
  
   if (coin){
    setCoinValue(prevCoin => prevCoin += coin);   
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
    
      <Disclaimer />

    <Container style={{padding : "3%", overflow : "hidden"}}>
      <Row className="border">

        <Col className="border" md = {8} sm = {8}>

        <Row style={{padding : "3%"}}>

          <Col className="border m-auto text-center" style={{padding : "3%"}}>

            <Image className="mx-auto d-block border" id="100" src="/doll.png" alt="Doll Toy Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} />
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

          <Col className="border m-auto text-center" style={{padding : "3%"}} >
            <Image className="mx-auto d-block border" src="/donation.png" id="101" alt="Donation Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">101  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.35</span></div>
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

          <Col className="border m-auto text-center" style={{padding : "3%"}} >
            <Image className="mx-auto d-block border" src="/mouse-toy.png" id="102" alt="Mouse Toy Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">102  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.25</span></div>
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
        <Col className="border m-auto text-center" style={{padding : "3%"}} >
          <Image className="mx-auto d-block border" src="/teddy-bear.png" id="103" alt="Teddy Bear Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">103  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.15</span></div>
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

        <Col className="border m-auto text-center" style={{padding : "3%"}} >
          <Image className="mx-auto d-block border" src="/toy-car.png" id="104" alt="Toy Car Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">104  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.20</span></div>
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

        <Col className="border m-auto text-center" style={{padding : "3%"}} >
          <Image className="mx-auto d-block border" src="/toy.png" id="105" alt="Moving Vehicle Toy Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">105  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.15</span></div>
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
        <Col className="border m-auto text-center" style={{padding : "3%"}} >
          <Image className="mx-auto d-block border" id="106" src="/aeroplane.png" alt="Aeroplane Toy Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">106  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.17</span></div>
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
        <Col className="border m-auto text-center" style={{padding : "3%"}} >
          <Image className="mx-auto d-block border" src="/rc-car.png" id="107" alt="Rc-Car Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">107  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.20</span></div>
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

        <Col className="border m-auto text-center" style={{padding : "3%"}} >
          <Image className="mx-auto d-block border" src="/toy-shop.png" id="108" alt="Toy Shop Icon Image" width = "100" height = "100" fluid="true" style={{padding : "3%"}} /><div  className="border text-center">108  <span style={{border: "1px solid grey", padding: ".3%"}}>$1.25</span></div>
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
              // backgroundImage: `url('/Download free image of Aesthetic water iPhone wallpaper abstract design by Sasi about iphone background, pattern, water surface, pool water, .jpg')`,
              // backgroundSize: 'cover',
              // backgroundPosition: 'center center',
              // backgroundRepeat: 'no-repeat',
              width : "230px",
              height: "230px",
              padding: "30px",
              marginBottom: "20px",
              border: "1px solid grey"

            }}> 

            {coinValue >= 0 && <div> Credit : {coinValue} <br /></div>}
            {currItem &&
            <div>
              Item : {currItem} <br />
              Price : ${itemPrice}
              </div>}
            {(currItem && itemPrice == 0) && <ReactionAudio />}

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
      <Row className="border">
        <Col
        style={{
          height: "100px"
        }}
        >
        {target.length > 0 && target.map((current) => (<Image key={i++} src={current.src} alt={current.alt} width = "50" height = "50" fluid="true"  />))}
        </Col>
      </Row>
      
      <References />
      </Container>

      </div>

      // Put disclaimer that the goods are not actually for sale
      
      
  )
}

