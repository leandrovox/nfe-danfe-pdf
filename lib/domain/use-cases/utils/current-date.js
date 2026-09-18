"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDate = getCurrentDate;
const date_fns_1 = require("date-fns");
function getCurrentDate() {
    return (0, date_fns_1.format)(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx");
}
