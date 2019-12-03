
function trocaClasse() {

    if (document.getElementById("body").classList.contains('volks')) {
        document.getElementById('body').classList.remove('volks');
    }
    else {
        document.getElementById('body').classList.add('volks');
    }

    window.onload = function () {
        document.getElementsByClassName("logo__image").addEventListener('click', changeClass);
    }
}

function more() {
    $('.primeiro').css('display', 'none');
    //$('.primeiro').css('display', 'none');
    //$('.primeiro').css('transition', 'height .3s ease');

    $('.segundo').css('display', 'flex');
}

function back() {
    $('.primeiro').css('display', 'flex');
    $('.segundo').css('display', 'none');
}

/*$('.jobs').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });*/

/*$(document).ready(function () {
    document.getElementsByClassName('jobs')[0].slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});*/