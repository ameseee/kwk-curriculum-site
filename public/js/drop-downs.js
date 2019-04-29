$('.web-app-drop-down').on('mouseover', function() {
  $('.web-app-options').css('display', 'inline-block');
  $('.mobile-app-options').css('display', 'none');
});

$('.mobile-app-drop-down').on('mouseover', function() {
  $('.mobile-app-options').css('display', 'inline-block');
  $('.web-app-options').css('display', 'none');
});

$('.content').on('mouseover', function() {
  $('.mobile-app-options').css('display', 'none');
  $('.web-app-options').css('display', 'none');
});
