AOS.init();

const dataDoEvento = new Date("nov 29, 2023 10:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

let dias = document.querySelector("#dias");
let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
let end = document.querySelector("#end");

const contaHoras = setInterval(() => {
   const agora = new Date();
   const timeStampAtual = agora.getTime();

   const diastanciaAteEvento = timeStampDoEvento - timeStampAtual;

   const diasEmMl = 1000 * 60 * 60 * 24;
   const horasEmMl = 1000 * 60 * 60;
   const minutosEmMl = 1000 * 60;

   const diasAteEvento = Math.floor(diastanciaAteEvento / diasEmMl);
   const horasAteEvento = Math.floor(
      (diastanciaAteEvento % diasEmMl) / horasEmMl
   );
   const minutosAteEvento = Math.floor(
      (diastanciaAteEvento % horasEmMl) / minutosEmMl
   );
   const segundosAteEvento = Math.floor(
      (diastanciaAteEvento % minutosEmMl) / 1000
   );

   dias.textContent = `${diasAteEvento}d`;
   horas.textContent = `${horasAteEvento}h`;
   minutos.textContent = `${minutosAteEvento}m`;
   segundos.textContent = `${segundosAteEvento}s`;
   if (diastanciaAteEvento < 0) {
      clearInterval(contaHoras);
      dias.textContent = `${"00"}d`;
      horas.textContent = `${"00"}h`;
      minutos.textContent = `${"00"}m`;
      segundos.textContent = `${"00"}s`;
      end.textContent = "Este evento terminou!";
   }
}, 1000);
