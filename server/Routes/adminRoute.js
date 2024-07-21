import express from "express";

const router = express.Router()

router.post('/adminlogin', (req, res) => {
    console.log.apply(req.body)
})

export {router as adminRouter}