import React, { Component, View } from 'react';
// import './App.css';
import { Container, NavDropdown, Navbar, Nav, Row, Col } from 'react-bootstrap';
import '../../css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Uprofile from '../../../src/img/user-profile.jpg';
import UprofileImg from '../../../src/img/p5.png';
import profileTimeImg from '../../../src/img/ProfileTimeline.png';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

 function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Row className="mt-3">

<Col className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
  <div className="box shadow-sm border rounded bg-white mb-3">
    <div className="box-body">
      <div className="d-flex align-items-center osahan-post-header p-3 border-bottom people-list">
        <div className="dropdown-list-image mr-3 Userprofile">
          <img src={UprofileImg} className="rounded-circle" />
        </div>
        <div className="font-weight-bold">
          <div className="text-truncate">Character Concept <span className="badge badge-dark ml-1">1</span></div>
          <div className="small text-muted"><span className="text-primary">You and 1 connection</span> have given endorsements for this skill
        </div>
        </div>
      </div>
    </div>
    <div className="box-body">
      <img src={profileTimeImg} className="imgWidth" />
    </div>
    <div className="p-3 border-bottom">
      <a href="#" className="mr-3 text-secondary"><i className="fa fa-thumbs-up" aria-hidden="true"></i></a>
      <a href="#" className="mr-3 text-secondary"><i className="fa fa-thumbs-down" aria-hidden="true"></i></a>
      <a href="#" className="mr-3 text-secondary"><i className="fa fa-commenting" aria-hidden="true"></i></a>
      <a href="#" className="mr-3 text-secondary"><i className="fa fa-share-square-o" aria-hidden="true"></i></a>
    </div>
    <div className="d-flex align-items-center osahan-post-header p-3 border-bottom people-list">
      <div className="dropdown-list-image mr-3 Userprofile">
        <img src={UprofileImg} className="rounded-circle" />
      </div>
      <div className="font-weight-bold">
        <div className="text-truncate"><span className="text-primary">John Simon</span></div>
        <div className="small text-muted"><span className="text-primary">You and 1 connection </span>
          have given endorsements for this skill have given endorsements for this skill have given endorsements for this skill have given endorsements for this skill
        </div>
        <div className="mt-2">
          <a href="#" className="mr-3 text-secondary"><span className="text-primary">Like</span></a>
          <a href="#" className="mr-3 text-secondary"><span className="text-primary">Dislike</span></a>
          <a href="#" className="mr-3 text-secondary"><span className="text-primary">Reply</span></a>
          <a href="#" className="mr-3 text-secondary">2 min ago</a>
        </div>
      </div>
    </div>
  </div>

  <div className="box shadow-sm border rounded bg-white mb-3">
    <div className="box-title border-bottom p-3">
      <h6 className="m-0">Skill</h6>
      <i className="fa fa-plus float-right addbtn" aria-hidden="true"></i>
    </div>
    <div className="box-body p-0">
      <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
        <div className="dropdown-list-image">
          {/* <img className="rounded-circle" src="img/p6.png" alt=""> */}
        </div>
        <div className="font-weight-bold">
          <div className="text-truncate">Photoshop</div>
          <div className="small">Learm Ipsum is simply</div>
          <div className="small">Rating</div>
        </div>
        <span className="ml-auto mb-auto">
          <div className="btn-group">
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <div className="dropdown-menu dropdown-menu-right" >
              <button className="dropdown-item" type="button"><i className="feather-trash"></i> Delete</button>
              <button className="dropdown-item" type="button"><i className="feather-x-circle"></i> Turn Off</button>
            </div>
          </div>
        </span>
      </div>


      <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
        <div className="dropdown-list-image">
          {/* <img className="rounded-circle" src="img/p6.png" alt=""> */}
        </div>
        <div className="font-weight-bold">
          <div className="text-truncate">React JS</div>
          <div className="small">Learm Ipsum is simply</div>
          <div className="small">Rating</div>
        </div>
        <span className="ml-auto mb-auto">
          <div className="btn-group">
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <div className="dropdown-menu dropdown-menu-right" >
              <button className="dropdown-item" type="button"><i className="feather-trash"></i> Delete</button>
              <button className="dropdown-item" type="button"><i className="feather-x-circle"></i> Turn Off</button>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>

</Col>


<Col className="col col-xl-3 col-lg-12 col-12">
  <div className="box shadow-sm border rounded bg-white mb-3">
    <div className="box-title border-bottom p-3">
      <h6 className="m-0">Sanket Activity</h6>
    </div>
    <div className="box-body pt-2">
      <div className="d-flex align-items-center mb-3 border-bottom pb-2">
        <div className="dropdown-list-image mr-3">
          {/* <img className="rounded-circle" src="img/p4.png" alt=""> */}
          <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold mr-2">
          <div className="text-truncate">Sanket Commited on a photo</div>
          <div className="small text-gray-500">5 mins ago</div>
        </div>
      </div>
      <div className="d-flex align-items-center mb-3 border-bottom pb-2">
        <div className="dropdown-list-image mr-3">
          {/* <img className="rounded-circle" src="img/p9.png" alt=""> */}
          <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold mr-2">
          <div className="text-truncate">Sanket has posted a photo</div>
          <div className="small text-gray-500">5 mins ago</div>
        </div>
      </div>
      <div className="d-flex align-items-center mb-3 border-bottom pb-2">
        <div className="dropdown-list-image mr-3">
          {/* <img className="rounded-circle" src="img/p10.png" alt=""> */}
          <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold mr-2">
          <div className="text-truncate">Sanket Liked her friend's post</div>
          <div className="small text-gray-500">5 mins ago</div>
        </div>
      </div>
      <div className="d-flex align-items-center mb-3 pb-2">
        <div className="dropdown-list-image mr-3">
          {/* <img className="rounded-circle" src="img/p11.png" alt=""> */}
          <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold mr-2">
          <div className="text-truncate">Sanket Has shared an album</div>
          <div className="small text-gray-500">5 mins ago</div>
        </div>
      </div>


    </div>
  </div>
</Col>


<Col className="col col-xl-3 col-lg-12 col-12">
  <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
    <div className="py-4 px-3 border-bottom">
      <img src={UprofileImg} className="img-fluid mt-2 rounded-circle" alt="Responsive image" />
      {/* <img src="img/p13.png" className="img-fluid mt-2 rounded-circle" alt="Responsive image"> */}
      <h5 className="font-weight-bold text-dark mb-1 mt-4">Gurdeep Osahan</h5>
      <p className="mb-0 text-muted">UI / UX Designer</p>
    </div>
    <div className="d-flex">
      <div className="col-6 border-right p-3">
        <h6 className="font-weight-bold text-dark mb-1">358</h6>
        <p className="mb-0 text-black-50 small">Connections</p>
      </div>
      <div className="col-6 p-3">
        <h6 className="font-weight-bold text-dark mb-1">85</h6>
        <p className="mb-0 text-black-50 small">Views</p>
      </div>
    </div>
    <div className="overflow-hidden border-top">
      <a className="font-weight-bold p-3 d-block" href="sign-in.html"> Log Out </a>
    </div>
  </div>
</Col>





</Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Row className="mt-3">

<Col className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
 

  <div className="box shadow-sm border rounded bg-white mb-3">
    <div className="box-title border-bottom p-3">
      <h6 className="m-0">Skill</h6>
      <i className="fa fa-plus float-right addbtn" aria-hidden="true"></i>
    </div>
    <div className="box-body p-0">
      <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
        <div className="dropdown-list-image">
          {/* <img className="rounded-circle" src="img/p6.png" alt=""> */}
        </div>
        <div className="font-weight-bold">
          <div className="text-truncate">Photoshop</div>
          <div className="small">Learm Ipsum is simply</div>
          <div className="small">Rating</div>
        </div>
        <span className="ml-auto mb-auto">
          <div className="btn-group">
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <div className="dropdown-menu dropdown-menu-right" >
              <button className="dropdown-item" type="button"><i className="feather-trash"></i> Delete</button>
              <button className="dropdown-item" type="button"><i className="feather-x-circle"></i> Turn Off</button>
            </div>
          </div>
        </span>
      </div>


      <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
        <div className="dropdown-list-image">
          {/* <img className="rounded-circle" src="img/p6.png" alt=""> */}
        </div>
        <div className="font-weight-bold">
          <div className="text-truncate">React JS</div>
          <div className="small">Learm Ipsum is simply</div>
          <div className="small">Rating</div>
        </div>
        <span className="ml-auto mb-auto">
          <div className="btn-group">
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <div className="dropdown-menu dropdown-menu-right" >
              <button className="dropdown-item" type="button"><i className="feather-trash"></i> Delete</button>
              <button className="dropdown-item" type="button"><i className="feather-x-circle"></i> Turn Off</button>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>

</Col>


<Col className="col col-xl-3 col-lg-12 col-12">
  <div className="box shadow-sm border rounded bg-white mb-3">
    <div className="box-title border-bottom p-3">
      <h6 className="m-0">Sanket Activity</h6>
    </div>
    <div className="box-body pt-2">
      <div className="d-flex align-items-center mb-3 border-bottom pb-2">
        <div className="dropdown-list-image mr-3">
          {/* <img className="rounded-circle" src="img/p4.png" alt=""> */}
          <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold mr-2">
          <div className="text-truncate">Sanket Commited on a photo</div>
          <div className="small text-gray-500">5 mins ago</div>
        </div>
      </div>
      <div className="d-flex align-items-center mb-3 border-bottom pb-2">
        <div className="dropdown-list-image mr-3">
          {/* <img className="rounded-circle" src="img/p9.png" alt=""> */}
          <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold mr-2">
          <div className="text-truncate">Sanket has posted a photo</div>
          <div className="small text-gray-500">5 mins ago</div>
        </div>
      </div>
      <div className="d-flex align-items-center mb-3 border-bottom pb-2">
        <div className="dropdown-list-image mr-3">
          {/* <img className="rounded-circle" src="img/p10.png" alt=""> */}
          <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold mr-2">
          <div className="text-truncate">Sanket Liked her friend's post</div>
          <div className="small text-gray-500">5 mins ago</div>
        </div>
      </div>
      <div className="d-flex align-items-center mb-3 pb-2">
        <div className="dropdown-list-image mr-3">
          {/* <img className="rounded-circle" src="img/p11.png" alt=""> */}
          <div className="status-indicator bg-success"></div>
        </div>
        <div className="font-weight-bold mr-2">
          <div className="text-truncate">Sanket Has shared an album</div>
          <div className="small text-gray-500">5 mins ago</div>
        </div>
      </div>


    </div>
  </div>
</Col>


<Col className="col col-xl-3 col-lg-12 col-12">
  <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
    <div className="py-4 px-3 border-bottom">
      <img src={UprofileImg} className="img-fluid mt-2 rounded-circle" alt="Responsive image" />
      {/* <img src="img/p13.png" className="img-fluid mt-2 rounded-circle" alt="Responsive image"> */}
      <h5 className="font-weight-bold text-dark mb-1 mt-4">Gurdeep Osahan</h5>
      <p className="mb-0 text-muted">UI / UX Designer</p>
    </div>
    <div className="d-flex">
      <div className="col-6 border-right p-3">
        <h6 className="font-weight-bold text-dark mb-1">358</h6>
        <p className="mb-0 text-black-50 small">Connections</p>
      </div>
      <div className="col-6 p-3">
        <h6 className="font-weight-bold text-dark mb-1">85</h6>
        <p className="mb-0 text-black-50 small">Views</p>
      </div>
    </div>
    <div className="overflow-hidden border-top">
      <a className="font-weight-bold p-3 d-block" href="sign-in.html"> Log Out </a>
    </div>
  </div>
</Col>





</Row>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}



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
                    <SimpleTabs></SimpleTabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main section start @@@@@@@@@@@@@@@@@@@@@@ */}

         
        </Container>
      </div>
    )
  }
}


export default Profile