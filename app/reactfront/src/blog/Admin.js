import axios from "axios";
import { useState, useEffect } from "react";
import { MagicMotion } from "react-magic-motion";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireExtinguisher,
  faTimes as xs,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import asignaturass from "../img/asignaturas.png";
import participantes from "../img/participantes.png";
import logo_editar from "../img/logo_editar.png";
import eliminarAsignatura from "../img/eliminarAsignatura.png";
import añadir from "../img/añadir.png";
import copiar from "../img/copiar.png";
import desplegar from "../img/desplegar.png";
import ver from "../img/ver.png";
import roles from "../img/roles.png";
import logo_admin from "../img/logo_admin.png";
import logo_solo from "../img/logo_solo.png";
import asignaturasE from "../img/asignaturasE.png";
import icono_header from "../img/icono_header.png";
import HeaderP from "./adminComponent/Header.js";
import NuevaAsignaturaP from "./adminComponent/nuevaAsignatura.js";

import "../css/admin.css";
import "../css/header.css";

const URIs = {
  getGrupoUs: "http://localhost:8000/noteAcademy/getGrupoUs/",
  getAsignaturas: "http://localhost:8000/noteAcademy/getAsignaruras/",
  abandonar: "http://localhost:8000/noteAcademy/abandonar/",
  eliminarAsignatura: "http://localhost:8000/noteAcademy/eliminarAsignatura/",
  eliminarRecordatorio:
    "http://localhost:8000/noteAcademy/eliminarRecordatorio/",
  eliminarUsuarioRecordatorio:
    "http://localhost:8000/noteAcademy/eliminarUsuarioRecordatorio/",
  eliminarRecordatorioAsignatura:
    "http://localhost:8000/noteAcademy/eliminarRecordatorioAsignatura/",
  convertirAdministrador:
    "http://localhost:8000/noteAcademy/convertirAdministrador/",
  createAsignaturas: "http://localhost:8000/noteAcademy/createAsignaruras",
  getUsuario: "http://localhost:8000/noteAcademy/getUsuario/",
  getGrupo: "http://localhost:8000/noteAcademy/getGrupo/",
  cantidadUsuariosGru: "http://localhost:8000/noteAcademy/cantidadUsuariosGru/",
  obtenerUsuariosPorGrupo:
    "http://localhost:8000/noteAcademy/obtenerUsuariosPorGrupo/",
  createRecordatorios: "http://localhost:8000/noteAcademy/crearRecordatorio/",
  getRecordatorios: "http://localhost:8000/noteAcademy/obtenerRecordatorios/",
  downloadArchivo: "http://localhost:8000/noteAcademy/download/",
  marcarHecho: "http://localhost:8000/noteAcademy/marcarHecho/",
  editarRecordatorio: "http://localhost:8000/noteAcademy/editarRecordatorio/",
};
const Admin = () => {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [asignaturas, setAsignaturas] = useState([]);
  const [nombre, setNombreAsignatura] = useState([]);
  const [form1Classes, setForm1Classes] = useState("formAsignaturah");
  const [form2Classes, setForm2Classes] = useState("cont-all-recorh");
  const [form3Classes, setForm3Classes] = useState("Rcontainer_allh");
  const [form4Classes, setForm4Classes] = useState("cont-all-recorh");
  const [despleg, setDesplegar] = useState("RimgDesplegar");
  const [idDes, setIdDes] = useState([]);
  const [containerUT, setUS] = useState("containerUTh");
  const [userId, setUserId] = useState(null); // Inicializa userId como null
  const [grupo, setGrupo] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [countUsers, setCount] = useState([]);

  const [idEditar, setIdEditar] = useState("");
  const [tituloE, setTituloEditar] = useState("");
  const [nivelE, setNivelEditar] = useState("");
  const [fechaE, setFechaEditar] = useState("");
  const [descripcionE, setDescripcionEditar] = useState("");
  // const [idAsignatura, setIdAsignatura] = useState("");

  const [tituloR, setTituloAsignatura] = useState("");
  const [nivelR, setNivelAsignatura] = useState("");
  const [fechaR, setFechaAsignatura] = useState("");
  const [descripcionR, setDescripcionAsignatura] = useState("");
  // const [idAsignatura, setIdAsignatura] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [usuariosGrupo, setUsuariosGrupoo] = useState([]);
  const [idAsignatura, setIdAsignatura] = useState([]);
  const [groupId, setGroupId] = useState(null);
  const [recordatorios, setRecordatorios] = useState([]);
  const navigate = useNavigate();

  // const update = async (e) => {
  //   e.preventDefault();
  //   await axios.put(URI + id, {
  //     title: title,
  //     content: content,
  //   });
  //   navigate("/");
  // };
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      // localStorage.removeItem('token');

      try {
        const token = localStorage.getItem("token");

        if (!token) {
          // Redirigir a la página de registro si no hay token
          navigate("/iniciar");
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = token ? JSON.parse(token).id : null;
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (userId) {
      getAsignaturas();
      fetchGrupo();
      countUsuarios();
    }
  }, [userId]);

  const fetchGrupo = async () => {
    try {
      const res = await axios.get(`${URIs.getGrupoUs}${userId}`);
      const fetchedGroupId = res.data.id_grupo;
      const admin = await res.data.es_administrador;
      setGroupId(fetchedGroupId);
      setAdmin(admin);
      const response = await fetch(`${URIs.getGrupo}${fetchedGroupId}`);
      const data = await response.json();
      setGrupo(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const countUsuarios = async () => {
    try {
      const res = await axios.get(`${URIs.getGrupoUs}${userId}`);
      const fetchedGroupId = res.data.id_grupo;

      const response = await axios.get(
        `${URIs.cantidadUsuariosGru}${fetchedGroupId}`
      );
      const count = await response.data.count;
      setCount(count);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const getAsignaturas = async () => {
    try {
      const res = await axios.get(`${URIs.getGrupoUs}${userId}`);
      const fetchedGroupId = res.data.id_grupo;
      setGroupId(fetchedGroupId);

      const response = await axios.get(
        `${URIs.getAsignaturas}${fetchedGroupId}`
      );
      console.log(response.data);
      await setAsignaturas(response.data);
    } catch (error) {
      console.error("Error al obtener asignaturas:", error);
    }
  };

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URIs.createAsignaturas, {
      nombre: nombre,
      id_grupo: groupId,
    });
    getAsignaturas();
  };

  const eliminarAsig = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const userId = token ? JSON.parse(token).id : null;
      setUserId(userId);

      const resp = await axios.get(`${URIs.getGrupoUs}${userId}`);
      const fetchedGroupId = resp.data.id_grupo;
      setGroupId(fetchedGroupId);
      setIdAsignatura(id);

      const respon = await axios.get(
        `${URIs.getRecordatorios}${fetchedGroupId}/${userId}/${id}`
      );
      const rs = respon.data;
      if (respon.data) {
        setRecordatorios(respon.data);
      } else {
        console.error("El objeto response.data no está definido");
      }

      console.log(rs);

      rs.map((recordatorio) => {
        console.log(recordatorio.id);
        const res = axios.delete(
          `${URIs.eliminarUsuarioRecordatorio}${recordatorio.id}`
        );
        // Aquí puedes manejar la respuesta si es necesario
        console.log(res.data); // Por ejemplo
      });

      const res = await axios.delete(
        `${URIs.eliminarRecordatorioAsignatura}${id}`
      );
      // Aquí puedes manejar la respuesta si es necesario
      console.log(res.data); // Por ejemplo

      const response = await axios.delete(`${URIs.eliminarAsignatura}${id}`);
      if (response.data.message === "Exitoso") {
        getAsignaturas();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  const crearRecordatorio = async (e) => {
    e.preventDefault();

    try {
      console.log(archivo);
      const formData = new FormData();
      formData.append("file", archivo);
      formData.append("id_asignatura", idAsignatura);
      formData.append("id_grupo", groupId);
      formData.append("titulo", tituloR);
      formData.append("descripcion", descripcionR);
      formData.append("fecha_limite", fechaR);
      formData.append("prioridad", nivelR);

      // Enviar el archivo y los datos al servidor
      const response = await axios.post(
        "http://localhost:8000/noteAcademy/upload",
        formData
      );

      const idRecordatorio = response.data.id_recordatorio;

      const respon = await axios.post(
        "http://localhost:8000/noteAcademy/relacionRecordatorio",
        {
          id_usuario: userId,
          id_recordatorio: idRecordatorio,
          realizado: 0,
        }
      );

      alert("creacion exitosa");
    } catch (error) {
      console.error("Error al subir el archivo:", error);
      alert("Error al subir el archivo");
    }

  };

  const getRecordatorrios = async (id, mostrar) => {
    const res = await axios.get(`${URIs.getGrupoUs}${userId}`);
    const fetchedGroupId = res.data.id_grupo;
    setGroupId(fetchedGroupId);
    setIdAsignatura(id);
    try {
      const response = await axios.get(
        `${URIs.getRecordatorios}${fetchedGroupId}/${userId}/${id}`
      );
      console.log(response.data);
      if (response.data) {
        setRecordatorios(response.data);
      } else {
        console.error("El objeto response.data no está definido");
      }
      if (mostrar) {
        setForm3Classes("Rcontainer_all");
      }
    } catch (error) {
      console.error("Error al obtener asignaturas:", error);
    }
  };

  const eliminarRecordatorio = async (id) => {
    try {
      try {
        const res = await axios.delete(
          `${URIs.eliminarUsuarioRecordatorio}${id}`
        );
        // Aquí puedes manejar la respuesta si es necesario
        console.log(res.data); // Por ejemplo
      } catch (error) {
        console.error("Error al eliminar:", error);
        // Aquí puedes manejar los errores si es necesario
      }

      const response = await axios.delete(`${URIs.eliminarRecordatorio}${id}`);
      if (response.data.message === "Exitoso") {
        const token = localStorage.getItem("token");
        const userId = token ? JSON.parse(token).id : null;

        setUserId(userId);

        getAsignaturas();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
    await getRecordatorrios(idAsignatura, true);
  };

  const marcarHecho = async (id) => {
    const response = await axios.put(`${URIs.marcarHecho}${id}`);

    if (response.data.message === "Registro actualizado correctamente") {
      // alert('Usuario actualizado correctamente.');
    } else {
      console.error(
        "Error al convertir usuario en administrador:",
        response.data.message
      );
    }
    await getRecordatorrios(idAsignatura, true);
    setIdDes(0);
  };

  const mostrarEditar = async (id, titulo, descripcion, prioridad, fecha) => {
    setForm4Classes("cont-all-recor");
    setTituloEditar(titulo)
    setDescripcionEditar(descripcion)
    setNivelEditar(prioridad)
    setFechaEditar(fecha)
    setIdEditar(id)
  }

  const editarRecordatorio = async (e) => {

    e.preventDefault();

    const response = await axios.put(`${URIs.editarRecordatorio}${idEditar}/${tituloE}/${descripcionE}/${nivelE}/${fechaE}`);

    if (response.data.message === "Registro actualizado correctamente") {
      // alert('Usuario actualizado correctamente.');
    } else {
      console.error(
        "Error al convertir usuario en administrador:",
        response.data.message
      );
    }
    await getRecordatorrios(idAsignatura, true);
    setIdDes(0);

    salirCrearRecordatorio()
  };


  const handleDownload = (ruta) => {
    // Puedes usar una ruta dinámica o fija, dependiendo de tu lógica
    const downloadUrl = `${URIs.downloadArchivo}${ruta}`;

    // Abre una nueva ventana o pestaña con la ruta de descarga
    window.open(downloadUrl, "_blank");
  };

  const mostrarCrearRecordatorio = async (id) => {
    const res = await axios.get(`${URIs.getGrupoUs}${userId}`);
    const fetchedGroupId = res.data.id_grupo;
    setGroupId(fetchedGroupId);
    setForm2Classes("cont-all-recor");
    setIdAsignatura(id);
  };

  const salirCrearRecordatorio = async () => {
    setForm2Classes("cont-all-recorh");
    setForm4Classes("cont-all-recorh");
    setTituloAsignatura('')
    setDescripcionAsignatura('')
    setNivelAsignatura('')
    setFechaAsignatura('')
    setArchivo(null)
  };
  const formAsignatura = async () => {
    setForm1Classes("formAsignatura");
  };

  const salir = async () => {
    setForm1Classes("formAsignaturah");
  };

  const desplegar = async (id) => {
    setIsOpen(!isOpen);
    setIdDes(id);
  };

  return (
    <>
      <HeaderP />

      <div className={form3Classes}>
        <span
          className="btnSalirForm"
          onClick={() => setForm3Classes("Rcontainer_allh")}
        >
          <FontAwesomeIcon icon={xs} />
        </span>
        {recordatorios.map((recordatorio) => (
          <div className="subDiv" key={recordatorio.id}>
            <div className="Rcontainer">
              <div id="reminderList" className="Rreminder-list">
                <MagicMotion
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                    mass: 1.1,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#010101",
                      padding: "1rem",
                      borderRadius: 12,
                      margin: "1rem 0",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#010101",
                        color: "rgb(255 255 255)",
                        fontSize: "1.1em",
                        fontWeight: 500,
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "none",
                      }}
                      onClick={() => desplegar(recordatorio.id)}
                    >
                      <div className="RcontHeader"></div>
                      <div>
                        <button
                          className="RmarcarHecho"
                          onClick={() => eliminarRecordatorio(recordatorio.id)}
                        >
                          Eliminar
                        </button>
                        <button
                          className="RmarcarHecho"
                          onClick={() =>
                            mostrarEditar(
                              recordatorio.id,
                              recordatorio.titulo,
                              recordatorio.descripcion,
                              recordatorio.prioridad,
                              recordatorio.fecha_limite
                            )
                          }
                        >
                          Editar
                        </button>
                        {recordatorio.realizado == 1 ? (
                          <p className="RformR"> Realizado</p>
                        ) : (
                          <button
                            className="RmarcarHecho"
                            onClick={() => marcarHecho(recordatorio.id)}
                          >
                            Hecho
                          </button>
                        )}
                        {recordatorio.titulo}
                      </div>

                      <svg
                        key="exclude"
                        style={{
                          transform: `rotate(${
                            isOpen && idDes == recordatorio.id ? 180 : 0
                          }deg)`,
                          transition: "320ms ease-in-out",
                        }}
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 10L15.6714 21L27.5 10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {isOpen && idDes == recordatorio.id && (
                      <div
                        style={{
                          gap: "1rem",
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "1rem",
                        }}
                      >
                        {/* <div className="Rreminder-item hecho" onClick={despleg === 'RimgDesplegar' ? () => setDesplegar('RimgDesplegarRotate') : () => setDesplegar('RimgDesplegar')}> */}
                        <div
                          className={
                            recordatorio.realizado == 1
                              ? "Rreminder-item hecho"
                              : "Rreminder-item"
                          }
                        >
                          {/* <div className={idDes == recordatorio.id ? "Rreminder-contentHidden" : "Rreminder-content"  }> */}
                          <p className="Rreminder-date">
                            Fecha de entrega: {recordatorio.fecha_limite}
                          </p>
                          <p className="Rreminder-date">
                            Prioridad: {recordatorio.prioridad}
                          </p>
                          <div className="Rreminder-date">
                            {" "}
                            Descripción del recordatorio:{" "}
                            {recordatorio.descripcion}
                            <br />
                            <br />{" "}
                          </div>
                          <div className="Rreminder-date">
                            {" "}
                            Archivo adjunto:{" "}
                            <button
                              onClick={(e) =>
                                handleDownload(recordatorio.archivo)
                              }
                            >
                              Descargar Archivo
                            </button>
                            {}
                            <br />{" "}
                          </div>
                          <br />
                        </div>
                      </div>
                      //   </div>
                    )}
                  </div>
                </MagicMotion>
              </div>
            </div>
          </div>
        ))}
      </div>
































      <div className={form4Classes}>
        <span className="btnSalirForm" onClick={salirCrearRecordatorio}>
          <FontAwesomeIcon icon={xs} />
        </span>

        <form
          action=""
          method="post"
          onSubmit={editarRecordatorio}
          className="conte-recor"
        >
          <h1 className="titulo">Crea tu recordatorio</h1>
          <div className="cont-titulo">
            <label for="" className="label-titulo">
              Titulo
            </label>
            <input
              type="text"
              value={tituloE}
              className="input-titulo"
              onChange={(e) => setTituloEditar(e.target.value)}
            />
          </div>

          <div className="fecha-prioridad">
            <div className="prioridad">
              <label for="">Prioridad</label>
              <select
                name="nivel"
                id="nivel"
                onChange={(e) => setNivelEditar(e.target.value)}
                value={nivelE}
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            </div>
            <div className="fecha">
              <label for="">Fecha</label>
              <input
                type="date"
                id=""
                value={fechaE}
                onChange={(e) => setFechaEditar(e.target.value)}
              />
            </div>
          </div>
          <div className="cont-textarea">
            <label for="">Descripción de actividad</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={descripcionE}
              onChange={(e) => setDescripcionEditar(e.target.value)}
            ></textarea>
          </div>
          <div className="cont-archivo">
            <label for="subirArchivoE">Adjuntar archivo</label>
            <input type="file" name="" id="subirArchivoE" value="" hidden />
          </div>
          <button type="submit">Enviar recordatorio</button>
        </form>
      </div>


















      <div className={form2Classes}>
        <span className="btnSalirForm" onClick={salirCrearRecordatorio}>
          <FontAwesomeIcon icon={xs} />
        </span>

        <form
          action=""
          method="post"
          onSubmit={crearRecordatorio}
          className="conte-recor"
        >
          <h1 className="titulo">Crea tu recordatorio</h1>
          <div className="cont-titulo">
            <label for="" className="label-titulo">
              Titulo
            </label>
            <input
              type="text"
              value={tituloR}
              className="input-titulo"
              onChange={(e) => setTituloAsignatura(e.target.value)}
            />
          </div>

          <div className="fecha-prioridad">
            <div className="prioridad">
              <label for="">Prioridad</label>
              <select
                name="nivel"
                id="nivel"
                onChange={(e) => setNivelAsignatura(e.target.value)}
                value={nivelR}
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            </div>
            <div className="fecha">
              <label for="">Fecha</label>
              <input
                type="date"
                id=""
                value={fechaR}
                onChange={(e) => setFechaAsignatura(e.target.value)}
              />
            </div>
          </div>
          <div className="cont-textarea">
            <label for="">Descripción de actividad</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={descripcionR}
              onChange={(e) => setDescripcionAsignatura(e.target.value)}
            ></textarea>
          </div>
          <div className="cont-archivo">
            <label for="subirArchivo">Adjuntar archivo</label>
            <input
              type="file"
              name=""
              id="subirArchivo"
              value=""
              onChange={(e) => setArchivo(e.target.files[0])}
              hidden
            />
          </div>
          <button type="submit">Enviar recordatorio</button>
        </form>
      </div>

      <form onSubmit={store} className={form1Classes}>
        <span className="btnSalirForm" onClick={salir}>
          <FontAwesomeIcon icon={xs} />
        </span>

        <div className="contFormAsigantura">
          <h3>INGRESAR NOMBRE</h3>
          <input
            className="crearAsignatura"
            type="text"
            value={nombre}
            onChange={(e) => setNombreAsignatura(e.target.value)}
            id="doc"
            placeholder="Nombre de asignatura"
          />
          <input
            className="crearAsignatura"
            type="hidden"
            value={groupId || 6}
            onChange={(e) => setNombreAsignatura(e.target.value)}
            id="doc"
            placeholder="Numero de documento"
          />

          <button className="btnAsignatura" type="submit">
            Registrar
          </button>
        </div>
      </form>

      <main className="cont_all">
        <div className="cont_datos">
          <div className="datos_1">
            <div className="cont_img1">
              {admin == 1 || admin == 2 ? (
                <img className="img1" src={asignaturass} alt="" />
              ) : (
                <img className="img1" src={asignaturasE} />
              )}
            </div>
            {admin == 1 || admin == 2 ? (
              <span className="datos_letras">Administrador</span>
            ) : (
              <span className="datos_letras">Estudiante</span>
            )}
          </div>

          <div className="datos">
            <img className="img2" src={participantes} alt="" />
            <span className="datos_letras">{countUsers}</span>
          </div>

          <div className="datos codigo">
            <img className="img3" id="botonCopiar" src={copiar} alt="" />
            <span className="datos_letras" key={grupo.id}>
              Codigo:
              <span id="textoACopiar">{grupo.codigo}</span>
            </span>
          </div>
        </div>
        <div className="cont_asignaturas">
          {/* <?php foreach ($infoAsignatura as $asignatura) : ?> */}
          {asignaturas.map((asignatura) => (
            <div className="asignaturas" key={asignatura.id}>
              <span className="span-p">{asignatura.nombre}</span>

              <span className="span-s">
                {/* <?php if (!empty($esAdmin['es_administrador'])) : ?> */}
                {admin != 0 && ( // Verifica si admin es igual a 1 o 2
                  <span>
                    <button
                      onClick={() => mostrarCrearRecordatorio(asignatura.id)}
                    >
                      <img src={logo_editar} alt="Eliminar" />
                    </button>
                  </span>
                )}

                {/* <?php endif; ?>  */}
                {/* <?php if (!empty($esAdmin['es_administrador'])) : ?> */}
                {admin != 0 && ( // Verifica si admin es igual a 1 o 2
                  <span>
                    <button onClick={() => eliminarAsig(asignatura.id)}>
                      <img src={eliminarAsignatura} alt="Eliminar" />
                    </button>
                  </span>
                )}

                {/* <?php endif; ?>  */}
                <span>
                  <button
                    onClick={() => getRecordatorrios(asignatura.id, true)}
                  >
                    <img src={ver} alt="Eliminar" />
                  </button>
                </span>
              </span>
            </div>
          ))}
          {admin !== 0 && ( // Verifica si admin es igual a 1 o 2
            <button className="asignaturas_añadir" onClick={formAsignatura}>
              <img src={añadir} alt="" />
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default Admin;
