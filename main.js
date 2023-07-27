const color= document.querySelector("#color");



// eventos 
color.addEventListener("input", () => {
    console.log(color.value)
    salida.innerHTML = color.value;
    salida.style.background = color.value;
    salida.style.color = "#FFF"
});

