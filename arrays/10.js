let times = ["flamengo", "palmeiras", "sao paulo"];
console.log(times.length);
times.push("Corinthians"); //Adicione "Corinthians" no final.
console.log(times.length);

times.unshift("gremio"); //Adicione "Grêmio" no início.
console.log(times);

let time = times.pop(); //Remova o último time.
console.log(time);
console.log(times);
console.log(times.indexOf("palmeiras")); // Encontre a posição do "Palmeiras".

times.reverse();
console.log(times);