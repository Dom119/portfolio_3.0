import React from "react";

import { Button, Container, Row, Col } from "reactstrap";

export default function AboutMe() {
  return (
    <>
      <div className="section section-nucleo-icons about-me" id="about">
        <Container>
          <Row>
            <Col>
              <h1>About Me</h1>
              <h3>
                Hi, my name is Dom. I am a web developer based on Melbourne,
                Australia.
              </h3>
              <h3>I build functional applications with cool design. </h3>
              <h3>
                I am most proud of my skill in <span>JavaScript</span>,{" "}
                <span>React</span> and their environment. I am also interested
                in <span>NodeJs</span>, <span>.NET</span> and <span>C#</span> 
              </h3>
              <Button
                className="btn-round ml-1 myBtn"
                color="danger"
                href="https://www.livehire.com/talent/home"
                target="_blank"
              >
                View My LiveHire Profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}
