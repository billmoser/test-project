/*global describe, it */
import { core, extensions } from '../index.js'

import assert from 'assert'

describe('basic tests', function () {

    describe('#core~foo test', function () {
        it('should be correct', function () {
            assert(core.foo('a') === 'I')
        });
    });

    describe('#extensions~bar test', function () {
        it('should be correct', function () {
            assert(extensions.bar('a') === 'a')
        });
    });

});
