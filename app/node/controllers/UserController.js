
import UserModel from "../models/UserModel.js";
import UserGroupModel from "../models/GrupoUsuarioModel.js";

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.json( {message: error.message});
  }
};
export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await UserModel.findOne({
      where: {
        id: id
      }
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const generateToken = (userId) => {
  return {
    id: userId,
    expires: Date.now() + 60 * 60 * 1000, // 1 hora de expiración (puedes ajustar esto)
  };
};

// Iniciar sesión
export const loginSer = async (req, res) => {
  const { documento, contrasena } = req.body;

  try {
    // Buscar usuario por nombre de usuario y contraseña
    const user = await UserModel.findOne({
      where: {
        documento: documento,
        contrasena: contrasena
      }
    });

    if (user) {
      // Usuario autenticado
      res.json({ message: 'Inicio de sesión exitoso', token: generateToken(user.id) });
    } else {
      // Usuario no encontrado o contraseña incorrecta
      res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const validacionUser = async (req, res) => {
  const { documento } = req.body;

  try {
    // Buscar usuario por nombre de usuario y contraseña
    const user = await UserModel.findOne({
      where: {
        documento: documento
      }
    });

    if (user) {
      // Usuario autenticado
      res.json({ message: 'Existente'});
    } else {
      // Usuario no encontrado o contraseña incorrecta
      res.json({ message: 'pass' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const registroUsuario = async (req,res)=>{
  try {
      await UserModel.create(req.body)
      res.json({
          'message':'registro creado correctamente'
      })
  } catch (error) {
      res.json( {message: error.message})
      
  }
}

export const obtenerUsuariosPorGrupo = async (req, res) => {
  const { id_grupo } = req.params;

  try {
    const usuarios = await UserModel.findAll({
      attributes: ['id', 'documento', 'nombre', 'contrasena'],
      include: [
        {
          model: UserGroupModel,  // Utiliza el modelo UserGroupModel para la relación
          attributes: ['es_administrador'],
          where: {
            id_grupo: id_grupo,
          },
        },
      ],
      logging: console.log, // Habilita el logging para ver la consulta SQL en la consola
    });

    // Procesar los usuarios obtenidos
    const usuariosMapped = usuarios.map(usuario => ({
      id: usuario.id,
      documento: usuario.documento,
      nombre: usuario.nombre,
      contrasena: usuario.contrasena,
      esAdmin: usuario.usuarios_grupo ? usuario.usuarios_grupo.es_administrador : null, 
    }));
    // Enviar la respuesta al cliente
    res.json(usuariosMapped);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la consulta
    console.error('Error en la consulta:', error);
    res.status(500).json({ error: 'Error en la consulta' });
  }
};

