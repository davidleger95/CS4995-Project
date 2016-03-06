(function(){
    'use strict';
    
    $(window).on('mousemove', function(e){
        var t = $('.target').offset();
        $('cursor').css({'top': t.top+340+(e.pageY-t.top-170)/1.5, 'left': t.left+180+(e.pageX-t.left-90)/1.5});
        var c = $('cursor').offset();
        if (c.top >= t.top && 
            c.left >= t.left && 
            c.top <= t.top+340 &&
            c.left <= t.left+180){
            $('.target').css({ 'background': 'green' });
        }else{
            $('.target').css({ 'background': 'blue' });
        }
        
    });
})();