
// colocar novas musicas e seus nomes 
export default [
    {
        src: "./src/phonck2",
        name: "TOLCHINE",
    },
    {
        src: "./src/phonck1",
        name: "wake up",
    },
    {
        src: "./src/phonck3",
        name: "nueky",
    },
    {
        src: "./src/phonck4",
        name: "kenny",
    },
];



var  logolike = document.querySelector(".logolike");
var logodislike = document.querySelector(".logodislike");

logolike.onclick = function(){
    alert("Vamos indar mais musicas desse genero.");
}
logodislike.onclick = function(){
    alert("Vamos regular essa musica");
}

var voltar = document.querySelector(".voltar");

voltar.onclick = function(){
    window.location("peinel.html");
}