let relativeURL = window.location.pathname;

function checkLocation() {
  const check = localStorage.getItem('loggedIn') || 'false';

  if (relativeURL === '/kwk-curriculum-site/login/' && check === 'true') {
    showLinks();
    displayLogout();
  } else if (relativeURL === '/kwk-curriculum-site/login/' && check === 'false') {
    displayLogin();
    var loginBtn = document.querySelector("#login-submit");
    loginBtn.addEventListener('click', logIn);
  } else if (relativeURL !== '/kwk-curriculum-site/login/' && check === 'true') {
    showLinks();
  // } else if (relativeURL !== '/kwk-curriculum-site/login/' && check === 'false') {
  //   window.location.replace('/kwk-curriculum-site/login/');
  }

}

checkLocation();

document.addEventListener("DOMContentLoaded", function() {
  const logOutForm = document.querySelector('.logout-form');
  const logInForm = document.querySelector('.login-form');


  function displayLogin() {
    logOutForm.style.display = 'none';
    logInForm.style.display = 'block';
  }

  function displayLogout() {
    logOutForm.style.display = 'block';
    logInForm.style.display = 'none';
    logOutForm.addEventListener('submit', logOut);
  }

  function logIn(event) {
    event.preventDefault();

    let login = document.getElementById("login").value.trim();
    let password = document.getElementById("password").value.trim();

    if (checkLogin(login) && checkPassword(password)) {
      localStorage.setItem('loggedIn', 'true');
      window.location.replace("/kwk-curriculum-site/");
      showLinks();
    } else {
      alert("Sorry! Try again.")
    }
  }

  function showLinks() {
    var links = document.querySelectorAll(".navbar-navigation--links .curriculum-links");
    for (var i = 0; i < 2; i++) {
      links[i].style.display = 'block';
    }
  }

  function hideLinks() {
    var links = document.querySelectorAll(".navbar-navigation--links .curriculum-links");
    for (var i = 0; i < 2; i++) {
      links[i].style.display = 'none';
    }
  }

  function checkLogin(login) {
    return login === "kwk";
  }

  function checkPassword(password) {
    return password === "boss";
  }

  function logOut(event) {
    event.preventDefault();
    localStorage.setItem('loggedIn', 'false');
    window.location.replace("/kwk-curriculum-site/login/");
    hideLinks();
  }

});
