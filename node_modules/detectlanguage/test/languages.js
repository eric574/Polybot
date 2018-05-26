var expect = require('chai').expect;
var DetectLanguage = require('../index');

describe('languages()', function () {
    var detectLanguage;

    before(function() {
        detectLanguage = new DetectLanguage({
            key: process.env.DETECTLANGUAGE_API_KEY,
            ssl: true,
        });
    });

    it('fetches languages lists', function (done) {
        detectLanguage.languages(function(error, result) {
            expect(error).to.be.null;
            expect(result[0].code).to.be.string;
            expect(result[0].name).to.be.string;
            done();
        });
    });
});
