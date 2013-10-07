/*global Backbone _ $*/
var app = app || {};

(function($){
  'use strict';
  app.MainMenuView = Backbone.View.extend({
    el: '#main_menu',
    template: _.template($('#main_menu_template').html()),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.append(this.template);
    }
  });

})(jQuery);
