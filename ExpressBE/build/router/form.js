"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.use("/moi1", express_2.default.static(path_1.default.join(__dirname, '../public')));
router.get("/:wtf", (req, res) => {
    res.json("Moi  " + req.params.wtf);
});
module.exports = router;
