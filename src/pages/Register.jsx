import React from 'react';

class Register extends React.Component {

    handleSubmit(e){
        const data = {
            name: this.name,
            email: this.email,
            password: this.password,
        }

        console.log(data)

    }

    render(){
        return(
            <div className="container py-4 mt-5 ">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <form className="shadow-sm p-4" onSubmit={this.handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" onChange={e => this.name = e.target.value}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={e => this.email = e.target.value} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwod" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwod" name="password" onChange={e => this.password = e.target.value} />
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