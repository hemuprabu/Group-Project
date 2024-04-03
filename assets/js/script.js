//const button = document.getElementById('navigateToShelter');

 // navigation to shelter page
        // button.addEventListener('click', function() {
        //     console.log(window.location);
        //     window.location.href = window.location.href+'/shelter.html';
        // });

$(document).ready(function(){

    //carousel
    $('.carousel').carousel();

    //function for auto play carousel-slider
    setInterval(function(){
        $('.carousel').carousel('next');
    },2000);

    // sidenav
    $('.sidenav').sidenav();
    //select
    $('select').formSelect();
    //modal 
    $('.modal').modal();

});

