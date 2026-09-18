"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatProtocol = formatProtocol;
function formatProtocol(protocol) {
    if (!protocol)
        return '';
    return protocol.replace(/(.{3})(?=.)/g, '$1 ');
}
