import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {NavLink } from 'react-router-dom';
import Discussions from './Discussions';
import BlogList from './BlogList';
import axios from 'axios';
class Home extends Component {
    state={courses:[]}
    handleKeyPress = (e) => {
        if(e.target.value.length<3) return;

        axios.post('/searchCourse?course='+e.target.value)
        .then(res=>{    
            this.setState({courses:res.data}) 
        });
    }
    render()
    {
        let courses=this.state.courses,category;
        return(      
        <div><div className="search">
        <h1 className="text-center text">Dont just learn it, Master it</h1>
        <div className="text text-center">The most effective learning system. World’s highest course completion rate.</div>
        <br/>
        <div className="input-group container">
            <input type="text" className="form-control" placeholder="Search" onKeyUp={this.handleKeyPress} />
            <span className="input-group-addon hand"><i className="fa fa-search"></i></span>
        </div>
        <div className="container">
        <ul className="list-group" id="myUL">
          {courses?courses.map((course,index) =>(
          <li key={index} className="list-group-item"><NavLink title={"Check "+course.course_name} className="text" to={"/Course/"+course.course_name}>{course.course_name}</NavLink></li>)):''
        }
        </ul>
        </div>
        <div>
          <div className="text text-center m-3"><span>Top Categories:</span>
          {category?category.map((cat,index) =>(
            <NavLink className="text" to={"/Category/"+cat} key={index}><div className="d-lg-inline-block category" > {cat}</div></NavLink>
          )):''}
          </div>
        </div>
      </div>
      <BlogList></BlogList>
      <Discussions></Discussions>
      </div>)
}
}

export default Home;