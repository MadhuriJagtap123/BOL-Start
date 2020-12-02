import React, { Component, View } from 'react';
// import './App.css';
import { Container, NavDropdown, Navbar, Nav, Row, Col } from 'react-bootstrap';
import '../../css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Uprofile from '../../../src/img/user-profile.jpg';
import UprofileImg from '../../../src/img/p5.png';
import profileTimeImg from '../../../src/img/ProfileTimeline.png';
class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
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
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Container>
          <div className="profile-cover">
            <img src={Uprofile} className="TopBanner" />
          </div>
          <div className="bg-white shadow-sm border-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex align-items-center py-3">
                    <div className="profile-left">
                      <h5 className="font-weight-bold text-dark mb-1 mt-0">Google <span className="text-info"><i data-toggle="tooltip" data-placement="top" title="" className="feather-check-circle" data-original-title="Verified"></i></span></h5>
                      <p className="mb-0 text-muted"> Internet | Mountain View, CA | 14,128,005 followers</p>
                    </div>
                    <div className="profile-right ml-auto">
                      <button type="button" className="btn btn-light mr-2"> <i className="feather-external-link"></i> Visit website </button>
                      <button type="button" className="btn btn-primary"> <i className="feather-plus"></i> Follow </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main section start @@@@@@@@@@@@@@@@@@@@@@ */}

          <Row className="mt-3">

            <Col class="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-body">
                  <div class="d-flex align-items-center osahan-post-header p-3 border-bottom people-list">
                    <div className="dropdown-list-image mr-3 Userprofile">
                      <img src={UprofileImg} className="rounded-circle" />
                    </div>
                    <div class="font-weight-bold">
                      <div class="text-truncate">Character Concept <span class="badge badge-dark ml-1">1</span></div>
                      <div class="small text-muted"><span class="text-primary">You and 1 connection</span> have given endorsements for this skill
                    </div>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <img src={profileTimeImg} className="imgWidth" />
                </div>
                <div class="p-3 border-bottom">
                  <a href="#" class="mr-3 text-secondary"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>
                  <a href="#" class="mr-3 text-secondary"><i class="fa fa-thumbs-down" aria-hidden="true"></i></a>
                  <a href="#" class="mr-3 text-secondary"><i class="fa fa-commenting" aria-hidden="true"></i></a>
                  <a href="#" class="mr-3 text-secondary"><i class="fa fa-share-square-o" aria-hidden="true"></i></a>
                </div>
                <div class="d-flex align-items-center osahan-post-header p-3 border-bottom people-list">
                  <div className="dropdown-list-image mr-3 Userprofile">
                    <img src={UprofileImg} className="rounded-circle" />
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate"><span class="text-primary">John Simon</span></div>
                    <div class="small text-muted"><span class="text-primary">You and 1 connection </span>
                      have given endorsements for this skill have given endorsements for this skill have given endorsements for this skill have given endorsements for this skill
                    </div>
                    <div class="mt-2">
                      <a href="#" class="mr-3 text-secondary"><span class="text-primary">Like</span></a>
                      <a href="#" class="mr-3 text-secondary"><span class="text-primary">Dislike</span></a>
                      <a href="#" class="mr-3 text-secondary"><span class="text-primary">Reply</span></a>
                      <a href="#" class="mr-3 text-secondary">2 min ago</a>
                    </div>
                  </div>
                </div>
              </div>

            </Col>


            <Col className="col col-xl-3 col-lg-12 col-12">
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Sanket Activity</h6>
                </div>
                <div class="box-body pt-2">
                  <div class="d-flex align-items-center mb-3 border-bottom pb-2">
                    <div class="dropdown-list-image mr-3">
                      {/* <img class="rounded-circle" src="img/p4.png" alt=""> */}
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold mr-2">
                      <div class="text-truncate">Sanket Commited on a photo</div>
                      <div class="small text-gray-500">5 mins ago</div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3 border-bottom pb-2">
                    <div class="dropdown-list-image mr-3">
                      {/* <img class="rounded-circle" src="img/p9.png" alt=""> */}
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold mr-2">
                      <div class="text-truncate">Sanket has posted a photo</div>
                      <div class="small text-gray-500">5 mins ago</div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3 border-bottom pb-2">
                    <div class="dropdown-list-image mr-3">
                      {/* <img class="rounded-circle" src="img/p10.png" alt=""> */}
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold mr-2">
                      <div class="text-truncate">Sanket Liked her friend's post</div>
                      <div class="small text-gray-500">5 mins ago</div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3 pb-2">
                    <div class="dropdown-list-image mr-3">
                      {/* <img class="rounded-circle" src="img/p11.png" alt=""> */}
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold mr-2">
                      <div class="text-truncate">Sanket Has shared an album</div>
                      <div class="small text-gray-500">5 mins ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>


            <Col className="col col-xl-3 col-lg-12 col-12">
              <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
                <div class="py-4 px-3 border-bottom">
                  <img src={UprofileImg} className="img-fluid mt-2 rounded-circle" alt="Responsive image" />
                  {/* <img src="img/p13.png" class="img-fluid mt-2 rounded-circle" alt="Responsive image"> */}
                  <h5 class="font-weight-bold text-dark mb-1 mt-4">Gurdeep Osahan</h5>
                  <p class="mb-0 text-muted">UI / UX Designer</p>
                </div>
                <div class="d-flex">
                  <div class="col-6 border-right p-3">
                    <h6 class="font-weight-bold text-dark mb-1">358</h6>
                    <p class="mb-0 text-black-50 small">Connections</p>
                  </div>
                  <div class="col-6 p-3">
                    <h6 class="font-weight-bold text-dark mb-1">85</h6>
                    <p class="mb-0 text-black-50 small">Views</p>
                  </div>
                </div>
                <div class="overflow-hidden border-top">
                  <a class="font-weight-bold p-3 d-block" href="sign-in.html"> Log Out </a>
                </div>
              </div>
            </Col>





          </Row>
        </Container>
      </div>
    )
  }
}


export default Profile