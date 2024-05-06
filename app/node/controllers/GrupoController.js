
import GrupoModel from '../models/GrupoModel.js';
// Obtener todos los usuarios
export const getAllGrupos = async (req, res) => {
  try {
    const grupos = await GrupoModel.findAll();
    res.json(grupos);
  } catch (error) {
    res.json( {message: error.message});
  }
};

// Iniciar sesión
export const loginSer = async (req, res) => {
  const { nombre, codigo, id_administrador } = req.body;

  try {
    // Buscar usuario por nombre de usuario y contraseña
    const grupo = await UserLoginModel.findOne({
      where: {
        nombre: nombre,
        codigo: codigo,
        id_administrador: id_administrador
      }
    });

    if (grupo) {
      // Usuario autenticado
      res.json({ message: 'Inicio de sesión exitoso' });
    } else {
      // Usuario no encontrado o contraseña incorrecta
      res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registroGrupo = async (req, res) => {
  try {
    const grupo = await GrupoModel.create(req.body);
    console.log("Grupo creado:", grupo.id);
    res.json({ message: `Grupo creado exitosamente`, groupId: grupo.id });
  } catch (error) {
    res.json({ message: error.message });
  }

};
export const getGrupo = async (req, res) =>{
  try {
    const { id } = req.params;

    const grupo = await GrupoModel.findOne({
      where: {
        id: id
      }
    });

    if (grupo) {
      res.json(grupo)
    } else {
      res.status(404).json({ message: 'grupo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getCodigo = async (req, res) => {
  try {
      const grupo = await GrupoModel.findAll({
          where: {
              codigo: req.params.codigo
          },
          attributes: ['id'] // Especifica las columnas que deseas obtener
      });

      if (grupo.length === 0) {
          return res.status(404).json({ message: 'No se encontró ningún grupo para el usuario dado.' });
      }

      res.json({ id_gru: grupo[0].id }); // Devuelve solo la propiedad id_grupo
  } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
};