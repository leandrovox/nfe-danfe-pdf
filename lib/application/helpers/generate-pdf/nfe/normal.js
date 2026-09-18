"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normal = normal;
const default_1 = require("./default");
function normal({ ajusteX, ajusteY, doc, largura, margemEsquerda, margemTopo, value, x, y, alinhamento, tamanho }) {
    const alignValue = (alinhamento ?? 'center');
    doc
        .font('normal')
        .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
        .fontSize(tamanho ?? 8)
        .text(value ?? '', margemEsquerda + ajusteX + x, margemTopo + ajusteY + y, {
        width: largura,
        align: alignValue,
        lineGap: -1.5
    });
}
