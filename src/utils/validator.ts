/**
 * Number check.
 *
 * @param {any} value
 * @return {boolean} Whether the value is a number or not.
 */
export function isNumber(value: any): boolean {
    return typeof value === "number" && !isNaN(value);
}

/**
 * String check.
 *
 * @param {any} value
 * @return {boolean} Whether the value is a string or not.
 */
export function isString(value: any): value is string {
    return typeof value === "string";
}

/**
 * Non-empty string check.
 *
 * @param {any} value
 * @return {boolean} Whether the value is a non-empty string or not.
 */
export function isNonEmptyString(value: any): value is string {
    return value !== "" && isString(value);
}
