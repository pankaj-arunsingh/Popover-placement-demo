/* This js is used to provide additional placement options to popovers like top-right, top-left, bottom-right, bottom-left
 */ 
(function($) {
  "use strict";  

  // save the original popover object
  var _super = $.fn.popover;

  // create a new constructor
  var Popover = function(element, options) {
    _super.Constructor.apply(this, arguments);
  };

  Popover.prototype = $.extend({}, _super.Constructor.prototype, {
    constructor: Popover,
    _super: function() {
      var args = $.makeArray(arguments);
      _super.Constructor.prototype[args.shift()].apply(this, args);
    },
    // to show the popover and initialize it
    show: function() {
      var $tip, inside, pos, actualWidth, actualHeight, placement, tp, e = $.Event('show');
      
      if (this.hasContent && this.enabled) {
        this.$element.trigger(e);
        $tip = this.tip();
        this.setContent();
      
        if (this.options.animation) {
          $tip.addClass('fade');
        }
      
        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement;
      
        inside = /in/.test(placement);

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.$element : document.body);
      
        pos = this.getPosition(inside);

        actualWidth = $tip[0].offsetWidth;   
        actualHeight = $tip[0].offsetHeight;
      
        switch (inside ? placement.split(' ')[1] : placement) {
          case 'south':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2};
            break;
          case 'north':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2};
            break;
          case 'west':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth};
            break;
          case 'east':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width};
            break;

          // Additional top placements which can be considered as north-west and north-east as well
         case 'north-west':
            tp = {top: pos.top - actualHeight,  left: pos.left + pos.width* 1/4- (actualWidth)};
            break;
          case 'north-east':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width};
            break;

          // extend placements (bottom)
          case 'south-west':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width *1/4 - (actualWidth)};
            break;
          case 'south-east':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width};
            break;
         

        }
      
        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in');

        this.$element.trigger('shown');
      }
    }
  });

  $.fn.popover = $.extend(function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('bs.popover')
        , options = typeof option == 'object' && option;
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)));
      if (typeof option == 'string') data[option]();
    });
  }, _super);

})(jQuery);
