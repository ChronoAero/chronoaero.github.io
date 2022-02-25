"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var Webhook = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var socket = (0, react_redux_1.useSelector)(function (state) { return state.socket; });
    var requests = (0, react_redux_1.useSelector)(function (state) { return state.requests; });
    var setupDone = (0, react_redux_1.useSelector)(function (state) { return state.setupDone; });
    if (!setupDone) {
        socket.on('webhook/request_data', function (data) {
            dispatch({ type: "showcase/append_requests", payload: data });
        });
        dispatch({ type: "showcase/socket_setup" });
    }
    return react_1.default.createElement("div", { className: "flex gap-12" },
        react_1.default.createElement("div", { className: "flex-1" },
            "Send your request to http://localhost:4201/webhook/",
            socket.id),
        react_1.default.createElement("div", { className: "flex-1" },
            "Incoming Request(s):",
            requests.map(function (r, index) {
                return react_1.default.createElement("div", { className: "p-5", key: index },
                    react_1.default.createElement("div", null,
                        "The shell received a ",
                        r.method || "",
                        " request!"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", null, "Headers:"),
                        react_1.default.createElement("div", null,
                            "Content-Type: ",
                            r["headers"]["content-type"] || "Not sent"),
                        react_1.default.createElement("div", null,
                            "Content-Length: ",
                            r["headers"]["content-length"] || "Not sent")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", null, "Body:"),
                        react_1.default.createElement("div", null, JSON.stringify(r["body"])),
                        JSON.stringify(r["body"]) === '{}' ? react_1.default.createElement("div", null, "The shell doesn't seem to support your content-type, it supports JSON and url enconded only...") : react_1.default.createElement(react_1.default.Fragment, null)));
            })));
};
exports.Webhook = Webhook;
