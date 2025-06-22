$(document).ready(function () {
  // Toggle menu mobile
  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  // Evento de scroll para destacar seção ativa e aplicar sombra no header
  $(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop();

    // Sombra no header ao rolar
    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '0px 2px 5px rgba(0, 0, 0, 0.1)');
    }

    // Detecta qual seção está ativa
    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navItems.removeClass('active');
        navItems.eq(i).addClass('active');
      }
    });
  });

  // Controle de active para nav desktop
  $('#nav_list .nav-item').on('click', function (e) {
    e.preventDefault();
    $('#nav_list .nav-item').removeClass('active');
    $(this).addClass('active');
  });

  // Controle de active para nav mobile
  $('#mobile_nav_list .nav-item').on('click', function (e) {
    e.preventDefault();
    $('#mobile_nav_list .nav-item').removeClass('active');
    $(this).addClass('active');

    // Fecha o menu mobile após clicar em um item
    $('#mobile_menu').removeClass('active');
    $('#mobile_btn').find('i').removeClass('fa-x');
  });
});
