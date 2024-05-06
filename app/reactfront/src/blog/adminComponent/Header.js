import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes as xs } from "@fortawesome/free-solid-svg-icons";
import asignaturass from "../../img/asignaturas.png";
import roles from "../../img/roles.png";
import logo_admin from "../../img/logo_admin.png";
import logo_solo from "../../img/logo_solo.png";
import asignaturasE from "../../img/asignaturasE.png";
import icono_header from "../../img/icono_header.png";
import '../../css/admin.css';
import '../../css/header.css';


const URIs = {
    getGrupoUs: "http://localhost:8000/noteAcademy/getGrupoUs/",
    getAsignaturas: "http://localhost:8000/noteAcademy/getAsignaruras/",
    abandonar: "http://localhost:8000/noteAcademy/abandonar/",
    eliminarAsignatura: "http://localhost:8000/noteAcademy/eliminarAsignatura/",
    convertirAdministrador: "http://localhost:8000/noteAcademy/convertirAdministrador/",
    createAsignaturas: "http://localhost:8000/noteAcademy/createAsignaruras",
    getUsuario: "http://localhost:8000/noteAcademy/getUsuario/",
    getGrupo: "http://localhost:8000/noteAcademy/getGrupo/",
    cantidadUsuariosGru: "http://localhost:8000/noteAcademy/cantidadUsuariosGru/",
    obtenerUsuariosPorGrupo: "http://localhost:8000/noteAcademy/obtenerUsuariosPorGrupo/",
  };


const HeaderP = () => {

    const [usuario, setUsuario] = useState([]);
    const [userId, setUserId] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [grupo, setGrupo] = useState([]);
    const [containerUT, setUS] = useState("containerUTh");
    const navigate = useNavigate();
    const [usuariosGrupo, setUsuariosGrupo] = useState([]);



    

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = token ? JSON.parse(token).id : null;
        setUserId(userId);

        if (userId) {
            fetchUsuarios(userId);
            fetchGrupo(userId);
            fetchUsuariosGrupo(userId);

        }
    }, [userId]);

    const fetchUsuarios = async (userId) => {
        try {
            const response = await fetch(`${URIs.getUsuario}${userId}`);
            const data = await response.json();
            setUsuario(data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const fetchGrupo = async (userId) => {
        try {
            const res = await axios.get(`${URIs.getGrupoUs}${userId}`);
            const fetchedGroupId = res.data.id_grupo;
            const admin = await res.data.es_administrador;
            setAdmin(admin);
            const response = await fetch(`${URIs.getGrupo}${fetchedGroupId}`);
            const data = await response.json();
            setGrupo(data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };
    const fetchUsuariosGrupo = async (userId) => {
        try {
            const res = await axios.get(`${URIs.getGrupoUs}${userId}`);
            const fetchedGroupId = res.data.id_grupo;
            
            const response = await axios.get(`${URIs.obtenerUsuariosPorGrupo}${fetchedGroupId}`);
            setUsuariosGrupo(response.data);
        } catch (error) {
            console.error('Error al obtener usuarios del grupo:', error);
        }
    };
    const convertirAdministrador = async (id, rol) => {
        try {
            const response = await axios.put(`${URIs.convertirAdministrador}${id}/${rol}`);
            
            if (response.data.message === 'Registro actualizado correctamente') {
                // alert('Usuario actualizado correctamente.');
            } else {
                console.error('Error al convertir usuario en administrador:', response.data.message);
            }
            fetchUsuariosGrupo(userId);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error.message);
        }
    };
    const mostrarUs = async () => {
        setUS("containerUT");
    };
    const salirUs = async () => {
        setUS("containerUTh");
    };
    const abandonar = async () => {
        await axios.delete(`${URIs.abandonar}${userId}`);
        navigate('/grupo');
    };
    const exit = async () => {

        localStorage.removeItem('token');
        console.log(localStorage.getItem("token"))
        navigate('/iniciar');
    };

return(
    <>
    
    <header>
        <div className="invisible">1</div>
        <div className="visible">
            <div className="logo_header" key={grupo.id}>
                    <h2 className="nombre_usuario">{grupo.nombre}</h2>
            </div> 
                <div className="rol" key={usuario.id}>
                    <span className="titulo_rol">{usuario.nombre}</span>
                </div>
            <div className="perfil" >
                {admin == 2 && (
                    <img className="roles" onClick={mostrarUs} src={roles} alt=""/>
                )}
                <img src={logo_admin} alt=""/>
            </div>
        </div>
    </header>
    <nav className="gestion">

        <div className="note">
            <a href="<?php echo URL;?>asignaturaController/principal"><img className="logo_solo" src={logo_solo} alt=""/></a>
            <div className="nombre">
                <h1>NOTE <br/> ACADEMY</h1>
                <img className="icon_header" src={icono_header} alt=""/>
            </div>
        </div>

        <div className="observacion">
            <a className="observar" href="<?php echo URL;?>asignaturaController/principal">inicio</a>
            <span className="observar" onClick={abandonar}>Abandonar</span>

        </div>
        <button className="exit" onClick={exit}>EXIT</button>
    </nav>

    <div className={containerUT}>
    <span className="btnSalirForm" onClick={salirUs}><FontAwesomeIcon icon={xs} /></span>

            <div className="containerU">
                <h1 className="heading">Registro de integrantes</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Convertir en administrador</th>
                    </tr>
                </thead>
                <tbody>
                    {usuariosGrupo.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>
                                {usuario.esAdmin === 1 && (
                                    <button onClick={() => convertirAdministrador(usuario.id, 0)}>
                                        <img className="img1" src={asignaturass} alt=""/>
                                    </button>
                                )}
                                {usuario.esAdmin === 2 && (
                                    <button>
                                        <span>No puedes cambiar tu rol</span>
                                    </button>
                                )}
                                {usuario.esAdmin === 0 && (

                                    <button onClick={() => convertirAdministrador(usuario.id, 1)}>
                                        <img className="img1" src={asignaturasE} alt=""/>
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>
        </div>

<div className="normalizar"><p>d</p></div>

    
    </>
)
};

export default HeaderP;