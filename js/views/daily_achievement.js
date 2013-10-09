/*global Backbone _ $*/
var app = app || {};

(function($){
  'use strict';
  app.DailyAchievementView = Backbone.View.extend({
    tagName: 'div',
    className: 'make-col-md-12',
    template: _.template($("#daily_achievement_template").html()),
    status_template: {
      active: $('#achievement_status_active_template').html(),
      paused: $('#achievement_status_paused_template').html()
    },
    render: function() {
      var json = this.model.toJSON();
      json['status_template'] = this.status_template;
      this.$el.append(this.template(json));
      return this;
    },
    events: {
      'click .status': "changeStatus"
    },
    changeStatus: function(e) {
      this.model.toggleActive();

      // update the view
      var $div = $(e.target);
      if (!$div.is('.status')) {
        $div = $div.parents('.status');
      }
      if(this.model.get('properties').active) {
        $div.replaceWith(this.status_template.active);
      } else {
        $div.replaceWith(this.status_template.paused);
      }
    }
  });
})(jQuery);
