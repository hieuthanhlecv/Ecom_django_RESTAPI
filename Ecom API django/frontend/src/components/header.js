import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
      return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar scroll</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                              <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                                    <li className="nav-item">
                                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link className="nav-link" aria-current="page" to="/categories">Categories</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link className="nav-link" aria-current="page" to="/checkout">My Cart (4)</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                          </a>
                                          <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                          </ul>
                                    </li>
                              </ul>

                              <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                              </form>

                        </div>
                  </div>
            </nav>
      );
}
export default Header;