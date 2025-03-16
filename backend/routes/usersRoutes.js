import express from 'express';
const router= express.Router();

router.post("/",Somethingcontroller);
router.get("/",Somethingcontroller);
router.get("/:id",Somethingcontroller);
router.patch("/:id",Somethingcontroller);
router.delete("/:id",Somethingcontroller);

export default router;
