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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AxxellApi);
  }
}(this, function(expect, AxxellApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AxxellApi.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('aggregateCountEvents', function() {
      it('should call aggregateCountEvents successfully', function(done) {
        //uncomment below and update the code to test aggregateCountEvents
        //instance.aggregateCountEvents(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aggregateEffective', function() {
      it('should call aggregateEffective successfully', function(done) {
        //uncomment below and update the code to test aggregateEffective
        //instance.aggregateEffective(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aggregateEvents', function() {
      it('should call aggregateEvents successfully', function(done) {
        //uncomment below and update the code to test aggregateEvents
        //instance.aggregateEvents(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aggregateRecent', function() {
      it('should call aggregateRecent successfully', function(done) {
        //uncomment below and update the code to test aggregateRecent
        //instance.aggregateRecent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aggregateTop', function() {
      it('should call aggregateTop successfully', function(done) {
        //uncomment below and update the code to test aggregateTop
        //instance.aggregateTop(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authStore', function() {
      it('should call authStore successfully', function(done) {
        //uncomment below and update the code to test authStore
        //instance.authStore(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAllEvents', function() {
      it('should call deleteAllEvents successfully', function(done) {
        //uncomment below and update the code to test deleteAllEvents
        //instance.deleteAllEvents(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAllItems', function() {
      it('should call deleteAllItems successfully', function(done) {
        //uncomment below and update the code to test deleteAllItems
        //instance.deleteAllItems(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItem', function() {
      it('should call deleteItem successfully', function(done) {
        //uncomment below and update the code to test deleteItem
        //instance.deleteItem(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recommendInteresting', function() {
      it('should call recommendInteresting successfully', function(done) {
        //uncomment below and update the code to test recommendInteresting
        //instance.recommendInteresting(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recommendSimilar', function() {
      it('should call recommendSimilar successfully', function(done) {
        //uncomment below and update the code to test recommendSimilar
        //instance.recommendSimilar(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerEvent', function() {
      it('should call registerEvent successfully', function(done) {
        //uncomment below and update the code to test registerEvent
        //instance.registerEvent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerItem', function() {
      it('should call registerItem successfully', function(done) {
        //uncomment below and update the code to test registerItem
        //instance.registerItem(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('registerStore', function() {
      it('should call registerStore successfully', function(done) {
        //uncomment below and update the code to test registerStore
        //instance.registerStore(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveEvents', function() {
      it('should call retrieveEvents successfully', function(done) {
        //uncomment below and update the code to test retrieveEvents
        //instance.retrieveEvents(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveItems', function() {
      it('should call retrieveItems successfully', function(done) {
        //uncomment below and update the code to test retrieveItems
        //instance.retrieveItems(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
