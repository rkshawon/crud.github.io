const express = require("express")
const router = express.Router()
const controller = require("./controller")


router.get("/", controller.homerouter)
router.get("/form", controller.form)
router.post("/api/userinfo", controller.postusernInfo)
router.get("/api/userinfo", controller.getuserInfo)
router.get("/api/userinfo/s", controller.update)
router.post("/update", controller.updateInfo)
router.post("/id", controller.destroy)
router.get("/search", controller.search)

module.exports = router