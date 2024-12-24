// La libreria junto con types express  encuentro de Router es una interface

import { Router } from "express";

const router: Router = Router();

router.get("/users");

router.post("/users");

router.delete("/users");

export default router;
