"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var csurf_1 = __importDefault(require("csurf"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
//Temporary development server
var csrfProtection = (0, csurf_1.default)({ cookie: true });
var app = (0, express_1.default)();
app.disable('x-powered-by');
app.use((0, cookie_parser_1.default)());
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 250,
    standardHeaders: true,
    legacyHeaders: false,
    message: '429 Too Many Requests'
}));
app.use(csrfProtection);
app.use(express_1.default.static(path_1.default.join(__dirname, '../../../client/dist')));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../../client/dist/view/public/index.html'));
});
app.listen(4200, function () {
    console.log('Client is up on http://localhost:4200');
});
