import React from "react"

class Product extends React.Component {

    state = {
        title: 'Product',
        quantity: 0
    }

    componentDidMount(){
        document.title = this.state.title
        localStorage.setItem('carts', 0);
    }
    
    handlePlus = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    handleMinus = () => {
        if(this.state.quantity === 0){
            this.setState({ quantity: 0 })
        } else {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    addToCart = () =>{
        const cartTotal = localStorage.getItem('carts');
        alert(cartTotal)
    }
    

    render(){
        return(
            <div className="container py-4 mt-5">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3>Product</h3>
                                <hr />
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            <div className="input-group mb-3">
                                                <button className="input-group-text px-5" onClick={this.handleMinus} >-</button>
                                                <input type="number" className="form-control text-center" value={this.state.quantity}  />
                                                <button className="input-group-text px-5" onClick={this.handlePlus} >+</button>
                                            </div>
                                            <div className="d-flex" >
                                                <button className="btn w-100 btn-primary me-2">Beli</button>
                                                <button onClick={this.addToCart} className="btn w-100 btn-outline-primary ms-2">Add toCart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;