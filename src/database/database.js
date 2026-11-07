const mysql2 = require("mysql2");

const pollRequest = mysql2.createPool({
    host: 'localhost',
    port : 3306,
    user : "root",
    password : "",
    database: 'database_interview_test'
})

const knexJs = require("knex")({
    client: "mysql2",
    connectionPool: pollRequest
})


module.exports = {
    pollRequest,
    knexJs
}