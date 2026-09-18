"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImposto = getImposto;
const utils_1 = require("../../../../domain/use-cases/utils");
const campo_1 = require("./campo");
const default_1 = require("./default");
const linha_horizontal_1 = require("./linha-horizontal");
const linha_vertical_1 = require("./linha-vertical");
const secao_1 = require("./secao");
const titulo_1 = require("./titulo");
function getImposto({ y, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo, larguraDoFormulario, total }) {
    doc
        .lineWidth(0.5)
        .roundedRect(margemEsquerda + ajusteX, margemTopo + ajusteY + y + 16.2, larguraDoFormulario, 40, 3)
        .stroke()
        .lineWidth(1);
    (0, linha_horizontal_1.linhaHorizontal)({ x1: 0, x2: 0, y: y + 36.2, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 16.2, y2: y + 56.2, x: 87.7, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 16.2, y2: y + 56.2, x: 87.7 * 2 + 0.3, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 16.2, y2: y + 56.2, x: 87.7 * 3 + 0.4, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 16.2, y2: y + 56.2, x: 87.7 * 4 + 0.4, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 16.2, y2: y + 56.2, x: 87.7 * 5 + 0.6, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, linha_vertical_1.linhaVertical)({ y1: y + 16.2, y2: y + 56.2, x: 87.7 * 5 + 51.8, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, secao_1.secao)({ doc, value: 'CÁLCULO DO IMPOSTO', x: 1.5, y: y + 8.7, largura: 0, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, titulo_1.titulo)({ value: 'BASE DE CÁLCULO DO ICMS', x: 1.5, y: y + 17.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vBC, 2),
        x: 1.5,
        y: y + 26.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR DO ICMS', x: 89, y: y + 17.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vICMS, 2),
        x: 89,
        y: y + 26.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'BASE DE CÁLC. ICMS S.T.', x: 177, y: y + 17.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vBCST, 2),
        x: 177,
        y: y + 26.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR DO ICMS SUBST.', x: 265, y: y + 17.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vST, 2),
        x: 265,
        y: y + 26.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR IMP. IMPORTAÇÃO', x: 353, y: y + 17.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vIPI, 2),
        x: 353,
        y: y + 26.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR DO PIS', x: 441, y: y + 17.2, largura: 47, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vPIS, 2),
        x: 441,
        y: y + 26.2,
        largura: 47,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR TOTAL DOS PRODUTOS', x: 492, y: y + 17.2, largura: 93, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vProd, 2),
        x: 492,
        y: y + 26.2,
        largura: 93,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR DO FRETE', x: 1.5, y: y + 37.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vFrete, 2),
        x: 1.5,
        y: y + 46.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR DO SEGURO', x: 89, y: y + 37.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vSeg, 2),
        x: 89,
        y: y + 46.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'DESCONTO', x: 177, y: y + 37.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vDesc, 2),
        x: 177,
        y: y + 46.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'OUTRAS DESPESAS', x: 265, y: y + 37.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vOutro, 2),
        x: 265,
        y: y + 46.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR TOTAL DO IPI', x: 353, y: y + 37.2, largura: 84, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vIPI, 2),
        x: 353,
        y: y + 46.2,
        largura: 84,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'VALOR DA COFINS',
        x: 440.5,
        y: y + 37.2,
        largura: 47,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo,
        tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDoTitulo - 1
    });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vCOFINS, 2),
        x: 440.5,
        y: y + 46.2,
        largura: 47,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({ value: 'VALOR TOTAL DA NOTA', x: 492, y: y + 37.2, largura: 93, ajusteX, ajusteY, doc, margemEsquerda, margemTopo });
    (0, campo_1.campo)({
        value: (0, utils_1.formatNumber)(total.ICMSTot.vNF, 2),
        x: 492,
        y: y + 46.2,
        largura: 93,
        alinhamento: 'right',
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    return doc.y;
}
