import React from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

export default () => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  //scrolling part
  function scrolling(destination) {
    const anchor = document.querySelector(`#${destination}`);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
            style={{ fontSize: "1.5rem" }}
          >
            Dom Le
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              {" "}
              <NavLink
                data-placement="bottom"
                onClick={() => scrolling("home")}
              >
                {" "}
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              {" "}
              <NavLink
                data-placement="bottom"
                onClick={() => scrolling("about")}
              >
                {" "}
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              {" "}
              <NavLink
                data-placement="bottom"
                onClick={() => scrolling("projects")}
              >
                {" "}
                My Projects
              </NavLink>
            </NavItem>
            <NavItem>
              {" "}
              <NavLink
                data-placement="bottom"
                onClick={() => scrolling("contact")}
              >
                {" "}
                Contact
              </NavLink>
            </NavItem>

            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/dom-le-160192/"
                target="_blank"
                // disabled
              >
                My Linkedin
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
