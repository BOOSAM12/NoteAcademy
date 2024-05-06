import React, { useState, useEffect } from "react";
import { generateRandomCode } from './code.js';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import es_iz from "../img/esquina_izquierda.PNG";
import es_de from "../img/esquina_derecha.PNG";
import logo_solo from "../img/logo_solo.png";
import corona from "../img/corona.png";
import icono_header from "../img/icono_header.png";
import icono_nombre from "../img/icono_nombre.png";
import '../css/grupos.css';

const URI = "http://localhost:8000/noteAcademy/getGrupoUs/";
const URI2 = "http://localhost:8000/noteAcademy/getCodigo/";


const Grupo = () => {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [userId, setUserId] = useState(null); // Inicializa userId como null
  const [groupId, setGroupId] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    verificarGrupo();


}, []);

const verificarGrupo = async () => {
  try {
    const token = localStorage.getItem("token");
    const userId = token ? JSON.parse(token).id : null;
    setUserId(userId);
    const res = await axios.get(URI + userId);
    const fetchedGroupId = res.data.id_grupo;
    setGroupId(fetchedGroupId);

    if (fetchedGroupId !== null) {
      navigate("/");
    }
  } catch (error) {
    console.error("Error al verificar grupo:", error);
  }
};



const ingresarGrupo = async (e) => {
  e.preventDefault();

  try {

    const rest = await axios.get(URI2 + codigo);
    const id_gru = rest.data.id_gru;

    console.log(id_gru)

    
    const response2 = await axios.post('http://localhost:8000/noteAcademy/relacionGruUs', {
      id_usuario: userId,
      id_grupo: id_gru,
      es_administrador: 0
    });
    if (response2.data.message == 'registro creado correctamente') {
        
      navigate("/");
      
    }



      // Aquí puedes hacer algo con la respuesta de relacionGruUs si es necesario

  } catch (error) {
    console.error("Error al crear el grupo:", error);
    alert("Error al intentar ingresar");
  }
};


  const createGrupo = async (e) => {
    e.preventDefault();
  
    try {
      const codigoAleatorio = generateRandomCode(8);
      const token = localStorage.getItem("token");
      const userId = token ? JSON.parse(token).id : null;
  
      const response = await axios.post('http://localhost:8000/noteAcademy/createGrupo', {
        nombre: nombre,
        codigo: codigoAleatorio,
        id_administrador: userId
      });

      if (response.data.message === 'Grupo creado exitosamente') {
        const groupId = response.data.groupId;

        const response2 = await axios.post('http://localhost:8000/noteAcademy/relacionGruUs', {
          id_usuario: userId,
          id_grupo: groupId,
          es_administrador: 2
        });

        if (response2.data.message == 'registro creado correctamente') {
        
          navigate("/");
          
        }

        // Aquí puedes hacer algo con la respuesta de relacionGruUs si es necesario
      } else {
        alert("Error al crear el grupo");
      }
    } catch (error) {
      console.error("Error al crear el grupo:", error);
      alert("Error al intentar crear el grupo");
    }
  };


  return (
    <>
      <div className="Gcont_alla"></div>
      <div>
        <img className="Gizquierda" src={es_iz} alt="" />
        <img className="Gderecha" src={es_de} alt="" />
      </div>
      <header>
        <div className="Gcontainer_text_header">
          <h1>NOTE ACADEMY</h1>
          <img className="Gicon_header" src={icono_header} alt="" />
        </div>
      </header>
      <main className="Gmain_login">
        <div className="Gcont_all">
          <div className="Gcontainer_logo">
            <img className="Glogo" src={logo_solo} alt="" />
          </div>
          <div className="Gcont_forms">
            <form onSubmit={createGrupo} className="Gcontainer_crear animate__animated animate__bounce">
              <div className="Garriba">
                <h2 className="titulo_grupos">Crea tu grupo</h2>
                <div className="Gcont_input">
                  <img className="Gicono_super" src={corona} alt="" />
                  <p className="Gtitulo_administrador"><b>Administrador</b></p>
                </div>
              </div>
              <div className="Gcont_input">
                <img className="Gicono_input" src={icono_nombre} alt="" />
                <input
                  className="Gtext"
                  type="text"
                  value={nombre}
                  placeholder="Nombre del grupo"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <button className="Gbtn" type="submit">
                crear
              </button>
            </form>

            {/* Formulario de ingreso al grupo (dejé la estructura pero puedes ajustarla según tus necesidades) */}
            <form onSubmit={ingresarGrupo} className="Gcontainer_crear animate__animated animate__bounce">
              <div className="Garriba">
                <h2 className="titulo_grupos">Elige tu grupo</h2>
                <div className="Gcont_input">
                  <img className="Gicono_super" src="<?php echo URL;?>IMG/estudiante.png" alt="" />
                  <p><b>Estudiante</b></p>
                </div>
              </div>
              <div className="Gcont_input">
                <img className="Gicono_input2" src="<?php echo URL;?>IMG/codigo.png" alt="" />
                <input
                  className="Gtext"
                  type="text"
                  value={codigo}
                  placeholder="Codigo de grupo"
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>
              <input className="Gbtn" type="submit" name="ingresar_grupo" value="Ingresar" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Grupo;
