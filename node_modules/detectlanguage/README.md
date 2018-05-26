Detect Language API
===
[![Build Status](https://travis-ci.org/detectlanguage/detectlanguage-node.svg?branch=master)](https://travis-ci.org/detectlanguage/detectlanguage-node)
[![npm](https://img.shields.io/npm/v/detectlanguage.svg)](https://www.npmjs.com/package/detectlanguage)

JavaScript wrapper for [DetectLanguage Service](https://detectlanguage.com/).

&nbsp;

Installation
---
	npm install detectlanguage [--save]

&nbsp;

Configuration
---

Before using Detect Language API client you have to setup your personal API key.  
You can get it by signing up at [detectlanguage.com](https://detectlanguage.com)

&nbsp;

Usage
---


### Setup

    var DetectLanguage = require('detectlanguage');
    var detectLanguage = new DetectLanguage({
        key: '[INSERT YOUR KEY HERE]',
        ssl: true|false (defaults to TRUE)
    });    

    
### Simple Detection
Takes a simple string and detects the language with a list of detections.

###### Request

    var dataSimple = "I am a Teapot and a Submarine";
    detectLanguage.detect(dataSimple, function(error, result) {
        console.log(JSON.stringify(result));
    });
    
###### Response
    {
      data: {
        detections: [
          {
            language: "en",
            isReliable: true,
            confidence: 7.85
          }
        ]
      }
    }

    
### Bulk Detection (Recommended)
Takes an array simple string and detects the language with a list of detections.

###### Request
    
    var dataBulk = [
        "I am a Teapot and a Submarine",
        "Soy una tetera y un submarino",
        "Jeg er en tekande og en ubåd"
    ]
    detectLanguage.detect(dataBulk, function(error, result) {
        console.log(JSON.stringify(result));
    });
    
###### Response
    {
      data: {
        detections: [
          [
            {
              language: "en",
              isReliable: true,
              confidence: 7.85
            }
          ],
          [
            {
              language: "es",
              isReliable: true,
              confidence: 3.75
            }
          ],
          [
            {
              language: "da",
              isReliable: true,
              confidence: 4.09
            }
          ]
        ]
      }
    }
    
    
### Supported Languages
Returns the list of supported languages.

###### Request

    detectLanguage.languages(function(error, result) {
        console.log(JSON.stringify(result));
    });
    
###### Response

    [
      {
        code: "ab",
        name: "ABKHAZIAN"
      },
      {
        code: "aa",
        name: "AFAR"
      },
      {
        code: "af",
        name: "AFRIKAANS"
      }
      ...
    ]

    
### User Status
Returns information about your account and it's status.

###### Request
    
    detectLanguage.status(function(error, result) {
        console.log(JSON.stringify(result));
    });

###### Response

    {
      date: "2015-02-21",
      requests: 31,
      bytes: 429,
      plan: "FREE",
      plan_expires: null,
      daily_requests_limit: 5000,
      daily_bytes_limit: 1048576,
      status: "ACTIVE"
    }


&nbsp;

Author
---
Peter Andreas Moelgaard ([GitHub](https://github.com/pmoelgaard), [Twitter](https://twitter.com/petermoelgaard))

&nbsp;

License
---
Licensed under the Apache License, Version 2.0: [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)