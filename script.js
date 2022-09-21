//const bool1 = false 
//const bool2 = true

// if (bool1){
//     alert("Verdade!")
// }else{
//     alert("Não é verdade ):")
// }

//const bool3 = true

// if (bool1 === bool2){
//     alert("1 e 2 são iguais!")
// }else if(bool2 === bool3){
//     alert("2 e 3 são iguais!")
// }else if(bool1 === bool3){
//     alert("1 e 3 são iguais!")
// }else{
//     alert("Não existem valores iguais")
// }


//let idade = 15

// let idade = Number(prompt("Quantos anos você tem?"))
// console.log(idade)

// if(idade >= 18 && idade < 60){
//     alert("Você precisa emitir o título de eleitor!")
// }else if((idade < 18 && idade >= 16) || idade >= 60){
//     alert("Você pode ou não emitir o título na sua idade.")
// }else{
//     alert("Não pode votar")
// }


//let media = 7.5
let media = Number(prompt("Qual foi sua nota média?"))

if(media >= 5 && media <= 10){
    console.log(media, "Aprovada")
    alert("Aprovada :)")
}else if(media >=3 && media <=10){
    console.log(media, "Recuperação")
    alert("Recuperação :/")
}else if(media < 3){
    console.log(media, "Reprovada")
    alert("Reprovada ):")
}else{
    alert("Dado inválido.")
}



