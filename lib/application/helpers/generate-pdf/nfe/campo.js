"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.campo = campo;
const default_1 = require("./default");
function campo({ ajusteX, ajusteY, doc, largura, margemEsquerda, margemTopo, value, x, y, alinhamento, tamanho }) {
    const alignValue = (alinhamento ?? default_1.DEFAULT_NFE.alinhamentoDoCampo);
    doc
        .font('negrito')
        .fillColor(default_1.DEFAULT_NFE.corDoCampo)
        .fontSize(tamanho ?? default_1.DEFAULT_NFE.tamanhoDaFonteDoCampo)
        .text(value, margemEsquerda + ajusteX + x, margemTopo + ajusteY + y, {
        width: largura,
        align: alignValue
    });
}
