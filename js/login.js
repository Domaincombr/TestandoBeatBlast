function lnks(lnk){
    window.location = lnk
}

async function obterCidadeAtual(la,lo){
    const cidade = document.querySelector(".cidade");
    const lat = document.querySelector(".la");
    const lon = document.querySelector(".lo");
    var dadosCid = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${la}&lon=${lo}`).then( resposta => resposta.json());
    console.log(dadosCid.address.town);
    cidade.value = dadosCid.address.town;
    lat.value = la;
    lon.value = lo;
    
    
}

const getGeolocation = () =>{
   if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
           obterCidadeAtual(position.coords.latitude,position.coords.longitude);     
        })
   } 
}
