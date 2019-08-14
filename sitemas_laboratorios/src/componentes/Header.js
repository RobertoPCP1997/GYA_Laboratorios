import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

function Header({ history }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 mb-5">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        
                            <li className="nav-item dropdown">
                                    
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sistema de Laboratorios |</a>
                                     <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/laboratorios">Listado laboratorios</a>
                                        <a className="dropdown-item" href="/nuevo-laboratorio">Nuevo laboratorio</a>
                                    <div className="dropdown-divider"></div>
                                        
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Adminsitrar Cursos </a>
                                     <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Listado</a>
                                        <a class="dropdown-item" href="#">Curso nuevo</a>
                                    <div class="dropdown-divider"></div>
                                        <li className="nav-item">
                                            <NavLink
                                                to='/nuevo-laboratorio'
                                                className="nav-link"
                                                activeClassName="active"
                                            >Nuevo Laboratorio</NavLink>
                                        </li>

                                        
                            </li>
                            
    
                        </ul>
                       
                    </div>
                
        </nav>
    )
}
export default withRouter(Header);