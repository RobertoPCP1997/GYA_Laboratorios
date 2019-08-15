import React, { useState } from 'react';
import firebase from '../componentes/configuracion_firebase/firebase';
import Swal from 'sweetalert2';
import { withRouter, Link, NavLink } from 'react-router-dom';

function Header({ history }) {

    const [autenticacion, guardarAutenticacion] = useState(false);

    const logOut = () => {
        firebase.auth().signOut();
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Bien',
            text: 'Sesión cerrada con exito, vuelva pronto.',
            showConfirmButton: false,
            timer: 1500
        })
        history.replace('/');
    }
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            //El state se pone en true si el usuario esta logeado
            return guardarAutenticacion(true);
        } else {
            //El state se pone en false si el usuario esta logeado
            return guardarAutenticacion(false);
        }
    })
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 mb-5">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item dropdown">

                        <a className="nav dropdown-toggle" data-toggle="dropdown" href="/laboratorios" role="button" aria-haspopup="true" aria-expanded="false">Sistema de Laboratorios |</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/laboratorios">Listado laboratorios</a>
                        <a className="dropdown-item" href="/nuevo-laboratorio">Nuevo laboratorio</a>
                        <div className="dropdown-divider"></div>

                        <a className="nav dropdown-toggle" data-toggle="dropdown" href="/horarios" role="button" aria-haspopup="true" aria-expanded="false">Adminsitrar Cursos </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/horarios">Listado</a>
                        <a class="dropdown-item" href="/nuevo-horario">Curso nuevo</a>
                        <div class="dropdown-divider"></div>

                    </li>


                </ul>

            </div>

        </nav>
    )
}
export default withRouter(Header);