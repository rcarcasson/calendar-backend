

const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('Base de datos online');
    } catch (error) {
        throw new Error('Error a la hora de iniciar la base de datos', error);
    }
}

module.exports = { dbConnection }