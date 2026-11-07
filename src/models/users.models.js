const knex = require("./knex.module.js")
const createUsersModule = (body) => {
    return knex.dbConfig.knexJs("users").insert({ name: body.name, email: body.email, password: body.password })
}

const selectUsersModue = (email, password) => {
    return knex.dbConfig.knexJs("users").select(["id","email", "password"]).where({email}).select().from("users").first()
}

module.exports = {
    createUsersModule,
    selectUsersModue
}