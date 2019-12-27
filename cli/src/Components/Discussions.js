import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { mapDispatchDiscussionsList } from '../Reducer/action';
import {Collapse,Card,CardHeader,CardTitle,CardBody} from 'reactstrap';
import {Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination'

class Discussions extends Component {
  componentDidMount() {
      this.props.getDiscussions(this.state.options)
    }
  constructor(props) {
    super(props);
    // if(!getCookie('jwt')) this.props.history.push('/login');
    
    let l_page=this.props.match.params.page?this.props.match.params.page:1;
    this.state = {
      options: {"page":l_page,"per_page":4,"filter":null,"sort_by":11,"order":'asc'},
      res: { "count": 0, "data": [] },
    }
  }

  componentDidUpdate(){
    let l_page=this.props.match.params.page?this.props.match.params.page:1;
    let options=this.state.options;

    if(options['page']!==l_page){
        options['page']=l_page;
        this.setState({options:options});
        this.props.getDiscussions(this.state.options)
    }
  }
  render() {
      let discussions=this.props.discussions;
      console.log(discussions)
    return (
      <div className="container">        
      <div className="row">
        {discussions.map((s,i)=>
          <div className="col-3">
          <Card>
            <CardHeader className="bg-darkblue">
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <Collapse>
            <CardBody className="text-justify">
                <img src={"/img/"+s.image} class="blog_img img-fluid" alt="Responsive image"/>
                <span dangerouslySetInnerHTML={{ __html: s.content}} /><Link to={"/discussion/"+s.title}>Read More</Link></CardBody>
            </Collapse>
          </Card>
          </div>)}
          <div>
          
          </div>
        </div>
        <br/>          

        {discussions[0]?<GetPagination pages={Math.ceil(discussions[0].cnt/4)} curr={this.props.match.params.page} link="/discussion/"/>:''}
      </div>
    );
  }
}

const GetPagination=(props)=>{
    let pages=[];
    let curr=Number(props.curr);
  
    if(curr===1 || curr ===2){let i=2;while(i<=props.pages && i<=curr+2){pages.push(i);i++;}}
    else if(props.pages===curr) pages=[curr-1,curr];
    else pages=[curr-1,curr,curr+1];
  
    return(<Pagination size="md" variant="secondary">
      {curr===1?<Pagination.First disabled/>:<Pagination.First><Link to={"/Discussion"}>{'<<'}</Link></Pagination.First>}
      {curr===1?<Pagination.Prev disabled/>:<Pagination.Prev><Link to={"/Discussion/"+(curr-1)}>{'<'}</Link></Pagination.Prev>}
      {curr===1?<Pagination.Item active>{1}</Pagination.Item>:<Pagination.Item><Link to={"/Discussion/"+1}>{1}</Link></Pagination.Item>}

      {(curr!==1 && curr!==2)?<Pagination.Ellipsis/>:('')}
      {pages.map((page,i) =>(
          curr===page?<Pagination.Item key={i} active>{page}</Pagination.Item>:<Pagination.Item key={i} ><Link to={"/Discussion/"+page}>{page}</Link></Pagination.Item>
          )
      )}
      {(curr!==(props.pages-1) && curr!==props.pages)?<Pagination.Ellipsis />:''}
      {(curr!==(props.pages-1) && curr!==props.pages)?<Pagination.Item ><Link to={"/Discussion/"+(props.pages)}>{props.pages}</Link></Pagination.Item>:('')}
{curr!==props.pages?<Pagination.Next><Link to={"/Discussion/"+(curr+1)}>{">"}</Link></Pagination.Next>:<Pagination.Next disabled/>}
      {curr!==props.pages?<Pagination.Last><Link to={"/Discussion/"+(props.pages)}>{">>"}</Link></Pagination.Last>:<Pagination.Last disabled/>}
      
    </Pagination>);
  }
const mapStateToProps = (state) => { return { discussions: state.discussions } }
export default connect(mapStateToProps, mapDispatchDiscussionsList)(Discussions);