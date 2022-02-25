"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquationGen = void 0;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var EquationGen = function () {
    var equation = (0, react_redux_1.useSelector)(function (state) { return state.equation; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var gen = function () {
        function rand() {
            return Math.floor((Math.random() * 20) - 10) || 1;
        }
        var answer = [rand(), rand(), rand()];
        function stringifyCoeff(isFirst, coeff) {
            var c = "".concat(coeff);
            if (coeff == 1 || coeff == -1) {
                c = c.replace(/1/g, '');
            }
            if (isFirst || coeff < 0)
                return c;
            return "+".concat(c);
        }
        var vars = 3;
        var varsletter = ['x', 'y', 'z'];
        var sc = [];
        for (var i = 0; i < vars; i++) {
            var coeff = [rand(), rand(), rand()];
            var c = 0;
            var s = "";
            for (var j = 0; j < vars; j++) {
                c += coeff[j] * answer[j];
                s += "".concat((stringifyCoeff(j == 0, coeff[j]))).concat(varsletter[j]);
            }
            s += " = ".concat(c, "\n");
            sc[i] = react_1.default.createElement("div", { key: i }, s);
        }
        return sc;
    };
    return react_1.default.createElement("div", { className: "flex gap-12" },
        react_1.default.createElement("div", { className: "flex-1" },
            react_1.default.createElement("div", { className: "font-bold" }, "Equation Generator"),
            react_1.default.createElement("div", null, "Generates a three variable linear equation, I use this myself for my test practice once. I like to solve my school problems with coding sometimes"),
            react_1.default.createElement("div", { className: "grid place-items-center", onClick: function () { return dispatch({ type: "showcase/equation_rendr", payload: gen() }); } },
                react_1.default.createElement("button", { className: "my-5 px-5 py-2 bg-subcontrast text-white rounded-md" }, "Generate!"))),
        react_1.default.createElement("div", { className: "flex-1" },
            react_1.default.createElement("div", null, "Result:"),
            equation));
};
exports.EquationGen = EquationGen;
