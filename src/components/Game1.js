import * as React from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  margin-bottom: 2vh;
  position: relative;
  background-color: pink;

  p,
  div.btnBox {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  p {
    top: 30%;
  }
  div.btnBox {
    top: 50%;
    display: flex;
    flex-direction: column;
  }
  button {
    margin-bottom: 10px;
  }
  small {
    text-transform: lowercase;
  }
`;

export class Game1 extends React.Component {
  state = {
    gameActive: false,
    time: 0,
    gameStoped: false,
  };
  results = [];
  bestResult = 0;
  timerID = undefined;
  startGame = () => {
    this.setState({
      time: 0,
      gameActive: true,
    });
    setTimeout(() => {
      this.timerID = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
        });
      }, 10);
    }, Math.floor(Math.random() * 3000) + 1000);

    if (this.state.time !== 0) {
      this.results.push(this.state.time);
    } else {
      this.results = [];
    }
  };

  stopTimer = () => {
    clearInterval(this.timerID);
    this.setState({
      gameActive: false,
    });
  };

  stopGame = () => {
    this.results.push(this.state.time);
    this.bestResult = this.results.sort((a, b) => a - b)[0];
    this.setState({
      gameStoped: true,
    });
  };

  render() {
    const { gameActive, time, gameStoped } = this.state;
    return (
      <>
        <StyledDiv
          style={this.state.time !== 0 ? { backgroundColor: 'red' } : null}
          onClick={gameActive && time !== 0 ? this.stopTimer : null}
        >
          {!gameActive && time === 0 ? (
            <>
              <p>Tap on screen when background will change</p>
              <div className="btnBox">
                <Button onClick={this.startGame} text="play" />
              </div>
            </>
          ) : gameStoped ? null : (
            <p>
              {time} <small>ms</small>
            </p>
          )}
          {!gameActive && time !== 0 ? (
            <div className="btnBox">
              {gameStoped ? null : (
                <Button text="restart" onClick={this.startGame} />
              )}
              <Button text="stop" onClick={this.stopGame} />
            </div>
          ) : null}
          {gameStoped ? (
            <p>
              Best result:{this.bestResult}
              <small>ms</small>
            </p>
          ) : null}
          <Button text={'back'} link="/" />
        </StyledDiv>
      </>
    );
  }
}
