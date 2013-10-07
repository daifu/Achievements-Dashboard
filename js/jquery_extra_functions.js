/*global Backbone _ $*/

(function($){

  $.fn.disabledSave = function() {
    return $(this).text('Saving').attr('disabled', true);
  };

  $.fn.enableSave = function() {
    return $(this).text('Save').attr('disabled', false);
  };

  $.fn.disabledCancel = function() {
    return $(this).text('Canceling').attr('disabled', true);
  };

  $.fn.enableCancel = function() {
    return $(this).text('Cancel').attr('disabled', false);
  };

})(jQuery);
