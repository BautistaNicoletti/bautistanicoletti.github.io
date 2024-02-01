/* Alert */

Swal.fire({
    title: "Bienvenido",
    text: "Este sitio web aún esta en desarrollo",
    icon: "info",
    iconColor: "#4169E1",
    confirmButtonColor: "#4169E1"
})

/* Header */

const btnToggle = document.querySelector('.btn__toggle'),
menu = document.querySelector('.menu');

btnToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("active");
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

/* Btn Dark */

const btnDark = document.querySelector('#btn-dark'),
btnDarkL = document.querySelector('#btn-darkL');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDark.classList.toggle('active');
});
btnDarkL.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDarkL.classList.toggle('active');
})

/* Home */

const typed = new Typed('.typed', {
    strings: [
        'Web Designer',
        'Creative Developer',
        'Freelancer'
    ],
    stringsElement: '#cadenas-texto',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	smartBackspace: true,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html',
});

const about = document.getElementById('aboutText'),
profileImg = document.getElementById('profile-img'),
proyect = document.getElementById('proyect');

about.addEventListener("click", () => {
    Swal.fire({
        template: '#about-text',
        imageUrl: "",
        imageWidth: 200,
        imageHeight: 200,
        padding: "20px 40px",
        width: "600px",
        confirmButtonText: "Ok",
        icon: "",
        iconColor: "#4169E1",
        confirmButtonColor: "#4169E1"
    })
});

profileImg.addEventListener("click", () => {
    Swal.fire({
        title: "",
        text: "Hola!👋 Pasa algo?",
        padding: "20px 0",
        width: "300px",
        confirmButtonText: "No, nada",
        icon: "",
        backdrop: `
        rgba(0,0,123,0.4)
        url("../assets/images/nyan-cat/nyan-cat.gif")
        left top
        no-repeat`,
        iconColor: "#4169E1",
        confirmButtonColor: "#4169E1"
    })
})
