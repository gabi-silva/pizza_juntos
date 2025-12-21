document.addEventListener("DOMContentLoaded", function() {
  fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el navbar:', error));
});


  document.addEventListener("DOMContentLoaded", () => {
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });
  });


  AOS.init({
  duration: 1200, // duración de todas las animaciones
  once: true      // animar solo una vez
});
