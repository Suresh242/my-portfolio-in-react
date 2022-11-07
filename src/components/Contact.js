import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "./Layout";

export const Contact = () => {
  return (
    <Layout>
    <Container id="contact" className=" contact rounded-5 py-2">
      <div className="title">
        <span>Contact Me</span>
      </div>
      <Row className=" fa-3x">
        <Col className="  d-flex justify-content-around pb-4">
          <a href="tel:0409876789">
            <i className="fa-solid fa-mobile"></i>
          </a>
          <a href="mailto:yor@email.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="##">
            {" "}
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="##">
            {" "}
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="##">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </Col>
      </Row>
    </Container>
    </Layout>
  );
};
