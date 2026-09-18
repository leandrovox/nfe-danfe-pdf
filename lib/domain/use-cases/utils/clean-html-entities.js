"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHtmlEntities = decodeHtmlEntities;
exports.cleanInfoComplementar = cleanInfoComplementar;
function decodeHtmlEntities(text) {
    if (!text)
        return text;
    const htmlEntities = {
        '&lt;': '<',
        '&gt;': '>',
        '&amp;': '&',
        '&quot;': '"',
        '&apos;': "'",
        '&nbsp;': ' ',
        '&#39;': "'",
        '&#x27;': "'",
        '&#x2F;': '/',
        '&#x60;': '`',
        '&#x3D;': '='
    };
    let decodedText = text;
    Object.keys(htmlEntities).forEach(entity => {
        const regex = new RegExp(entity, 'gi');
        decodedText = decodedText.replace(regex, htmlEntities[entity]);
    });
    decodedText = decodedText
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<\/p>/gi, ' ')
        .replace(/<p[^>]*>/gi, '')
        .replace(/<div[^>]*>/gi, '')
        .replace(/<\/div>/gi, ' ')
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    return decodedText;
}
function cleanInfoComplementar(text) {
    if (!text)
        return text;
    const cleaned = decodeHtmlEntities(text);
    return cleaned
        .replace(/\s*\.\s*$/, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
}
