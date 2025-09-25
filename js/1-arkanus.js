function decodespell(Spell) {
    
    const valores = {
        "☽": 1,
        "☾": 5,
        "♁": 10,
        "⚕": 50,
        "⚡": 100
    };
 let total = 0

 for (let i = 0 ; i < Spell.length; i++) {
    let primero = valores [Spell[i]];
    let next = valores [Spell[i+1]];

    if(primero == undefined) return NaN
    
    if (next !== undefined && primero < next){
        total -= primero;
    }
    else{
        total += primero
    }
 }   

 return total
}

const input = prompt(`ingrese el simbolo deseado`);
const result = decodespell(input);

if (isNaN (result) ) {
    alert("el simbolo no a sido encontrado")

}
else {alert ("el resultado es = " + result)}