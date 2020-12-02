import React, { Component, View } from 'react';
import fbImg from '../../../src/img/fb.png';
import googleImg from '../../../src/img/google-logo.png';
import linkImg from '../../../src/img/linkdin.png';
// import './App.css';
import { Container, Col, Row, Button, ListGroup, Form, Modal } from 'react-bootstrap';
import '../../css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';                                         


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            modalsignup: false,
            modallogin: false
        }
    }


    
  handleShowsignupmoadl = () => {
    this.setState({
      modalsignup: true,

    })
  }


  handleShowloginmodal = () => {
      // this.props.history.push('homePage')
    this.setState({
      modallogin: true,

    })
  }

  handleClose = () => {
    this.setState({
      modalsignup: false,
      modallogin: false
    })
  }

    render(){
    return(
      <Container>
        <div className="LoginFrm">
          <Row>
            <Col>
              <div className="LoginBack">
                <div className="ListGrid">
                  <ListGroup>
                    <ListGroup.Item><i className="fa fa-users mr-3" aria-hidden="true"></i>Reach out to Startups, Mentors & Investors</ListGroup.Item>
                    <ListGroup.Item><i className="fa fa-thumbs-up mr-3" aria-hidden="true"></i>Write updates in your feed</ListGroup.Item>
                    <ListGroup.Item><i className="fa fa-id-card-o mr-3" aria-hidden="true"></i>Q&A Forum</ListGroup.Item>
                    <ListGroup.Item><i className="fa fa-desktop mr-3" aria-hidden="true"></i>Find Freelancers</ListGroup.Item>
                    <ListGroup.Item><i className="fa fa-gift mr-3" aria-hidden="true"></i>Receive Pers!!!</ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col>
              <div className="LogoGrid">
                <Button className="LogoBtn">Logo</Button>
                <h2 className="mt-4">Welcome to your Community</h2>
                <h5>Bolstering the Startup Community.</h5>
                <h5>Network, Share Knowledge and Grow.</h5>
                <h6 className="mt-4">Join us now</h6>

                <Row className="mt-2">
                  <Col>
                    <Button className="borderBtn" onClick={this.handleShowsignupmoadl}>Sign up</Button>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Button className="borderBtn" onClick={this.handleShowloginmodal}>Log in</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>


        <Modal show={this.state.modalsignup} onHide={this.state.modalsignup}>
          <Modal.Body>
            {/* <Row className="pb-2">
              <Col md={12}>
                <i class="fa fa-times float-right" aria-hidden="true" onClick={this.handleClose}></i>
              </Col>
            </Row> */}
            <Form className="SignUpForm">
              <Row>
                <Col md={12}>
                  <Form.Control placeholder="Email" />
                </Col>
                <Col md={12} className="mt-2">
                  <Form.Control placeholder="Password (6 or more character)" />
                </Col>
                <Col md={12} className="mt-2">
                  <Form.Control placeholder="Confirm Password" />
                </Col>
                <Col md={12} className="mt-2 text-center">
                  <h6 className="mt-2">By clicking Agree & Join, you agree to the</h6>
                  <h6><span className="TxtClr">BolStart User Agreement, Privacy Policy,</span><span> and </span><span className="TxtClr"> Cookie Policy. </span></h6>
                </Col>
                <Col md={12} className="mt-2 text-center">
                  <Button className="ContainBtn">
                    Agree & Join
                  </Button>
                </Col>
                <Col md={12} className="mt-3 text-center">
                  <div className="divider">or</div>
                </Col>
                <Col md={12} className="mt-3 text-center">
                  <Button className="LogOutline"> <img src={googleImg} className="BtnImg mr-2" />Join with Google</Button>
                </Col>
                <Col md={6} className="mt-3 text-center">
                  <Button className="LogOutline"> <img src={fbImg} className="BtnImg mr-2" />Join with Google</Button>
                </Col>
                <Col md={6} className="mt-3 text-center">
                  <Button className="LogOutline"> <img src={linkImg} className="BtnImg mr-2" />Join with Google</Button>
                </Col>
                <Col md={12} className="mt-4 text-center">
                  <h6>Already on BolStart?<span className="TxtClr"> Sign in</span></h6>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>



        <Modal show={this.state.modallogin} onHide={this.state.modallogin}>
          <Modal.Body>
            {/* <Row className="pb-2">
              <Col md={12}>
                <i class="fa fa-times float-right" aria-hidden="true" onClick={this.handleClose}></i>
              </Col>
            </Row> */}
            <Form className="SignUpForm mt-3">
              <Row>
                <Col md={12}>
                  <Form.Control placeholder="Email" />
                </Col>
                <Col md={12} className="mt-2">
                  <Form.Control placeholder="Password" />
                </Col>
                <Col md={12} className="mt-2 text-center">
                  <Button className="ContainBtn">
                    Log in
                  </Button>
                </Col>
                <Col md={12} className="mt-4 text-center">
                  <h6 className="TxtClr">Forgot Password? | Sing up</h6>
                </Col>
                <Col md={12} className="mt-3 text-center">
                  <div className="divider">or</div>
                </Col>
                <Col md={12} className="mt-3 text-center">
                  <Button className="LogOutline"> <img src={googleImg} className="BtnImg mr-2" />Join with Google</Button>
                </Col>
                <Col md={6} className="mt-3 text-center">
                  <Button className="LogOutline"> <img src={fbImg} className="BtnImg mr-2" />Join with Google</Button>
                </Col>
                <Col md={6} className="mt-3 text-center">
                  <Button className="LogOutline"> <img src={linkImg} className="BtnImg mr-2" />Join with Google</Button>
                </Col>
                <Col md={12} className="mt-4 text-center">
                  {/* <h6>Already on BolStart?<span className="TxtClr"> Sign in</span></h6> */}
                </Col>
              </Row>
            </Form>

          </Modal.Body>
        </Modal>
      </Container>
        )
    }
}


export default Login