
//const handleSubmit = require('../js/formHandler');

import { handleSubmit } from '../js/formHandler'

describe("The URL should start with a HTTP OR HTTS." , () => {
    const httpMatcher = "";
    expect.stringMatching(handleSubmit(httpMatcher)).toMatch(httpMatcher)
})

