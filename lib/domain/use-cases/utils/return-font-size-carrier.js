"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnFontSizeCarrier = returnFontSizeCarrier;
function returnFontSizeCarrier(name) {
    if (!name)
        return 9.5;
    if (name && name.length > 28 && name.length <= 31) {
        return 8.5;
    }
    if (name && name.length > 31 && name.length <= 35) {
        return 7.5;
    }
    if (name && name.length > 35 && name.length <= 41) {
        return 6.5;
    }
    if (name && name.length > 41 && name.length <= 48) {
        return 5.5;
    }
    if (name && name.length > 48) {
        return 5;
    }
    return 9.5;
}
