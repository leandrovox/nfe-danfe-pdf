"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotaCancelada = getNotaCancelada;
const default_1 = require("./default");
function getNotaCancelada({ doc, ajusteX, ajusteY, margemEsquerda, margemTopo, larguraDoFormulario }) {
    doc
        .font('normal')
        .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
        .fontSize(60)
        .fillOpacity(default_1.DEFAULT_NFE.opacidadeDaHomologacao)
        .text('CANCELADA', margemEsquerda + ajusteX + 0, margemTopo + ajusteY + 200 + default_1.DEFAULT_NFE.ajusteYDaHomologacao, {
        width: larguraDoFormulario,
        align: 'center'
    });
    doc.fillOpacity(100);
}
