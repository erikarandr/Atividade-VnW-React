

//Entre no link abaixo e continue a desenvolver a nossa calculadora
//Você deve criar as funções de cada button para disparar a operação no click
//Sua calculadora deve ter um button para limpar o resultado da tela e limpar os inputs
//Você deve buscar a solução para a operação de soma ("+" deve somar e não concatenar)

import React, { Component } from "react";

import "./styles.css";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  adi = () => {
    this.setState({
      res: Number(this.state.n1) + Number(this.state.n2)
    });
  };

  sub = () => {
    this.setState({
      res: Number(this.state.n1) - Number(this.state.n2)
    });
  };

  mul = () => {
    this.setState({
      res: Number(this.state.n1) * Number(this.state.n2)
    });
  };

  div = () => {
    this.setState({
      res: Number(this.state.n1) / Number(this.state.n2)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: event.target.value
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: event.target.value
    });
  };

  clean = () => {
    this.setState({
      n1: "",
      n2: "",
      res: ""
    });
  };

  render() {
    return (
      <div className="bodyContent">
        <section className="calc">
          <h1>Calc App</h1>

          <section className="boxInputsNumber">
            <input onChange={this.handleChange1} value={this.state.n1} />
            <input onChange={this.handleChange2} value={this.state.n2} />
          </section>
          <h2>{this.state.res}</h2>

          <section className="boxButtonsNumbers">
            <button onClick={this.adi}>+</button>

            <button onClick={this.sub}>-</button>

            <button onClick={this.mul}>*</button>

            <button onClick={this.div}>/</button>

            <button onClick={this.clean}>C</button>
          </section>
        </section>
      </div>
    );
  }
}

export default App;


//Complete as funções do ToDo
//Ao adicionar uma tarefa o seu input deve ser limpo
//Seu ToDo deve ter uma função para adicionar tarefa
//Seu ToDo deve ter uma função para remover tarefa
//Seu ToDo deve adicionar tarefas com o click no button e também com a tecla ENTER

import React, { Component } from "react";

class App extends Component {
  state = {
    task: "",
    taskList: []
  };

  add = () => {
    const { taskList, task } = this.state;

    if (task === "") return;

    const newTask = {
      id: new Date(),
      text: task
    };

    this.setState({
      taskList: taskList.concat(newTask)
    });
    console.log(this.state.taskList);
  };

  remove = (id) => {
    const { taskList } = this.state;

    this.setState({
      taskList: taskList.filter((item) => item.id !== id)
    });
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.task} />
        <button onClick={this.add}>add</button>
        <ul>
          {this.state.taskList.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => this.remove(item.id)}> Remover </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;