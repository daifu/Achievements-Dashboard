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
      console.log("Saving....");
      this.$btn = $(e.target);
      this.$btn.disabledSave();
      app.Achievements.each(this.update_if_changed, this);
    },
    update_if_changed: function(model) {
      var that = this;
      if (model.hasChanged()) {
        model.save(model.toJSON(),{
          success: function() {
            new app.Message({type: 'success', content: 'Your changes have been updated.'});
            that.$btn.enableSave();
          },
          error: function() {
            new app.Message({type: 'error', content: 'Error! It cannot save it.'});
            that.$btn.enableSave();
          }
        });
      } else {
        console.log("No changes...");
        this.$btn.enableSave();
      }
    }
  });

})(jQuery);
