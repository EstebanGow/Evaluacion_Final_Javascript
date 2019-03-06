var operandoa;
var operandob;
var operacion;
var pantalla = document.getElementById('display');
var reset = document.getElementById('on');
var sign = document.getElementById('sign');
var raiz = document.getElementById('raiz');
var suma = document.getElementById('mas');
var resta = document.getElementById('menos');
var multiplicacion = document.getElementById('por');
var division = document.getElementById('dividido');
var igual = document.getElementById('igual');
var cero = document.getElementById('0');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var punto = document.getElementById('punto')


function init(){

  // cambios en display
  uno.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "1"
    }
  }

  dos.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "2"
    }
  }

  tres.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "3"
    }
  }

  cuatro.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "4"
    }
  }

  cinco.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "5"
    }
  }

  seis.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "6"
    }
  }

  siete.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "7"
    }
  }

  ocho.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "8"
    }
  }

  nueve.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "";
    }
    if(pantalla.textContent.length >= 8){
    }else{
      pantalla.textContent += "9"
    }
  }

  cero.onclick = function(e){
    if(pantalla.textContent == "0"){
      pantalla.textContent = "0";
    }if(pantalla.textContent.length >= 8){
    }else{
      cerofun();
    }
  }

  reset.onclick = function(e){
    resetear();
  }

  suma.onclick = function(e){
    operandoa = pantalla.textContent;
    operacion = "+";
    limpiar()
  }

  resta.onclick = function(e){
    operandoa = pantalla.textContent;
    operacion = "-";
    limpiar()
  }

  division.onclick = function(e){
    operandoa = pantalla.textContent;
    operacion = "/";
    limpiar()
  }

  multiplicacion.onclick = function(e){
    operandoa = pantalla.textContent;
    operacion = "*";
    limpiar()
  }

  punto.onclick = function(e){
    pointfun()
  }

  sign.onclick = function(e){
    signo()
  }
  raiz.onclick= function(e){
    operandoraiz = pantalla.textContent;
    opRaiz()
  }

  igual.onclick = function(e){
    operandob = pantalla.textContent;
    resultado()
  }

}

//metodos
function opRaiz(){
  var result = Math.sqrt(Number(operandoraiz));
  var salida = result.toPrecision(8);
  pantalla.textContent = salida;
}

function pointfun(){
  if ( pantalla.textContent.length == 0){
    pantalla.textContent = "0.";
}else{
  if( pantalla.textContent.indexOf(".") == -1){
    pantalla.textContent = pantalla.textContent + ".";
};
};
pantalla.textContent = pantalla.textContent;
}

function cerofun(){
  if(pantalla.textContent > "0"){
    pantalla.textContent += "0";
  }
}
function limpiar(){
  pantalla.textContent = "";
}

function signo(){
  pantalla.textContent *= -1;
}

function quitacero(){
  var x = pantalla.textContent;
  if (x == "0") {
    x = "0"
  }else if (x > "0") {
    x;
  }
}

function resetear(){
  pantalla.textContent = "0";
  operandoa = "0";
  operandob = "0";
  operacion = "";
}

function resultado(){
  var res = 0;
  switch (operacion) {
    case "+":
    res = parseFloat(operandoa) + parseFloat(operandob);
    break;
    case "-":
    res = parseFloat(operandoa) - parseFloat(operandob);
    break;
    case "*":
    res = parseFloat(operandoa) * parseFloat(operandob);
    break;
    case "/":
    res = parseFloat(operandoa) / parseFloat(operandob);
    break;
  }
  resetear();
  if (res>99999999) {
    res = res.toExponential(3);
  }
  pantalla.textContent = res;
}





/*cambio de tamaño teclas, intente usando selectores
globales y no me dio de ninguna forma por eso uso este metodo*/
// 0
cero.addEventListener("mousedown", function(){
  cero.setAttribute("style","transform:scale(0.95,0.95)")
})
cero.addEventListener("mouseout", function(){
  cero.setAttribute("style","transform:scale(1,1)")
})
//1
uno.addEventListener("mousedown", function(){
  uno.setAttribute("style","transform:scale(0.95,0.95)")
})
uno.addEventListener("mouseout", function(){
  uno.setAttribute("style","transform:scale(1,1)")
})
//2
dos.addEventListener("mousedown", function(){
  dos.setAttribute("style","transform:scale(0.95,0.95)")
})
dos.addEventListener("mouseout", function(){
  dos.setAttribute("style","transform:scale(1,1)")
})
//3
tres.addEventListener("mousedown", function(){
  tres.setAttribute("style","transform:scale(0.95,0.95)")
})
tres.addEventListener("mouseout", function(){
  tres.setAttribute("style","transform:scale(1,1)")
})
//4
cuatro.addEventListener("mousedown", function(){
  cuatro.setAttribute("style","transform:scale(0.95,0.95)")
})
cuatro.addEventListener("mouseout", function(){
  cuatro.setAttribute("style","transform:scale(1,1)")
})
//5
cinco.addEventListener("mousedown", function(){
  cinco.setAttribute("style","transform:scale(0.95,0.95)")
})
cinco.addEventListener("mouseout", function(){
  cinco.setAttribute("style","transform:scale(1,1)")
})
//6
seis.addEventListener("mousedown", function(){
  seis.setAttribute("style","transform:scale(0.95,0.95)")
})
seis.addEventListener("mouseout", function(){
  seis.setAttribute("style","transform:scale(1,1)")
})
//7
siete.addEventListener("mousedown", function(){
  siete.setAttribute("style","transform:scale(0.95,0.95)")
})
siete.addEventListener("mouseout", function(){
  siete.setAttribute("style","transform:scale(1,1)")
})
//8
ocho.addEventListener("mousedown", function(){
  ocho.setAttribute("style","transform:scale(0.95,0.95)")
})
ocho.addEventListener("mouseout", function(){
  ocho.setAttribute("style","transform:scale(1,1)")
})
//9
nueve.addEventListener("mousedown", function(){
  nueve.setAttribute("style","transform:scale(0.95,0.95)")
})
nueve.addEventListener("mouseout", function(){
  nueve.setAttribute("style","transform:scale(1,1)")
})
//punto
punto.addEventListener("mousedown", function(){
  punto.setAttribute("style","transform:scale(0.95,0.95)")
})
punto.addEventListener("mouseout", function(){
  punto.setAttribute("style","transform:scale(1,1)")
})
//igual
igual.addEventListener("mousedown", function(){
  igual.setAttribute("style","transform:scale(0.95,0.95)")
})
igual.addEventListener("mouseout", function(){
  igual.setAttribute("style","transform:scale(1,1)")
})
//resetear
reset.addEventListener("mousedown", function(){
  reset.setAttribute("style","transform:scale(0.95,0.95)")
})
reset.addEventListener("mouseout", function(){
  reset.setAttribute("style","transform:scale(1,1)")
})
//multiplicacion
multiplicacion.addEventListener("mousedown", function(){
  multiplicacion.setAttribute("style","transform:scale(0.95,0.95)")
})
multiplicacion.addEventListener("mouseout", function(){
  multiplicacion.setAttribute("style","transform:scale(1,1)")
})
//suma
suma.addEventListener("mousedown", function(){
  suma.setAttribute("style","transform:scale(0.95,0.95)")
})
suma.addEventListener("mouseout", function(){
  suma.setAttribute("style","transform:scale(1,1)")
})
//Resta
resta.addEventListener("mousedown", function(){
  resta.setAttribute("style","transform:scale(0.95,0.95)")
})
resta.addEventListener("mouseout", function(){
  resta.setAttribute("style","transform:scale(1,1)")
})
//division
division.addEventListener("mousedown", function(){
  division.setAttribute("style","transform:scale(0.95,0.95)")
})
division.addEventListener("mouseout", function(){
  division.setAttribute("style","transform:scale(1,1)")
})
//sign
sign.addEventListener("mousedown", function(){
  sign.setAttribute("style","transform:scale(0.95,0.95)")
})
sign.addEventListener("mouseout", function(){
  sign.setAttribute("style","transform:scale(1,1)")
})
//raiz
raiz.addEventListener("mousedown", function(){
  raiz.setAttribute("style","transform:scale(0.95,0.95)")
})
raiz.addEventListener("mouseout", function(){
  raiz.setAttribute("style","transform:scale(1,1)")
})

init()
