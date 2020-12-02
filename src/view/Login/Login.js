import React, { Component, View } from 'react';
import fbImg from '../../../src/img/fb.png';
import googleImg from '../../../src/img/google-logo.png';
import linkImg from '../../../src/img/linkdin.png';
// import './App.css';
import { Container, Col, Row, Button, ListGroup, Form, Modal } from 'react-bootstrap';
import '../../css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Auth0services from '../../services/auth0Services/Auth0Services'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      modalsignup: false,
      modallogin: false,
      email: "",
      emailErr:'',
      c_password: "",
      password: '',
      passwordErr:'',
      c_passErr:'',
      errors: {},
      l_email:"",
      l_emailErr:'',
      l_password:'',
      l_passwordErr:''
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
  validate=()=>{
    console.log("isvalid",this.state.email!==""&&this.state.password!==""&&this.state.c_password!=="");
    if(this.state.email!==""&&this.state.password!==""&&this.state.c_password!==""){
      return false
    }
    else{
      return true
    }
  }
  handleSubmit = () => {
   
    let data={
      email:this.state.email,
      password:this.state.password
    }
    console.log("state=======", data);
    Auth0services.signUp(data).then(response=>{
      console.log("res==============",response);
     
        if(response.data.status===true){
          alert("Successfully Registered.")
          this.setState({
            modalsignup:false
          })
        }
        else{
          alert("Failed to register. "+response.data.message)
        }
    })
  }

  handleChange = (e) => {
    
    // let errors = {}
    if (e.target.name == 'email') {
      let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (e.target.value !== "") {
        if (reg.test(e.target.value)) {
          this.setState({
            email: e.target.value,
            emailErr:''
          })
        
        }
        else {
          this.setState({
            email: '',
            emailErr:'Enter valid email.'
          })
        }
      }
      else {
        this.setState({
          email: '',
          emailErr:'Required.'
        })
      }
    }
    if(e.target.name=="password"){
      if(e.target.value!==""){
        if(e.target.value.length>=6){
          this.setState({
            [e.target.name]:e.target.value,
            passwordErr:''
          })
         
        }
        else{
          this.setState({
            [e.target.name]:"",
            passwordErr:'Password Should be greater than 6 characters.'
          })
        }
      }
      else{
        this.setState({
          [e.target.name]:"",
          passwordErr:'Required.'
        })
      }

    }
    
    if(e.target.name=="c_password"){
      if(e.target.value!==""){
        if(this.state.password===e.target.value){
          this.setState({
            [e.target.name]:e.target.value,
            c_passErr:''
          })
         
        }
        else{
          this.setState({
            [e.target.name]:"",
            c_passErr:'Password not matched.'
          })
        }
      }
      else{
        this.setState({
          [e.target.name]:"",
          c_passErr:'Required.'
        })
      
      }
    }


    // console.log("errors--------------------------",errors);
    // this.setState({
    //   errors: errors
    // })

  }

  handleLogin=()=>{
    let data={
      email:this.state.l_email,
      password:this.state.l_password
    }
    
    console.log("data-----", data);
    Auth0services.login(data).then(response=>{
      console.log("response in login=============", response);

      if(response){
        if(response.data.status===true){
          sessionStorage.setItem("token", response.data.token)
          sessionStorage.setItem("UserId", response.data.user_id)
          alert(response.data.message)
          this.props.history.push('homePage')
        }
        else{
          alert(response.data.message)
        }
      }
    })
  }
  handleLoginChange=(e)=>{
    let errors={}
    if (e.target.name === 'l_email') {
      let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (e.target.value !== "") {
        if (reg.test(e.target.value)) {
          this.setState({
            l_email: e.target.value,
            l_emailErr:''
          })
          
        }
        else {
          this.setState({
            l_email: '',
            l_emailErr:'Enter valid email.'
          })
        }
      }
      else {
        this.setState({
          l_email: '',
          l_emailErr:'Required.'
        })
      }
    }

    if(e.target.name === "l_password"){

      if(e.target.value!==""){
        this.setState({
          [e.target.name]:e.target.value,
          l_passwordErr:''
        })
      
      }
      else{
        this.setState({
          [e.target.name]:"",
          l_passwordErr:'Required.'
        })
      }

    }

    this.setState({
      errors:errors
    })
  }
  handleEmail = (e) => {
    console.log("e.target.value================", e.target.name);
    this.setState({
      email: e.target.value
    })
  }

  render() {
    return (
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
            <Form className="SignUpForm" >
              <Row>
                <Col md={12}>
                  <Form.Control placeholder="Email" name="email" onChange={this.handleChange} />
                  <div className="text-danger">{this.state.emailErr}</div>
                </Col>
                <Col md={12} className="mt-2">
                  <Form.Control placeholder="Password (6 or more character)" name="password" onChange={this.handleChange} />
                  <div className="text-danger">{this.state.passwordErr}</div>
                </Col>
                <Col md={12} className="mt-2">
                  <Form.Control placeholder="Confirm Password" name="c_password" onChange={this.handleChange} />
                  <div className="text-danger">{this.state.c_passErr}</div>
                </Col>
                <Col md={12} className="mt-2 text-center">
                  <h6 className="mt-2">By clicking Agree & Join, you agree to the</h6>
                  <h6><span className="TxtClr">BolStart User Agreement, Privacy Policy,</span><span> and </span><span className="TxtClr"> Cookie Policy. </span></h6>
                </Col>
                <Col md={12} className="mt-2 text-center">
                  <Button className="ContainBtn" disabled={this.state.email!==""&&this.state.password!==""&&this.state.c_password!==""?false:true} onClick={this.handleSubmit}>
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
                  <Form.Control placeholder="Email" name="l_email" onChange={this.handleLoginChange}/>
                  <div className="text-danger">{this.state.l_emailErr}</div>
                </Col>
                <Col md={12} className="mt-2">
                  <Form.Control placeholder="Password"  name="l_password"  onChange={this.handleLoginChange} />
                  <div className="text-danger">{this.state.l_passwordErr}</div>
                </Col>
                <Col md={12} className="mt-2 text-center">
                  <Button className="ContainBtn" disabled={this.state.l_email!==""&&this.state.l_password?false:true} onClick={this.handleLogin}>
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