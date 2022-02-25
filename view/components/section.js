"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var framer_motion_1 = require("framer-motion");
var react_1 = __importDefault(require("react"));
var Section = function (props) {
    return (react_1.default.createElement("div", { className: "flex flex-col-reverse items-stretch ".concat(props.right ? "sm:flex-row-reverse" : "sm:flex-row") },
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "-150px" }, whileInView: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 1, stiffness: 500, damping: 25 }, viewport: { once: true }, className: "flex-[5]" },
            react_1.default.createElement("div", { className: "font-bold text-3xl p-1 py-6 text-subcontrast ".concat(props.id) }, props.title),
            props.desc.map(function (t, index) {
                return react_1.default.createElement("div", { key: index, className: "p-1 text-subcontrast" }, t);
            })),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.3 }, whileInView: { opacity: 1, scale: 1 }, transition: { ease: "easeOut", duration: 0.5 }, viewport: { once: true }, className: "flex-[3] p-4 grid place-items-center" },
            react_1.default.createElement("img", { className: "rounded-xl w-full max-w-xs text-subcontrast pixel", src: props.img, alt: props.alt }))));
};
exports.Section = Section;
