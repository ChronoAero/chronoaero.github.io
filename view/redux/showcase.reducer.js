"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showcaseReducer = exports.Pages = void 0;
var socket_io_client_1 = require("socket.io-client");
var config_1 = __importDefault(require("../../config"));
var Pages;
(function (Pages) {
    Pages[Pages["NULL"] = 0] = "NULL";
    Pages[Pages["EQUATION_GEN"] = 1] = "EQUATION_GEN";
    Pages[Pages["WEBHOOK"] = 2] = "WEBHOOK";
    Pages[Pages["VIDEOCALL"] = 3] = "VIDEOCALL";
})(Pages = exports.Pages || (exports.Pages = {}));
var showcaseReducer = function (state, action) {
    if (state === void 0) { state = {
        page: NaN,
        equation: "",
        socket: (0, socket_io_client_1.io)(config_1.default.serverUrl),
        setupDone: false,
        requests: [],
        spinner: 0
    }; }
    switch (action.type) {
        case "showcase/equation_gen":
            return __assign(__assign({}, state), { page: Pages.EQUATION_GEN });
        case "showcase/webhook":
            return __assign(__assign({}, state), { page: Pages.WEBHOOK });
        case "showcase/videocall":
            return __assign(__assign({}, state), { page: Pages.VIDEOCALL });
        case "showcase/decrement":
            return __assign(__assign({}, state), { page: state.page - 1 || 1 });
        case "showcase/increment":
            return __assign(__assign({}, state), { page: state.page + 1 >= Object.keys(Pages).length / 2 - 1 ? Object.keys(Pages).length / 2 - 1 : state.page + 1 });
        case "showcase/equation_rendr":
            return __assign(__assign({}, state), { equation: action.payload || "[Error, nothing to render!]" });
        case "showcase/socket_setup":
            return __assign(__assign({}, state), { setupDone: true });
        case "showcase/append_requests":
            return __assign(__assign({}, state), { requests: __spreadArray(__spreadArray([], state.requests, true), [action.payload], false) });
        case "showcase/spin":
            return __assign(__assign({}, state), { spinner: state.spinner + 1 > 3 ? 0 : state.spinner + 1 });
        default:
            return state;
    }
};
exports.showcaseReducer = showcaseReducer;
