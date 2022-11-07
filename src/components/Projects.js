import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aa from "../assets/aa.jpg";
import {Layout} from './Layout'

export const Projects = () => {
  return (
    // <div id="projects" className="projects py-5">
      <Layout>
      <Container>
        <div className="title">
          <span>Projects</span>
        </div>
        <Row className=" mb-5">
          <Col md="6" className=" mb-3">
            <img src={aa} alt="project a" width="100%" />
          </Col>
          <Col md="6">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                <a href="##" target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="##" target="_blank">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p className="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </Col>
        </Row>
        <Row className=" mb-5">
          <Col md="6" className="mb-3 order-md-2">
            <img src={aa} alt="project a" width="100%" />
          </Col>
          <Col md="6">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                <a href="" target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p className="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="  mb-5">
          <Col md="6" className="  mb-3">
            <img src={aa} alt="project a" width="100%" />
          </Col>
          <Col md="6">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                <a href="##" target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="##" target="_blank">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p className="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      </Layout>
    // </div>
  );
};
