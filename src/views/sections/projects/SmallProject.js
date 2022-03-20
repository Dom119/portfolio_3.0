import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function SmallProject({ project }) {
  const { title, desc, linkWeb, linkGit, photo } = project;
  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div>
      <div>
        <img src={photo} alt="" onClick={toggle} />
        <Modal isOpen={modal} toggle={toggle} style={{ padding: "30px"  }}>
          <ModalHeader style={{backgroundColor:"#071327", color:"white"}}>
            <h3>{title}</h3>
          </ModalHeader>
          <ModalBody style={{backgroundColor:"#071327", color:"white"}}>
            <h5>{desc}</h5>
          </ModalBody>
          <ModalFooter style={{backgroundColor:"#071327", color:"white",  justifyContent:"center", padding:"20px"}}>
            <a color="primary" href={linkWeb} onClick={toggle} target="_blank">
              <Button
                className="btn-round"
                style={{ marginRight: "0px", color: "white" }}
                color="danger"
              >
                Website
              </Button>
            </a>
            <a color="primary" href={linkGit} onClick={toggle} target="_blank">
              <Button
                className="btn-round "
                style={{ marginRight: "0px", color: "white" }}
                color="danger"
              >
                {" "}
                Source Code
              </Button>
            </a>{" "}
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
