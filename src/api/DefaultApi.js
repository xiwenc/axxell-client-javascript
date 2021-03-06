/**
 * axxell-api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DataPoint', 'model/ErrorResponse', 'model/Item', 'model/Store', 'model/Event'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataPoint'), require('../model/ErrorResponse'), require('../model/Item'), require('../model/Store'), require('../model/Event'));
  } else {
    // Browser globals (root is window)
    if (!root.AxxellApi) {
      root.AxxellApi = {};
    }
    root.AxxellApi.DefaultApi = factory(root.AxxellApi.ApiClient, root.AxxellApi.DataPoint, root.AxxellApi.ErrorResponse, root.AxxellApi.Item, root.AxxellApi.Store, root.AxxellApi.Event);
  }
}(this, function(ApiClient, DataPoint, ErrorResponse, Item, Store, Event) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the aggregateCountEvents operation.
     * @callback module:api/DefaultApi~aggregateCountEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataPoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return list of counts per event
     * @param {String} storeid Store identifier
     * @param {String} eventType Valid values purchase, view or recommend
     * @param {String} dataPeriod Valid values are last7days, last30days, today, yesterday
     * @param {module:api/DefaultApi~aggregateCountEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataPoint}
     */
    this.aggregateCountEvents = function(storeid, eventType, dataPeriod, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling aggregateCountEvents";
      }

      // verify the required parameter 'eventType' is set
      if (eventType == undefined || eventType == null) {
        throw "Missing the required parameter 'eventType' when calling aggregateCountEvents";
      }

      // verify the required parameter 'dataPeriod' is set
      if (dataPeriod == undefined || dataPeriod == null) {
        throw "Missing the required parameter 'dataPeriod' when calling aggregateCountEvents";
      }


      var pathParams = {
        'eventType': eventType
      };
      var queryParams = {
        'storeid': storeid,
        'dataPeriod': dataPeriod
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DataPoint;

      return this.apiClient.callApi(
        '/aggregates/countevents/{eventType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the aggregateEffective operation.
     * @callback module:api/DefaultApi~aggregateEffectiveCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataPoint>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return list of aggregated data points correlated with recommendationa and eventType
     * @param {String} storeid Store identifier
     * @param {String} eventType Valid values purchase, view or recommend
     * @param {module:api/DefaultApi~aggregateEffectiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataPoint>}
     */
    this.aggregateEffective = function(storeid, eventType, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling aggregateEffective";
      }

      // verify the required parameter 'eventType' is set
      if (eventType == undefined || eventType == null) {
        throw "Missing the required parameter 'eventType' when calling aggregateEffective";
      }


      var pathParams = {
        'eventType': eventType
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [DataPoint];

      return this.apiClient.callApi(
        '/aggregates/effective/{eventType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the aggregateEvents operation.
     * @callback module:api/DefaultApi~aggregateEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataPoint>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return list of aggregated data points
     * @param {String} storeid Store identifier
     * @param {String} eventType Valid values purchase, view or recommend
     * @param {module:api/DefaultApi~aggregateEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataPoint>}
     */
    this.aggregateEvents = function(storeid, eventType, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling aggregateEvents";
      }

      // verify the required parameter 'eventType' is set
      if (eventType == undefined || eventType == null) {
        throw "Missing the required parameter 'eventType' when calling aggregateEvents";
      }


      var pathParams = {
        'eventType': eventType
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [DataPoint];

      return this.apiClient.callApi(
        '/aggregates/events/{eventType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the aggregateRecent operation.
     * @callback module:api/DefaultApi~aggregateRecentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Item>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns recent products
     * @param {String} storeid Store identifier
     * @param {String} eventType Valid values purchase, view or recommend
     * @param {module:api/DefaultApi~aggregateRecentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Item>}
     */
    this.aggregateRecent = function(storeid, eventType, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling aggregateRecent";
      }

      // verify the required parameter 'eventType' is set
      if (eventType == undefined || eventType == null) {
        throw "Missing the required parameter 'eventType' when calling aggregateRecent";
      }


      var pathParams = {
        'eventType': eventType
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Item];

      return this.apiClient.callApi(
        '/aggregates/recent/{eventType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the aggregateTop operation.
     * @callback module:api/DefaultApi~aggregateTopCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Item>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns top products
     * @param {String} storeid Store identifier
     * @param {String} eventType Valid values purchase, view or recommend
     * @param {module:api/DefaultApi~aggregateTopCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Item>}
     */
    this.aggregateTop = function(storeid, eventType, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling aggregateTop";
      }

      // verify the required parameter 'eventType' is set
      if (eventType == undefined || eventType == null) {
        throw "Missing the required parameter 'eventType' when calling aggregateTop";
      }


      var pathParams = {
        'eventType': eventType
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Item];

      return this.apiClient.callApi(
        '/aggregates/top/{eventType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the authStore operation.
     * @callback module:api/DefaultApi~authStoreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Store} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve authentication token using password
     * @param {module:model/Store} store Store
     * @param {module:api/DefaultApi~authStoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Store}
     */
    this.authStore = function(store, callback) {
      var postBody = store;

      // verify the required parameter 'store' is set
      if (store == undefined || store == null) {
        throw "Missing the required parameter 'store' when calling authStore";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Store;

      return this.apiClient.callApi(
        '/auth', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAllEvents operation.
     * @callback module:api/DefaultApi~deleteAllEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Event} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all events
     * @param {String} storeid Store identifier
     * @param {module:api/DefaultApi~deleteAllEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Event}
     */
    this.deleteAllEvents = function(storeid, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling deleteAllEvents";
      }


      var pathParams = {
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Event;

      return this.apiClient.callApi(
        '/events', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAllItems operation.
     * @callback module:api/DefaultApi~deleteAllItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all items
     * @param {String} storeid Store identifier
     * @param {module:api/DefaultApi~deleteAllItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.deleteAllItems = function(storeid, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling deleteAllItems";
      }


      var pathParams = {
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/items', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItem operation.
     * @callback module:api/DefaultApi~deleteItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete existing item
     * @param {String} storeid Store identifier
     * @param {String} itemid Item identifier
     * @param {module:api/DefaultApi~deleteItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.deleteItem = function(storeid, itemid, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling deleteItem";
      }

      // verify the required parameter 'itemid' is set
      if (itemid == undefined || itemid == null) {
        throw "Missing the required parameter 'itemid' when calling deleteItem";
      }


      var pathParams = {
        'itemid': itemid
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/items/{itemid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recommendInteresting operation.
     * @callback module:api/DefaultApi~recommendInterestingCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Item>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return list of recommended items
     * @param {String} storeid Store identifier
     * @param {String} userid Interesting items for visitor
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Return exactly this amount of suggestions. Maximum value is 50, default is 5.
     * @param {module:api/DefaultApi~recommendInterestingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Item>}
     */
    this.recommendInteresting = function(storeid, userid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling recommendInteresting";
      }

      // verify the required parameter 'userid' is set
      if (userid == undefined || userid == null) {
        throw "Missing the required parameter 'userid' when calling recommendInteresting";
      }


      var pathParams = {
      };
      var queryParams = {
        'storeid': storeid,
        'count': opts['count'],
        'userid': userid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Item];

      return this.apiClient.callApi(
        '/recommendations/interesting', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recommendSimilar operation.
     * @callback module:api/DefaultApi~recommendSimilarCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Item>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return list of recommended items
     * @param {String} storeid Store identifier
     * @param {String} userid User requesting the recommendation
     * @param {String} itemid Similar items bought by others
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Return exactly this amount of suggestions. Maximum value is 50, default is 5.
     * @param {module:api/DefaultApi~recommendSimilarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Item>}
     */
    this.recommendSimilar = function(storeid, userid, itemid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling recommendSimilar";
      }

      // verify the required parameter 'userid' is set
      if (userid == undefined || userid == null) {
        throw "Missing the required parameter 'userid' when calling recommendSimilar";
      }

      // verify the required parameter 'itemid' is set
      if (itemid == undefined || itemid == null) {
        throw "Missing the required parameter 'itemid' when calling recommendSimilar";
      }


      var pathParams = {
      };
      var queryParams = {
        'storeid': storeid,
        'count': opts['count'],
        'userid': userid,
        'itemid': itemid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Item];

      return this.apiClient.callApi(
        '/recommendations/similar', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerEvent operation.
     * @callback module:api/DefaultApi~registerEventCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Event} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register new event
     * @param {String} storeid Store identifier
     * @param {module:model/Event} event Single event to register
     * @param {module:api/DefaultApi~registerEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Event}
     */
    this.registerEvent = function(storeid, event, callback) {
      var postBody = event;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling registerEvent";
      }

      // verify the required parameter 'event' is set
      if (event == undefined || event == null) {
        throw "Missing the required parameter 'event' when calling registerEvent";
      }


      var pathParams = {
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Event;

      return this.apiClient.callApi(
        '/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerItem operation.
     * @callback module:api/DefaultApi~registerItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register new item
     * @param {String} storeid Store identifier
     * @param {module:model/Item} item Single item to register
     * @param {module:api/DefaultApi~registerItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.registerItem = function(storeid, item, callback) {
      var postBody = item;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling registerItem";
      }

      // verify the required parameter 'item' is set
      if (item == undefined || item == null) {
        throw "Missing the required parameter 'item' when calling registerItem";
      }


      var pathParams = {
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerStore operation.
     * @callback module:api/DefaultApi~registerStoreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Store} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register new Store
     * @param {module:model/Store} store Store
     * @param {module:api/DefaultApi~registerStoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Store}
     */
    this.registerStore = function(store, callback) {
      var postBody = store;

      // verify the required parameter 'store' is set
      if (store == undefined || store == null) {
        throw "Missing the required parameter 'store' when calling registerStore";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Store;

      return this.apiClient.callApi(
        '/store', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveEvents operation.
     * @callback module:api/DefaultApi~retrieveEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get recent events
     * @param {String} storeid Store identifier
     * @param {module:api/DefaultApi~retrieveEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */
    this.retrieveEvents = function(storeid, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling retrieveEvents";
      }


      var pathParams = {
        'storeid': storeid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Event];

      return this.apiClient.callApi(
        '/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveItems operation.
     * @callback module:api/DefaultApi~retrieveItemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Item>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get recent items
     * @param {String} storeid Store identifier
     * @param {module:api/DefaultApi~retrieveItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Item>}
     */
    this.retrieveItems = function(storeid, callback) {
      var postBody = null;

      // verify the required parameter 'storeid' is set
      if (storeid == undefined || storeid == null) {
        throw "Missing the required parameter 'storeid' when calling retrieveItems";
      }


      var pathParams = {
      };
      var queryParams = {
        'storeid': storeid
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Item];

      return this.apiClient.callApi(
        '/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
