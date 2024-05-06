import RecordatorioModel from "../models/RecordatorioModel.js";
import UsuarioRecordatorioModel from "../models/UsuarioRecordatorio.js";
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const descargarArchivo = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Utilizar 'join' de 'path' para construir el camino al archivo
  const filePath = join(__dirname, `../uploads/${req.params.filename}`);

  try {
    // Intentar leer el archivo síncronamente
    const fileContent = fs.readFileSync(filePath);

    // Enviar el archivo como respuesta
    res.send(fileContent);
  } catch (error) {
    // Si hay un error, enviar una respuesta de error
    res.status(404).json({ error: "Archivo no encontrado" });
  }
};


export const getRecordatorios = async (req, res) => {
  const { id_grupo, id_usuario, id_asignatura } = req.params;

  try {
    const recordatorios = await RecordatorioModel.findAll({
      attributes: ['id', 'titulo', 'descripcion', 'fecha_limite', 'prioridad', 'archivo'],
      include: [
        {
          model: UsuarioRecordatorioModel,
          attributes: ['realizado'],
          where: { id_usuario },
        },
      ],
      where: { id_grupo, id_asignatura },
      order: [['id', 'DESC']],
    });
    
    const recordatoriosMapped = recordatorios.map(recordatorio => ({
      id: recordatorio.id,
      id_asignatura: recordatorio.id_asignatura,
      id_grupo: recordatorio.id_grupo,
      titulo: recordatorio.titulo,
      descripcion: recordatorio.descripcion,
      fecha_limite: recordatorio.fecha_limite,
      prioridad: recordatorio.prioridad,
      archivo: recordatorio.archivo,
      realizado: recordatorio.usuarios_recordatorio ? recordatorio.usuarios_recordatorio.realizado : null, 
    }));
    // Enviar la respuesta al cliente
    res.json(recordatoriosMapped);
  } catch (error) {
    console.error('Error al obtener recordatorios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const crearRecordatorio = async (req, res) => {
    try {
        const { id_asignatura, id_grupo, titulo, descripcion, fecha_limite, prioridad } = req.body;

        // Obtén el nombre único del archivo desde el campo req.uniqueFileName
        const archivo = req.uniqueFileName;

        // Guardar el recordatorio en la base de datos
        const recordatorio = await RecordatorioModel.create({
            id_asignatura,
            id_grupo,
            titulo,
            descripcion,
            fecha_limite,
            prioridad,
            archivo,
        });

        res.json({ message: `Recordatorio creado correctamente${recordatorio.id}`, id_recordatorio: recordatorio.id });
    } catch (error) {
        console.error('Error al crear el recordatorio:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


export const editaRecordatorio = async (req, res) => {
  const { idEditar, tituloE, descripcionE, nivelE, fechaE } = req.params;

  try {
    // Asumiendo que el campo 'es_administrador' en la tabla 'usuarios_grupos' es un booleano
    const updatedUser = await RecordatorioModel.update(
      { 
        titulo: tituloE,
        descripcion: descripcionE,
        fecha_limite: fechaE,
        prioridad: nivelE,
      }, // Define el valor que deseas actualizar
      { where: { id: idEditar } }
    );

    if (updatedUser[0] === 1) {
      res.json({
        message: 'Registro actualizado correctamente'
      });
    } else {
      res.json({
        message: 'No se encontró el usuario con el ID proporcionado'
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const eliminarRecordatorioAsignatura = async (req, res) => {
  try {
    const { id } = req.params;

    await RecordatorioModel.destroy({
      where: {
        id_asignatura: id,
      },
    });

    res.json({ message: 'Exitoso' });

  } catch (error) {
      res.json( {message: error.message})
      
  }
};

export const eliminarRecordatorio = async (req, res) => {
  try {
    const { id } = req.params;

    await RecordatorioModel.destroy({
      where: {
        id: id,
      },
    });

    res.json({ message: 'Exitoso' });

  } catch (error) {
      res.json( {message: error.message})
      
  }
};
  
