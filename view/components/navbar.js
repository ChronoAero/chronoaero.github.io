"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var react_1 = __importDefault(require("react"));
var speedScroll_1 = require("./speedScroll");
var Navbar = function () {
    return react_1.default.createElement("div", { className: "h-12 shadow-lg flex items-center bg-primary overflow-x-auto overflow-y-hidden" },
        react_1.default.createElement(speedScroll_1.SpeedScroll, { text: "About Me", id: "aboutme" }),
        react_1.default.createElement(speedScroll_1.SpeedScroll, { text: "Prologue", id: "prologue" }),
        react_1.default.createElement(speedScroll_1.SpeedScroll, { text: "Doing", id: "doing" }),
        react_1.default.createElement(speedScroll_1.SpeedScroll, { text: "Plans", id: "plans" }),
        react_1.default.createElement(speedScroll_1.SpeedScroll, { text: "Showcase", id: "showcase" }),
        react_1.default.createElement(speedScroll_1.SpeedScroll, { text: "Contacts", id: "contacts" }));
};
exports.Navbar = Navbar;
