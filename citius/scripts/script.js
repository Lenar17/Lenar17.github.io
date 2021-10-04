$(document).ready(function() {
    $('#fullpage').fullpage({
        afterRender: function(){
            $("#citius-logo").addClass("animate__animated animate__fadeIn animate__delay-500s")
        },
        onLeave: function(origin, destination, direction){
            console.log({origin, destination, direction})
            if(direction === 'down') {
                $(".second__p").addClass("animate__animated animate__fadeIn animate__delay-500ms animate__slower")
                $("#logo2").addClass("animate__animated animate__fadeIn animate__delay-1s animate__slower")
                $("#icon-link1").addClass("animate__animated animate__fadeIn animate__delay-1s animate__slower")
                $("#icon-link2").addClass("animate__animated animate__fadeIn animate__delay-1s animate__slower")
            }
        },
        scrollingSpeed: 1000,
    });
});