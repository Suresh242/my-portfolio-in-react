import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Layout} from './Layout'


export const Skills = () => {
  return (
    <Layout>
    <Container id="skills" className=" py-3 mb-5">
      <Row>
        <Col>
          {/* <!-- title --> */}
          <div className="title">
            <span>Skills</span>
          </div>

          {/* <!-- icons --> */}

          <div className="icons">
            <div>
              <i className="fa-brands fa-html5 text-danger"></i> HTML
            </div>
            <div>
              <i className="fa-brands fa-css3-alt text-primary"></i> CSS
            </div>
            <div>
              <i className="fa-brands fa-square-js text-warning"></i> JavaScript
            </div>
            <div>
              <i className="fa-brands fa-figma text-info"></i> Figma
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </Layout>
  );
};
