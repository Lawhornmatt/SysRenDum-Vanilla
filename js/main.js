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
    $(navbar).removeClass('bg-light', 'navbar-light').addClass('bg-stormy','text-light');
  } else {
    $('.divider').each(function() {
      $(this).removeClass('bg-crisp')
        .addClass('bg-stormy');
    });
    $(navbar).removeClass('bg-stormy','text-light').addClass('bg-light', 'navbar-light');
  }
});

$("#themeSwitch").click(darkToggle);




