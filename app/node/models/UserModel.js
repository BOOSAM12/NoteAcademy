// UserModel.js

import db from "../database/db.js";
import { DataTypes } from 'sequelize';


const UserModel = db.define('usuarios', {
    id : {type: DataTypes.INTEGER, primaryKey: true},
    documento: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING},
    contrasena: {type: DataTypes.STRING}
});

import GrupoUsuarioModel from "./GrupoUsuarioModel.js";


UserModel.hasOne(GrupoUsuarioModel, { foreignKey: 'id_usuario' });

export default UserModel;
