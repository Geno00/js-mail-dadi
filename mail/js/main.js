//creo una lista con delle e-mail ed un popup per digitarle
const mail =["lucabiondi@gmail.com", "mariorossi@gmail.com", "giovanniverdi@gmail.com", "carlobianchi@gmail.com"];

const checkMail =prompt ('inserisci la tua email')

const notMail = false;

//creo un programma che cerchi dentro il sistema le mie e-mail in precedenza scritte
for (var i = 0; i < mail.length; i++) {
    let lista = mail[i];
    if(lista == checkMail){
        notMail = true;
    }

}

//creo un popup che mi comunica se la mia e-mail è presente nel sistema o meno
if (notMail == true){
    alert('Puoi procedere al prossimo passaggio');
}else{
    alert('La tua e-mail non è nella lista');
}