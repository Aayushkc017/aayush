window.addEventListener("load", function () {
    document.querySelector('.preloader')?.remove();
  });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('show');
  });