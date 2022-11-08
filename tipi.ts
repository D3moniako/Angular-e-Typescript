// ANY POSSO METTERCI OGNI COSA 

let prova:{
    nome:any
}
//UNION è una unione di più elementi
//esempio voglio stringa o numero uso | che vuol dire union, serve vquando non voglio usare tutti i tipi con any

let provola:string |number|string[]

/////////////////////custom////////////////////////
let persina:{// istanzio
    nome:string;
    cognome:string
}

persina={ //inizializzo
    nome:'luca',
    cognome:'rossi'
}

function trovaPersona(persina:{// dovrei ogni volta che voglio usare l'oggetto istanziare tutto l'oggetto con i suoi elementi
    nome:string;//NON E' FATTIBILE!!!!!
    cognome:string
}){}
/////USO TIPI CUSTOM CON TYPE
type Perzoona={// simil classe o meglio tipo di dato
    nome:string;
    cognome:string  // con due punti  uguaglio il tipo
} 

let perzooona:Perzoona; // assegno l'oggetto a quel tipo

perzooona={// inizializzo
    nome:'Pippo',
    cognome:'cocaina',
} 


function trovalaPersona(perzooona:Perzoona){ //uso nei vari metodi

}

/////  type con union


type Prova= string|number

const x: Prova= 'ciaoooo'

///////////////////////ENUM


const utente={
nome:'luca',
cognome:'rossi',
ruolo:'admin'
}
/// voglio limitare il ruolo 
// dovrei fare controlli ripetendoli dove mi serve in maniera manuale hardcodato
if(utente.ruolo=='admin'){}
if(utente.ruolo=='normale'){}
///



    //posso creare tante costanti

    const USER ='user'
    const ADMIN='admin'
    const MOD='mod'

    /// PROBLEMA è RIPETITIVO E DA RICORDARE
    //// USO ENUUUUUUUUUMMMMM
    enum Ruolo{
        ADMIN='admin',USER='user',GUEST='guest'
    }

    const utente2={
        nome:'luca',
        cognome:'rossi',
        ruolo:Ruolo.ADMIN
        }



