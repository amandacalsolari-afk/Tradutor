
let inputTexto = document.querySelector(".texto");

let idioma = document.querySelector(".idioma");

let traducaoSaida = document.querySelector(".traducao");








 async function traduzir(){
    console.log(inputTexto.value);
        
    let url = "https://api.mymemory.translated.net/get?q="+ inputTexto.value +"&langpair=pt|" + idioma.value;  

    let resposta = await fetch (url);

    let traducao = await resposta.json();

    traducaoSaida.textContent=traducao.responseData.translatedText;


}

    function microfone(){
    
        let voz = window.SpeechRecognition || window.webkitSpeechRecognition;

        let ouvirVoz = new voz(); 

    ouvirVoz.onresult = (evento)=> {
        inputTexto.value = evento.results[0][0].transcript;

    }

    ouvirVoz.start();

}
