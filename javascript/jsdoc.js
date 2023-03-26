// @ts-check

/* eslint no-unused-vars: 0 */
/* eslint-disable */
// eslint-disable-next-line
// eslint-disable-line

/**
 * @todo A todo
 * @fixme A fixme
 */

/**
 * @file JSDoc examples
 * @version 1.0.0
 * @author Name <user@domain.com>
 * @license MIT
 * @see https://jsdoc.app
 * @description A description
 */

/**
 * A general description
 *
 * {@link https://jsdoc.app}
 * @constant
 * @default
 * @type {{a: number|boolean, b: Array<string>}}
 * @deprecated Since 0.1
 */
const OBJ = {
    a: true,
    b: ['0'],
};

/**
 * @function myFunc
 * @async
 * @param {boolean} a - A parameter
 * @param {*} b - A parameter of any type
 * @return {Promise} - A return
 */
const myFunc = async (a, b) => {
    OBJ.a = a;
    OBJ.b = b;
};

/**
 * @typedef {Object} $myType
 * @property {number} a - A property
 */

/**
 * @type {$myType}
 */
const myType = { a: 0 };

/**
 * @constructor
 * @classdesc A class description
 */
function MyClass() { }

/**
 * @extends MyClass
 */
class MyClassExtended extends MyClass {
    /**
     * @param {string} id - A constructor parameter
     */
    constructor(id) {
        super();
        this.id = id;
    }

    /**
     * @property {Function} print - A static method
     * @return {void} - A void return
     */
    static print() { console.log(null); }
}

/** Dynamic import */
import('./module.mjs')
    .then(data => console.log(data));
