function animScroll(){
    controller = new ScrollMagic();
    var i = 0;
    jQuery( "article" ).each(function() {
      var animArticle = jQuery(this);
      var timeline = new TimelineMax();

      timeline.fromTo(jQuery(this).find('img'), 0.1,  {autoAlpha:0,scale: 1, ease:Expo.easeIn},{y:0,autoAlpha:1, scale: 1,ease:Cubic.easeOut}, (i%2 == 0) ? 0 : 0.2);
      timeline.fromTo(jQuery(this), 1,  {y:30, opacity:1, scale: 1, ease:Expo.easeIn},{y:0,autoAlpha:1, scale: 1,ease:Cubic.easeOut}, (i%2 == 0) ? 0 : 0.2);
      i++;
      var scene = new ScrollScene({triggerElement: jQuery(this), offset: -400})
            .setTween(timeline)
            .addTo(controller)
            .reverse(false)
        ;
    });
}

function animHome(){
    jQuery('.push').each(function(){
        var el = jQuery(this);
        var timelineHome = new TimelineMax();
        timelineHome.staggerFromTo(el.find('.img-push'), .8,  {opacity:0, ease:Expo.easeIn},{opacity:1, ease:Cubic.easeOut}, .8);
    })
}
