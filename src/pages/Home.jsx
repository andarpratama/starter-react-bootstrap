import React from "react"

class Home extends React.Component {
    state = { 
        title: 'Home'
    }

    componentDidMount(){
        document.title = this.props.title + ' - ' + this.state.title
    }

    render(){
        return(
            <div className="container py-4 mt-5">
                <h2>Welcome to <b>Starter React Bootstrap</b></h2>
                <span className="me-2" >Created by</span>
                <a className="text-decoration-none fw-bold text-primary" href="https://www.instagram.com/andar.pra/">Andar Pratama</a>
                <br />
                <span>Github : </span>
                <a className="text-decoration-none fw-bold text-primary" href="https://github.com/andarpratama/starter-react-bootsrap">andarpratama/starter-react-bootsrap</a>
            </div>
        )
    }
}

export default Home