"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDadosAdicionais = getDadosAdicionais;
const utils_1 = require("../../../../utils");
const utils_2 = require("../../../../domain/use-cases/utils");
const date_fns_1 = require("date-fns");
const pt_BR_1 = require("date-fns/locale/pt-BR");
const italico_1 = require("./italico");
const linha_vertical_1 = require("./linha-vertical");
const normal_1 = require("./normal");
const secao_1 = require("./secao");
const titulo_1 = require("./titulo");
function quebrarTextoPorLargura(doc, texto, larguraMaxima, tamanhoFonte = 6) {
    const linhas = [];
    let textoRestante = texto.trim();
    doc.fontSize(tamanhoFonte);
    while (textoRestante.length > 0) {
        const larguraCompleta = doc.widthOfString(textoRestante);
        if (larguraCompleta <= larguraMaxima) {
            linhas.push(textoRestante);
            break;
        }
        let inicio = 1;
        let fim = textoRestante.length;
        let melhorCorte = 1;
        while (inicio <= fim) {
            const meio = Math.floor((inicio + fim) / 2);
            const textoTeste = textoRestante.substring(0, meio);
            const larguraTeste = doc.widthOfString(textoTeste);
            if (larguraTeste <= larguraMaxima) {
                melhorCorte = meio;
                inicio = meio + 1;
            }
            else {
                fim = meio - 1;
            }
        }
        let pontoCorte = melhorCorte;
        const textoParaCorte = textoRestante.substring(0, melhorCorte);
        const separadores = [' | ', ' - ', ': ', ' ', ',', '.', ';'];
        for (const separador of separadores) {
            const ultimaPosicao = textoParaCorte.lastIndexOf(separador);
            if (ultimaPosicao > melhorCorte * 0.7) {
                pontoCorte = ultimaPosicao + separador.length;
                break;
            }
        }
        if (pontoCorte === 0) {
            pontoCorte = Math.max(1, melhorCorte);
        }
        linhas.push(textoRestante.substring(0, pontoCorte).trim());
        textoRestante = textoRestante.substring(pontoCorte).trim();
    }
    return linhas;
}
function quebrarTextoInteligente(texto, maxCaracteres) {
    const linhas = [];
    let textoRestante = texto;
    while (textoRestante.length > 0) {
        if (textoRestante.length <= maxCaracteres) {
            linhas.push(textoRestante);
            break;
        }
        let pontoCorte = maxCaracteres;
        const fatia = textoRestante.substring(0, maxCaracteres);
        const separadores = [' | ', ' - ', ': ', ' ', ',', '.'];
        let melhorCorte = -1;
        for (const separador of separadores) {
            const ultimaOcorrencia = fatia.lastIndexOf(separador);
            if (ultimaOcorrencia > maxCaracteres * 0.7) {
                melhorCorte = ultimaOcorrencia + separador.length;
                break;
            }
        }
        if (melhorCorte > -1) {
            pontoCorte = melhorCorte;
        }
        linhas.push(textoRestante.substring(0, pontoCorte).trim());
        textoRestante = textoRestante.substring(pontoCorte).trim();
    }
    return linhas;
}
function getDadosAdicionais({ doc, ajusteX, ajusteY, margemEsquerda, margemTopo, margemDireita, larguraDoFormulario, infAdic, extra, finalEspacoDet, textoRodape }) {
    let alturaSecao = 821.8;
    const informacoesComplementares = [];
    if (infAdic?.infAdFisco) {
        informacoesComplementares.push(`Inf. Fisco: ${(0, utils_2.cleanInfoComplementar)(infAdic.infAdFisco)}`);
    }
    if (infAdic?.infCpl) {
        informacoesComplementares.push(`Inf. Contribuinte: ${(0, utils_2.cleanInfoComplementar)(infAdic.infCpl)}`);
    }
    if (infAdic?.obsCont) {
        const obsContArray = Array.isArray(infAdic.obsCont) ? infAdic.obsCont : [infAdic.obsCont];
        obsContArray.forEach((obs) => {
            if (obs.xCampo && obs.xTexto) {
                informacoesComplementares.push(`${obs.xCampo}: ${(0, utils_2.cleanInfoComplementar)(obs.xTexto)}`);
            }
        });
    }
    if (extra?.vTotTrib) {
        informacoesComplementares.push(`Valor Aproximado dos Tributos: ${(0, utils_1.MoneyMaskBR)(Number(extra.vTotTrib ?? '0'))}`);
    }
    if (extra?.emailDest) {
        informacoesComplementares.push(`Email do Destinatário: ${extra.emailDest}`);
    }
    const textoCompleto = informacoesComplementares.join(' | ');
    const larguraDisponivel = 365;
    const alturaLinha = 8;
    let linhasNecessarias = 1;
    if (informacoesComplementares.length > 0) {
        doc.fontSize(6);
        const larguraTexto = doc.widthOfString(textoCompleto);
        if (larguraTexto > larguraDisponivel) {
            const linhasSimuladas = quebrarTextoPorLargura(doc, textoCompleto, larguraDisponivel, 6);
            linhasNecessarias = linhasSimuladas.length;
        }
    }
    const alturaTexto = Math.max(1, linhasNecessarias) * alturaLinha;
    const alturaMinima = finalEspacoDet + 25 + alturaTexto;
    if (alturaMinima > alturaSecao) {
        alturaSecao = Math.min(alturaMinima, 850);
    }
    doc
        .lineWidth(0.5)
        .roundedRect(margemEsquerda + ajusteX, margemTopo + ajusteY + finalEspacoDet + 8, larguraDoFormulario, alturaSecao - (finalEspacoDet + 8), 3)
        .stroke()
        .lineWidth(1);
    (0, linha_vertical_1.linhaVertical)({ y1: finalEspacoDet + 8, y2: alturaSecao, x: 367, doc, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, secao_1.secao)({ doc, value: 'DADOS ADICIONAIS', x: 1.5, y: finalEspacoDet, largura: 0, ajusteX, ajusteY, margemEsquerda, margemTopo });
    (0, titulo_1.titulo)({
        value: 'INFORMAÇÕES COMPLEMENTARES',
        x: 1.5,
        y: finalEspacoDet + 10,
        largura: 365.5,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    (0, titulo_1.titulo)({
        value: 'RESERVADO AO FISCO',
        x: 369,
        y: finalEspacoDet + 10,
        largura: 213,
        ajusteX,
        ajusteY,
        doc,
        margemEsquerda,
        margemTopo
    });
    if (informacoesComplementares.length > 0) {
        const textoCompleto = informacoesComplementares.join(' | ');
        const larguraDisponivel = 365;
        const alturaLinha = 8;
        doc.fontSize(6);
        const larguraTexto = doc.widthOfString(textoCompleto);
        if (larguraTexto > larguraDisponivel) {
            const linhas = quebrarTextoPorLargura(doc, textoCompleto, larguraDisponivel, 6);
            linhas.forEach((linha, index) => {
                (0, normal_1.normal)({
                    doc,
                    value: linha,
                    x: 1,
                    y: finalEspacoDet + 17.5 + index * alturaLinha,
                    largura: 365,
                    alinhamento: 'left',
                    tamanho: 6,
                    ajusteX,
                    ajusteY,
                    margemEsquerda,
                    margemTopo
                });
            });
        }
        else {
            (0, normal_1.normal)({
                doc,
                value: textoCompleto,
                x: 1,
                y: finalEspacoDet + 17.5,
                largura: 365,
                alinhamento: 'justify',
                tamanho: 6,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
        }
    }
    const informacoesFisco = [];
    if (infAdic?.obsFisco) {
        const obsFiscoArray = Array.isArray(infAdic.obsFisco) ? infAdic.obsFisco : [infAdic.obsFisco];
        obsFiscoArray.forEach((obs) => {
            if (obs.xCampo && obs.xTexto) {
                informacoesFisco.push(`${obs.xCampo}: ${(0, utils_2.cleanInfoComplementar)(obs.xTexto)}`);
            }
        });
        const textoFisco = informacoesFisco.join(' | ');
        const larguraFisco = 213;
        doc.fontSize(6);
        const larguraTextoFisco = doc.widthOfString(textoFisco);
        if (larguraTextoFisco > larguraFisco) {
            const linhasFisco = quebrarTextoPorLargura(doc, textoFisco, larguraFisco, 6);
            linhasFisco.forEach((linha, index) => {
                (0, normal_1.normal)({
                    doc,
                    value: linha,
                    x: 369,
                    y: finalEspacoDet + 17.5 + index * 8,
                    largura: 213,
                    alinhamento: 'left',
                    tamanho: 6,
                    ajusteX,
                    ajusteY,
                    margemEsquerda,
                    margemTopo
                });
            });
        }
        else {
            (0, normal_1.normal)({
                doc,
                value: textoFisco,
                x: 369,
                y: finalEspacoDet + 17.5,
                largura: 213,
                alinhamento: 'justify',
                tamanho: 6,
                ajusteX,
                ajusteY,
                margemEsquerda,
                margemTopo
            });
        }
    }
    const alturaRodape = 8;
    const yRodape = finalEspacoDet + 61.5 + alturaRodape;
    const dataHoraAtual = (0, date_fns_1.format)(new Date(), "dd/MM/yyyy 'às' HH:mm:ss", { locale: pt_BR_1.ptBR });
    (0, italico_1.italico)({
        doc,
        value: `Impresso em ${dataHoraAtual}`,
        x: 1.5,
        y: yRodape,
        largura: 280,
        alinhamento: 'left',
        tamanho: 6,
        ajusteX,
        ajusteY,
        margemEsquerda,
        margemTopo
    });
    if (textoRodape) {
        (0, italico_1.italico)({
            doc,
            value: textoRodape,
            x: 285,
            y: yRodape,
            largura: 295,
            alinhamento: 'right',
            tamanho: 6,
            ajusteX,
            ajusteY,
            margemEsquerda,
            margemTopo
        });
    }
}
