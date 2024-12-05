//función autoejecutable
(function(){
var acturlizarHora = function(){
    //obtenemos los datos
    var fecha = new Date();
    horas = fecha.getHours(),
    ampm,
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay,
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    year = fecha.getFullYear();

    //seleccionamos cada uno de los campos
    var pHoras = document.getElementById('horas'),
        pAmPm = document.getElementById('ampm'),
        pMinutos = document.getElementById('minutos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pSegundos = document.getElementById('segundos'),
        pYear = document.getElementById('year'),
        pMes = document.getElementById('mes');
        

 //Creamos nuestro array con los dias de la semana       
let semana = ['Domingo', 'Lunes', 'Martes', 'Miercóles', 'Jueves', 'Viernes', 'Sabado'];
pDiaSemana.textContent = semana[dia];

pDia.textContent = dia;

//Creamos nuestro array de los meses
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
pMes.textContent = meses[mes];

pYear.textContent = year;

//pasamos a formato de 12 horas Am-Pm
if(horas >= 12){
    horas = horas - 12;
    ampm = 'PM';
}else{
    ampm = 'AM';
}

if(horas == 0){
    horas == 12;
};

pHoras.textContent = horas;
pAmPm.textContent = ampm;

//si los minutos son menores a 10 le agregamos un cero al principio
if(minutos < 10){
    minutos = '0' + minutos
};
if(segundos < 10){
    segundos = '0' + segundos;
}

pMinutos.textContent = minutos;
pSegundos.textContent = segundos;

}
//Creamos el interval para que nuestro reloj siga funcionando sin que debamos recargar la página
acturlizarHora();
var intervalo = setInterval(acturlizarHora, 1000);
}())

//mensajito de Like
function mesagesLike(){
    alert('Muchas gracias por dejarme tu Like 😁');
}