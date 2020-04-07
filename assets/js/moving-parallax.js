// ------------ Parallax Js -------------//
var $layer_2 = $(".layer-2"),
    $container = $("body"),
    container_w = $container.width(),
    container_h = $container.height();

$(window).on("mousemove.parallax", function(event) {
    var pos_x = event.pageX,
        pos_y = event.pageY,
        left = 0,
        top = 0;

    left = container_w / 2 - pos_x;
    top = container_h / 2 - pos_y;


    TweenMax.to($layer_2, 1, {
        css: {
            transform:
                "translateX(" + left / 24 + "px) translateY(" + top / 12 + "px)"
        },
        ease: Expo.easeOut,
        overwrite: "all"
    });

});
// ------------ Parallax Js -------------//