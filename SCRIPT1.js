let varGlobal1="Esta es una variable global";
window.vTexto1="";


function FCambioColor() {
    vTexto1=document.getElementById("ejmDOM1");

    vTexto1.textContent="Texto cambiado por funcion FCambioColor()";
    vTexto1.style.color= "red";
    vTexto1.style.fontSize="30px";
    vTexto1.style.backgroundColor="aquamarine";
    vTexto1.style.fontFamily="Georgia";
    vTexto1.insertAdjacentHTML("afterend", "texto adicional <br><br>");
    console.log("texto por consola");
}

function FCambioClase1() {
    let vTexto2=document.getElementsByClassName("classDOM1");

    vTexto2[1].innerHTML="Elemento [1] del arreglo de clase classDOM1";
    vTexto2[1].style.fontFamily="sans-serif";
    vTexto2[1].style.color="beigue";
    console.log("Tamaño del array=",vTexto2.length);

    vTexto2[0].innerText="Elemento [0] del arreglo" + 
                         "de clase classDOM1 ; concatetado con global:" + varGlobal1 +
                         "\n y su tipo de variable es :" + typeof(varGlobal1);
    vTexto2[2].innerHTML="Tamaño del arraya" + vTexto2.length + 
                         "\n y su tipo de variable es :" + typeof(vTexto2);
}
function FCambioTag1() {
    let vTexto3=document.getElementsByTagName("h2");
    vTexto3 [18].innerHTML="Elemento h2 cambiado por TagDOM1";
    vTexto3 [18].style.color="magenta";
    varGlobal1="variable global modificada";

    vTexto3[18].innerHTML= `Tipo de variable de la varGlobal1 es: ${typeof(varGlobal1)}`;
} //tipo de variable es el typeof
function FCrear1(){
    let vlista= document.getElementById("ejmDOM1");
    vlista.style.backgroundColor="white";
    vlista.innerHTML="<ul align='left'>"+
                        "<li>uso de document.write</li>" +
                        "<li>El document.write es una nfuncion desactualizada</li>" +
                        "<li>Es mejor ponerlo dentro del html para que pueda funcionar</li>" +
                        "</ul>" ;
}
function FAgregarTextoPermanente(){
    let vTexto4="<br> <h1> Texto agregado con concatenación permanente </h1>";
    vTexto1.innerHTML=vTexto1.innerHTML+vTexto4;
    console.log (vTexto1.textContent);
}
function FCrearElemento() {
    var vElemento = document.getElementById("complementario1");

    var nuevoH3= document.createElement ("h3");
    var texto=document.createTextNode("Deporte favorito:");
    nuevoH3.appendChild(texto);
    vElemento.appendChild(nuevoH3);

    var nuevoInputText= document.createElement("input");
    nuevoInputText.type = "text";
    vElemento.appendChild(nuevoInputText);

}
