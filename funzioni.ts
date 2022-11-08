function sommala(num1,num2){// cosi posso passargli ogni tipo perchè implicitamente sono any gli input
    console.log(num1+num2);
}

//ma dovrei definire il tipo essendo su typescript
function sommannna(num1:number,num2:number){// assegno il tipo esplicito
    console.log(num1+num2);
}

// posso creare parametri di default se non metto niente come argomento
function sommallla(num1:number,num2=1):number{// assegno un valore dal tipo di valore typescript lo passa di default se non passo nulla 
    // in input una volta che devo riichiamare la funzione e due capisce lui stesso i tipi accettati in ingresso 
    return num1+num2;
} 

let provalona=sommallla// passando spra la funzione noto che il tipo lo capisce unn  aut0omatico


////// posso assegnare una FUNZIONE AD UNA VARIABILE///////

let provilina: Function =sommallla // gli sto dicendo che prova accetta solo delle Function, i tipi si scrivono in maiuscolo tipo java

