const initState = {
    blogs:[],
    discussions:[]
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
    
    if(!action.name)
      return state
  }
  
  export default rootReducer
  