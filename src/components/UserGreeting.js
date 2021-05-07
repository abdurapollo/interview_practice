import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : false
        }
    }

    render(){
    
        //4th approach short circuit operator approach
        return this.state.isLoggedIn && <div>Welcome Abd</div>

        // 3rd approach ternary operator
        //return this.state.isLoggedIn ? <div>Welcome Abd</div> : <div>Welcome Guest</div>

       //2nd approach
    //    let message
    //    if(this.state.isLoggedIn){
    //        message = <div>Welcome Abd</div>
    //    } else {
    //        message = <div>Welcome Guest</div>
    //    }

    // return <div className="heading">{message}</div>

        // if(this.state.isLoggedIn){
        //     return <div>Welcome Abd</div>
        // } else{
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting