//@ts-check
const assert = require('assert');
const util = require('util');
const t = require("@babel/types");
/**
 * @typedef {import("@babel/core")} Babel
 * @typedef {import("@babel/types").File} File
 * @typedef {import("@babel/traverse").Node} Node
 * @typedef {import("@babel/traverse").NodePath} NodePath
 * @typedef {import("@babel/types").CallExpression} CallExpression
 * @typedef {import("@babel/types").Identifier} Identifier
 * @typedef {import("@babel/types").MemberExpression} MemberExpression
 */

/**
* @param {NodePath} path 
*/
function transform(path) {
    assert(path, 'path is falsy');
    assert(path.node, 'path.node is falsy');
    assert(t.isCallExpression(path.node), 'path.node must be CallExpression but is: ' + path.node.type);
    /** @type {CallExpression} */
    // @ts-ignore
    const ce = path.node;
    /** @type {MemberExpression} */
    // @ts-ignore
    const me = ce.arguments[0];
    assert(t.isMemberExpression(me));
    /** @type {string} */
    const name = me.property.name;
    assert(typeof (name) === "string");
    path.replaceWith(t.stringLiteral(name));
}

module.exports = transform;