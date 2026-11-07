const knex = require("./knex.module.js")

const moduleGetData = async ({ page, limit }) => {
    const offset = (page - 1) * limit
    const [data, countResult] = await Promise.all([
        knex.dbConfig.knexJs("barang").select("*").orderBy("id", 'asc').limit(limit).offset(offset),
        knex.dbConfig.knexJs("barang").count({ total: "*" }).first()
    ])
    const totalData = Number(countResult.total);

    return {
        data,
        meta: {
            page, limit, totalData, totalPage: Math.ceil(totalData / limit)
        }
    }
}

const moduleQuerySearh = (namaBarang) => {
    return knex.dbConfig.knexJs("barang").select("*").from("barang").whereILike(`nama_barang`, `%${namaBarang}%`);
}

const modulePostingan = (body) => {
    return knex.dbConfig.knexJs("barang").insert({ user_id: body.user_id, nama_barang: body.nama_barang, harga_barang: body.harga_barang, deskripsi_barang: body.deskripsi_barang })
}
const moduleUpdate = (id, body) => {
    return knex.dbConfig.knexJs("barang").where({ id }).update({
        user_id: body.user_id, nama_barang: body.nama_barang, harga_barang: body.harga_barang, deskripsi_barang: body.nama_barangF
    })
}

const moduleDelete = (id) => {
    return knex.dbConfig.knexJs("barang").delete().where(id)
}

module.exports = {
    moduleGetData,
    moduleQuerySearh,
    modulePostingan,
    moduleUpdate,
    moduleDelete
}