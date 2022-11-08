function somma( a :number,  b :number){ // file typescript sono compilati e si usa comando tpc nomefile per compilarli
    return a+b;
} 
 console.log(somma(3,5));// sia sul compilatore che a compilazione avvenuta mi mostra lìerrore


 let persona :{}={ // DEFINENDO OGGETTO COSI
    nome: "luca",
    eta: 6,
 }


 let macchina :Object={ //OPPURE COSI, è SEMPLICEMENTE UN INFERENCE TYPE QUINDI OGGETTO VUOTO
    marca:"mercedes",
    ruote:6

 }

 console.log(persona.eta) ;
 console.log(macchina.marca);// ERRATO ESSENDO OGGETTO VUOTO SE DEFINITO COSI

 // DEVO TOGLIERE IL TIPO DI OGGETTO 
 let personINA ={ // DEFINENDO OGGETTO COSI
    nome: "luca",
    eta: 6,
 }


 let macchinINA={ //OPPURE COSI, è SEMPLICEMENTE UN INFERENCE TYPE QUINDI OGGETTO VUOTO
    marca:"mercedes",
    ruote:6

 }

 console.log(personINA.eta) ;// TYPESCRIPT STESSO CAPISCE CHE OGGETTO PERSONA HA DEI VALORI
 console.log(macchinINA.marca);

 /////////////////

 // CREO OGGETTO
 let perso:{
    nome:string,
    cognome:string,
    eta: number
 }
// INIZIALIZZAZIONE OGGETTO CON COSTRUTTORE PIENO DI DEFAULT
 perso={
    nome:"gino",
    cognome:"parmigino",
    eta:5 // da errore come se avesse un costruttore se non inizializzo con tutti i campi
}


// oggetti annidati come al solito
let cosa:{
nome:string;
cognome:string;
numero:number;
condizione:boolean;
indirizzo:{
    via:string;
    numeroCivico:number;
}

// passare oggetto inizializzato in funzione 
