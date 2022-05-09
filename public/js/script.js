$.getJSON("lang.json", function (json) {
  //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "es");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function (index, element) {
    $(this).text(doc[lang][$(this).attr('key')]);
  });//Each

  $('.translate').click(function () {
    localStorage.setItem("lang", $(this).attr('id'));
    var lang = $(this).attr('id');
    var doc = json;
    $('.lang').each(function (index, element) {
      $(this).text(doc[lang][$(this).attr('key')]);
    }); //Each
  }); //Funcion click
});//Get json AJAX


$('.paint').click(function () {
  let colorYL;
  let colorYH;
  let colorAL;
  let colorAH;
  let colorFooter;
  let fondo;
  if ($(this).attr('id') == "normal") {
    colorYL = "#FFA319";
    colorYH = "#B36F09";
    colorAL = "#199CFF";
    colorAH = "#0066B3";
    colorFooter = "black";
    fondo = "../../public/media/fondo_rail.png";
  } else {
    colorYL = "#C597EC";
    colorYH = "#962EED";
    colorAL = "#F2CECE";
    colorAH = "#927878";
    colorFooter = "#962EED";
    fondo = "../../public/media/fondo_alternativo.png";
  }
  $('body').css('background-image', 'url(' + fondo + ')');
  $('.colorYL').each(function (index, element) {
    $(this).css('background', 'linear-gradient(to bottom, ' + colorYH + ', ' + colorYL + ' 80%, ' + colorYH + ')');
    $(this).css('border-color', colorYH);
  }); //Each
  $('.colorYH').each(function (index, element) {
    $(this).css('background-color', colorYH);
  }); //Each
  $('.colorFooter').each(function (index, element) {
    $(this).css('background-color', colorFooter);
  }); //Each
  $('.gradient').each(function (index, element) {
    $(this).css('background', 'linear-gradient(to bottom, ' + colorAH + ', ' + colorAL + ' 80%, ' + colorAH + ')');
    $(this).css('border-color', colorAH);
  }); //Each

}); //Funcion click
