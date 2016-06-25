// interfaces in typescript hebben geen inpact op de run time in javascript
// maar zijn wel heel handig voor ons 

//voorbeeld
//je hebt een structuur 

declare var puntA: { x: number; y: number; };
declare var puntB: { x: number; y: number; };

//je merkt op dat dit herhaald word 

interface Punt {
    x: number; 
    y: number;
}

// BAM dit is generiek en makkelijk aan pas baar
declare var puntA: Punt;
declare var puntB: Punt;