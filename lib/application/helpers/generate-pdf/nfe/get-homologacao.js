"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomologacao = getHomologacao;
const default_1 = require("./default");
function getHomologacao({ doc, ajusteX, ajusteY, margemEsquerda, margemTopo, larguraDoFormulario, protNFe, cancelada }) {
    doc
        .font('normal')
        .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
        .fontSize(38)
        .fillOpacity(default_1.DEFAULT_NFE.opacidadeDaHomologacao)
        .text('EMITIDA EM HOMOLOGAÇÃO', margemEsquerda + ajusteX + 0, margemTopo + ajusteY + 200 + default_1.DEFAULT_NFE.ajusteYDaHomologacao, {
        width: larguraDoFormulario,
        align: 'center'
    });
    doc
        .font('normal')
        .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
        .fontSize(25)
        .fillOpacity(default_1.DEFAULT_NFE.opacidadeDaHomologacao)
        .text(protNFe !== undefined ? 'SEM VALOR FISCAL' : 'NÃO ENVIADA PARA SEFAZ', margemEsquerda + ajusteX + 0, margemTopo + ajusteY + 250 + default_1.DEFAULT_NFE.ajusteYDaHomologacao, {
        width: larguraDoFormulario,
        align: 'center'
    });
    if (cancelada) {
        doc
            .font('normal')
            .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
            .fontSize(38)
            .fillOpacity(default_1.DEFAULT_NFE.opacidadeDaHomologacao)
            .text('CANCELADA', margemEsquerda + ajusteX + 0, margemTopo + ajusteY + 300 + default_1.DEFAULT_NFE.ajusteYDaHomologacao, {
            width: larguraDoFormulario,
            align: 'center'
        });
    }
    doc.fillOpacity(100);
}
