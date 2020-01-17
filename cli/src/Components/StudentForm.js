import axios from 'axios';
import {Breadcrumb} from 'react-bootstrap'
import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
// import { mapDispatchBlogList } from '../Reducer/action';
import {Collapse,Card,CardHeader,CardTitle,CardBody} from 'reactstrap';
import {NavLink,Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination'

class StudentForm extends Component {
  componentDidMount() {
    //   this.props.getBlogs(this.state.options)
  }
  constructor(props) {
      super(props);
      this.state={error:'',fileNames:[]}
  }
  onSubmit =(e)=>{
    e.preventDefault();
    let data = new FormData();
    for(let i in e.target.elements){
        if(e.target.elements[i].value!==undefined && e.target.elements[i].value!==""){
            data.append(e.target.elements[i].name,e.target.elements[i].value);
            // data[e.target.elements[i].name]=e.target.elements[i].value;
        }
    }
    // console.log(data)
    const files=this.state.files;
    if(files[0]) data.append('cert1',files[0]);
    if(files[1]) data.append('cert2',files[1]);
    axios.post('/createStudent', data)
    .then(function (res) {
      console.log(res)
      // currentComponent.props.history.push('/CourseList');
    })    
  }
  onChangeHandler=event=>{
    
    if(event.target.files.length>2){
        this.setState({error:'Select at most 2 files'});
        event.target.value=null
        return;
    }
    let files=[],fileNames=[];
    for(let i=0;i<event.target.files.length;i++){
        if(event.target.files[i].size>1048576){
            this.setState({error:'File size cannot be greater than 1 MB'});
            event.target.value=null
            console.log(event.target.value);
            return;
        }
        else{
            fileNames.push(event.target.files[i].name);
            files.push(event.target.files[i]);
        }
    }
    
    this.setState({
      files:files,
      fileNames:fileNames,
      loaded: 0,
    })
  }  
  render(){
    let fileNames=this.state.fileNames;
      return(
    <div className="container">
    <h1>Student Form</h1>
    <form onSubmit={this.onSubmit}>
        Name<span className="mandatory">*</span><input required className="form-control" type="text" name="name" placeholder="name"></input><br/>
        Mobile<span className="mandatory">*</span><input required className="form-control" type="text" name="mobile" placeholder="mobile"></input><br/>
        Email<input className="form-control" type="email" name="email" placeholder="mobile"></input><br/>
        Father's Name<input className="form-control" type="text" name="father_name" placeholder="father's name"></input><br/>
        Father's Mobile<input className="form-control" type="text" name="father_mobile" placeholder="father's mobile"></input><br/>
        Certificate 1<input className="form-control" type="file" name="cert1" onChange={this.onChangeHandler} multiple/>
        <ul className="list-group dark-text">
        {fileNames.map((f,i) =>(<li key={i} className="list-group-item">{f}</li>))}
        </ul>
        <br/>
        {this.state.error!=''?<div className="alert alert-danger">{this.state.error}</div>:''}
        <button className="form-control btn btn-darkblue">Submit</button>      
    </form>
    <br/>
    </div>)
  }
}

const mapStateToProps = (state) => { return { blogs: state.blogs }}
export default StudentForm;