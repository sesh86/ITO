import { connect } from 'react-redux'
import React, { Component } from 'react';
import { mapDispatchHome } from '../Reducer/action';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {NavLink } from 'react-router-dom';
import Discussions from './Discussions';
import Courses from './Courses';
import BlogList from './BlogList';
import axios from 'axios';
class Home extends Component {

    componentDidMount(){
      this.props.getCategories();
    }
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
        let courses=this.state.courses,category=this.props.categories;
        console.log(category)
        return(      
        <div>
          <div className="search">
        <h1 className="mt-5 text-center text">Dont just learn it, Master it</h1>
        <div className="text text-center">The most effective learning system. World’s highest course completion rate.</div>
        <br/>
        <div className="input-group container">
            <input type="text" className="form-control" placeholder="Search" onKeyUp={this.handleKeyPress} />
            <span className="input-group-addon hand"><i className="fa fa-search"></i></span>
        </div>
        <div className="container">
        <ul className="list-group dark-text" id="myUL">
          {courses?courses.map((course,index) =>(
          <li key={index} className="list-group-item"><NavLink title={"Check "+course.course_name} className="dark-text" to={"/Course/"+course.course_name}>{course.course_name}</NavLink></li>)):''
        }
        </ul>
        </div>
        <div>
          <div className="text text-center m-3"><span>Top Categories:</span>
          {category?category.map((cat,index) =>(
            <NavLink className="text" to={"/Category/"+cat.category} key={index}><div className="d-lg-inline-block category" > {cat.category}</div></NavLink>
          )):''}
          </div>
        </div>
      </div>      
      <section id="call-to-action" className="wow fadeIn">
      <div className="container text-center">
        <h3>Enroll, Learn, Grow, Repeat! Get ready to achieve your learning goals with Edureka</h3>
        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <NavLink className="cta-btn" to='/Courses'>View all Courses </NavLink>
      </div>
    </section>      
    <Courses per_page="6"></Courses>
    <section id="call-to-action" className="wow fadeIn">
      <div className="container text-center">
        <h3>Enroll, Learn, Grow, Repeat! Get ready to achieve your learning goals with Edureka</h3>
        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <NavLink className="cta-btn" to='/Courses'>View all Courses </NavLink>
      </div>
    </section>          
      <BlogList></BlogList>
      {/* <Discussions></Discussions> */}
      </div>)
}
}

const mapStateToProps = (state) => { return { categories: state.categories } }
export default connect(mapStateToProps, mapDispatchHome)(Home);