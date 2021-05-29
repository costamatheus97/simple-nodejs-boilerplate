"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PORT = 3000;
var app = express_1.default();
app.get('/', function (req, res) {
    return res.json({ ok: 'true' });
});
app.listen(PORT, function () {
    console.log("server started at port " + PORT);
});
