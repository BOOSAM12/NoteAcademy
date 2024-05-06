import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs"; // Agrega esta línea para importar el módulo fs
import { generateRandomCode } from './code.js';

// import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/BlogController.js";
import {  getAllUsers, obtenerUsuariosPorGrupo, loginSer, registroUsuario, getUsuario, validacionUser  } from "../controllers/UserController.js";
import { getAllGrupos, registroGrupo, getGrupo, getCodigo  } from "../controllers/GrupoController.js";
import { convertirAdministrador, getAllGruUs, relacionGruUs, getGrupoUs, cantidadUsuariosGru, exitUserGru  } from "../controllers/GruposUsuariosController.js";
import { getAsignaturas, registroAsignatura, eliminarAsignatura  } from "../controllers/AsignaturaController.js";
import { crearRecordatorio, descargarArchivo, getRecordatorios, eliminarRecordatorioAsignatura, eliminarRecordatorio , editaRecordatorio  } from "../controllers/RecordatorioController.js";
import { crearRelacionRecordatorio, marcarHecho, eliminarUsuarioRecordatorio   } from "../controllers/UsuarioRecordatorioController.js";

const router = express.Router(); // Cambiado a express.Router()

// router.get('/', getAllBlogs);
// router.get('/new/:id', getBlog);
// router.post('/', createBlog);
// router.put('/new/:id', updateBlog);
// router.delete('/:id', deleteBlog);

router.get('/login', getAllUsers);
router.get('/getUsuario/:id', getUsuario);
router.post('/init', loginSer);
router.post('/validacion', validacionUser);
router.post('/createUsuario', registroUsuario);
router.get('/obtenerUsuariosPorGrupo/:id_grupo', obtenerUsuariosPorGrupo);

router.get('/grupo', getAllGrupos);
router.post('/createGrupo', registroGrupo);
router.get('/getGrupo/:id', getGrupo);
router.get('/getCodigo/:codigo', getCodigo);


router.get('/gruus', getAllGruUs);
router.post('/relacionGruUs', relacionGruUs);
router.get('/getGrupoUs/:id_usuario', getGrupoUs);
router.get('/cantidadUsuariosGru/:id_grupo', cantidadUsuariosGru);
router.delete('/abandonar/:id_usuario', exitUserGru);
router.put('/convertirAdministrador/:id/:rol', convertirAdministrador);



router.get('/getAsignaruras/:id_grupo', getAsignaturas);
router.post('/createAsignaruras', registroAsignatura);
router.delete('/eliminarAsignatura/:id', eliminarAsignatura);

router.post('/relacionRecordatorio', crearRelacionRecordatorio);
router.delete('/eliminarUsuarioRecordatorio/:id', eliminarUsuarioRecordatorio);


router.get("/download/:filename", descargarArchivo);
router.get("/obtenerRecordatorios/:id_grupo/:id_usuario/:id_asignatura", getRecordatorios);
router.put('/marcarHecho/:id', marcarHecho);
router.put('/editarRecordatorio/:idEditar/:tituloE/:descripcionE/:nivelE/:fechaE', editaRecordatorio);
router.delete('/eliminarRecordatorioAsignatura/:id', eliminarRecordatorioAsignatura);
router.delete('/eliminarRecordatorio/:id', eliminarRecordatorio);

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads/"); // Directorio donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
      const randomCode = generateRandomCode(8);
      const originalFileName = path.parse(file.originalname).name; // Obtener el nombre original del archivo sin extensión
      const uniqueFileName = `${originalFileName}_${randomCode}${path.extname(file.originalname)}`;
      req.uniqueFileName = uniqueFileName; // Guardar el nombre único en el objeto de solicitud
      cb(null, uniqueFileName);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), crearRecordatorio);


export default router;














