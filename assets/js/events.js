jQuery(document).ready(function(){
    jQuery('.push').click(function(){
        var el = jQuery(this);
        var timelineHome = new TimelineMax();
        // timelineHome.to(el, 1, {left:0, width: 100%, height: 100%});
        TweenLite.to(el, .5, {width:'100%', height: '100%', top: 0, left: 0, zIndex:2});
        TweenLite.to(el.find('.img-push'), .2, {opacity: .15});

        el.find('.load-archive').addClass('loading');

        setTimeout(function(){
            TweenLite.to(jQuery('.container-grid'), .2, {height: 0});
        },1500);
    });

    jQuery('.item-service').click(function(){
        var el = jQuery(this);
        el.addClass('open');

        jQuery('.item-service').each(function(){
            if(!jQuery(this).hasClass('open')){
                var elItem = jQuery(this);
                var timelineArchive = new TimelineMax();
                timelineArchive.to(elItem, .5, {autoAlpha:0, ease:Cubic.easeOut});
                timelineArchive.to(elItem, .5, {height:0, autoAlpha: 0, ease:Cubic.easeOut}, .4);
            }
        })

    })
});

jQuery(window).on('load', function() {
    jQuery('.load').fadeOut(100);
    setTimeout(function(){
        animHome();
    }, 800);
});
