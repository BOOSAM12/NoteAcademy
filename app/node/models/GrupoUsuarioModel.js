// GrupoUsuarioModel.js

import db from "../database/db.js";
import { DataTypes } from 'sequelize';

const GrupoUsuarioModel = db.define('usuarios_grupos', {
    id_usuario : {type: DataTypes.INTEGER, primaryKey: true},
    id_grupo : {type: DataTypes.INTEGER},
    es_administrador : {type: DataTypes.NUMBER}
});

export default GrupoUsuarioModel;


// ALTER TABLE tu_tabla
// ADD COLUMN createdAt DATE,
// ADD COLUMN updatedAt DATE;