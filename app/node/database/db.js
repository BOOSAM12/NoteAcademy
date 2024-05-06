import { Sequelize } from "sequelize";

const db = new Sequelize('note_academy','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
export default db