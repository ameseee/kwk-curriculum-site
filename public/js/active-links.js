$('.curriculum-links').each(function(idx, link) {
  var currentPath = window.location.pathname;
  var linkPath = $(link).attr('href');

  var currentCamp = currentPath.split('/')[2];
  var campPath = `/${currentCamp}/`

  if (linkPath.includes(currentCamp)) {
    $(link).toggleClass('active-link');
  }

  if(currentPath === "/kwk-curriculum-site/") {
    $('.sidebar-navigation--links a').removeClass('active-link');
  }
});
