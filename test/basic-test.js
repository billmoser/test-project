/*global describe, it */
import { core } from '../index.js'

import assert from 'assert'

describe('basic tests', function () {

    describe('#core~foo test', function () {
        it('should be correct', function () {
            assert(core.foo('a') === 'I')
        });
    });

});
