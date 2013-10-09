/*global Backbone */
var app = app || {};

(function() {
  'use strict';

  var Achievements = Backbone.Collection.extend({
    model: app.Achievement,
    url  : app.Config.getUrl,
    sync : function(method, model, options) {
      if (method === 'read') {
        return;
      }
      return Backbone.sync(method, model, options);
    },
    parse: function(response) {
      console.log("Parsing the response");
      return response['achievements'];
    },
    update_if_changed: function(options) {
      this.each(function(model) {
        this.check_or_update(model, options);
      }, this);
    },
    check_or_update: function(model, options) {
      if (model.hasChanged()) {
        options.beforeAjax();
        model.save(model.changed,{
          success: function(resp) {
            new app.Message({type: 'success', content: 'Your changes have been updated.'});
            options.afterAjax();
          },
          error: function() {
            new app.Message({type: 'error', content: 'Error! It cannot save it.'});
            options.afterAjax();
          },
          wait: true
        });
      }
    }
  });

  app.Achievements = app.Achievements || new Achievements(app.Config.fakeJSON["achievements"]); // use the fake data
})();
