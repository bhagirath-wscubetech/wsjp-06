import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-primary shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WsCube Tech</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-[red]">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item text-[blue]">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item text-[green]">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
