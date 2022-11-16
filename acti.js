

const dias = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
const numeroDia = new Date().getDay();
const nombreDia = dias[numeroDia];
console.log("Nombre de día de la semana: ", nombreDia);

function ShowSelected(){

  var cod = document.getElementById("select1");
  var selected1 = cod.options[cod.selectedIndex].text;
  console.log(selected1);
  
  var combo = document.getElementById("select");
  var selected = combo.options[combo.selectedIndex].text;
  var imagen1 = document.getElementById("imagen1");
  console.log(selected);

  var div = document.getElementById("prueba");
  if(selected1 == "Pesas" && selected == "Moderado" ){
    
    div.innerHTML = "Hoy te toca pesas moderadas";
    imagen1.src = "logo.png";

  }else if(selected == "Liviano" && selected1 == "Cardio"){
    div.innerHTML = "Hoy te toca cardio Liviano";
    console.log("Dia de cardio");
  }else{
    console.log("jfjfjf");
  }

}

