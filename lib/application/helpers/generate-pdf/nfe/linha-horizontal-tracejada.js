"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linhaHorizontalTracejada = linhaHorizontalTracejada;
const linha_horizontal_1 = require("./linha-horizontal");
function linhaHorizontalTracejada(input) {
    (0, linha_horizontal_1.linhaHorizontal)({ ...input, tracejada: false });
}
