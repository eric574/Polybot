var expect = require('chai').expect;
var DetectLanguage = require('../index');

describe('detect()', function () {
    var detectLanguage;

    before(function() {
        detectLanguage = new DetectLanguage({
            key: process.env.DETECTLANGUAGE_API_KEY,
            ssl: true,
        });
    });

    it('detect language', function (done) {
        var text = "I am a Teapot and a Submarine";

        detectLanguage.detect(text, function(error, result) {
            expect(error).to.be.null;
            expect(result[0].language).to.be.equal('en');
            done();
        });
    });

    it('detect languages in batch mode', function (done) {
        var texts = [
            "I am a Teapot and a Submarine",
            "Soy una tetera y un submarino",
            "Jeg er en tekande og en ubåd"
        ];

        detectLanguage.detect(texts, function(error, result) {
            expect(error).to.be.null;
            expect(result[0][0].language).to.be.equal('en');
            done();
        });
    });
});
