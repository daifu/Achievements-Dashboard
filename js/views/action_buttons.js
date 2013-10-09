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
      e.preventDefault();
      this.$btn = $(e.target);
      var that = this;

      app.Achievements.update_if_changed({
        beforeAjax: function() {
          that.$btn.disabledSave();
        },
        afterAjax: function() {
          that.$btn.enableSave();
        }
      });
    }
  });

})(jQuery);
