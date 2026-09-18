"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = formatTime;
function formatTime(date) {
    if (!date)
        return '';
    return date.substring(11, 19);
}
