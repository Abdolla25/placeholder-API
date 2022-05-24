"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServerRun = exports.port = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./middlewares/routes"));
var app = (0, express_1.default)();
exports.app = app;
var port = 3000;
exports.port = port;
var isServerRun = false;
exports.isServerRun = isServerRun;
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
    exports.isServerRun = isServerRun = true;
});
app.get('/', function (_req, res) {
    res.send("<h1>Request State: ".concat(res.statusCode, "</h1>\n        \n<a href='/api'>API LINK</a>"));
});
app.use('/api', routes_1.default);
app.use('/assets', express_1.default.static(__dirname + '/assets'));
