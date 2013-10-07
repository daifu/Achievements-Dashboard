/*global Backbone */
var app = app || {};

(function() {
  'use strict';

  var Achievements = Backbone.Collection.extend({
    model: app.Achievement,
    url: app.Config.getUrl,
    sync: function(method, model, options) {
      if (method === 'read') {
        return;
      }
      return Backbone.sync(method, model, options);
    },
    parse: function(response) {
      console.log("Parsing the response");
      return response['achievements'];
    }
  });

  app.Achievements = app.Achievements || new Achievements(app.Config.fakeJSON["achievements"]); // use the fake data
})();
