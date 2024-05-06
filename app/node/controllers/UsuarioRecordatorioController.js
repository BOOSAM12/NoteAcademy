
import UsuarioRecordatorioModel from "../models/UsuarioRecordatorio.js";

export const crearRelacionRecordatorio = async (req, res) => {
    try {
        const { id_usuario, id_recordatorio, realizado } = req.body;


        const recordatorio = await UsuarioRecordatorioModel.create({
            id_usuario, 
            id_recordatorio,
            realizado
        });

        res.json({ message: 'Recordatorio creado correctamente', recordatorio });
    } catch (error) {
        console.error('Error al crear el recordatorio:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const marcarHecho = async (req, res) => {
  const { id } = req.params;

  try {
    // Asumiendo que el campo 'es_administrador' en la tabla 'usuarios_grupos' es un booleano
    const updatedUser = await UsuarioRecordatorioModel.update(
      { realizado: 1 }, // Define el valor que deseas actualizar
      { where: { id_recordatorio: id } }
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


  export const eliminarUsuarioRecordatorio = async (req, res) => {
    try {
      const { id } = req.params;
  
      await UsuarioRecordatorioModel.destroy({
        where: {
          id_recordatorio: id,
        },
      });
  
      res.json({ message: 'Exitoso' });

    } catch (error) {
        res.json( {message: error.message})
        
    }
  };
  
