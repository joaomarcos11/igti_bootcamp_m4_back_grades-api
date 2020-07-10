import mongoose from 'mongoose';
import gradeModel from './gradeModel.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradeModel(mongoose);
//db.logs = ... (poderia importar mais de um model aqui)

export { db };

// db.grades = gradesModel(mongoose);
// importa a funcao que deve receber como parametro o mongoose
// ou seja, o modulo mongoose foi importado apenas aqui e nao no gradesModel
// dai, aqui eu uso a função com o mongoose passado como argumento
// la recebe-se como parametro e constroi o schema
// ou seja, o db.grades é a const Grade retornada
