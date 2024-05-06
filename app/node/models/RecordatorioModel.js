import db from "../database/db.js";
import { DataTypes } from 'sequelize';

const RecordatorioModel = db.define('recordatorios', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_asignatura : {type: DataTypes.INTEGER},
    id_grupo: {type: DataTypes.INTEGER},
    titulo: {type: DataTypes.STRING},
    descripcion: {type: DataTypes.STRING},
    fecha_limite: {type: DataTypes.DATE},
    prioridad: {type: DataTypes.STRING},
    archivo: {type: DataTypes.STRING},
});


import UsuarioRecordatorioModel    from "./UsuarioRecordatorio.js";


RecordatorioModel.hasOne(UsuarioRecordatorioModel, { foreignKey: 'id_recordatorio' });

export default RecordatorioModel;
