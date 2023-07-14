// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function darkToggle() {
  let element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "dark" ? "light" : "dark";
}

$(themeSwitch).click(function() {
  if ($('.divider').hasClass('bg-stormy')) {
    $('.divider').each(function() {
      $(this).removeClass('bg-stormy')
        .addClass('bg-crisp');
    });
  } else {
    $('.divider').each(function() {
      $(this).removeClass('bg-crisp')
        .addClass('bg-stormy');
    });
  }
});

$("#themeSwitch").click(darkToggle);




