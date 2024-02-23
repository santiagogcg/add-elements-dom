 // Aquí tu código


 
 
 let boton=document.getElementById("agregar");
 let listadesordenada=document.getElementById("lista");
 let lista1=document.createElement('li');
 let lista2=document.createElement('li');
 let lista3=document.createElement('li');

 listadesordenada.appendChild(lista1);
 listadesordenada.appendChild(lista2);
 listadesordenada.appendChild(lista3);



 boton.addEventListener("click",function funcion(){
   
    let edad=prompt("INGRESA EDAD");
    lista1.innerHTML=edad;
    let nombre=prompt("INGRESA NOMBRE");
    lista2.innerHTML=nombre;
    let genero=prompt("INGRESA GÉNERO");
    lista3.innerHTML=genero;
    

 });
   
