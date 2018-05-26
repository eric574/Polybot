/**
 * Copyright 2015 Peter Andreas Moelgaard. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var utils = require('../lib/utils');

var API = {};

/**
 * Gets all languages
 *
 * @param  {callback} callback - The callback that handles the response.
 * @return {object} Result
 */
API.languages = function(callback) {

    var options = utils.extend({}, this.options, {
            service: 'languages',
            method: 'GET'
        }
    )

    var params = {
        options: options
    }

    var APIRequest = require('../lib/apirequest');
    var apiRequest = APIRequest(params, function(error, result) {
        if(!error) {
            result = result.body;
        }
        callback(error, result);
    });
    return apiRequest;
}

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;
