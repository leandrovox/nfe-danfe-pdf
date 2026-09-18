"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negrito = negrito;
const default_1 = require("./default");
function negrito({ ajusteX, ajusteY, doc, largura, margemEsquerda, margemTopo, value, x, y, alinhamento, tamanho }) {
    const alignValue = (alinhamento ?? 'center');
    doc
        .font('negrito')
        .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
        .fontSize(tamanho ?? 6)
        .text(value, margemEsquerda + ajusteX + x, margemTopo + ajusteY + y, {
        width: largura,
        align: alignValue,
        lineGap: -1.5
    });
}
