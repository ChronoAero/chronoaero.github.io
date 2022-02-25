"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Showcase = void 0;
var react_1 = __importStar(require("react"));
var showcase_reducer_1 = require("../redux/showcase.reducer");
var react_redux_1 = require("react-redux");
var equationGen_1 = require("./equationGen");
var webhook_1 = require("./webhook");
var framer_motion_1 = require("framer-motion");
var underConstruction_1 = require("./underConstruction");
var types = ["showcase/equation_gen", "showcase/webhook", "showcase/videocall"];
var navContent = [
    "Equation Generator",
    "Webhook",
    "Video Call",
];
var spinChar = ['|', '/', '-', '\\'];
var Showcase = function (props) {
    var page = (0, react_redux_1.useSelector)(function (state) { return state.page; });
    var spinner = (0, react_redux_1.useSelector)(function (state) { return state.spinner; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            dispatch({ type: "showcase/spin" });
        }, 100);
        return function () { return clearInterval(interval); };
    }, []);
    return react_1.default.createElement("div", null,
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "-150px" }, whileInView: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 1, stiffness: 500, damping: 25 }, viewport: { once: true }, className: "p-1 text-subcontrast font-bold" }, "Web-Related"),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "-150px" }, whileInView: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 1, stiffness: 500, damping: 25 }, viewport: { once: true }, className: "bg-secondary flex flex-row h-12 items-center mx-1 p-1 overflow-x-auto overflow-y-hidden" }, types.map(function (type, index) {
            return react_1.default.createElement(framer_motion_1.motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, initial: { opacity: 0, y: "-50px" }, animate: { opacity: 1, y: "0" }, transition: { type: "spring", duration: 0.5, stiffness: 500, damping: 25 }, key: index, onClick: function () { dispatch({ type: type }); }, className: "text-subcontrast p-5 hover:text-contrast w-auto whitespace-nowrap" }, navContent[index]);
        })),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.3 }, whileInView: { opacity: 1, scale: 1 }, transition: { ease: "easeOut", duration: 0.5 }, viewport: { once: true }, className: "bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto" },
            react_1.default.createElement("div", { className: "text-subcontrast font-mono" }, (function (page) {
                switch (page) {
                    case showcase_reducer_1.Pages.EQUATION_GEN:
                        return react_1.default.createElement(equationGen_1.EquationGen, null);
                    case showcase_reducer_1.Pages.WEBHOOK:
                        return react_1.default.createElement(webhook_1.Webhook, null);
                    case showcase_reducer_1.Pages.VIDEOCALL:
                        return react_1.default.createElement(underConstruction_1.UnderConstruction, null);
                    default:
                        return react_1.default.createElement("div", null,
                            "Shell is ready, waiting for your commands...",
                            react_1.default.createElement("span", { className: "text-symbols" }, spinChar[spinner]));
                }
            })(page))),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "-150px" }, whileInView: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 1, stiffness: 500, damping: 25 }, viewport: { once: true }, className: "p-1 text-subcontrast font-bold" }, "In for a challenge?"),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.3 }, whileInView: { opacity: 1, scale: 1 }, transition: { ease: "easeOut", duration: 0.5 }, viewport: { once: true }, className: "bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto" },
            react_1.default.createElement(underConstruction_1.UnderConstruction, null)),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: "-150px" }, whileInView: { opacity: 1, x: "0" }, transition: { type: "spring", duration: 1, stiffness: 500, damping: 25 }, viewport: { once: true }, className: "p-1 text-subcontrast font-bold" }, "Game Development"),
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.3 }, whileInView: { opacity: 1, scale: 1 }, transition: { ease: "easeOut", duration: 0.5 }, viewport: { once: true }, className: "bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto" },
            react_1.default.createElement(underConstruction_1.UnderConstruction, null)));
};
exports.Showcase = Showcase;
