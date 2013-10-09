/*global Backbone _ $*/
var app = app || {};

(function($){
  'use strict';
  app.DailyAchievementsView = Backbone.View.extend({
    el: '#daily_achievements',
    template: _.template($('#daily_achievements_template').html()),
    initialize: function() {
      this.list_id    = 'daily_achievement_list';
      this.$el.html(this.template({list_div_id: this.list_id, title: 'Daily Achievements'}));
      this.render();
    },
    render: function() {
      this.$list_div  = this.$el.find('#'+this.list_id);
      this.$list_div.empty();
      this.collection.forEach(this.add, this);
    },
    add: function(model) {
      var dailyAchievementView = new app.DailyAchievementView({
        model: model
      });
      this.$list_div.append(dailyAchievementView.render().el);
    }
  });

})(jQuery);
