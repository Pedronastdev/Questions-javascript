let a = 0.04, b = 0.04, c = 0.03
let indice = (0.05 & 0.25)
if (indice > 0.4) {
    console.log("industrias a,b,c parem suas atividades");
} else {
    if (indice == 0.4) {
        console.log("industrias a,b parem suas atividades");
    } else {
        if (indice >= 0.03) {
            console.log("industria a pare sua atividade");
        } else {
            if (indice > 0.25) {
                console.log("indice de poluição está acima do aceitavel")
            } else {
                console.log("indice de poluição está abaixo do aceitavel")
            }
        }
    }
}