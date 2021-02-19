"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonEmptyString = exports.isString = exports.isNumber = void 0;
/**
 * Number check.
 *
 * @param {any} value
 * @return {boolean} Whether the value is a number or not.
 */
function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
exports.isNumber = isNumber;
/**
 * String check.
 *
 * @param {any} value
 * @return {boolean} Whether the value is a string or not.
 */
function isString(value) {
    return typeof value === "string";
}
exports.isString = isString;
/**
 * Non-empty string check.
 *
 * @param {any} value
 * @return {boolean} Whether the value is a non-empty string or not.
 */
function isNonEmptyString(value) {
    return value !== "" && isString(value);
}
exports.isNonEmptyString = isNonEmptyString;
//# sourceMappingURL=validator.js.map