"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var teachers_1 = __importDefault(require("./api/teachers"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('main api route');
    console.log("server requested at http://localhost:".concat(3000, " \nfrom api route"));
});
routes.use('/images', teachers_1.default);
exports.default = routes;
