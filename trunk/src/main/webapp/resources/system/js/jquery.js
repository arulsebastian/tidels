/**
* @author Remy Sharp
* @url http://remysharp.com/2007/01/25/jquery-tutorial-text-box-hints/
*/

(function ($) {

$.fn.hint = function (blurClass) {
  if (!blurClass) { 
    blurClass = 'blur';
  }
    
  return this.each(function () {
    // get jQuery version of 'this'
    var $input = $(this),
    
    // capture the rest of the variable to allow for reuse
      alt = $input.attr('alt'),
      $form = $(this.form),
      $win = $(window);

    function remove() {
      if ($input.val() === alt && $input.hasClass(blurClass)) {
        $input.val('').removeClass(blurClass);
      }
    }

    // only apply logic if the element has the attribute
    if (alt) { 
      // on blur, set value to alt attr if text is blank
      $input.blur(function () {
        if (this.value === '') {
          $input.val(alt).addClass(blurClass);
        }
      }).focus(remove).blur(); // now change all inputs to alt
      
      // clear the pre-defined text when form is submitted
      $form.submit(remove);
      $win.unload(remove); // handles Firefox's autocomplete
    }
  });
};

})(jQuery);