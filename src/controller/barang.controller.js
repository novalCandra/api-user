const { moduleGetData, moduleDelete, modulePostingan, moduleUpdate, moduleQuerySearh } = require("../service/barang.service")

const getcontrollerbarang = async (req, res) => {
    try {
        const page = Math.max(Number.parseInt(req.query.page) || 1, 1);
        const limit = Math.min(Math.max(Number.parseInt(req.query.limit) || 10, 1), 100)
        const { data, meta } = await moduleGetData({ page, limit });

        return res.status(200).json({
            status: true,
            message: "success get all data barang",
            data,
            meta
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error?.message
        })
    }
}


const getcontrollerbarangSearch = async (req, res) => {
    const { nama_barang } = req.query;
    try {
        const getAllService = await moduleQuerySearh(nama_barang);

        return res.status(200).json({
            status: true,
            message: "success serach nama barang",
            data: {
                getAllService
            }
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error?.message
        })
    }
}




const postcontrollerbarang = async (req, res) => {
    try {
        const body = req.body;
        const data = await modulePostingan(body);
        if (!data) {
            return res.status(401).json({
                status: false,
                message: "gagal not create barang"
            })
        }

        return res.status(200).json({
            status: true,
            message: "success create data barang",
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error?.message
        })
    }
}
const updatecontrollerbarang = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const updateData = await moduleUpdate(id, body);
        if (!updateData) {
            return res.status(401).json({
                status: false,
                message: "gagal not update barang"
            })
        }

        return res.status(200).json({
            status: true,
            message: "success update data barang",
            data: {
                body
            }
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error?.message
        })
    }
}
const deletecontrollerbarang = async (req, res) => {
    const id = req.params
    try {
        const getAllService = await moduleDelete(id);
        if (!getAllService) {
            return res.status(401).json({
                status: false,
                message: "data is not delete barang"
            })
        }

        return res.status(200).json({
            status: true,
            message: "success delete barang",
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error?.message
        })
    }
}

module.exports = {
    getcontrollerbarang,
    getcontrollerbarangSearch,
    postcontrollerbarang,
    updatecontrollerbarang,
    deletecontrollerbarang
}