console.warn("Usuarios");
var nombree ;
function crear(e){
    event.preventDefault();

    var name = document.getElementById("nombre").value;
    var Lastname = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
    var email = document.getElementById("correo").value;
    var user = document.getElementById("username1").value;
    var pass = document.getElementById("password2").value;

    var usuarios = {
        nombre1: name,
        apellido1: Lastname,
        fecha1: fecha,
        correo1: email,
        user1: user,
        pass1: pass
    };

    nombree = usuarios.nombre1;
    var json = JSON.stringify(usuarios);
    localStorage.setItem(user, json);
    console.log("Usuario creado");
    window.location.href = "./iniciosesion.html";
}




function inicio(e){
    event.preventDefault();

    var Usuario = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(Usuario);
    var datos = JSON.parse(user);
    console.log(datos);

    if(user == null){
        console.log("Ingrese bien el usuario");
    }else if (Usuario == datos.user1 && password == datos.pass1){
            window.location.href = "./actividades.html";
            localStorage.usuarios = Usuario;
            console.log("Bienvenido");
        
    }else{
        console.log("Ingrese bien sus datos");
        window.alert("Ingrese corretamente sus datos");
    }
}

function ShowSelected(){
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
    /* const nombreDia = "sabado"; */
    console.log("Nombre de día de la semana: ", nombreDia);
  
    var cod = document.getElementById("select1");
    var selected1 = cod.options[cod.selectedIndex].text;
    console.log(selected1);
    
    var combo = document.getElementById("select");
    var selected = combo.options[combo.selectedIndex].text;
    console.log(selected);
  
    var div = document.getElementById("prueba");
    var p = document.getElementById("cardio");
    
    let imagenesPierna = [
        {src: "./p1.jpg", width: "220", height: "220" },
        {src: "./p2.jpg", width: "220", height: "220"},
        {src: "./p3.jpg", width: "220", height: "220"},
        {src: "./p4.jpg", width: "220", height: "220"},
        {src: "./p5.jpg", width: "220", height: "220"},
        {src: "./p6.jpg", width: "220", height: "220"},
        {src: "./p7.jpg", width: "220", height: "220"}
    ];

    let bufferImagenes = [];

    for (const e of imagenesPierna) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes.push(imagen);
    }
 
    let imagenesBiceps = [
        {src: "./b1.jpg", width: "220", height: "220" },
        {src: "./b2.jpg", width: "220", height: "220"},
        {src: "./b3.jpg", width: "220", height: "220"},
        {src: "./b4.jpg", width: "220", height: "220"},
        {src: "./b5.jpg", width: "220", height: "220"},
        {src: "./b6.jpg", width: "220", height: "220"},
        {src: "./b7.jpg", width: "220", height: "220"}
    ];
    let bufferImagenes2 = [];

    for (const e of imagenesBiceps) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes2.push(imagen);
    }

    let imagenesPecho = [
        {src: "./c1.jpg", width: "220", height: "220" },
        {src: "./c2.jpg", width: "220", height: "220"},
        {src: "./c3.jpg", width: "220", height: "220"},
        {src: "./c4.jpg", width: "220", height: "220"},
        {src: "./c5.jpg", width: "220", height: "220"},
        {src: "./c6.jpg", width: "220", height: "220"},
        {src: "./c7.jpg", width: "220", height: "220"}
    ];
    let bufferImagenes3 = [];

    for (const e of imagenesPecho) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes3.push(imagen);
    }

   
    let imagenesTriceps = [
        {src: "./t1.jpg", width: "220", height: "220" },
        {src: "./t2.jpg", width: "220", height: "220"},
        {src: "./t3.jpg", width: "220", height: "220"},
        {src: "./t4.jpg", width: "220", height: "220"},
        {src: "./t5.jpg", width: "220", height: "220"},
        {src: "./t6.jpg", width: "220", height: "220"}
    ];
    let bufferImagenes4 = [];

    for (const e of imagenesTriceps) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes4.push(imagen);
    }

   
    let imagenesAbdomen = [
        {src: "./s1.jpg", width: "220", height: "220" },
        {src: "./s2.jpg", width: "220", height: "220"},
        {src: "./s3.jpg", width: "220", height: "220"},
        {src: "./s4.jpg", width: "220", height: "220"},
        {src: "./s5.jpg", width: "220", height: "220"},
        {src: "./s6.jpg", width: "220", height: "220"},
        {src: "./s7.jpg", width: "220", height: "220"}
    ];
    let bufferImagenes5 = [];

    for (const e of imagenesAbdomen) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes5.push(imagen);
    }

   
    let imagenesEspalda = [
        {src: "./ch1.jpg", width: "220", height: "220" },
        {src: "./ch2.jpg", width: "220", height: "220"},
        {src: "./ch3.jpg", width: "220", height: "220"},
        {src: "./ch4.jpg", width: "220", height: "220"},
        {src: "./ch5.jpg", width: "220", height: "220"},
        {src: "./ch6.jpg", width: "220", height: "220"}
    ];
    let bufferImagenes6 = [];

    for (const e of imagenesEspalda) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes6.push(imagen);
    }

   
    if(selected1 == "Pesas" && selected == "Moderado" && nombreDia == "lunes"){
        div.innerHTML = "Pesas Moderadas para piernas";
        for(let i = 0; i < imagenesPierna.length-2; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesPierna.length);
            let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(selected1 == "Pesas" && selected == "Liviano" && nombreDia == "lunes"){
        div.innerHTML = "Pesas livianas para piernas";
        for(let i = 0; i < imagenesPierna.length-4; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesPierna.length);
            let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }

    }else if(selected1 == "Pesas" && selected == "Intenso" && nombreDia == "lunes"){
        div.innerHTML = "Pesas intensas para piernas";
        for(let i = 0; i <= imagenesPierna.length; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesPierna.length);
            let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
        
    }
    else if(nombreDia == "lunes" && selected == "Liviano" && selected1 == "Cardio"){
        div.innerHTML = "Hoy te toca cardio Liviano con bicicleta";
        p.innerHTML = "20-30 minutos";
        console.log("Dia de cardio");

        const image = document.createElement("img");
        image.src  = "./bici.gif";
        image.width = "300";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "lunes" && selected == "Intenso" && selected1 == "Cardio"){
        div.innerHTML = "Hoy te toca cardio Intenso con bicicleta ";
        p.innerHTML = "50 min - 1 hora";
        const image = document.createElement("img");
        image.src  = "./bici.gif";
        image.width = "300";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "lunes" && selected == "Moderado" && selected1 == "Cardio"){  //termina lunes
        div.innerHTML = "Hoy te toca cardio Moderado con bicicleta";
        p.innerHTML = "30- 50 minutos";
        const image = document.createElement("img");
        image.src  = "./bici.gif";
        image.width = "300";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(selected1 == "Pesas" && selected == "Moderado" && nombreDia == "martes"){
        div.innerHTML = "Pesas moderas para Biceps";
        for(let i = 0; i < imagenesBiceps.length-2; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesBiceps.length);
            let imagenAleatoria = bufferImagenes2[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
        
    }
    else if(selected1 == "Pesas" && selected == "Liviano" && nombreDia == "martes"){
        div.innerHTML = "Pesas livianas para Biceps";
        for(let i = 0; i < imagenesBiceps.length-4; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesBiceps.length);
            let imagenAleatoria = bufferImagenes2[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }

    }else if(selected1 == "Pesas" && selected == "Intenso" && nombreDia == "martes"){
        div.innerHTML = "Pesas intensas para Biceps";
        for(let i = 0; i <= imagenesBiceps.length; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesBiceps.length);
            let imagenAleatoria = bufferImagenes2[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(nombreDia == "martes" && selected == "Liviano" && selected1 == "Cardio"){
      div.innerHTML = "Hoy te toca cardio Liviano con eliptica";
      p.innerHTML = "20-30 minutos";
      
      const image = document.createElement("img");
      image.src  = "./elipticagimnasio.gif";
      image.width = "350";
      image.height = "300";
      document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "martes" && selected == "Intenso" && selected1 == "Cardio"){
        div.innerHTML = "Hoy te toca cardio Intenso con eliptica";
        p.innerHTML = "50 min - 1 hora";
        const image = document.createElement("img");
        image.src  = "./elipticagimnasio.gif";
        image.width = "350";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "martes" && selected == "Moderado" && selected1 == "Cardio"){  //termina martes
        div.innerHTML = "Hoy te toca cardio Moderado con eliptica";
        p.innerHTML = "30-50 minutos";
        const image = document.createElement("img");
        image.src  = "./elipticagimnasio.gif";
        image.width = "350";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(selected1 == "Pesas" && selected == "Moderado" && nombreDia == "miercoles"){
        div.innerHTML = "Pesas moderadas para Pecho";
        for(let i = 0; i < imagenesPecho.length-2; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesPecho.length);
            let imagenAleatoria = bufferImagenes3[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(selected1 == "Pesas" && selected == "Liviano" && nombreDia == "miercoles"){
        div.innerHTML = "Pesas livianas para Pecho";
        for(let i = 0; i < imagenesPecho.length-3; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesPecho.length);
            let imagenAleatoria = bufferImagenes3[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }

    }else if(selected1 == "Pesas" && selected == "Intenso" && nombreDia == "miercoles"){
        div.innerHTML = "Pesas intensas para Pecho";
        for(let i = 0; i <= imagenesPecho.length; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesPecho.length);
            let imagenAleatoria = bufferImagenes3[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(nombreDia == "miercoles" && selected == "Liviano" && selected1 == "Cardio"){
      div.innerHTML = "Hoy te toca cardio Liviano en la caminadora";
      p.innerHTML = "20-30 minutos";
      console.log("Dia de cardio");
      const image = document.createElement("img");
      image.src  = "./caminadora.gif";
      image.width = "200";
      image.height = "300";
      document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "miercoles" && selected == "Intenso" && selected1 == "Cardio"){
        div.innerHTML = "Hoy te toca cardio Intenso en la caminadora";
        p.innerHTML = "50 mins -1 hora";
        console.log("Dia de cardio");
        const image = document.createElement("img");
        image.src  = "./caminadora.gif";
        image.width = "200";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "miercoles" && selected == "Moderado" && selected1 == "Cardio"){  //termina miercoles
        div.innerHTML = "Hoy te toca cardio Moderado en la caminadora";
        p.innerHTML = "30- 50 minutos";
        console.log("Dia de cardio");
        const image = document.createElement("img");
        image.src  = "./caminadora.gif";
        image.width = "200";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(selected1 == "Pesas" && selected == "Moderado" && nombreDia == "jueves"){
        div.innerHTML = "Pesas Moderadas para Triceps";
        for(let i = 0; i < imagenesTriceps.length-2; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesTriceps.length);
            let imagenAleatoria = bufferImagenes4[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(selected1 == "Pesas" && selected == "Liviano" && nombreDia == "jueves"){
        div.innerHTML = "Pesas livianas para Triceps";
        for(let i = 0; i < imagenesTriceps.length-4; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesTriceps.length);
            let imagenAleatoria = bufferImagenes4[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }

    }else if(selected1 == "Pesas" && selected == "Intenso" && nombreDia == "jueves"){
        div.innerHTML = "Pesas intesas para Triceps";
        for(let i = 0; i <= imagenesTriceps.length; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesTriceps.length);
            let imagenAleatoria = bufferImagenes4[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(nombreDia == "jueves" && selected == "Liviano" && selected1 == "Cardio"){
      div.innerHTML = "Hoy te toca cardio Liviano en escaladora";
      p.innerHTML = "20-30 minutos";
      console.log("Dia de cardio");
      const image = document.createElement("img");
      image.src  = "./escaladora.png";
     
      document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "jueves" && selected == "Intenso" && selected1 == "Cardio"){
        div.innerHTML = "Hoy te toca cardio Intenso en escaladora ";
        p.innerHTML = "50 mins- 1 hora";
        const image = document.createElement("img");
        image.src  = "./escaladora.png";
      
        document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "jueves" && selected == "Moderado" && selected1 == "Cardio"){  //termina jueves
        div.innerHTML = "Hoy te toca cardio Moderado en escaladora";
        p.innerHTML = "30-50 minutos";
        const image = document.createElement("img");
        image.src  = "./escaladora.png";
        document.querySelector("#div").appendChild(image);

    }else if(selected1 == "Pesas" && selected == "Moderado" && nombreDia == "viernes"){
        div.innerHTML = "Pesas moderadas para Abdomes y Hombro";
        for(let i = 0; i < imagenesAbdomen.length-2; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesAbdomen.length);
            let imagenAleatoria = bufferImagenes5[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(selected1 == "Pesas" && selected == "Liviano" && nombreDia == "viernes"){
        div.innerHTML = "Pesas livianas para Abdomes y Hombro";
        for(let i = 0; i < imagenesAbdomen.length-4; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesAbdomen.length);
            let imagenAleatoria = bufferImagenes5[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }

    }else if(selected1 == "Pesas" && selected == "Intenso" && nombreDia == "viernes"){
        div.innerHTML = "Pesas intensas para Abdomes y Hombro";
        for(let i = 0; i <= imagenesAbdomen.length; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesAbdomen.length);
            let imagenAleatoria = bufferImagenes5[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(nombreDia == "viernes" && selected == "Liviano" && selected1 == "Cardio"){
      div.innerHTML = "Hoy te toca cardio Liviano en bicicleta";
      p.innerHTML = "20-30 minutos";
      console.log("Dia de cardio");
      const image = document.createElement("img");
      image.src  = "./bici.gif";
      image.width = "300";
      image.height = "300";
      document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "viernes" && selected == "Intenso" && selected1 == "Cardio"){
        div.innerHTML = "Hoy te toca cardio Intenso en bicicleta";
        p.innerHTML = "50 mins - 1 hora";
        const image = document.createElement("img");
        image.src  = "./bici.gif";
        image.width = "300";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "viernes" && selected == "Moderado" && selected1 == "Cardio"){  //termina viernes
        div.innerHTML = "Hoy te toca cardio Moderado en bicicleta";
        p.innerHTML = "30-50 minutos";
        const image = document.createElement("img");
        image.src  = "./bici.gif";
        image.width = "300";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(selected1 == "Pesas" && selected == "Moderado" && nombreDia == "sabado"){
        div.innerHTML = "Pesas moderadas para Espalda";
        for(let i = 0; i < imagenesEspalda.length -2; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesEspalda.length);
            let imagenAleatoria = bufferImagenes6[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(selected1 == "Pesas" && selected == "Liviano" && nombreDia == "sabado"){
        div.innerHTML = "Pesas livianas para Espalda";
        for(let i = 0; i < imagenesEspalda.length-3; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesEspalda.length);
            let imagenAleatoria = bufferImagenes6[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }

    }else if(selected1 == "Pesas" && selected == "Intenso" && nombreDia == "sabado"){
        div.innerHTML = "Pesas itensas para Espalda";
        for(let i = 0; i <= imagenesEspalda.length; i++){

            let indiceImagenAleatoria = generarEnteroAleatorio(imagenesEspalda.length);
            let imagenAleatoria = bufferImagenes6[indiceImagenAleatoria];
            document.querySelector("#div").appendChild(imagenAleatoria);
        }
    }
    else if(nombreDia == "sabado" && selected == "Liviano" && selected1 == "Cardio"){
      div.innerHTML = "Hoy te toca cardio Liviano en eliptica";
      p.innerHTML = "20-30 minutos";
      console.log("Dia de cardio");
      const image = document.createElement("img");
      image.src  = "./elipticagimnasio.gif";
      image.width = "300";
      image.height = "300";
      document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "sabado" && selected == "Intenso" && selected1 == "Cardio"){
        div.innerHTML = "Hoy te toca cardio Intenso en eliptica";
        p.innerHTML = "50 mins - 1 hora";
        const image = document.createElement("img");
        image.src  = "./elipticagimnasio.gif";
        image.width = "300";
        image.height = "300";
        document.querySelector("#div").appendChild(image);

    }else if(nombreDia == "sabado" && selected == "Moderado" && selected1 == "Cardio"){  
        div.innerHTML = "Hoy te toca cardio Moderado en eliptica";
        p.innerHTML = "30-50 minutos";
        const image = document.createElement("img");
        image.src  = "./elipticagimnasio.gif";
        image.width = "300";
        image.height = "300";
        document.querySelector("#div").appendChild(image);
    }
    


function generarEnteroAleatorio(cantidadImagenes) {
    return Math.floor(Math.random() * cantidadImagenes);
}

}

function Reiniciar(){
    location.reload();
}