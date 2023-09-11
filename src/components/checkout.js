import React, { useState } from "react";
import { Accordion, FloatingLabel, Form } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { CartInfo } from "./cart";
import "./styling/checkout.css";
import img from "./docs/logo.jpg";

export const Checkout = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <div className="nav_bar">
        <a
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src={img} alt="" />
        </a>
      </div>
      <div className="checkout">
        <h4>Check - Out</h4>
        <div className="accordion">
          <Accordion flush>
            <AccordionItem eventKey="0">
              <AccordionHeader>Personal Info</AccordionHeader>
              <AccordionBody>
                <form action="">
                  <div>
                    <FloatingLabel
                      className="label"
                      controlId="floatingInput"
                      label="Full Name"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Joe Root"
                        style={{ width: "300px", height: "70px" }}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="label"
                      controlId="floatingInput"
                      label="Phone Number"
                    >
                      <Form.Control
                        type="number"
                        placeholder="000000000"
                        style={{ width: "300px", height: "70px" }}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="label"
                      controlId="floatingInput"
                      label="Email address"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        style={{ width: "300px", height: "70px" }}
                      />
                    </FloatingLabel>
                  </div>
                  <div>
                    <FloatingLabel
                      className="label"
                      label="Address"
                      controlId="floatingTextarea"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="enter your address"
                        style={{ height: "90px", width: "450px" }}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="label"
                      controlId="floatingInput"
                      label="Pin"
                    >
                      <Form.Control
                        type="number"
                        placeholder="123456"
                        style={{ width: "300px" }}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="label"
                      controlId="floatingInput"
                      label="State"
                    >
                      <Form.Control
                        type="text"
                        placeholder=""
                        style={{ width: "300px" }}
                      />
                    </FloatingLabel>
                  </div>
                </form>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="1">
              <AccordionHeader
                onClick={() => {
                  setStatus(!status);
                }}
              >
                Cart Info
              </AccordionHeader>
              <AccordionBody>{status && <CartInfo />}</AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="2">
              <AccordionHeader>Payment Info</AccordionHeader>
              <AccordionBody>
                <div className="form">
                  <form action="">
                    <FloatingLabel
                      className="label"
                      controlId="floatingInput"
                      label="Enter Card Details"
                    >
                      <Form.Control type="number" placeholder="" />
                    </FloatingLabel>
                    <div className="card_info">
                      <FloatingLabel
                        className="label"
                        controlId="floatingInput"
                        label="CVV"
                      >
                        <Form.Control
                          type="password"
                          placeholder=""
                          style={{ width: "60px" }}
                        />
                      </FloatingLabel>
                      <FloatingLabel
                        className="label"
                        controlId="floatingInput"
                        label="Card Expires in"
                        style={{ width: "150px" }}
                      >
                        <Form.Control type="month" placeholder="" />
                      </FloatingLabel>
                    </div>
                    <FloatingLabel
                      className="label"
                      controlId="floatingInput"
                      label="Name on Card"
                    >
                      <Form.Control type="text" placeholder="Joe Root" />
                    </FloatingLabel>
                  </form>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
        <button className="button">Make Payment</button>
      </div>
    </>
  );
};
