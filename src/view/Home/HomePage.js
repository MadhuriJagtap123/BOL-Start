import React, { Component, View } from 'react';
import { Container, Col, Row, Card, Navbar, Nav, NavDropdown, Button, Form, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import '../../css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserImg from '../../../src/img/p13.png';
import chartImg from '../../../src/img/chart.png';
import visitImg from '../../../src/img/p5.png';
import postImg from '../../../src/img/post1.png';
import p8Img from '../../../src/img/p8.png';
import p9Img from '../../../src/img/p9.png';
import p10Img from '../../../src/img/p10.png';
import p11Img from '../../../src/img/p11.png';
import p12Img from '../../../src/img/p12.png';
import userImg2 from '../../../src/img/user.png';
import p13Img from '../../../src/img/l3.png';
import u1Img from '../../../src/img/u1.png';
import u2Img from '../../../src/img/u2.png';
import u3Img from '../../../src/img/u3.png';
import u4Img from '../../../src/img/u4.png';
import u5Img from '../../../src/img/u5.png';
import u6Img from '../../../src/img/u6.png';
import u7Img from '../../../src/img/u7.png';
import in1Img from '../../../src/img/in1.png';
import Auth0services from '../../services/auth0Services/Auth0Services'
// import { Hidden } from '@material-ui/core';


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      // modalsignup: false,
      modalaskqus: false,
      modalaskpeople: false
    }
  }

  handleShowAskQus = () => {
    // this.props.history.push('homePage')
    this.setState({
      modalaskqus: true,
    })
  }


  handleShowAskpeople = () => {
    // this.props.history.push('homePage')
    this.setState({
      modalaskpeople: true,
    })
  }

  handleShowloginmodal = () => {
    // this.props.history.push('homePage')
  this.setState({
    modallogin: true,       
  })
}
handleLogout=()=>{
  let userId=sessionStorage.getItem("UserId")
  let data={
    user_id:parseInt(userId)
  }
  Auth0services.logOut(data).then(response=>{
    console.log("response=================", response);
    if(response){
      if(response.data.status){
        alert(response.data.message)
        sessionStorage.clear()
        this.props.history.push('login')
      }
      else{
        alert(response.data.message)
      }
    }
  })
}
  render() {
    return (
      <div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} onClick={this.handleLogout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>



        <div className="main_grid">
          <Container>
            <Row>
              {/* @@@@@@@@@@@@@@@@@@ left side grid structure @@@@@@@@@@@@@@@@@@ */}
              <Col xs={6} md={3}>
                <Row>
                  <Col md={12}>
                    <Card className="Card">
                      <Card.Img variant="top" />
                      <div className="text-center">
                        <img src={UserImg} className="UserImg mt-3" />
                        <Card.Title className="mt-4">Gurdeep Osahan</Card.Title>
                        <Card.Text className="UserTxt">
                          UI / UX Designer
                        </Card.Text>
                        <div className="d-flex">
                          <div className="col-6 border-right border-top p-3">
                            <h6 className="font-weight-bold text-dark mb-1">358</h6>
                            <p className="mb-0 text-black-50 small">Connections</p>
                          </div>
                          <div className="col-6 p-3 border-top">
                            <h6 className="font-weight-bold text-dark mb-1">85</h6>
                            <p className="mb-0 text-black-50 small">Views</p>
                          </div>
                        </div>
                        <div className="overflow-hidden border-top">
                          <a className="font-weight-bold p-3 d-block" href="#"> View my profile </a>
                        </div>
                      </div>
                    </Card>
                  </Col>

                  <Col md={12} className="mt-3">
                    <Card className="Card">
                      <Card.Img variant="top" />
                      <div className="box shadow-sm rounded bg-white view-box overflow-hidden">
                        <div className="box-title border-bottom p-3">
                          <h6 className="m-0">Profile Views</h6>
                        </div>
                        <div className="d-flex text-center">
                          <div className="col-6 border-right py-4 px-2">
                            <h5 className="font-weight-bold text-info mb-1">08 <i className="feather-bar-chart-2"></i></h5>
                            <p className="mb-0 text-black-50 small">last 5 days</p>
                          </div>
                          <div className="col-6 py-4 px-2">
                            <h5 className="font-weight-bold text-success mb-1">+ 43% <i className="feather-bar-chart"></i></h5>
                            <p className="mb-0 text-black-50 small">Since last week</p>
                          </div>
                        </div>
                        <div className="overflow-hidden border-top text-center">
                          <img src={chartImg} className="mt-3" />
                        </div>
                      </div>
                    </Card>
                  </Col>

                </Row>
              </Col>

              {/* @@@@@@@@@@@@@@@@@@ middle grid structure @@@@@@@@@@@@@@@@@@ */}
              <Col md={6}>
                 <Row className="mid-row">
                  <Col md={12}>
                    <div className="box shadow-sm border rounded bg-white mb-3 osahan-post">
                      <div className="p-3 d-flex align-items-center border-bottom">
                        <div className="visiter-list-image mr-3">
                          <img src={visitImg} className="BtnImg mr-2" />
                          <div className="green-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">Tobia Crivellari</div>
                          <div className="small text-gray">Product Designer at askbootstrap</div>
                        </div>
                        <span className="ml-auto small">3 hours</span>
                      </div>
                      <div className="p-3 border-bottom">
                        <p className="mb-0">Tmpo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris consequat.</a></p>
                      </div>
                      <div className="p-3 border-bottom">
                        <a href="#" className="mr-3 text-secondary"><i className="fa fa-heart-o" aria-hidden="true"></i> 16</a>
                        <a href="#" className="mr-3 text-secondary"><i className="fa fa-commenting-o" aria-hidden="true"></i> 8</a>
                        <a href="#" className="mr-3 text-secondary"><i className="fa fa-share-alt-square" aria-hidden="true"></i> 2</a>
                      </div>
                      <div className="p-3">
                        <button type="button" className="btn btn-outline-primary btn-sm mr-1">Awesome!!</button>
                        <button type="button" className="btn btn-light btn-sm mr-1">😍</button>
                        <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Whats it about?</button>
                        <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Oooo Great Wow</button>
                      </div>
                    </div>
                  </Col>

                  <Col md="12">
                    <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                      <div className="p-3 d-flex align-items-center border-bottom ">
                        <div className="visiter-list-image mr-3">
                          <img src={userImg2} className="BtnImg mr-2" />
                          <div className="green-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">Collin Weiland</div>
                          <div className="small text-gray">Web Developer @Google</div>
                        </div>
                        <span className="ml-auto small">3 hours</span>
                      </div>
                      <div className="p-3 border-bottom osahan-post-body">
                        <p>Lorem ipsum dolor sit amet, consectetur 😍😎 adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris consequat.</a></p>
                        <img src={postImg} className="mt-3 img-fluid" />
                      </div>
                      <div className="p-3 border-bottom osahan-post-footer">
                        <a href="#" className="mr-3 text-secondary"><i className="fa fa-heart-o" aria-hidden="true"></i> 16</a>
                        <a href="#" className="mr-3 text-secondary"><i className="fa fa-commenting-o" aria-hidden="true"></i> 8</a>
                        <a href="#" className="mr-3 text-secondary"><i className="fa fa-share-alt-square" aria-hidden="true"></i> 2</a>
                      </div>
                      <div className="p-3 d-flex align-items-top border-bottom osahan-post-comment">
                        <div className="visiter-list-image mr-3">
                          <img src={userImg2} className="BtnImg mr-2" />
                          <div className="green-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate"> James Spiegel <span className="float-right small">2 min</span></div>
                          <div className="small text-gray">Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum quia dolor sit amet, consectetur</div>
                        </div>
                      </div>
                      <div className="p-3">
                        <textarea placeholder="Add Comment..." className="form-control border-0 p-0 shadow-none" rows="1"></textarea>
                      </div>
                    </div>
                  </Col>


                  <Col md={12}>
                    <div className="box shadow-sm border rounded bg-white mb-3 osahan-post">
                      <div className="p-3 d-flex align-items-center border-bottom">
                        <div className="visiter-list-image mr-3">
                          {/* <img src={visitImg} className="BtnImg mr-2" /> */}
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">Tobia Crivellari</div>
                          <div className="small text-gray">Angular Developer</div>
                        </div>
                        <span className="ml-auto small">10 Oct 2020</span>
                      </div>
                      <div className="p-3 border-bottom">
                        <p className="mb-0"><strong>Question:</strong> Tmpo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoTmpo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                        <a href="#">#Sanket Kadam, #Prashant Patil, #Tanvi K</a>
                      </div>
                      <div className="p-3">
                        <a href="#" className="mr-3 text-secondary">26 Answers</a>
                        <a href="#" className="mr-3 text-secondary">View All</a>
                        <a href="#" className="mr-3 text-secondary float-right small"><i className="fa fa-share-square-o mr-1" aria-hidden="true"></i>26 Answers</a>
                        <a href="#" className="mr-3 text-secondary float-right small">20 Likes</a>
                      </div>
                      <div className="p-2">
                        <Row>
                          <Col md={12}>
                            <button type="button" onClick={this.handleShowAskQus} className="btn btn-outline-secondary btn-sm float-right ans-btn">Write Answer</button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              {/* @@@@@@@@@@@@@@@@@@ rigfht side grid structure @@@@@@@@@@@@@@@@@@ */}
              <Col md={3}>
                <Row>
                  <Col md="12">
                    <div className="box shadow-sm border rounded bg-white mb-3">
                      <div className="box-title border-bottom p-3">
                        <h6 className="m-0">People you might know</h6>
                      </div>
                      <div className="box-body p-3">
                        <div className="d-flex align-items-center  mb-3 visit-list">
                          <div className="visiter-list-image mr-3">
                            <img src={p8Img} className="img-fluid" />
                            <div className="green-indicator bg-success"></div>
                          </div>
                          <div className="font-weight-bold mr-2">
                            <div className="text-truncate">Sophia Lee</div>
                            <div className="small text-gray">Student at Harvard
                            </div>
                          </div>
                          <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                          </span>
                        </div>
                        <div className="d-flex align-items-center  mb-3 visit-list">
                          <div className="visiter-list-image mr-3">
                            <img src={p9Img} className="img-fluid" />
                            <div className="green-indicator bg-success"></div>
                          </div>
                          <div className="font-weight-bold mr-2">
                            <div className="text-truncate">John Doe</div>
                            <div className="small text-gray">Traveler
                              </div>
                          </div>
                          <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                          </span>
                        </div>
                        <div className="d-flex align-items-center  mb-3 visit-list">
                          <div className="visiter-list-image mr-3">
                            <img src={p10Img} className="img-fluid" />
                            <div className="green-indicator bg-success"></div>
                          </div>
                          <div className="font-weight-bold mr-2">
                            <div className="text-truncate">Julia Cox</div>
                            <div className="small text-gray">Art Designer
                                </div>
                          </div>
                          <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                          </span>
                        </div>
                        <div className="d-flex align-items-center  mb-3 visit-list">
                          <div className="visiter-list-image mr-3">
                            <img src={p11Img} className="img-fluid" />
                            <div className="green-indicator bg-success"></div>
                          </div>
                          <div className="font-weight-bold mr-2">
                            <div className="text-truncate">Robert Cook</div>
                            <div className="small text-gray">Photographer at Photography
                                  </div>
                          </div>
                          <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                          </span>
                        </div>
                        <div className="d-flex align-items-center  visit-list">
                          <div className="visiter-list-image mr-3">
                            <img src={p12Img} className="img-fluid" />
                            <div className="green-indicator bg-success"></div>
                          </div>
                          <div className="font-weight-bold mr-2">
                            <div className="text-truncate">Richard Bell</div>
                            <div className="small text-gray">Graphic Designer at Envato
                                </div>
                          </div>
                          <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="fa fa-user-plus" aria-hidden="true"></i></button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md="12">
                    <div className="box shadow-sm border rounded bg-white mb-3">
                      <div className="box-title border-bottom p-3 d-flex align-items-center">
                        <h6 className="m-0">Photos</h6>
                        <a className="ml-auto" href="#">See All <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                      </div>
                      <div className="box-body p-3">
                        <div className="Img-box-main">
                          <div className="Img-box">
                            <img src={p8Img} />
                            <img src={p9Img} />
                            <img src={p10Img} />
                          </div>
                          <div className="Img-box">
                            <img src={p10Img} />
                            <img src={p11Img} />
                            <img src={p12Img} />
                          </div>
                          <div className="Img-box">
                            <img src={p8Img} />
                            <img src={p9Img} />
                            <img src={p10Img} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md="12">
                    <div className="box shadow-sm border rounded bg-white mb-3">
                      <div className="box-title border-bottom p-3">
                        <h6 className="m-0">Jobs</h6>
                      </div>
                      <div className="box-body p-3">
                        <a href="#">
                          <div className="shadow-sm border rounded bg-white job-grid mb-3">
                            <div className="d-flex align-items-center p-3 job-item-header">
                              <div className="overflow-hidden mr-2">
                                <h6 className="text-dark mb-0">Product Director</h6>
                                <div className="text-primary">Spotify Inc.</div>
                                <div className="small text-gray-500"><i className="fa fa-map-marker" aria-hidden="true"></i> India, Punjab</div>
                              </div>
                              <img src={p13Img} className="img-fluid" />
                            </div>
                            <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                              <div className="overlap-rounded-circle">
                                <img src={u1Img} className="img-fluid rounded-circle shadow-sm" />
                                <img src={u2Img} className="img-fluid rounded-circle shadow-sm" />
                                <img src={u3Img} className="img-fluid rounded-circle shadow-sm" />
                                <img src={u4Img} className="img-fluid rounded-circle shadow-sm" />
                              </div>
                              <span className="font-weight-bold text-muted ml-2">18 connections</span>
                            </div>
                            <div className="p-3 job-item-footer">
                              <small className="text-gray-500"><i className="fa fa-clock-o" aria-hidden="true"></i> Posted 3 Days ago</small>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="shadow-sm border rounded bg-white job-item">
                            <div className="d-flex align-items-center job-grid p-3 job-item-header">
                              <div className="overflow-hidden mr-2">
                                <h6 className="font-weight-bold text-dark mb-0 text-truncate">.NET Developer</h6>
                                <div className="text-truncate text-primary">Invision</div>
                                <div className="small text-gray-500"><i className="fa fa-map-marker" aria-hidden="true"></i> London, UK</div>
                              </div>
                              <img src={in1Img} className="img-fluid rounded-circle shadow-sm" />
                            </div>
                            <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                              <div className="overlap-rounded-circle">
                                <img src={u5Img} className="img-fluid rounded-circle shadow-sm" />
                                <img src={u6Img} className="img-fluid rounded-circle shadow-sm" />
                                <img src={u7Img} className="img-fluid rounded-circle shadow-sm" />
                              </div>
                              <span className="font-weight-bold text-muted ml-2">18 connections</span>
                            </div>
                            <div className="p-3 job-item-footer">
                              <small className="text-gray-500"><i className="fa fa-clock-o" aria-hidden="true"></i> Posted 3 Days ago</small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>


          {/* Ask a qustion@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
          <Modal className="ask-qus-model" show={this.state.modalaskqus} onHide={this.state.modalaskqus}>
            <Modal.Body>
              <Row>
                <Col md={12}>
                  <div className="p-3">
                    <span className="mr-3 header">Ask a Question</span>
                    <a href="#" className="mr-3 text-secondary float-right small">
                      <DropdownButton id="dropdown-basic-button" className="public_btn" title="Public">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </DropdownButton>
                    </a>
                  </div>
                  {/* <Modal.Title>
                      <span>Ask a Question</span>
                      <span className="float-right">dd</span>
                    </Modal.Title> */}
                </Col>
              </Row>
              {/* <Row className="pb-2">
              <Col md={12}>
                <i class="fa fa-times float-right" aria-hidden="true" onClick={this.handleClose}></i>
              </Col>
            </Row> */}
              <Form className="SignUpForm border-bottom border-top">
                <Row>
                  <Col md={12}>
                    <Form.Control placeholder="Start your qustion with What, How, Why, etc." />
                  </Col>
                  <Col md={12} className="mt-3">
                    <Form.Control as="select">
                      <option>Select Category*</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Col>
                  <Col md={12} className="mt-3">
                    <Form.Control as="textarea" rows={3} placeholder="Description" />
                  </Col>
                  <Col md={12} className="mt-2">
                    <i className="fa fa-upload text-muted ml-2" aria-hidden="true"><span className="ml-2 text-muted">Upload a Media</span></i>
                  </Col>
                </Row>
              </Form>
              <Row className="p-3">
                <Col md={12}>
                  <button type="button" onClick={this.handleShowAskpeople} className="btn btn-outline-secondary btn-sm float-right next-btn">Next</button>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>


              {/* Ask a qustion people @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
              <Modal className="ask-qus-model" show={this.state.modalaskpeople} onHide={this.state.modalaskpeople}>
              <Modal.Body>
              <Row>
                <Col md={12}>
                  <div className="p-3">
                    <span className="mr-3 header">Ask a Question</span>
                    <a href="#" className="mr-3 text-secondary float-right small">
                      <DropdownButton id="dropdown-basic-button" className="public_btn" title="Public">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </DropdownButton>
                    </a>
                  </div>
                  {/* <Modal.Title>
                      <span>Ask a Question</span>
                      <span className="float-right">dd</span>
                    </Modal.Title> */}
                </Col>
              </Row>
              {/* <Row className="pb-2">
              <Col md={12}>
                <i class="fa fa-times float-right" aria-hidden="true" onClick={this.handleClose}></i>
              </Col>
            </Row> */}
              <Form className="SignUpForm border-bottom border-top">
                <Row>
                  <Col md={12} className="mt-3">
                  <Form.Label className="ml-1">Ask People</Form.Label>
                    <Form.Control as="select">
                      <option>Ta</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form>
              <Row className="p-3">
                <Col md={12}>
                  <div className="float-right">
                      <button type="button" onClick={this.handleShowAskQus} className="btn btn-outline-secondary btn-sm next-btn">Previous</button>
                      <button type="button" onClick={this.handleShowAskQus} className="btn btn-outline-secondary btn-sm next-btn ml-2">Review</button>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    )
  }
}

export default HomePage
