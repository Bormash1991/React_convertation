import React, { Component } from "react";
import Input from "../input";
import Select from "../select";
import Header from "../header";
import styled from "./app.module.css";
export default class App extends Component {
  state = {
    term: 0,
  };
  updateValue = (text) => {
    this.setState({
      term: +text,
    });
  };
  render() {
    return (
      <div className="container">
        <section className={styled.sectionConvert}>
          <Header />
          <div className={styled.meanBlock}>
            <Input updateValue={this.updateValue}></Input>
            <Select number={this.state.term} />
          </div>
        </section>
      </div>
    );
  }
}
