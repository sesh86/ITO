const initState = {
    blogs:[],
    discussions:[],
    courses:[],
    categories:[]
  }
  
  const rootReducer = (state = initState, action) => {
  
  
  if(action.type==='getBlogs'){
          return {
            ...state,blogs:action.data
          }
  }
  else if(action.type==='getDiscussions'){
    return {
      ...state,discussions:action.data
    }
  }  
  else if(action.type==='getCourses'){
    return {
      ...state,courses:action.data
    }
  }  
  else if(action.type==='getCategories'){
    return {
      ...state,categories:action.data
    }
  }        
  
  if(!action.name)
      return state
  }
  
  export default rootReducer
  