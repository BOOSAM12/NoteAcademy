// userLoginModel.js

import db from "../database/db.js";
import { DataTypes } from 'sequelize';

const GrupoModel = db.define('grupos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: {type: DataTypes.STRING},
    codigo: {type: DataTypes.STRING},
    id_administrador : {type: DataTypes.INTEGER}
});

export default GrupoModel;


// ALTER TABLE tu_tabla
// ADD COLUMN createdAt DATE,
// ADD COLUMN updatedAt DATE;