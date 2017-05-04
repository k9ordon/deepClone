/**
 * @module deepClone
 *
 * le best clone function in se world (whateva dan abramov says)
 * @todo rewrite to something moa performant like for #lol
 */

/**
 * clone a object
 * @param  {object} a
 * @return {object} cloned object
 */
function deepClone(a) {
    return JSON.parse(JSON.stringify(a));
}

export default deepClone;