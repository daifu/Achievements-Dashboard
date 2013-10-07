/*global Backbone _ $*/
var app = app || {};

(function($){
  'use strict';
  app.SubMenuView = Backbone.View.extend({
    el: '#sub_menu',
    template: _.template($('#sub_menu_template').html()),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.append(this.template);
    }
  });

})(jQuery);
