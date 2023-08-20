var animals = ['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals = ['panther','dragon','turtle'];
document.write(`Este ejercicio concatena la lista animals: ${animals} y la lista comingSoonAnimals: ${comingSoonAnimals}:<br>`)
var listaNueva = animals.concat(comingSoonAnimals)
document.write(`${listaNueva} <br> <br>`)

var arr = [4,6,1,0,8,2,45,11,5,33,50,101]
document.write(`Este ejercicio ordena el array ${arr} de menor a mayor: <br>`)
document.write(`${arr.sort(function(a,b){return a-b})} <br> <br>`)

document.write(`Este ejercicio agrega el elemento 'cow' al final de la lista animals: <br>`)
animals.push('cow')
document.write(`${animals} <br> <br>`);

document.write(`Este ejercicio elimina el elemento 'eagle' del inicio de la lista animals: <br>`)
animals.shift()
document.write(`${animals} <br> <br>`);

document.write(`Este ejercicio usa un ciclo for para encontrar el index del elemento 'parrot' en la lista animals: ${animals}: <br>`)
for(i=0;i<animals.length;i++){
    if(animals[i]=='parrot'){
        document.write(i)
    }
}
