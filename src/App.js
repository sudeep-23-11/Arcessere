import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Weather from './components/Weather';
import Movies from './components/Movies';
import News from './components/News';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Fetch It Baby</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/Home">Home</Link>
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
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/Weather" element={<Weather />} />
                <Route exact path="/Movies" element={<Movies />} />
                <Route exact path="/News" element={<News />} />
            </Routes>
        </Router>
    );
}

export default App;