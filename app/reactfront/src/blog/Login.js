import React, { useState, useEffect } from "react";
import axios from "axios";

import '../css/style.css';
import { useNavigate } from "react-router-dom";
import es_iz from "../img/esquina_izquierda.PNG";
import es_de from "../img/esquina_derecha.PNG";
import icono_header from "../img/icono_header.png";
import logo from "../img/logo.png";

const Login = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [form1Classes, setForm1Classes] = useState("form1i");
  const [form2Classes, setForm2Classes] = useState("form2i");
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserLoggedIn = async () => {

      try {
        const token = localStorage.getItem("token");

        if (token) {
          navigate("/");
        } else {
        }
      } catch (error) {
        console.error(
          "Error al verificar el estado de inicio de sesión:",
          error.message
        );
      }
    };

    checkUserLoggedIn();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/noteAcademy/init", {
        documento: documento,
        nombre: nombre,
        contrasena: contrasena,
      });

      if (response.data.message === "Inicio de sesión exitoso") {
        localStorage.setItem("token", JSON.stringify(response.data.token));


        navigate("/grupo");
      } else {
        alert("Nombre de usuario o contraseña incorrectos");
        navigate("/");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al intentar iniciar sesión");
    }
  };

  const store = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/noteAcademy/validacion", {
      documento: documento
    });

    if (response.data.message === "pass") {

    await axios.post('http://localhost:8000/noteAcademy/createUsuario', { documento, nombre, contrasena });
    alert('¡Te registraste correctamente!')
    navigate('/iniciar');
    }else{
    alert('El usuario ya se ha registrado')

    }
  }

  const registrar = () => {
    setForm1Classes("form");
    setForm2Classes("form2"); // Ocultar el segundo formulario
  };

  const iniciar = () => {
    setForm1Classes("formi"); // Ocultar el primer formulario
    setForm2Classes("form2i");
  };

  return (
    <div id="cont_all_login">
      
        <img className="img_back_left" src={es_iz} alt="" />
        <img className="img_back_right" src={es_de} alt="" />
      
      <header>
        <div className="container_text_header">
          <h1><span>NOTE</span><span>ACADEMY</span></h1>
          <img className="icon_header" src={icono_header} alt="" />
        </div>
      </header>

      <main className="main_login">
        <div className="container_logo">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <span className="eslogan">Organiza tu vida, alcanza tus metas</span>
        </div>

        <div className="container_form">
          <div id="form" className={form1Classes}>
            <form className="formL form1" onSubmit={handleLogin}>
              <h2 id="holaa">¡INICIA SESIÓN!</h2>
              <input
                className="logear"
                type="text"
                value={documento}
                id="l"
                placeholder="Documento"
                onChange={(e) => setDocumento(e.target.value)}
              />
              <input
                className="logear"
                type="password"
                value={contrasena}
                id=""
                placeholder="Contraseña"
                onChange={(e) => setContrasena(e.target.value)}
              />
              <div></div>
              <button className="iniciar" type="submit">
                Iniciar Sesión
              </button>
            </form>
            <button id="boton1" className="" onClick={registrar}>
              Registrar nueva cuenta
            </button>
          </div>

          <div id='form2' className={form2Classes}>
            <form className="formL" onSubmit={store}>
              <h2 id='holaa'className="" >¡Registrate!</h2>
              <input className="logear" type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} id="doc" placeholder="Numero de documento"/>
              <input className="logear" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nom" placeholder="Escribe nombre"/>
              <input className="logear" type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} id="con" placeholder="Contraseña"/>
              <div></div>
              <button className="iniciar" type="submit">
                Registrarte
              </button>
            </form>
            <button id='boton2' className="" onClick={iniciar}>¿Ya tienes cuenta?</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
