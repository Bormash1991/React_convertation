import React, { Component } from "react";
import styled from "./select.module.css";
import img from "./arrow.png";
export default class Select extends Component {
  state = {
    firstSelect: 2,
    secondSelect: 2,
  };
  componentDidUpdate() {
    this.doing();
  }
  doing() {
    const { firstSelect, secondSelect } = this.state;
    let mas = [];
    let number = this.props.number;
    let a = 0;
    if (firstSelect === 10 && secondSelect === 2) {
      while (number !== 0) {
        let c = number % 2;
        number = Math.trunc(number / 2);
        mas.unshift(c);
      }
    } else if (firstSelect === 10 && secondSelect === 8) {
      while (number !== 0) {
        let c = number % 8;
        number = Math.trunc(number / 8);
        mas.unshift(c);
      }
    } else if (firstSelect === 2 && secondSelect === 10) {
      number = number + "";
      for (let i = 0; i < number.length; i++) {
        let b = +number[i];
        console.log(b, "-b");
        a = a * 2 + b;
      }
      return a;
    } else if (firstSelect === 8 && secondSelect === 10) {
      number = number + "";
      for (let i = 0; i < number.length; i++) {
        let b = +number[i];
        console.log(b, "-b");
        a = a * 8 + b;
      }
      return a;
    } else if (firstSelect === 2 && secondSelect === 8) {
      number = number + "";
      for (let i = 0; i < number.length; i++) {
        let b = +number[i];
        console.log(b, "-b");
        a = a * 2 + b;
      }
      while (a !== 0) {
        let c = a % 8;
        a = Math.trunc(a / 8);
        mas.unshift(c);
      }
    } else if (firstSelect === 8 && secondSelect === 2) {
      number = number + "";
      for (let i = 0; i < number.length; i++) {
        let b = +number[i];
        console.log(b, "-b");
        a = a * 8 + b;
      }
      while (a !== 0) {
        let c = a % 2;
        a = Math.trunc(a / 2);
        mas.unshift(c);
      }
    } else {
      return 0;
    }
    return mas;
  }
  updateState = (e) => {
    const elem = e.target;
    const id = +elem.id;
    const value = +elem.options[elem.selectedIndex].value;
    if (id === 1) {
      this.setState({
        firstSelect: value,
      });
    } else {
      this.setState({
        secondSelect: value,
      });
    }
    this.doing();
  };

  render() {
    const type = !this.props.number ? 0 : this.doing();
    // const type = this.doing();
    return (
      <div className={styled.mathBlock}>
        <select id="1" onInput={this.updateState}>
          <option value="2">Двійкова</option>
          <option value="8">Вісімкова</option>
          <option value="10">Десяткова</option>
        </select>
        <div className={styled.blockImg}>
          <img src={img} alt="arrow" />
        </div>
        <select id="2" onInput={this.updateState}>
          <option value="2">Двійкова</option>
          <option value="8">Вісімкова</option>
          <option value="10">Десяткова</option>
        </select>

        <div className={styled.answer}>
          <span>Відповідь: </span> &nbsp; {type}
        </div>
      </div>
    );
  }
}
