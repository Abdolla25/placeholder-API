"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var routes = express_1.default.Router();
routes.get('/', function (_req, res) {
    res.send("\n    <h1>Welcome to my api</h1>\n    choose on of the following files:\n    <ul>\n        <li><a href=\"/api/images?filename=eg&width=160&height=106\">Egypt Flag Placeholder</li>\n        <li><a href=\"/api/images?filename=fr&width=160&height=106\">France Flag Placeholder</li>\n    </ul>");
});
routes.use('/images', images_1.default);
exports.default = routes;
