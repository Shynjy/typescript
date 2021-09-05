import React, { Component } from "react";
import ContadorValor from "./ContadorValor";
import logRenders from "../decorators/logRender"

interface ContadorProps {
  valorIncial?: number
}

interface ContadorState {
  valor: number
}

@logRenders
export default class Contador extends Component<ContadorProps, ContadorState> {

  public state = { valor: this.props.valorIncial || 0 }

  private setValor = (delta: number) => {
    this.setState({
      valor: this.state.valor + delta
    })
  }

  render() {
    return (
      <div>
        <ContadorValor contador={this.state.valor} />
        <button onClick={() => this.setValor(10)}>+</button>
        <button onClick={() => this.setValor(-10)}>-</button>
      </div>
    )
  }
}