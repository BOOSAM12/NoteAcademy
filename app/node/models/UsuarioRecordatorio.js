// userLoginModel.js

import db from "../database/db.js";
import { DataTypes } from 'sequelize';

const UsuarioRecordatorioModel = db.define('usuarios_recordatorios', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_usuario : {type: DataTypes.INTEGER},
    id_recordatorio : {type: DataTypes.INTEGER},
    realizado: {type: DataTypes.NUMBER},
});

export default UsuarioRecordatorioModel;


// ALTER TABLE tu_tabla
// ADD COLUMN createdAt DATE,
// ADD COLUMN updatedAt DATE;