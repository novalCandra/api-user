const express = require("express");
const barangRouter = express.Router();
const barangController = require("../controller/barang.controller");
const TokenMiddleware = require("../middleware/token.middleware");
barangRouter.get("/barang", TokenMiddleware, barangController.getcontrollerbarang)
barangRouter.get("/searchBarang", TokenMiddleware, barangController.getcontrollerbarangSearch)
barangRouter.post("/barang", TokenMiddleware, barangController.postcontrollerbarang)
barangRouter.put("/barang/:id", TokenMiddleware, barangController.updatecontrollerbarang)
barangRouter.delete("/barang/:id", TokenMiddleware, barangController.deletecontrollerbarang)
module.exports = barangRouter