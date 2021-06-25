
//const urlChecker = require('../js/checkUrl');

import { urlChecker } from '../js/checkUrl'

test('This test should return true', () => {
    expect(urlChecker().toBeTrue(true))
})