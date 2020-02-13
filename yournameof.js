const assert = require('assert');
const util = require('util');
const transform = require('./nameof');
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
 * @param {Babel} babel
 */
function plugin(babel) {
    const t = babel.types;
    return {
        visitor: {
            /**
             * @param {NodePath<Node>} path 
             */
            CallExpression(path) {
                /**
                 */
                const callee = path.node.callee;
                if (t.isIdentifier(callee)) {
                    /** @type {Identifier} */
                    const id = callee;
                    if (id.name === "yournameof") {
                        transform(path);
                    }
                }
            }
        }
    };
}

module.exports = plugin