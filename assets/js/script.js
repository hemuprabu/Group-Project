
// carousel
// var instance = M.Carousel.init({
//     fullWidth: true
//   });
$(document).ready(function(){
    $('.carousel').carousel();

    //function for auto play carousel-slider
    setInterval(function(){
        $('.carousel').carousel('next');
    },2000);

    $('.sidenav').sidenav();

    $('select').formSelect();
});