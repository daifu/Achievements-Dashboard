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
      Backbone.emulateHTTP = true;
      method = 'create';
      return Backbone.sync(method, model, options);
    },
    parse: function(response) {
      if (response.IsSuccess) {
        return true;
      }
    },
    toggleActive: function() {
      var properties = _.clone(this.get('properties'));
      properties.active = !properties.active;
      this.set('properties', properties);
    }
  });
})();
