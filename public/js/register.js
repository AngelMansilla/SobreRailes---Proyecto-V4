let tarjeta = $('#tarjeta');

tarjeta.change(function () {
  if (tarjeta.prop('checked')) {
    $('.tarjeta').each(function () {
      $(this).css('display', 'block');
    });
  } else {
    $('.tarjeta').each(function () {
      $(this).css('display', 'none');
    });
  }
}
);

let telefono = $('#telefono');
let telfHelp = $('#telfHelp');
telefono.change(function () {
  if (/^(6|7){1}([0-9]){8}$/.test(telefono.val())) {
    telefono.html('match');
    telefono.css('border', '');
    telfHelp.css('display', 'none');
    sumarBar();
  } else {
    telefono.html('mismatch');
    telefono.css('border', 'solid 2px red');
    telfHelp.css('display', 'block');
    restarBar();
  }
})
let passHelp = $('#passHelp');
let pass = $('#Password');
let pass2 = $('#Password2');
let sumPass = false;
pass2.change(function () {
  if (pass.val() !== pass2.val()) {
    pass2.html('mismatch');
    pass2.css('border', 'solid 2px red');
    passHelp.css('display', 'block');
    restarBar();
  } else {
    pass2.html('match');
    pass2.css('border', '');
    passHelp.css('display', 'none');
    sumarBar();
  }
})

pass.change(function () {
  if (pass.val() !== pass2.val()) {
    pass2.html('mismatch');
    pass2.css('border', 'solid 2px red');
    passHelp.css('display', 'block');
  } else {
    pass2.html('match');
    pass2.css('border', '');
    passHelp.css('display', 'none');
  }
  if (!sumPass && pass.val().length > 0) {
    sumarBar();
    sumPass = true;
  } else {
    if (pass.val().length == 0) {
      restarBar();
      sumPass = false;
    }
  }
})

let cvv = $('#cvv');

cvv.change(function () {
  if (!(cvv.val()) || (/^[0-9]{3}$/).test(cvv.val())) {
    cvv.html('match');
    cvv.css('border', '');
  } else {
    cvv.html('mismatch');
    cvv.css('border', 'solid 2px red');
  }
})

let nombre = $('#Nombre');
let sumNombre = false;
nombre.change(function () {
  if (!sumNombre && nombre.val().length > 0) {
    sumarBar();
    sumNombre = true;
  } else {
    if (nombre.val().length == 0) {
      restarBar();
      sumNombre = false;
    }
  }
})

let email = $('#Email');
let sumEmail = false;
email.change(function () {
  if (!sumEmail && email.val().length > 0) {
    sumarBar();
    sumEmail = true;
  } else {
    if (email.val().length == 0) {
      restarBar();
      sumEmail = false;
    }
  }
})



let bar = $('#myBar');
function sumarBar() {
  width = $('#labelBar').text();
  width = width.substring(0, width.length - 1) * 1;
  if (width < 100) {
    let widthTotal = (width + 20);
    let id = setInterval(frame, 20);
    $('#labelBar').empty();
    function frame() {
      if (width >= widthTotal) {
        clearInterval(id);
      } else {
        width++;
        bar.css('width', width + '%');
        $('#labelBar').html(width * 1 + '%');
      }
    }
  }
}
function restarBar() {
  width = $('#labelBar').text();
  width = width.substring(0, width.length - 1) * 1;
  if (width > 0) {
    let widthTotal = (width - 20);
    let id = setInterval(frame, 20);
    function frame() {
      if (width <= widthTotal) {
        clearInterval(id);
      } else {
        width--;
        bar.css('width', width + '%');
        $('#labelBar').html(width * 1 + '%');
      }
    }
  }
}

