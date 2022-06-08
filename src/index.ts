let vendedor: string= String(prompt("Ingrese el nombre del vendedor"));
let cantVendedores: number = 5
let nombresVendedores: string[]= new Array(cantVendedores);
let ventasSemanales: number[] = new Array (cantVendedores);
let maxima:number=0;
let minimo:number=0;

nombresVendedores[0] = "Camila";
nombresVendedores[1] = "Franco";
nombresVendedores[2] = "Sofia";
nombresVendedores[3] = "Matias"; 
nombresVendedores[4] = "Agustina";
ventasSemanales[0] = 32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652;
ventasSemanales[1] = 27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855;
ventasSemanales[2] = 20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218;
ventasSemanales[3] = 27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006;
ventasSemanales[4] = 23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562;


function maxima (ventasSemanales){
  maxima= Math.max (ventasSemanales)
}
function minimo (ventasSemanales){
  minimo= Math.min (ventasSemanales)
} 

  





console.log("El vendedor ",vendedor,"su venta maxima es de ",maxima,"la semana ", (safdafvdsas
.indexof(maxima)+1),"y venta minima ",minimo,"",(indexof(minimo)+1),"promedio semanal ",promedioSemanal,"mensual ", promedioMensual);
