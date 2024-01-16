let menuVisible = false;



function mostrarOcultarMenu () {
  if(menuVisible){
    document.getElementById("nav").classList="";
    menuVisible = false;
  }else{
    document.getElementById("nav").classList="responsive";
    menuVisible = true;
  }
}



function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.querySelectorAll('.skills .progreso');
    habilidades.forEach((habilidad, index) => {
      switch (index) {
        case 0:
          habilidad.classList.add("javascript");
          break;
        case 1:
          habilidad.classList.add("htmlcss");
          break;
        case 2:
          habilidad.classList.add("photoshop");
          break;
        case 3:
          habilidad.classList.add("wordpress");
          break;
        case 4:
          habilidad.classList.add("PowerBI");
          break;
        case 5:
          habilidad.classList.add("comunicación");
          break;
        case 6:
          habilidad.classList.add("trabajo");
          break;
        case 7:
          habilidad.classList.add("creatividad");
          break;
        case 8:
          habilidad.classList.add("dedicacion");
          break;
        case 9:
          habilidad.classList.add("puntualidad");
          break;
        default:
          break;
      }
    });
  }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
}