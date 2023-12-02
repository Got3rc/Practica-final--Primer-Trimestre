/* APARTADO PARA EL BOTON VERSIÓN MOVIL */
const botonCheck = document.querySelector("#btn-nav")
const lateral = document.querySelector(".lateral")

botonCheck.addEventListener("change",(element)=>{

    if(lateral.classList.contains("ocultar")){
        lateral.classList.remove("ocultar")
    }else{
        lateral.classList.add("ocultar")
    }

})