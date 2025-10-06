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
      //crear un input text para poder completar el deporte favorito
    var nuevoInputText= document.createElement("input");
    nuevoInputText.type = "text";

    vElemento.appendChild(nuevoInputText);
    // CREAR un parrafo de tamaño 20px que pida ingresar tu dni
    //CREAR un input number correspondientes

    var nuevoP= document.createElement ("p");
    var texto=document.createTextNode("Ingrese su numero de DNI :");
    nuevoP.appendChild(texto);
    vElemento.appendChild(nuevoP);
    var nuevoInputText=document.createElement("input");
    nuevoInputText.type = "number";
    vElemento.appendChild(nuevoInputText);
}
function Fqueryselector1() {
    var vObjetoClase = document.querySelector(".classDOM1");
    vObjetoClase.innerHTML="Texto cambiado por query selector a la clase primer indice[0]";
    
    var vObjetoId = document.querySelector("#ejmDOM1");
    vObjetoId.style.color="yellow";
    
    var vObjetoTagh2 = document.querySelector("h2");
    vObjetoTagh2.style.textAlign="center";
}
function FUsoFor1(){
    const vTextoClass = document.getElementsByClassName("classFOR1");
    var vTextoTotal="";
    //como length=4 --> ira desde 0 a 3
    for(let i=0 ; i <vTextoClass.length ; i++)
    {
        vTextoClass[i].style.border = "2px solid red";
        vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';
    }//fin de for
    var nuevoH1 = document.createElement("h1");
    var texto = document.createTextNode(vTextoTotal);
    nuevoH1.appendChild(texto);
    vTextoClass[3].appendChild(nuevoH1);
}            // fin de fuction
function FUsoForEach1(){
    const vTextoClass = document.querySelectorAll(".classFOR1");
    var vTextoTotal="";
                 //como length=4 --> ira desde 0 a 3
    vTextoClass.forEach
    (iter=>
       {
         iter.style.border = "3px double blue";
         vTextoTotal=vTextoTotal + iter.innerText+'-';
       }               //fin de for
    );
    var nuevoH1 = document.createElement("h1");
    var texto = document.createTextNode(vTextoTotal);
    nuevoH1.appendChild(texto);
    vTextoClass[3].appendChild(nuevoH1);
}            //fin de fuction
function FEliminarConcat(){
    const vTextoClass = document.getElementsByClassName("classFOR1");
    let rpta = prompt("ESTAS SEGURO DE ELIMINAR EL TEXTO CONCATENADO?(S/N)",'');
    if (rpta =="S"|| rpta=="s") //doble || signiifca o
        { let rpta2=prompt("INGRESE EL NUMERO DE FILA A ELIMINAR", '');
            if (rpta2>= 0 && rpta2<vTextoClass.length) // doble && significa y
            {
                vTextoClass[rpta2].remove(); //eliminar la class de posicion rpta2
          alert("CONCATENACION ELIMINADA");
            }
          else
          {
            alert("NUMERO DE FILA INCORRECTO")
          }
        }
      else
            { if (rpta == "N" || rpta=="n")
            { alert("NO SE ELIMINARA");
            }
           else 
            { alert("OPCION INCORRECTA-ingresa nuevamente");
            }
        }
}
function FCapturarNombre() {
    const vTexto1 = document.getElementById ("nombre");
    const vTexto2 = document.querySelectorAll ("input.datosPersonales");
    const vTexto3 = document.getElementById("clave");
    const vTexto4 = document.getElementById("apellido");
    const vTexto5 = document.getElementById("usuario");

      //usar input para clases relacionadas a cajas de texto, etc
      vTexto1.style.color="red";

      var valor1 = vTexto1.value; //value obtiene el contenido de la caja de texto nombre
      var valor2 = ""; //tipo string
      vTexto3.value=valor1; //asigna el nombre a la clave

      vTexto4.style.color="red"
      var valor4 = vTexto4.value;
      var valor5 = "";
      vTexto5.value=valor4;

      //foreach recorre todo el contenido del array de la clase datosPersonales
        vTexto2.forEach(input=>{
        valor2=valor2 + `${input.name}: ${input.value} : ${input.id} \n `; //alt + 96
        input.style.border="2px solid orange";
        //para comillas tipo texto permiten colocar variables del from y convertilas a texto mediante $
        });

        vTexto2[1].style.backgroundColor="green";
      document.getElementById('observacion').value = valor2;
      console.log('El valor del nombre es:', valor1);
}
function FValidarCiclo() 
{
  //var ciclo = document.getElementById("Segundo");
  const varciclo = document.getElementsByName("ciclo");

  for (let i = 0; 1 < varciclo.length; i++){
    if (varciclo[i].checked==true) {
      //alert("seleccionaste: + varciclo[i].value);
      document.getElementById('observacion').value = varciclo[i].value;
      return; // detener el bucle una vez que se encuentre seleccionado
    }
  }
}
function FValidarCurso() 
{
  const varcursos = document.getElementsByName("cursos");
  let seleccionados = [];

  for (let i = 0; 1 < varcursos.length; i++){
    if (varcursos[i].checked==true) {
      seleccionados.push(varcursos[i].value)
      document.getElementById('observacion').value = seleccionados.join(", ");
    }
  }
}
 ///////////////////////////////////////////////////////////
 // JAVA SCRIPT MANEJO DE EVENTOS SIN BOTONES

 document.addEventListener("DOMContentLoaded", ()=>{
      // funcionalidad para radio button
  const radios = document.querySelectorAll('input[name="ciclo"]');

radios.forEach(function(radio){
  radio.addEventListener('change',function(event){
    console.log("ciclo seleccionado:", event.target.value);
    const cantidad = event.target.value;
    document.getElementById('observacion').value = cantidad
  }); //fin de radio button addEventListener change

}); // fin de radio for each
// funcionalidad para radio button
 const checkboxes = document.querySelectorAll('input[name="cursos"]');
 const seleccionados = [];

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function(event) {
    console.log("Cursos seleccionados:", seleccionados);
    const valor = event.target.value;
    document.getElementById('observacion').value = seleccionados.join(", ")

    if (event.target.checked) {
      // si se marca, lo añadimos al arreglo
      seleccionados.push(valor);
    } else {
      // si se desmarca, lo quitamos del arreglo
      const index = seleccionados.indexOf(valor);
      if (index > -1) {
        seleccionados.splice(index, 1);
      }
     }
  });//fin del checkbox addEventListener change
});// fin de chechkbox for each

 });// fin de DOMContentLoaded
 