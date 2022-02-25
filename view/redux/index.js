"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allReducer = void 0;
var redux_1 = require("redux");
var showcase_reducer_1 = require("./showcase.reducer");
exports.allReducer = (0, redux_1.combineReducers)(showcase_reducer_1.showcaseReducer);
