/*global Backbone */
var app = app || {};

(function() {
  'use strict';

  app.Achievement = Backbone.Model.extend({
    url: app.Config.postUrl,
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
      options['emulateHTTP'] = true;
      options.timeout = 40000; // required, or the application won't pick up on 404 responses
      return Backbone.sync(method, model, options);
    }
  });
})();
