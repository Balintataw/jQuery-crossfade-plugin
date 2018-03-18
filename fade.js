$(document).ready(function() {
    (function($) {
        $.fn.fade = function(options){   
            var settings = $.extend({
                // These are the defaults.
                delay: 3000
            }, options );

            console.log($(this))
            var $this = this
            this.css('position', 'relative')
            this.children().css('position', 'absolute')
            this.children().not(':first').hide();
            setInterval(function(){
                $this.children(':first').fadeOut()
                .next().fadeIn()
                .end().appendTo($this);
            }, settings.delay);
        }
    }(jQuery))
})







