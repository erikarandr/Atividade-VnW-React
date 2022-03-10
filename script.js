// Crie uma variável que receba um nome; // Crie uma variável que receba um número;
// Crie uma variável com o ano atual e subtraia pelo número que você guardou;
// Agora mostre no console o resultado da soma das duas variáveis guardadas anteriormente;
//Mostre no console a mensagem "Estou mexendo no console.log";
// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console;
// Exiba no console o tipo de dado da váriavel quartaFeira;

let nome="erika"
console.log(nome)

let number ="10";
console.log(number)

let anoAtual="2022"- number
console.log (anoAtual)

anoAtual=2022 + number
console.log (anoAtual)

console.log ("estou mexendo no console.log")

let quartaFeira= true
console.log (quarta-feira)

console.log(typeof quartaFeira)

//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let idade=29
if (idade >=18){
    console.log("você é maior de idade")
}else{
    console.log ("você é menor de idade")
}

let humano = true
if(idade >18 && humano ==true){
    console.log("você é maior de idade e humano")
}

let mes = "março"
if(mes =="janeiro" || mes =="dezembro"){
    console.log ("você faz aniversário em janeiro ou dezembro")
}else{
    console.log ("você não faz aniversário nestes meses")
}

//1 - Criar um loop que conte de 1 até 10 usando FOR
//2 - Criar um loop que conte de 10 até 1 usando WHILE
//3 - Criar um loop que conte todos os números ímpares de 1 até 100
//4- Criar um loop que conte todos os números pares de 0 a 100

for (i = 1; i<=10; i++){
    console.log (i)
}

let cont =1
while(10>= cont){
    console.log (cont)
    cont ++
}

for (i=1; i <=100; i+=2){
    console.log (i)
}

for (i=2; i <=100; i+=2){
    console.log (i)
}

//1 - crie uma função que exiba uma mensagem no console
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function hello (){
    console.log ("ola")
}
hello()

function nome (nome) {
    console.log (`Meu nome é ${nome}`)
}
nome("Erika")

function dados (usuario,idade,estiloMusical){
    console.log (`Nome do usuário é ${usuario}, a idade é ${idade} e o estilo musical é ${estiloMusical} `)
}
dados ("Erika",29,"rap")

function gosto (filme,musica){
    console.log (`Filme escolhido é ${filme} e a música selecionada é ${musica}`)
}
gosto ("Pulp Fiction", "Geminiano - Djonga")

// Crie um array que receba 5 itens e exiba no console.
// Utilize um método para adicionar um nome ao inicio do array.
// Utilize um método para remover o último nome do array.
// Utilize um método para adicionar dois nomes ao fim do array.
// Utilize um método para remover o primeiro nome do array.
// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let n= ["Ana","Pedro","Rai","Tati","Joao"]
console.log(n)

n.splice (0,0, "Flavia")
console.log(n)

n.splice(6,1)
console.log(n)

n.splice(6,2, "Jose","Maria")
console.log(n)

n.splice(0,1)
console.log(n)

let numbers =[7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)

// Crie um objeto que receba ao menos três propriedades sobre você.
// Adicione uma nova propriedade sem alterar seu objeto inicial.
// Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.

let eu=
{
    nome: "Erika",
    idade: 29,
    signo: "aries"
}

console.log (eu)

eu.Sobrenome ="Andrade"
console.log (eu)

delete eu.signo
console.log(eu)

let cadastro = [
    {
    nome: "Ana",
    idade:20,
    telefone: 99999999,
    amigos: ["Pedro","Rai","Tati","Joao"]
    },

    {
        nome: "Nati",
        idade:20,
        telefone: 99999999,
        amigos: ["Pedro","Rai","Tati","Joao"]
    },

    {
        nome: "Joao",
        idade:20,
        telefone: 99999999,
        amigos: ["Pedro","Rai","Tati","Joao"]
    },

    {
        nome: "Carla",
        idade:20,
        telefone: 99999999,
        amigos: ["Pedro","Rai","Tati","Joao"]
    },
    {
        nome: "Susi",
        idade:20,
        telefone: 99999999,
        amigos: ["Pedro","Rai","Tati","Joao"]
        },


]

console.log (cadastro[0].amigo[0],cadastro [1].amigo[1], cadastro [2].amigo[2], cadastro [3].amigo[3], cadastro [4].amigo[4] )