$('.curriculum-links').each(function(idx, link) {
  var currentPath = window.location.pathname;
  var linkPath = $(link).attr('href');

  var currentCamp = currentPath.split('/')[1];
  var campPath = `/${currentCamp}/`

  if (linkPath.includes(currentCamp)) {
    $(link).toggleClass('active-link');
  }

  if(currentPath === "/") {
    $(link).removeClass('active-link');
  }
});
