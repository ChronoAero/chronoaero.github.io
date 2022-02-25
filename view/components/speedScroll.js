"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeedScroll = void 0;
var react_1 = __importDefault(require("react"));
var react_scroll_1 = require("react-scroll");
var framer_motion_1 = require("framer-motion");
var SpeedScroll = function (props) {
    function handleClick() {
        react_scroll_1.scroller.scrollTo(props.id, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }
    return react_1.default.createElement(framer_motion_1.motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, initial: { opacity: 0, y: "-50px" }, animate: { opacity: 1, y: "0" }, transition: { type: "spring", duration: 0.5, stiffness: 500, damping: 25 }, className: 'p-5 text-subcontrast hover:text-contrast whitespace-nowrap', onClick: handleClick }, props.text);
};
exports.SpeedScroll = SpeedScroll;
