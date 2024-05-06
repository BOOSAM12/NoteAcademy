import AsignaturaModel from "../models/AsignaturaModel.js";


export const getAsignaturas = async (req, res) => {
    try {
        const asignaturas = await AsignaturaModel.findAll({
            where: {
                id_grupo: req.params.id_grupo
            }
        });

        res.json(asignaturas);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
};

export const registroAsignatura = async (req,res)=>{
    try {
        await AsignaturaModel.create(req.body)
        res.json({
            message:'registro creado correctamente'
        })
    } catch (error) {
        res.json( {message: error.message})
        
    }
  }

  export const eliminarAsignatura = async (req, res) => {
    try {
      const { id } = req.params;
  
      await AsignaturaModel.destroy({
        where: {
          id: id,
        },
      });
  
      res.json({ message: 'Exitoso' });

    } catch (error) {
        res.json( {message: error.message})
        
    }
  };
  

// export const createBlog = async (req,res)=>{
//     try {
//         await BlogModel.create(req.body)
//         res.json({
//             'message':'registro creado correctamente'
//         })
//     } catch (error) {
//         res.json( {message: error.message})
        
//     }
// }


// export const updateBlog = async (req,res)=>{
//     try {
//          await BlogModel.update(req.body,{
//             where:{
//                 id:req.params.id
//             }
//         })
//         res.json({
//             'message':'registro actualizado correctamente'
//         })
//     } catch (error) {
//         res.json( {message: error.message})
        
//     }
// }

// export const deleteBlog = async (req,res)=>{
//     try {
//         await BlogModel.destroy({
//             where:{
//                 id:req.params.id
//             }
//         })
//         res.json({
//             'message':'registro eliminado correctamente'
//         })
//     } catch (error) {
//         res.json( {message: error.message})
        
//     }

// }


