
//const handleSubmit = require('../js/formHandler');

import { ArticleAnalysisBtn } from '../js/formHandler'

describe("The URL should start with a HTTP OR HTTS." , () => {
    expect(ArticleAnalysisBtn()).not.toBeNull()
})

