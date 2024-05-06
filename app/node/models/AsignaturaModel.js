import db from "../database/db.js";
import { DataTypes } from 'sequelize';

const AsignaturaModel = db.define('asignaturas', {
    id : {type: DataTypes.INTEGER, primaryKey: true},
    nombre: {type: DataTypes.STRING},
    id_grupo: {type: DataTypes.INTEGER}
});

export default AsignaturaModel;
