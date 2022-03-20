import React from "react";

import { Row, Container } from "reactstrap";
import Button from "reactstrap/lib/Button";

export default () => {
  return (
    <footer className="footer myFooter ">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#" target="_blank">
                  Dom's Portfolio
                </a>
              </li>
              <li>
                <Button
                  href="https://www.linkedin.com/in/dom-le-160192/"
                  target="_blank"
                  className="btn-round"
                  color="danger"
                >
                  My Linkedin
                </Button>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">{new Date().getFullYear()}</span>
          </div>
        </Row>
      </Container>
    </footer>
  );
};
