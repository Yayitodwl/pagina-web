const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});


const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
  producto.addEventListener('mouseover', () => {
    const descripcion = producto.querySelector('p');
    descripcion.style.display = 'block';
  });

  producto.addEventListener('mouseout', () => {
    const descripcion = producto.querySelector('p');
    descripcion.style.display = 'none';
  });
});

let formulario = document.querySelector('form');
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  let datos = new FormData(formulario);
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      alert("Registro exitoso");
      window.location.href = "Index1.html";
    }
  };
  xmlhttp.open("POST", "registro.php", true);
  xmlhttp.send(datos);
});
