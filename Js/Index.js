
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