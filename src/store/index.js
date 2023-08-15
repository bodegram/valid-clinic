import {createStore} from 'redux'


let data = {
   auth: false,
   username: ''

}
const reducerFn = (state=data, action) =>{
    switch(action.type){
      case "login":
         return {auth: true, username: action.payload}

      case "logout":
         sessionStorage.removeItem('token')
         return {auth: false}
         

      default:
         return state

    }
}

const store = createStore(reducerFn)


export default store