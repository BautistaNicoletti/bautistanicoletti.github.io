document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    //NUMERO DE WHATSAPP VERIFICADO:
    let telefono = "+5492934526835"; 

    let cliente = document.querySelector("#cliente").value;
    let servicio = document.querySelector("#servicios").value;
    let enlace = document.querySelector("#enlace").value;
    let urgencia = document.querySelector("#urgencia").value;
    let resp = document.querySelector("#respuesta");

    resp.classList.remove("fail");
    resp.classList.remove("send");

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
    *_Plantilla del cliente_*%0A
    *Nombre*%0A
    ${cliente}%0A
    *Plan de servicio*%0A
    ${servicio}%0A
    *Plazo de tiempo*%0A
    ${urgencia}%0A
    *Enlace*%0A
    ${enlace}%0A`;

    if (servicio === "" || cliente === "") {
        resp.classList.add("fail");
        resp.innerHTML = `Faltan algunos datos, ${cliente}`;
        return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu cita, ${cliente}`;

    window.open(url);
});