/*global Backbone _ $*/
var app = app || {};

(function($){
  'use strict';

  app.AppView = Backbone.View.extend({
    initialize: function() {
      new app.MainMenuView();
      new app.SubMenuView();
      new app.ActionButtonsView();
      new app.DailyAchievementsView({collection: app.Achievements});
      new app.AchievementsView({collection: app.Achievements});
    }
  });

})(jQuery);
