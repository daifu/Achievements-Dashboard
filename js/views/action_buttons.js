/*global Backbone _ $*/
var app = app || {};

(function($){
  'use strict';
  app.ActionButtonsView = Backbone.View.extend({
    el: '#action_buttons',
    template: _.template($('#action_buttons_template').html()),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.append(this.template);
    },
    events: {
      'click #action_save': 'update_achievements'
    },
    update_achievements: function(e) {
      this.$btn = $(e.target);
      this.$btn.disabledSave();
      app.Achievements.each(this.update_if_changed, this);
    },
    update_if_changed: function(model) {
      if (model.hasChanged()) {
        model.save({
          success: function() {
            new app.Message({type: 'success', content: 'Your changes have been updated.'});
            this.$btn.enableSave();
          },
          error: function() {
            new app.Message({type: 'error', content: 'Error! Your changes could not save.'});
            this.$btn.enableSave();
          }
        });
      } else {
        this.$btn.enableSave();
      }
    }
  });

})(jQuery);
