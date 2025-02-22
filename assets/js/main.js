/* Header */
const btnToggle = document.querySelector('.btn__toggle'),
menu = document.querySelector('.menu');

btnToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("active");
    header.classList.toggle('border');
});

window.onscroll = function() {
    scroll = document.documentElement.scrollTop;

    header = document.getElementById('header');

    if(scroll > 20) {
        header.classList.add('header_mod');
    } else {
        header.classList.remove('header_mod');
    }
};

/* Features */
document.getElementById("verMasBtn").addEventListener("click", function() {
    let servicios = document.querySelectorAll(".feature");
    servicios.forEach(servicio => servicio.classList.toggle("visible"));

    if (this.innerText === "Ver más servicios") {
        this.innerText = "Ver menos";
    } else {
        this.innerText = "Ver más servicios";
    }
});

/* FAQs */
var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var pannel = this.nextElementSibling;

          if (pannel.style.display === "block") {
            pannel.style.display = "none";
          } else {
            pannel.style.display = "block";
          }
        });
      }