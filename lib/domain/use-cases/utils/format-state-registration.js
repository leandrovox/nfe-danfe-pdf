"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStateRegistration = formatStateRegistration;
function formatStateRegistration(stateRegistration, uf) {
    if (!stateRegistration)
        return '';
    const cleanInscricao = stateRegistration.replace(/\D/g, '');
    const length = cleanInscricao.length;
    if (!cleanInscricao || length < 7 || length > 15)
        return stateRegistration;
    if (uf) {
        return formatByState(cleanInscricao, uf.toUpperCase());
    }
    return formatGeneric(cleanInscricao, length);
}
function formatByState(cleanInscricao, uf) {
    const length = cleanInscricao.length;
    switch (uf) {
        case 'AC':
            if (length === 13)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3/$4-$5');
            break;
        case 'AL':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            break;
        case 'AP':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            break;
        case 'AM':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            break;
        case 'BA':
            if (length === 8)
                return cleanInscricao.replace(/(\d{6})(\d{2})/, '$1-$2');
            if (length === 9)
                return cleanInscricao.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
            break;
        case 'CE':
            if (length === 9)
                return cleanInscricao.replace(/(\d{8})(\d{1})/, '$1-$2');
            break;
        case 'DF':
            if (length === 13)
                return cleanInscricao.replace(/(\d{3})(\d{5})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            break;
        case 'ES':
            if (length === 9)
                return cleanInscricao.replace(/(\d{8})(\d{1})/, '$1-$2');
            break;
        case 'GO':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            break;
        case 'MA':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            break;
        case 'MT':
            if (length === 11)
                return cleanInscricao.replace(/(\d{10})(\d{1})/, '$1-$2');
            break;
        case 'MS':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            break;
        case 'MG':
            if (length === 13)
                return cleanInscricao.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4');
            break;
        case 'PA':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{6})(\d{1})/, '$1-$2-$3');
            break;
        case 'PB':
            if (length === 9)
                return cleanInscricao.replace(/(\d{8})(\d{1})/, '$1-$2');
            break;
        case 'PR':
            if (length === 10)
                return cleanInscricao.replace(/(\d{3})(\d{5})(\d{2})/, '$1.$2-$3');
            break;
        case 'PE':
            if (length === 9)
                return cleanInscricao.replace(/(\d{7})(\d{2})/, '$1-$2');
            break;
        case 'PI':
            if (length === 9)
                return cleanInscricao.replace(/(\d{8})(\d{1})/, '$1-$2');
            break;
        case 'RJ':
            if (length === 8)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{2})(\d{1})/, '$1.$2.$3-$4');
            break;
        case 'RN':
            if (length === 10)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})(\d{1})/, '$1.$2.$3-$4$5');
            break;
        case 'RS':
            if (length === 10)
                return cleanInscricao.replace(/(\d{3})(\d{7})/, '$1/$2');
            break;
        case 'RO':
            if (length === 9)
                return cleanInscricao.replace(/(\d{3})(\d{5})(\d{1})/, '$1.$2-$3');
            if (length === 14)
                return cleanInscricao.replace(/(\d{14})/, '$1');
            break;
        case 'RR':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            break;
        case 'SC':
            if (length === 9)
                return cleanInscricao.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
            break;
        case 'SP':
            if (length === 12)
                return cleanInscricao.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4');
            break;
        case 'SE':
            if (length === 9)
                return cleanInscricao.replace(/(\d{8})(\d{1})/, '$1-$2');
            break;
        case 'TO':
            if (length === 9)
                return cleanInscricao.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            break;
    }
    return formatGeneric(cleanInscricao, length);
}
function formatGeneric(cleanInscricao, length) {
    const formats = {
        7: { format: '$1-$2', regex: /(\d{6})(\d{1})/ },
        8: { format: '$1.$2-$3', regex: /(\d{3})(\d{3})(\d{2})/ },
        9: { format: '$1.$2.$3-$4', regex: /(\d{2})(\d{3})(\d{3})(\d{1})/ },
        10: { format: '$1.$2.$3-$4', regex: /(\d{2})(\d{3})(\d{3})(\d{2})/ },
        11: { format: '$1.$2.$3-$4', regex: /(\d{3})(\d{3})(\d{3})(\d{2})/ },
        12: { format: '$1.$2.$3.$4', regex: /(\d{3})(\d{3})(\d{3})(\d{3})/ },
        13: { format: '$1.$2.$3.$4-$5', regex: /(\d{2})(\d{3})(\d{3})(\d{2})(\d{3})/ },
        14: { format: '$1.$2.$3.$4-$5', regex: /(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/ }
    };
    const pattern = formats[length];
    if (!pattern)
        return cleanInscricao;
    const match = cleanInscricao.match(pattern.regex);
    if (!match)
        return cleanInscricao;
    return pattern.format.replace(/\$(\d+)/g, (_, index) => match[parseInt(index)] || '');
}
