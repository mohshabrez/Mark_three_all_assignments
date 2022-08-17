var Hulk ={
    name:"Hulk",
    power:"smash",
    custome:"Green",
    strength:10000,
    stealth:10
}
var Ironman ={
    name:"Ironman",
    power:"Suit",
    custome:"Red",
    strength:5000,
    stealth:100

}

console.log(Ironman.custome)
console.log(Hulk.power)
console.log(Ironman.stealth)

var superHeros = [Hulk,Ironman];

for (var i =0; i<superHeros.length; i++){
    var currentHero = superHeros[i];
    console.log(currentHero.name);
    console.log(currentHero.custome);
}