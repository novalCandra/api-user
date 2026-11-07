/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
   await knex.schema.createTable("barang", function (table) {
        table.increments().primary()
        table.integer("user_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE")
        table.string("nama_barang")
        table.float("harga_barang")
        table.text("deskripsi_barang")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
     return await knex.schema.dropTableIfExists("barang")
};
