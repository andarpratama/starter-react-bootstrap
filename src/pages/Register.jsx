import React from 'react';

class Register extends React.Component {

    handleSubmit(e){
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        console.log(name, email, password)

        const user = {
            name: name,
            email: email,
            password: password,
            cart: 10
        }

        localStorage.setItem('user', JSON.stringify(user))
    }

    render(){
        return(
            <div className="container py-4 mt-5 ">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <form className="shadow-sm p-4" onSubmit={(e) => {this.handleSubmit(e); e.preventDefault()}} >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwod" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwod" />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register