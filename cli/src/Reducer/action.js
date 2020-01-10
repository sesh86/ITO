import axios from 'axios';

export const getBlogs = (data) => {
  return {
    type: 'getBlogs',
    data:data
  }
}

export const mapDispatchBlogList = (dispatch) => {
  return {
    getBlogs: (options) =>{
      const request = axios.post('/getBlogs',options);
      request.then(function(res){
        dispatch(getBlogs(res.data))
      })
    }    
  }
}

export const getDiscussions = (data) => {
  return {
    type: 'getDiscussions',
    data:data
  }
}

export const mapDispatchDiscussionsList = (dispatch) => {
  return {
    getDiscussions: (options) =>{
      const request = axios.post('/getDiscussions',options);
      request.then(function(res){
        dispatch(getDiscussions(res.data))
      })
    }    
  }
}

export const getCourses = (data) => {
  return {
    type: 'getCourses',
    data:data
  }
}

export const mapDispatchCoursesList = (dispatch) => {
  return {
    getCourses: (options) =>{
      const request = axios.post('/getCourses',options);
      request.then(function(res){
        dispatch(getCourses(res.data))
      })
    }    
  }
}