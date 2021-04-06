
function botao(){
    document.getElementById("Obrigado").innerHTML = "<b>Obrigado Por Clicar</b>";
}

function redirecionar(){
 //window.open("https://github.com/JoaoPaulloDias/aula_javascript");
    window.location.href = "https://github.com/JoaoPaulloDias/aula_javascript";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "João Paullo"
    elemento.innerHTML = "João Paullo"
    //alert("Trocar Texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe mouse aqui"
    elemento.innerHTML = "Passe mouse aqui"
}


function load(){
    alert("Pagina Carregada")
}

function funcaoChange(elemento){
console.log(elemento.value)
}

// var validar;
// function validarIdade(idade){
//     if(idade >= 18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar
// }

// var idade = prompt("Qual a sua idade");
// validarIdade(idade);
// console.log(validar);


// function soma(n1, n2){
//     return n1 + n2;
// }

// alert(soma(3, 7));

// function setReplace(frase, nome1, nome2){
//     return frase.replace(nome1, nome2);
// }

// alert(setReplace("Vai Japão", "Japão", "Brasil"))

// var data = new Date();
// console.log(data);
// console.log(data.getDate()+"/"+(data.getMonth()+1) + "/"+data.getFullYear());

// // Obtém a data/hora atual
// var data = new Date();

// // Guarda cada pedaço em uma variável
// var dia     = data.getDate();           // 1-31
// var dia_sem = data.getDay();            // 0-6 (zero=domingo)
// var mes     = data.getMonth();          // 0-11 (zero=janeiro)
// var ano2    = data.getYear();           // 2 dígitos
// var ano4    = data.getFullYear();       // 4 dígitos
// var hora    = data.getHours();          // 0-23
// var min     = data.getMinutes();        // 0-59
// var seg     = data.getSeconds();        // 0-59
// var mseg    = data.getMilliseconds();   // 0-999
// var tz      = data.getTimezoneOffset(); // em minutos

// // Formata a data e a hora (note o mês + 1)
// var str_data = dia + '/' + (mes+1) + '/' + ano4;
// var str_hora = hora + ':' + min + ':' + seg;

// // Mostra o resultado
// alert('Hoje é ' + str_data + ' às ' + str_hora);


// var cout = 0;

// for(cout=0; cout<=5; cout++){
//     alert(cout);
// }
// while(cout < 5){
//     console.log(cout);
//     cout = cout + 1;
//     cout ++;
// }


// var idade = prompt("Qual sua idade: ");
// if (idade >= 18){
//     alert("idade: "+idade+"\nmaior de idade");
// }else{
//     alert("idade: "+idade+"\nmenor de idade");
// };




// var frutas = [{nome:"maça"}, {nome:"uva", cor:"roxa"}];
// console.log(frutas);
//console.log(frutas[1].nome);



// var fruta ={nome:"maça", cor:"vermelha"};
// console.log(fruta);
// console.log(fruta.cor);
// var nome = "João Paullo";
// var n1 = 30;
// var n2 = 10;
// var frase = "Japão é melhor seleção do mundo";
// var lista = ["maça", "pera", "laranja"]
// lista.push("uva");

// //alert(nome + " Tem " + idade + " anos ")
// //alert(idade + idade2);

// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toLowerCase());
// //alert(frase.replace("Japão", "Brasil"));

// console.log(lista);
// console.log(lista.length)
// console.log(lista.reverse())
// console.log(lista.toString())
// console.log(lista.join(" - "))
// console.log(lista.join("/"))
// console.log(lista.join(" | "))


// var lista = ["Alemanha", "Inglaterra", "Escócia"];
// lista.push("Polônia");
// lista.pop("Inglaterra");

// console.log(lista)