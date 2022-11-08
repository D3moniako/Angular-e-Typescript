function getDati(persona:{ // passo alla funzione direttamente l'oggetto come parametro
    nome:string,
    cognome:string,
    eta: number
}){console.log(persona.nome)}

getDati({nome:"",// tra virgolette perchè gli passo lìoggetoo
    cognome:"",
    eta: 14
}
    );
////////////////////////////ARRAY//////////////////////////////////
    const arrg=['pino',6,true] ;// array possono contenere vari tipi non specificati

    const arrg2:string[]=["gino","parmiggino"];
    const arrg3:any[]=["gino","parmiggino",[],{}];// array di qualsiasi tipo


    /////////////////TUPLE , ARRAY DI VALORI DEFINITI IN NUMERO E TIPO - SE METTP ANY SOLO NUMERO////////////////////////



    const game={
       id:"",
       codiceAccessso:'',
       players:['bobbi','luca']// se un oggetto posso metterci tutti i valori che voglio

    }

    const tuple:[number,number]=[1,2]// accetto a destra solo due elementi vhe siano numeri
    const tupleAny:[any,any]=[1,2]