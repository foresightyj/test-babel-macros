//@ts-check
const { createMacro } = require('babel-plugin-macros')
const util = require('util');

//see https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/author.md

// `createMacro` is simply a function that ensures your macro is only
// called in the context of a babel transpilation and will throw an
// error with a helpful message if someone does not have babel-plugin-macros
// configured correctly

/**
 * @typedef {import("@babel/core")} Babel
 * @typedef {import("@babel/types").File} File
 * @typedef {import("@babel/types").CallExpression} CallExpression
 * @typedef {import("@babel/types").MemberExpression} MemberExpression
 */

/**
 * 
 * @param {string} value
 * @param {Babel} babel 
 */
function toNode(value, babel) {
    /** @type {any} */
    const node = babel.parse(`var x = ${JSON.stringify(value)}`, {
        filename: "any.js"
    });
    return node.program.body[0].declarations[0].init
}

/**
 * @type {(arg: any)=>string}
 */
const mynameof = createMacro(({ references, state, babel }) => {
    // state is the second argument you're passed to a visitor in a
    // normal babel plugin. `babel` is the `babel-plugin-macros` module.
    // do whatever you like to the AST paths you find in `references`
    // read more below...
    // console.log(state);
    // console.log(babel);

    let b;
    b = babel;
    references.default.forEach(referencePath => {
        const parentPath = referencePath.parentPath;
        // console.log(util.inspect(parentPath, false, 1, true));
        /** @type {CallExpression} */
        // @ts-ignore
        const ce = parentPath.node;
        /** @type {MemberExpression} */
        // @ts-ignore
        const me = ce.arguments[0];
        /** @type {string} */
        const name = me.property.name;
        const node = toNode(name, babel);
        parentPath.replaceWith(node);
    })
}, {
    configName: 'mynameof'
})

module.exports = mynameof;