import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div class="container">
                <Link class="navbar-brand fw-bold" to="/">Starter React Bootstrap</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <Link class="nav-link btn btn-outline-info px-4 me-3" to="/login">Login</Link>
                    <a class="nav-link btn btn-info px-4 text-white" href="/">Register</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar