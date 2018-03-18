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

// html example:
//
// <div class="container">
//     <img src="">
//     <img src="">
//     <img src="">    
// </div>
//
// usage:
//
// $('.container').fade()
//
// set delay time:
//
// numberInMilliseconds = 7000
// $('.container').fade({delay: numberInMilliseconds})






