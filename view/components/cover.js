"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cover = void 0;
var react_1 = __importDefault(require("react"));
var framer_motion_1 = require("framer-motion");
var Cover = function () {
    return react_1.default.createElement("div", { className: "h-96 bg-secondary" },
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "100vw" }, animate: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 0.1, stiffness: 500, damping: 50 }, className: "absolute w-full grid place-items-end h-96" },
            react_1.default.createElement("img", { className: "h-36 sm:h-52 md:h-72 pixel text-subcontrast", src: "./view/public/chrono.png", alt: "Chrono" })),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "100vw" }, animate: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 0.5, stiffness: 500, damping: 25 }, className: "text-contrast font-bold  text-4xl sm:text-6xl text-center px-0 py-24 sm:px-24" }, "<ChronoAero/>"),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "-100vw" }, animate: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 0.5, stiffness: 500, damping: 25 }, className: "px-12 py-24 sm:px-24" },
            react_1.default.createElement("img", { className: "rounded-xl shadow-lg", src: "https://avatars.githubusercontent.com/u/75560157?v=4", alt: "Profile Picture" })));
};
exports.Cover = Cover;
