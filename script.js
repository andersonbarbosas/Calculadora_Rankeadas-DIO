console.log("You, yes you!")

console.log("Tell me, in that online game ;) how is your Rank?")
console.log("Let me guess... Pro player?! haha")
console.log("") // This is empty on purpose
console.log("let\'s find out, using only Numbers...")

const prompt = require("prompt-sync")()

var win = prompt("If you play 20 matches in one week , on average, how many do you win? ")

while (isNaN(win) || win === "") {
 
    win = prompt("Hmm, maybe you miss-clicked, let's try again? ")
}

const sub = 20 - win 
// assumindo que *win* corresponde ao numero de vitorias, logo, entende-se que 20 é o numero de partidas, a subtração destes leva ao número de derrotas!

const resultado = win * 8
//aqui *win* é multiplicado por 8 apenas para dinamizar os resultados

tier()

function tier(){
    var rank

        if (resultado  <= 0){
            rank = "Unranked"
        }else if (resultado >= 1 && resultado  <= 10){
            rank = "iron"
        }else if (resultado >= 11 && resultado  <= 20){
            rank = "Copper"
        }else if (resultado >= 21 && resultado  <= 50){
            rank = "Silver"
        }else if (resultado >= 51 && resultado  <= 80){
            rank = "Gold"
        }else if (resultado >= 81 && resultado  <= 90){
            rank = "Dimond"
        }else if (resultado >= 91 && resultado  <= 100){
            rank = "Legendary"
        }else if (resultado >= 101 && resultado <= 120){
            rank = "Immortal"
        }else
            rank = "Saiyajin"
   
        console.log("")// Empty again
        console.log(`Wow, your losing only ${sub} matches!!`)
        console.log(`So your XP maybe it's ${resultado}, and your Ranking will corresponding ${rank}`)
        console.log("")// Empty again

    
}