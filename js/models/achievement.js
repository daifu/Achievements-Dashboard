/*global Backbone */
var app = app || {};

(function() {
  'use strict';

  app.Achievement = Backbone.Model.extend({
    url: app.Config.postUrl,
    //url: 'http://updates.html5rocks.com/',
    defaults: {
      title: "",
      type: "standard",
      properties: {
        goalName: '',
        goalCount: 0,
        rewardName: '',
        rewardCount: 0,
        active: false
      }
    },
    sync: function(method, model, options) {
      if (!options.crossDomain) {
        options.crossDomain = true;
      }
      if (!options.xhrFields) {
        options.xhrFields = {withCredentials:true};
      }
      return Backbone.sync(method, model, options);
    },
    parse: function(response) {
      console.log(response);
      return response;
    }
  });
})();
