"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnderConstruction = void 0;
var react_1 = __importDefault(require("react"));
var UnderConstruction = function () {
    return react_1.default.createElement("div", { className: "grid place-items-center" },
        react_1.default.createElement("div", { className: "grid place-content-center" },
            react_1.default.createElement("img", { className: "text-subcontrast h-40 p-6 pixel", src: "./view/public/construction.png", alt: "Construction Image" })),
        react_1.default.createElement("div", { className: "text-subcontrast font-mono" }, "This section is under development... I'll make it available soon"));
};
exports.UnderConstruction = UnderConstruction;
