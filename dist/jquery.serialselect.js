/*!
 * jQuery serialselect
 * https://github.com/kevinmeunier/jquery-serialselect
 *
 * Copyright 2022 Meunier Kévin
 * https://www.meunierkevin.com
 *
 * Released under the MIT license
 */
(function($){
  'use strict';

  $.fn.serialselect = function(options){
    const settings = $.extend({}, $.fn.serialselect.defaults, options);

    this.each(function(){
      const $wrapper = $(this);
      const $select = $wrapper.find('select');

      // Attach change event
      $select.on('change.serialselect', function(){

        // Create or retrieve the value from the data element
        const $select = $(this);
        const $value = $select.data('value')
          ? $select.data('value')
          : (function(){
              const $term = $wrapper.find('.'+settings.termClass);
              const $value = $('<span class="'+ settings.valueClass +'" />').appendTo($term);
              $select.data('value', $value);
              return $value;
            }());

        // Update the value in the fake dropdown
        const selected = $select.find(':selected').text();
        $value.text(selected);

        // Add the title in case of cropped value
        $select.attr('title', selected);
      }).triggerHandler('change');
    });
  };

  $.fn.serialselect.defaults = {
    termClass: 'sub-term',
    valueClass: 'sub-value'
  };

})(jQuery);
