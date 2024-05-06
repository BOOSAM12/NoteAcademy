
import GrupoUsuarioModel from "../models/GrupoUsuarioModel.js";

export const getAllGruUs = async (req, res) => {
    try {
      const GruUs = await GrupoUsuarioModel.findAll();
      res.json(GruUs);
    } catch (error) {
      res.json( {message: error.message});
    }
  };


export const getGrupoUs = async (req, res) => {
    try {
        const grupo = await GrupoUsuarioModel.findAll({
            where: {
                id_usuario: req.params.id_usuario
            },
            attributes: ['id_grupo', 'es_administrador'] // Especifica las columnas que deseas obtener
        });

        if (grupo.length === 0) {
            return res.status(404).json({ message: 'No se encontró ningún grupo para el usuario dado.' });
        }

        res.json({ id_grupo: grupo[0].id_grupo, es_administrador: grupo[0].es_administrador}); // Devuelve solo la propiedad id_grupo
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
};

export const relacionGruUs = async (req,res)=>{
  try {
      await GrupoUsuarioModel.create(req.body)
      res.json({
          message:'registro creado correctamente'
      })
  } catch (error) {
      res.json( {message: error.message})
      
  }
}
export const exitUserGru = async (req, res) =>{
    try {
        const { id_usuario } = req.params;

        const exit = await GrupoUsuarioModel.destroy({
            where: {
                id_usuario: id_usuario
            }
        });

        res.json({message: 'exitoso'})

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const cantidadUsuariosGru = async (req, res) => {
    try {
        const { id_grupo } = req.params;

        const count = await GrupoUsuarioModel.count({
            where: {
                id_grupo: id_grupo
            }
        });

        res.json({ count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const convertirAdministrador = async (req, res) => {
    const { id } = req.params;
    const { rol } = req.params;
    
    try {
      // Asumiendo que el campo 'es_administrador' en la tabla 'usuarios_grupos' es un booleano
      const updatedUser = await GrupoUsuarioModel.update(
        { es_administrador: rol }, // Define el valor que deseas actualizar
        { where: { id_usuario: id } }
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

