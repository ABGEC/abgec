/*--------------------------------------------------------------
# Navbar && ($(window).width() > 768)
--------------------------------------------------------------*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".navbar").addClass("navbar-scroll");
      $(".logos").addClass("logos-scroll");
      document.getElementById("navbar-brand-abgec").style.display = "block";
      if ($(window).width() > 768)
        document.getElementById("navbar-brand-gecb").style.display = "block";
    } else {
      $(".navbar").removeClass("navbar-scroll");
      $(".logos").removeClass("logos-scroll");
      document.getElementById("navbar-brand-abgec").style.display = "none";
      document.getElementById("navbar-brand-gecb").style.display = "none";
    }
  });
});

//nav bar
// Navigation active state on scroll
var nav_sections = $("section");
var main_nav = $(".navbar-nav");

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find("li").removeClass("active");
      }
      main_nav
        .find('a[href="#' + $(this).attr("id") + '"]')
        .parent("li")
        .addClass("active");
    }
    if (cur_pos < 300) {
      $(".nav-menu ul:first li:first").addClass("active");
    }
  });
});

function openGallery(id) {
  closeAll();
  const gallery = document.getElementById('gallery-' + id);
  const card = document.getElementById('card-' + id);
  gallery.classList.add('Gallery--active');
  card.classList.add('Card--active');
}
