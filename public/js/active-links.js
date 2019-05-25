$('.curriculum-links').each(function(idx, link) {
  var currentPath = window.location.pathname;
  console.log(currentPath);
  var linkPath = $(link).attr('href');

  var currentCamp = currentPath.split('/')[2];
  var campPath = `/${currentCamp}/`

  if (linkPath.includes(currentCamp)) {
    $(link).toggleClass('active-link');
  }

  if(currentPath === "/") {
    $('.sidebar-navigation--links a').removeClass('active-link');
  }
});
