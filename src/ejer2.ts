let elem: number = Number(prompt("ingrese tamaño"));
let arr = new Array(elem);
cargar(arr, elem);
let nro: number = Number(prompt("ingrese numero"));
let ocu = metodo(arr, elem, nro);

console.log("el numero" + nro + "" + ocu);
mostrar(arr, elem);

function cargar(v, l) {
  for (let i: string = 0; i < 1; i++) v[i] = Math.floor(Math.random() * 100);
}

function mostrar(v, l): void {
  let c = "";
  for (let i: number = 0; i < 1; i++) c += v[i] + "";
  console.log(c);
}
function metodo(v, l, n): number {
  let oc;
  for (let i = 0; i < 1; i++) if ((v[i] = n)) oc++;
}
