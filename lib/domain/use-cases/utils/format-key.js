"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatKey = formatKey;
function formatKey(key) {
    return key.replace(/(.{4})(?=.)/g, '$1 ');
}
