"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCnpj = formatCnpj;
function formatCnpj(cnpj) {
    if (!cnpj)
        return '';
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}
