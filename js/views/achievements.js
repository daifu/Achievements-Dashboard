/*global Backbone _ $*/
var app = app || {};

(function($){
  'use strict';
  app.AchievementsView = app.DailyAchievementsView.extend({
    el: "#achievements",
    initialize: function() {
      this.list_id    = 'achievement_list';
      this.$el.html(this.template({list_div_id: this.list_id, title: 'Achievements'}));
      this.render();
    }
  });
})(jQuery);
