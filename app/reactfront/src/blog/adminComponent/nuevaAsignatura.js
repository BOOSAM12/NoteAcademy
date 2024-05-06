

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


const NuevaAsignaturaP = ({ actualizarClase  }) => {


    const [userId, setUserId] = useState([]);
    const [form1Classes, setForm1Classes] = useState(0);
    const [groupId, setGroupId] = useState(null);
    const [asignaturas, setAsignaturas] = useState([]);
    const [nombre, setNombreAsignatura] = useState([]);


    

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = token ? JSON.parse(token).id : null;
        setUserId(userId);

        if (userId) {


        }
    }, [userId]);

    const getAsignaturas = async () => {
        try {
            const res = await axios.get(`${URIs.getGrupoUs}${userId}`);
            const fetchedGroupId = res.data.id_grupo;
            setGroupId(fetchedGroupId);
    
            const response = await axios.get(`${URIs.getAsignaturas}${fetchedGroupId}`);
            await setAsignaturas(response.data);
        } catch (error) {
            console.error('Error al obtener asignaturas:', error);
        }
    };


    const store = async (e) => {
        e.preventDefault();
        await axios.post(URIs.createAsignaturas, { nombre: nombre, id_grupo: groupId });
        getAsignaturas();
    };
    

    

    const salir =  () => {
        setForm1Classes(actualizarClase);
        console.log(form1Classes, actualizarClase)
      };


    const formAsignatura = async () => {
        setForm1Classes("formAsignatura");
    };

return(
    <>
    
    <form onSubmit={store} className={actualizarClase == form1Classes ? 'formAsignaturah' : 'formAsignatura'}>
    <span className="btnSalirForm" onClick={() => salir("formAsignaturah")}><FontAwesomeIcon icon={xs} /></span>

    <div className="contFormAsigantura">
        <h3>INGRESAR NOMBRE</h3>
        <input className="crearAsignatura" type="text" value={nombre} onChange={(e) => setNombreAsignatura(e.target.value)} id="doc" placeholder="Nombre de asignatura"/>
        <input className="crearAsignatura" type="hidden" value={groupId || 6} onChange={(e) => setNombreAsignatura(e.target.value)} id="doc" placeholder="Numero de documento"/>

        <button className="btnAsignatura" type="submit">
            Registrar
        </button>
    </div>

</form>

    
    </>
)
};

export default NuevaAsignaturaP;