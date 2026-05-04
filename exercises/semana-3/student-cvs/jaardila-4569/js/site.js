//crea una animación de desplazamiento suave cuando se hace clic en un enlace de ancla
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//El plugin Typed.js crea un efecto de mecanografía en un elemento HTML específico (#typed).
function newTyped() { } $(function () {
  $("#typed").typed({
    // Change to edit type effect
    strings: ["Jorge Alexander", "Ardila Restrepo"],

    typeSpeed: 90, backDelay: 700, contentType: "html", loop: !0, resetCallback: function () { newTyped() }
  }), $(".reset").click(function () { $("#typed").typed("reset") })
});