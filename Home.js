import React from 'react'
import {connect} from 'react-redux'
import {set_data} from '../Store/reducer/action/index'


class Home extends React.Component {
    render() {
console.log("HOME=>.>" , this.props)
        return (
            <div>
           <h1>
               Home
           </h1>

            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    users : state,
    email : "dvfuiadhsf dgcd"
    })

    const mapDispatchToProps = (dispatch)=> ({
        set_data : (data)=> dispatch(set_data(data))
        })
export default connect(mapStateToProps,mapDispatchToProps) (Home);