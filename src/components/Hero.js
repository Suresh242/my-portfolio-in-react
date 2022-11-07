import React from "react";
import aa from "../assets/aa.jpg";
import { TopNav } from "./TopNav";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Layout } from "./Layout";


export const Hero = () => {
  return (
    <div className="hero">
      <Layout>
      <Container className="mt-5">
        <Row className="mt-5 py-3">
          <Col md="6" className="text-center order-md-2">
            <img src={aa} width="80%" alt="" />
          </Col>
          <Col md="6" className="mt-3 pb-3">
            hi 👋 i'm
            <div className="fs-1 fw-bolder mb-5">Suresh Maskey</div>
            <p>
              I love codiong and solving problems with code and teaching to
              other what i know that makes me feel happy
            </p>
            <Button variant="danger">Download Resume</Button>
          </Col>
        </Row>
      </Container>
      </Layout>
    </div>
  );
};
