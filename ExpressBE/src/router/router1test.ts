import expressRouter, { NextFunction } from "express";
import { Router, Request, Response } from "express";
import { mydb } from "../database/db";

const router = expressRouter.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    let results = await mydb.all();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json(error);
  }
});

router.post("/", (req: Request, res: Response, next: NextFunction) =>{
    var word = req.body.word;
    console.log(word);
});

module.exports = router;
