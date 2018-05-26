var expect = require('chai').expect;
var DetectLanguage = require('../index');

describe('status()', function () {
    var detectLanguage;

    before(function() {
        detectLanguage = new DetectLanguage({
            key: process.env.DETECTLANGUAGE_API_KEY,
            ssl: true,
        });
    });

    it('fetches account status', function (done) {
        detectLanguage.status(function(error, result) {
            expect(error).to.be.null;
            expect(result.status).to.be.string;
            done();
        });
    });
});
