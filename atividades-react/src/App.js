// Crie uma class component 


// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)




import React, { Component } from "react";

export default class App extends Component {
  state={
    pessoa: [
      {
        nome:"Erika",
        idade:29,
        comidaFavorita:"lasanha",
        musica: ["rap","funk","pop"]
      }
    ]
  }
  
  render() {
    return (
      <div>
        <h1>O nome é: {this.state.pessoa[0].nome}</h1>
        <h2>Idade é: {this.state.pessoa[0].idade}</h2>
        <h3>Comida favortira é: {this.state.pessoa[0].comidaFavorita}</h3>
        <ul>
          <li>Estilo musical: {this.state.pessoa[0].musica[o]}</li>
          <li>Estilo musical: {this.state.pessoa[0].musica[1]}</li>
          <li>Estilo musical: {this.state.pessoa[0].musica[2]}</li>
        </ul>
      </div>
    );
  }
}

//Crie um component de class


// Crie uma arrow function que receba uma mensagem e exiba na tela


// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello </h1>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class App extends Component {
  soma = () => {
    return 2 + 2;
  };
  render() {
    return (
      <div>
        <h1> {this.soma()} </h1>
      </div>
    );
  }
}

//Crie um component de class


//Crie um array de objetos no STATE com pelo menos 6 objetos


//Faça um map do seu state e exiba os dados na tela

import React, { Component } from "react";

export default class App extends Component {
state ={
  dados: [{
    nome: "Erika",
    telefone: 99999-9999,
  },
  {
    nome: "Ana",
    telefone: 99999-9999,

  }
  {
    nome: "Paulo",
    telefone: 99999-9999,
  }
  {
    nome: "Fred",
    telefone: 99999-9999,
  }
  {
    nome: "Nat",
    telefone: 99999-9999,
  }
  {
    nome: "Pedro",
    telefone: 99999-9999,
  }

  ]
}

render (){
  return(
    <div>
      {this.state.dados.map((item) => (
        <div>
          <p>Nome:{item.nome}</p>
          <p>Tel:{item.telefone} </p>
          </div>
      ))}
    </div>
  )
}

//Desenvolva um contador que tenha as seguintes funcionalidades:
//1 - O contador não pode chegar abaixo de 0
//2 - O contador não pode chegar acima de 10

import React, { Component } from "react";

export default class App extends Component {
state ={
  cont: 0
}

adicionar = () => {
  if (this.state.cont <10){
    this.setState({
      cont:this.state.cont +1
    })
  }
}

diminuir = () =>{
  if (this.state.cont <10){
    this.setState({
      cont:this.state.cont -1
    })
  }
}

render(){
  return(
    <div className='container'>
      <h1 className='titulo'>Contador</h1>
      <h2 className='cont'>{this.state.cont}</h2>
      <button className="first-button" onClick={this.adicionar}>+</button>
      <button className="second-button" onClick={this.retirar}>-</button>
    </div>
  )
}