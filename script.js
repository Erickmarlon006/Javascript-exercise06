var listaDeNomes = [];
var contadeiro = 0;

while(true){
    listaDeNomes[contadeiro] = new Array();
    listaDeNomes[contadeiro]['nome'] = prompt("Insira um nome para o sorteio:");
    console.log(listaDeNomes[contadeiro]['nome']);

    if(!confirm("Deseja colocar mais pessoas no sorteio?")){
        alert('vamos ao sorteio');
        break;
    
    }
    contadeiro++;
    
 }
 var sorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)]['nome'];
 console.log(sorteado);
 alert("E o sorteado/a foi: " + sorteado.toUpperCase());


