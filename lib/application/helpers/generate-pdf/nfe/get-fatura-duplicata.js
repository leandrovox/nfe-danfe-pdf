"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFaturaDuplicata = getFaturaDuplicata;
const date_fns_1 = require("date-fns");
const utils_1 = require("../../../../domain/use-cases/utils");
const default_1 = require("./default");
const secao_1 = require("./secao");
function getFaturaDuplicata({ y, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo, larguraDoFormulario, cobr }) {
    if (cobr !== undefined && Object.keys(cobr).length > 0) {
        (0, secao_1.secao)({ doc, value: 'FATURA/DUPLICATA', x: 1.5, y: y + 12, largura: 0, ajusteX, ajusteY, margemEsquerda, margemTopo });
        const larguraMinimaColuna = 80;
        const margemInternaCelulas = 1.5;
        const margemDireitaCelulas = 1.5;
        const larguraDisponivel = larguraDoFormulario - margemInternaCelulas - margemDireitaCelulas;
        const colunas = Math.floor(larguraDisponivel / larguraMinimaColuna);
        const larguraColuna = larguraDisponivel / colunas;
        const alturaLinha = 34;
        let yAtual = y + 24;
        let xAtual = margemInternaCelulas;
        let coluna = 0;
        if (cobr.fat !== undefined) {
            const xColuna = margemEsquerda + ajusteX + xAtual + coluna * larguraColuna;
            const yColuna = margemTopo + ajusteY + yAtual;
            doc
                .lineWidth(0.5)
                .roundedRect(xColuna, yColuna, larguraColuna, alturaLinha, 3)
                .stroke()
                .lineWidth(1);
            doc
                .font('negrito')
                .fontSize(6)
                .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
                .text('Número da Fatura:', xColuna + 2, yColuna + 2, {
                width: larguraColuna - 4,
                align: 'left'
            })
                .font('normal')
                .fontSize(6)
                .fillColor('black')
                .text(cobr.fat.nFat, xColuna + 2, yColuna + 8, {
                width: larguraColuna - 4,
                align: 'left'
            })
                .font('negrito')
                .fontSize(6)
                .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
                .text(`Valor Original: R$ ${(0, utils_1.formatNumber)(cobr.fat.vOrig, 2)}`, xColuna + 2, yColuna + 14, {
                width: larguraColuna - 4,
                align: 'left'
            })
                .font('normal')
                .fontSize(6)
                .fillColor('black')
                .text(`Desconto: R$ ${(0, utils_1.formatNumber)(cobr.fat.vDesc, 2)}`, xColuna + 2, yColuna + 20, {
                width: larguraColuna - 4,
                align: 'left'
            })
                .font('negrito')
                .fontSize(6)
                .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
                .text(`Valor Líquido: R$ ${(0, utils_1.formatNumber)(cobr.fat.vLiq, 2)}`, xColuna + 2, yColuna + 26, {
                width: larguraColuna - 4,
                align: 'left'
            });
            coluna++;
        }
        if (cobr.dup !== undefined) {
            cobr.dup.forEach((dup, index) => {
                const xColuna = margemEsquerda + ajusteX + xAtual + coluna * larguraColuna;
                const yColuna = margemTopo + ajusteY + yAtual;
                doc
                    .lineWidth(0.5)
                    .roundedRect(xColuna, yColuna, larguraColuna, alturaLinha, 3)
                    .stroke()
                    .lineWidth(1);
                doc
                    .font('negrito')
                    .fontSize(6)
                    .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
                    .text('Duplicata:', xColuna + 2, yColuna + 2, {
                    width: larguraColuna - 4,
                    align: 'left'
                })
                    .font('normal')
                    .fontSize(6)
                    .fillColor('black')
                    .text(dup.nDup, xColuna + 2, yColuna + 8, {
                    width: larguraColuna - 4,
                    align: 'left'
                })
                    .font('negrito')
                    .fontSize(6)
                    .fillColor(default_1.DEFAULT_NFE.corDoTitulo)
                    .text(`R$ ${(0, utils_1.formatNumber)(dup.vDup, 2)}`, xColuna + 2, yColuna + 14, {
                    width: larguraColuna - 4,
                    align: 'left'
                })
                    .font('normal')
                    .fontSize(6)
                    .fillColor('black')
                    .text((0, date_fns_1.format)((0, date_fns_1.parseISO)(dup.dVenc), 'dd/MM/yyyy'), xColuna + 2, yColuna + 20, {
                    width: larguraColuna - 4,
                    align: 'left'
                });
                coluna++;
                if (coluna >= colunas) {
                    coluna = 0;
                    yAtual += alturaLinha;
                }
            });
        }
        if (coluna > 0) {
            yAtual += alturaLinha;
        }
        doc.text('', margemInternaCelulas, yAtual);
    }
    return doc.y;
}
