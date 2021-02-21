/** 
 * @module core
 * @description desc of core
 */

/**
 * @function foo
 * @param {string}  a - format is '[#|b]\<int\>', where \<int\> is > 0
 * @param {Object=} options - defaults are {b='I', c=0, d=0}
 * @param {string}  options.b - name
 * @param {int}     options.c - default blah
 * @param {int}     options.d - an integer used to blah
 * @description what is a foo?
 */
function foo(a, {b='I', c=0, d=0}={}) {
    return {a: a, options: {b:b, c:c, d:d}}
}

export {
    foo
}