"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarItens = gerarItens;
const ordate_1 = __importDefault(require("ordate"));
const utils_1 = require("../../../../domain/use-cases/utils");
const cria_layout_1 = require("./cria-layout");
const default_1 = require("./default");
const linha_horizontal_tracejada_1 = require("./linha-horizontal-tracejada");
const normal_1 = require("./normal");
const options_doc_1 = require("./options-doc");
async function gerarItens({ nf, ajusteX, ajusteY, doc, margemEsquerda, margemTopo, margemDireita, larguraDoFormulario, pathLogo, cancelada, textoRodape }) {
    let folha = 0;
    await (0, cria_layout_1.criaLayout)({
        ajusteX,
        ajusteY,
        nf,
        doc,
        larguraDoFormulario,
        margemDireita,
        margemEsquerda,
        margemTopo,
        pathLogo,
        folha,
        cancelada,
        textoRodape
    });
    let maiorY = doc.y;
    for (let i = 0; i < nf.NFe.infNFe.det.length; i++) {
        const item = nf.NFe.infNFe.det[i];
        const rastroInfo = item.prod.rastro || item.rastro;
        const formatRastro = (rast) => `Lote:${rast.nLote} ${rast.dVal ? `Val:${ordate_1.default.toUTC(rast.dVal).toLocaleDateString()}` : ''} ${rast.qLote ? `Qnt:${rast.qLote}` : ''}`.trim();
        const rastroOutput = Array.isArray(rastroInfo)
            ? rastroInfo.length > 0
                ? `\n${rastroInfo.map(formatRastro).join('\n')}`
                : ''
            : rastroInfo?.nLote
                ? formatRastro(rastroInfo)
                : '';
        function renderizarLinha(pdf) {
            const y = maiorY + 2;
            (0, normal_1.normal)({
                doc,
                value: item.prod.cProd,
                x: 1.5,
                y,
                largura: 51,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            (0, normal_1.normal)({
                doc,
                value: `${item.prod.xProd}${item.infAdProd ? `\n${item.infAdProd}` : ''}${rastroOutput}`,
                x: 55.5,
                y,
                largura: 178,
                alinhamento: 'justify',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            (0, normal_1.normal)({
                doc,
                value: item.prod.NCM,
                x: 235.5,
                y,
                largura: 32.5,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            (0, normal_1.normal)({
                doc,
                value: item.prod.CFOP,
                x: 293.5,
                y,
                largura: 21,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            (0, normal_1.normal)({
                doc,
                value: item.prod.uCom,
                x: 315.5,
                y,
                largura: 16.5,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            (0, normal_1.normal)({
                doc,
                value: (0, utils_1.formatNumber)(item.prod.qCom, 4),
                x: 335,
                y,
                largura: 37,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            (0, normal_1.normal)({
                doc,
                value: (0, utils_1.formatNumber)(item.prod.vUnCom, 2),
                x: 375,
                y,
                largura: 32.5,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            (0, normal_1.normal)({
                doc,
                value: (0, utils_1.formatNumber)(item.prod.vProd, 2),
                x: 409.5,
                y,
                largura: 31,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            const keys = Object.keys(item.imposto);
            for (let i = 0; i < keys.length; i++) {
                if (keys[i].includes('ICMS') && !keys[i].includes('UFDest')) {
                    const newKeys = Object.keys(item.imposto[keys[i]]);
                    (0, normal_1.normal)({
                        doc,
                        value: item.imposto[keys[i]][newKeys[0]].CST
                            ? `${item.imposto[keys[i]][newKeys[0]].orig}/${item.imposto[keys[i]][newKeys[0]].CST}`
                            : '',
                        x: 270,
                        y,
                        largura: 21,
                        alinhamento: 'center',
                        tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                        ajusteX,
                        ajusteY,
                        margemEsquerda,
                        margemTopo
                    });
                    (0, normal_1.normal)({
                        doc,
                        value: item.imposto[keys[i]][newKeys[0]].CSOSN
                            ? `${item.imposto[keys[i]][newKeys[0]].orig}/${item.imposto[keys[i]][newKeys[0]].CSOSN}`
                            : '',
                        x: 270,
                        y,
                        largura: 21,
                        alinhamento: 'center',
                        tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                        ajusteX,
                        ajusteY,
                        margemEsquerda,
                        margemTopo
                    });
                    maiorY = Math.max(maiorY, pdf.y);
                    (0, normal_1.normal)({
                        doc,
                        value: (0, utils_1.formatNumber)(item.imposto[keys[i]][newKeys[0]].vBC ?? 0, 2),
                        x: 443,
                        y,
                        largura: 32.5,
                        alinhamento: 'center',
                        tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                        ajusteX,
                        ajusteY,
                        margemEsquerda,
                        margemTopo
                    });
                    maiorY = Math.max(maiorY, pdf.y);
                    (0, normal_1.normal)({
                        doc,
                        value: (0, utils_1.formatNumber)(item.imposto[keys[i]][newKeys[0]].vICMS ?? 0, 2),
                        x: 476,
                        y,
                        largura: 32,
                        alinhamento: 'center',
                        tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                        ajusteX,
                        ajusteY,
                        margemEsquerda,
                        margemTopo
                    });
                    maiorY = Math.max(maiorY, pdf.y);
                    (0, normal_1.normal)({
                        doc,
                        value: (0, utils_1.formatNumber)(item.imposto[keys[i]][newKeys[0]].pICMS ?? 0, 2),
                        x: 532,
                        y: y + 0.65,
                        largura: 28,
                        alinhamento: 'center',
                        tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                        ajusteX,
                        ajusteY,
                        margemEsquerda,
                        margemTopo
                    });
                    maiorY = Math.max(maiorY, pdf.y);
                }
            }
            (0, normal_1.normal)({
                doc,
                value: (0, utils_1.formatNumber)(item.imposto.IPI?.IPITrib?.vIPI ?? 0, 2),
                x: 507.5,
                y,
                largura: 26,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            (0, normal_1.normal)({
                doc,
                value: (0, utils_1.formatNumber)(item.imposto.IPI?.IPITrib?.pIPI ?? 0, 2),
                x: 557.75,
                y,
                largura: 29,
                alinhamento: 'center',
                tamanho: default_1.DEFAULT_NFE.tamanhoDaFonteDosItens,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
            maiorY = Math.max(maiorY, pdf.y);
            return Number(maiorY) + (default_1.DEFAULT_NFE.separadorDeItens !== undefined ? 2 : 0);
        }
        maiorY = renderizarLinha(doc);
        if (doc.y > (folha === 0 ? default_1.DEFAULT_NFE.finalTamanhoDet1 - 26 : 800)) {
            doc.addPage(options_doc_1.optionsDocNFe);
            doc.y = 0;
            folha++;
            await (0, cria_layout_1.criaLayout)({
                ajusteX,
                ajusteY,
                nf,
                doc,
                larguraDoFormulario,
                margemDireita,
                margemEsquerda,
                margemTopo,
                pathLogo,
                folha,
                cancelada,
                textoRodape
            });
            maiorY = doc.y;
        }
        else {
            if (default_1.DEFAULT_NFE.separadorDeItens !== undefined) {
                (0, linha_horizontal_tracejada_1.linhaHorizontalTracejada)({ x1: 0, x2: 0, y: maiorY - 1, doc, ajusteX, ajusteY, margemDireita, margemEsquerda, margemTopo });
            }
        }
    }
}
