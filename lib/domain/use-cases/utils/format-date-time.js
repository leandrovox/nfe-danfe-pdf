"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateTime = formatDateTime;
const format_date_1 = require("./format-date");
const format_time_1 = require("./format-time");
function formatDateTime(date) {
    if (!date)
        return '';
    return `${(0, format_date_1.formatDate)(date)} ${(0, format_time_1.formatTime)(date)}`;
}
