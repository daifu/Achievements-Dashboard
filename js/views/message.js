/*global Backbone _ $*/
var app = app || {};

(function($){
  'use strict';
  app.Message = Backbone.View.extend({
    el: '#flash_message',
    template: _.template($('#message_template').html()),
    initialize: function(options) {
      this.type    = options['type'];
      this.content = options['content'];
      this.render();
    },
    render: function() {
      this.$el.hide();
      this.$el.html(this.template(this.toJSON())).fadeIn(500);
      this.clearMessage();
    },
    toJSON: function() {
      return {
        type:    this.type,
        content: this.content
      };
    },
    clearMessage: function() {
      this.$el.find('.message').delay(5000).fadeOut();
    }
  });

})(jQuery);
