$('.web-app-drop-down').on('mouseover', function() {
  $('.web-app-options').css('display', 'inline-block');
  $('.mobile-app-options').css('display', 'none');
});

$('.mobile-app-drop-down').on('mouseover', function() {
  $('.mobile-app-options').css('display', 'inline-block');
  $('.web-app-options').css('display', 'none');
});

$('h1').on('mouseover', function() {
  $('.mobile-app-options').css('display', 'none');
  $('.web-app-options').css('display', 'none');
});

$('img').on('mouseover', function() {
  $('.mobile-app-options').css('display', 'none');
  $('.web-app-options').css('display', 'none');
});

$('h2').on('mouseover', function() {
  $('.mobile-app-options').css('display', 'none');
  $('.web-app-options').css('display', 'none');
});
