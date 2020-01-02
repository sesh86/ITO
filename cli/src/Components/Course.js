import React, { Component } from 'react';
import {Navbar,Nav,Button,Jumbotron,Accordion,Card,ListGroup,Row,Col,Container,Breadcrumb} from 'react-bootstrap'
import axios from 'axios';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
          course:{}
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        let l_data={course:this.props.match.params.course}
          axios.post('/getCourse',l_data,'{}')
          .then(res=>{    
              this.setState({course:res.data})              
          });
      }    
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight,video:window.innerWidth*0.7 });
      }      
    render()
    {
        let course=this.state.course;
        console.log(course)
        let sylabus=course.course_name?JSON.parse(course.course_sylabus):[];
        let FAQs=course.course_name?JSON.parse(course.faq):[];
        console.log(sylabus);

        return(
        <div>
        <div className="bg">
            <Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Web-Development
  </Breadcrumb.Item>
    <Breadcrumb.Item active><img width="25" src={"/img/"+course.logo} className="justify-content-center"></img>{course.course_name}</Breadcrumb.Item>
</Breadcrumb>
<Container>
<Row className="justify-content-md-left">
    <Col md="auto">
    <Card>
        <Card.Body className="bg">
        <iframe  className="full" height="210" src={course.demo_url} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Card.Body>
        <Card.Footer>
            <button className="btn full btn-darkblue">Enroll Today</button>
        </Card.Footer>
    </Card>
    <br/><br/>
    
</Col>
<Col>
<Card>
        <Card.Header><strong>About {course.course_name} Training</strong></Card.Header>
      <Card.Body>{course.description}</Card.Body>
</Card>
<div>

</div>
</Col>
</Row>
</Container>
</div>
<Navbar sticky="top" bg="dark" variant="dark">
    <Nav>
      <Nav.Link href="#course_details">Course Details</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#sylabus">Syllabus</Nav.Link>
      <Nav.Link href="#faq">FAQs</Nav.Link>
    </Nav>
</Navbar>
<br/>
<div id="course_details">
            <Card>
                <Card.Body>
        <div dangerouslySetInnerHTML={{__html:course.course_details}}/>
        </Card.Body>
        </Card>
</div>
<div id="features">
            <Card>
            <Card.Header className="bg-darkblue"><strong>Features</strong></Card.Header>
                <Card.Body>
                <ListGroup>
            <ListGroup.Item>LMS : {course.lms}</ListGroup.Item>
            <ListGroup.Item>Pre-Requisites : {course.pre_requisites}</ListGroup.Item>
            <ListGroup.Item>Live Project - {course.live_project}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
        </Card>
</div>
            <br/>
            
            <Card id="sylabus">
                <Card.Header className="bg-darkblue">
            <strong>Syllabus</strong>
            </Card.Header>
            <Card.Body>
            <Accordion defaultActiveKey="0">
                {sylabus.map((c,i)=>
                    <Card key={i}>
                    <Accordion.Toggle as={Card.Header} eventKey={i} title="Click to Expand">
                    <span>&#10149;&nbsp;&nbsp;</span>{c.topic}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i}>
                <Card.Body><span dangerouslySetInnerHTML={{ __html: c.content}} /></Card.Body>
                    </Accordion.Collapse>
                    </Card>                    
                    )}
            </Accordion>
            </Card.Body>
            </Card>
            <Card id="faq" >
                <Card.Header className="bg-darkblue">FAQs</Card.Header>
            <Card.Body>
            <Accordion defaultActiveKey="0">
                {FAQs.map((c,i)=>
                    <Card key={i}>
                    <Accordion.Toggle as={Card.Header} eventKey={i} title="Click to Expand">
                    <span>&#10149;&nbsp;&nbsp;</span>{c.topic}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i}>
                <Card.Body><span dangerouslySetInnerHTML={{ __html: c.content}} /></Card.Body>
                    </Accordion.Collapse>
                    </Card>                    
                    )}
            </Accordion>
            </Card.Body>
            </Card>            
            <Container>
               
        </Container>
</div>);
    }
}

export default Course;