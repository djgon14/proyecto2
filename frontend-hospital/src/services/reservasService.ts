export type Reserva={id:string;roomId:string;roomName:string;date:string;start:string;end:string;name:string;course:string;phone:string;email:string;reason:string};
const KEY="don_bosco_reservations";
export function cargarReservas():Reserva[]{try{return JSON.parse(localStorage.getItem(KEY)??"[]") as Reserva[]}catch{return[]}}
export function guardarReservas(value:Reserva[]){localStorage.setItem(KEY,JSON.stringify(value))}
