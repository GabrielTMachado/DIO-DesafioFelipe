let nome = "Adalberto";
let XP = 5403;
let Rank;

if(XP <= 1000){
    Rank = "Ferro";
}
else if(XP <= 2000 && XP > 1000){
    Rank = "Bronze";
}
else if(XP <= 5000 && XP > 2000){
    Rank = "Prata";
}
else if(XP <= 7000 && XP > 5000){
    Rank = "Ouro";
}
else if(XP <= 8000 && XP > 7000){
    Rank = "Platina";
}
else if(XP <= 9000 && XP > 8000){
    Rank = "Ascendente";
}
else if(XP <= 10000 && XP > 9000){
    Rank = "Imortal";
}
else{
    Rank = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + Rank);