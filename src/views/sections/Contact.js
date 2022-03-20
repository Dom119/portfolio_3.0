import React, { useState } from 'react'
import Button from 'reactstrap/lib/Button'
import Col from 'reactstrap/lib/Col'
import Container from 'reactstrap/lib/Container'
import Form from 'reactstrap/lib/Form'
import FormFeedback from 'reactstrap/lib/FormFeedback'
import FormGroup from 'reactstrap/lib/FormGroup'
import Input from 'reactstrap/lib/Input'
import Label from 'reactstrap/lib/Label'
import Row from 'reactstrap/lib/Row'

import emailjs from 'emailjs-com';

export default () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState(undefined)
  const [content, setContent] = useState("")

  const [nameFeedback, setNameFeedback] = useState(false)
  const [emailFeedback, setEmailFeedback] = useState(false)
  const [contentFeedback, setContentFeedback] = useState(false)
  const [sentFeedback, setSentFeedback] = useState(false)

  function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function onChange(e) {
    e.target.name === "name" && setName(e.target.value)
    e.target.name === "email" && setEmail(e.target.value)
    e.target.name === "content" && setContent(e.target.value)
  }

  function onSubmit() {

    //check the name
    if (name === "") {
      setNameFeedback(true)
      setTimeout(() => {
        setNameFeedback(false)
      }, 3000);
    }

    //check the email
    if (!isEmailValid(email)) {
      setEmailFeedback(true)
      setTimeout(() => {
        setEmailFeedback(false)
      }, 3000);
    }

    //check the content
    if (content === "") {
      setContentFeedback(true)
      setTimeout(() => {
        setContentFeedback(false)
      }, 3000);
    }

    if (name !== "" && content !== "" && isEmailValid(email)) {
      setSentFeedback(true)
      setTimeout(() => {
        setSentFeedback(false)
      }, 3000);

      //Sent email to my Email by EmailJS
      var templateParams = {
        from_name: name,
        message: content,
        sender: email,
      };

      emailjs.send("service_7nz1fm7", "template_wv1u9b1", templateParams, "user_K3sGWHll0YNMpFDXzX5Va").then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }
  }

  return (
    <div className="section myNav" id="contact">
      <Container>
        <Row>
          <Col>
            <h1 className="title mb-0" style={{color:"white"}}>Contact</h1>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              color="success"
              className="w-100 mb-2"
              style={{ display: sentFeedback ? "block" : "none" }}
            >Thank you for contacting me. We'll be in touch soon.</Button>
            <Form>

              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  name="name"
                  id="senderName"
                  placeholder="Please enter your name..."
                  value={name}
                  onChange={(e) => onChange(e)}
                />
                <FormFeedback
                  tooltip
                  style={{ display: nameFeedback ? "block" : "none" }}
                >Please enter your name</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input name="email" id="senderEmail" placeholder="Please enter your email..."
                  value={email}
                  onChange={(e) => onChange(e)} />
                <FormFeedback
                  tooltip
                  style={{ display: emailFeedback ? "block" : "none" }}
                >Please enter a valid email</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="content" id="senderContent"
                  value={content}
                  onChange={(e) => onChange(e)} />
                <FormFeedback tooltip
                  style={{ display: contentFeedback ? "block" : "none" }}
                >Please enter your message</FormFeedback>
              </FormGroup>

              <Button onClick={() => onSubmit()} className="btn-danger btn-round mt-3">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
