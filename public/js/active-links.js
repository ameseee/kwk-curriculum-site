$('.curriculum-links').each(function(idx, link) {
  var currentPath = window.location.pathname;
  var linkPath = $(link).attr('href');

  if (linkPath.includes(currentPath)) {
    $(link).toggleClass('active-link');
  }

  if(currentPath === "/") {
    $(link).removeClass('active-link');
  }
});
