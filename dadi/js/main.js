//Creo 2 giocatori uno nominato ed uno che sarà il computer
const giocatore =prompt ('Nome del giocatore');
const computer = ('Computer')

//genero per ognuno di loro dei numeri casuali fino ad un massimo di 6
let num = Math.floor(Math.random()*6);
alert(giocatore + " " + num);


let compNum = Math.floor(Math.random()*6);
alert(computer + " " + compNum);

//decreto se il mio giocatore ha perso, vinto o ha paraggiato contro il computer
if (num > compNum){
    alert('hai vinto')
}else if (num < compNum){
    alert('hai perso')
}else{
    alert('Parità')
}


