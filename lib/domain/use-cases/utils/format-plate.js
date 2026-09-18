"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLicensePlate = formatLicensePlate;
function formatLicensePlate(plate) {
    if (!plate)
        return '';
    const oldFormat = /^[A-Z]{3}[0-9]{4}$/;
    const mercosulFormat = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
    if (oldFormat.test(plate)) {
        return `${plate.slice(0, 3)}-${plate.slice(3)}`;
    }
    else if (mercosulFormat.test(plate)) {
        return `${plate.slice(0, 3)} ${plate.slice(3)}`;
    }
    return '';
}
