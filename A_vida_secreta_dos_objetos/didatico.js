//Métodos:

function speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
}

var whiteRabbit = { type: 'white', speak: speak,  }
var fatRabbit = { type: 'fat', speak: speak }

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.")

//this é usado para dar saida ao tipo de coelho
//apply e bind podem usar o primeiro argumento para simular chamadas de métodos
//Existe um método parecido ao apply chamado call . Ele também chama a função na qual ele é um método e aceita argumentos normalmente, ao invés de um array.

speak.apply(whiteRabbit,['Eu sou branco'])
console.log(whiteRabbit);
speak.call({ type: 'Old' } , 'oi')

//Prototypes

console.log(Object.getPrototypeOf({}) === Object.prototype);
    
/*Um prototype é
outro objeto que é usado como fonte de fallb ack para as propriedades. Quando um objeto recebe uma chamada
em uma propriedade que ele não possui, seu prototype designado para aquela propriedade será buscado, e
então o prototype daquele prototype e assim por diante.

Então quem é o prototype de um objeto vazio? É o ancestral de todos os prototypes, a entidade por trás de quase
todos os objetos, Object.prototype .

Muitos objetos não possuem o Object.prototype diretamente em seu prototype. Ao invés disso eles têm outro
objeto que fornece suas propriedades padrão. Funções derivam do Function.prototype , e arrays derivam do
Array.prototype .
    */

    var x = 11231;
console.log(Object.getPrototypeOf(x))
console.log(x.valueOf());


//parei pagina 80
  
