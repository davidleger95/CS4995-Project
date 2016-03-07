(function(){
    'use strict';
    
    $(window).on('mousemove', function(e){
        var t = $('.target').offset();
        $('cursor').css({'top': e.pageY/*t.top+340+(e.pageY-t.top-170)/1.5*/, 'left': t.left+180+(e.pageX-t.left-90)/1.5});
        var c = $('cursor').offset();
        $(document).one('click', function(){
        if (c.top >= t.top && 
            c.left >= t.left && 
            c.top <= t.top+340 &&
            c.left <= t.left+180){
            $('.target').css({ 'background': 'white' });
            
                $('.target').removeClass('target');
                var child = Math.floor((Math.random() * 2) + 1);
                console.log(child);
                $('.box-group:nth-child('+child+')').addClass('target');
            
        }else{
            $('.target').css({ 'background': 'red' });
        }
        });
        
        
    });
})();