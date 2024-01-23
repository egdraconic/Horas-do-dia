
const relogio = setInterval(function time() {
    
const agora = new Date()
const agora_1 = agora.getHours()
const agora_2 = agora.getMinutes()
const horas = document.getElementById("Horas")
const tesxt = document.querySelectorAll("#resposta")


if (agora_1 >= 0 && agora_1 <= 12) {
    document.body.style.backgroundImage = "url(fundo_2.png)";
    horas.innerHTML = `<p id="resposta">são ${agora_1} e ${agora_2} entaõ tenha um bom dia</p>`
    } else if (agora_1 > 11 && agora_1 <= 17) {
        document.body.style.backgroundImage = "url(fundo_1.png)";
        horas.innerHTML = `<p id="resposta_1">são ${agora_1} e ${agora_2} entaõ tenha uma boa tarde</p>`
    } else if  (agora_1 > 17 && agora_1 <= 24) {
        document.body.style.backgroundImage = "url(fundo.png)";
        horas.innerHTML = `<p id="resposta">são ${agora_1} e ${agora_2} entaõ tenha uma boa noite</p>`
    }

console.log(agora_1)
})