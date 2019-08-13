import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

function Header({ history }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 mb-5">
        
                <div className="container-fluid">
                    <Link to="/laboratorios" className="navbar-brand">Sistema de Laboratorios | </Link>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink
                                    to='/laboratorios'
                                    className="nav-link"
                                    activeClassName="active"
                                >Laboratorios</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to='/nuevo-laboratorio'
                                    className="nav-link"
                                    activeClassName="active"
                                >Nuevo Laboratorio</NavLink>
                            </li>
    
                        </ul>
                       
                    </div>
                </div>
        </nav>
    )
}
export default withRouter(Header);