"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyMaskBR = MoneyMaskBR;
function MoneyMaskBR(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
