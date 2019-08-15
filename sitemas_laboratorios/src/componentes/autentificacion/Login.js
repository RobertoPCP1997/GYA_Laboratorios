import React ,{useState}from 'react';
import Swal from 'sweetalert2';
import firebase from '../configuracion_firebase/firebase';
import {withRouter} from 'react-router-dom';

 function Login({history,recargar}) {
     const [ correo, guardarCorreo ] = useState('');
     const [ contrasena , guardarContrasena ] = useState('');

     const  logeo  = async e =>{
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(correo, contrasena);
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Excelente',
                text: 'Sesión iniciada con éxito!',
                showConfirmButton: false,
                timer: 1500
            })
            recargar(true);
            history.replace('/laboratorios');
        } catch (error) {
            console.log(error.message);
            if(error.message==='The password is invalid or the user does not have a password.'){
                Swal.fire({
                    type: 'error',
                    title: 'Contraseña incorrecta',
                    text: 'La contraseña ingresaste es incorrecta!',
                })
            }else if(error.message==='There is no user record corresponding to this identifier. The user may have been deleted.'){
                Swal.fire({
                    type: 'error',
                    title: 'Contraseña incorrecta',
                    text: 'El correo que ingresaste es incorrecto!',
                })
            }
            
        }
    }

    return (
        /*
        <div>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                 <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form onSubmit={logeo}>
                            <h3 className="text-center text-info">Iniciar Sesión</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">Correo:</label><br/>
                                <input type="text" name="username" id="username" className="form-control"
                                required
                                value={correo}
                                onChange={e=>guardarCorreo(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Contraseña:</label><br/>
                                <input type="password" name="password" id="password" className="form-control"
                                required
                                value={contrasena}
                                onChange={e=>guardarContrasena(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="Entrar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>*/
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <form onSubmit={logeo}>
                        <h1 className="text-center login-title">Iniciar</h1>
                        <div className="account-wall">
                            <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                alt="" />
                            <form className="form-signin">
                                <input type="text" class="form-control" placeholder="Email" required autofocus 
                                    value={correo}
                                    onChange={e=>guardarCorreo(e.target.value)}
                                />
                                <input type="password" class="form-control" placeholder="Password" required 
                                    value={contrasena}
                                    onChange={e=>guardarContrasena(e.target.value)}
                                />
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Login);
