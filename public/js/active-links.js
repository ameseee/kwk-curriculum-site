$('.curriculum-links').each(function(idx, link) {
  var currentPath = window.location.pathname;
  var linkPath = $(link).attr('href');
  console.log("linkPath:", linkPath);

  var currentCamp = currentPath.split('/')[2];
  console.log("currentPath:", currentPath);

  var campPath = `/${currentCamp}/`
  console.log("campPath:", campPath);

  if (linkPath.includes(currentCamp)) {
    console.log("inside of IF, and the link is:", link);
    console.log("inside of IF, and the linkPath is:", linkPath);
    console.log("inside of IF, and the currentCamp is:", currentCamp);
    $(link).toggleClass('active-link');
  }

  if(currentPath === "/") {
    console.log("HOME:", currentPath);
    $(link).removeClass('active-link');
  }
});
