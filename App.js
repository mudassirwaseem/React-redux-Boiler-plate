
import './App.css';
import {connect} from 'react-redux'
import React from 'react'
import {    facebook_login, set_data } from './Store/reducer/action'
import Home from './Container/Home'

class App extends React.Component{
render(){
  // console.log("props=>>>",this.props)
  return(
    <div style = {{textAlign : 'center'}}>

<h1>React Router</h1>
<Home/>
<button onClick={()=> this.props.set_data()}>submit</button>
{/* <button onClick={()=> this.props.facebook_login()}>facebook login</button> */}

    </div>
  )
}
}

const mapStateToProps = (state) =>({
users : state,

})

const mapDispatchToProps = (dispatch)=> ({
set_data : ()=> dispatch(set_data())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
