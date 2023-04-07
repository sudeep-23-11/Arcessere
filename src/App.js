import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from './components/Home/Home'
import Weather from './components/Weather/Weather'
import Movies from './components/Movies/Movies'
import News from './components/News/News'

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Arcessere</Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Weather">Weather</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Movies">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/News">News</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Weather" element={<Weather />} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/News" element={<News />} />
            </Routes>
        </Router>
    )
}

export default App