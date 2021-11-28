import React from "react"

class Login extends React.Component {

    state = {
        title: 'Login'
    }

    componentDidMount(){
        document.title = this.state.title
    }

    render(){
        return(
            <div className="container py-4 mt-5">
                <h2>Welcome to <b>Starter React Bootstrap</b></h2>
                <h3>Login</h3>
            </div>
        )
    }
}

export default Login