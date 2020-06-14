import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

const StyledDivGameSec = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: gray;
  padding-top: 5vh;
  position: relative;
  .trafficLight {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 60vh;
    justify-content: space-between;
    align-items: center;
    p {
      display: block;
      margin: 15px auto;
      font-size: 25px;
    }
  }
  button.btnBack {
    position: absolute;
    top: 0;
    left: 0;
  }

  .ligths {
    width: 30vw;
    height: 50vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .tLRed,
    .tLYellow,
    .tLGreen {
      width: 70px;
      height: 70px;
      margin: 0 auto;
      border-radius: 50%;
    }
    .tLRed {
      background-color: rgba(255, 0, 0, 0.3);
    }

    .tLYellow {
      background-color: rgba(255, 255, 0, 0.3);
    }
    .tLGreen {
      background-color: rgba(0, 255, 0, 0.3);
    }
  }
`;

export class Game2 extends React.Component {
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
      <StyledDivGameSec>
        <div className="trafficLight">
          <div className="ligths">
            <div
              style={gameActive ? null : { backgroundColor: 'rgba(255,0,0,1)' }}
              className="tLRed"
            ></div>
            <div
              style={
                gameActive && time === 0
                  ? { backgroundColor: 'rgba(255,255,0,1' }
                  : null
              }
              className="tLYellow"
            ></div>
            <div
              style={
                gameActive && time !== 0
                  ? { backgroundColor: 'rgba(0,255,0,1' }
                  : null
              }
              className="tLGreen"
            ></div>
          </div>
          {gameActive && time !== 0 ? <p>{time} ms</p> : null}
          {!gameActive && time !== 0 && !gameStoped ? (
            <p>your time: {time} ms</p>
          ) : null}
          {gameStoped ? (
            <p>
              Best result:{this.bestResult}
              <small>ms</small>
            </p>
          ) : null}
        </div>

        {gameStoped ? null : gameActive ? (
          <Button onClick={time !== 0 ? this.stopTimer : null} text="go!!!!!" />
        ) : (
          <Button onClick={this.startGame} text="play" />
        )}

        {!gameActive && time !== 0 ? (
          <div className="btnBox">
            <Button text="stop" onClick={this.stopGame} />
          </div>
        ) : null}

        <Button text={'back'} link="/" />
      </StyledDivGameSec>
    );
  }
}
