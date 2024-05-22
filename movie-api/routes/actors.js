import { Router } from "express";
import { actors } from "../config/data.js";
import authenticate from "../middlewares/auth.js";

const router = Router();

router.get("/", (req, res) => {
    res.json(actors);
});

router.get("/:id", (req, res) => {
    const actor = actors.find(actor => actor.id === parseInt(req.params.id));
    res.json(actor);
});

router.post("/", authenticate, (req, res) => {
    const actor = req.body.name;
    actors.push({ id: actors.length + 1, name: actor });
    res.json(actor);
});

export default router;