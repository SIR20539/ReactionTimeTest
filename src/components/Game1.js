import * as React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
const StyledDiv = styled.div`
  display: block;
  height: 90vh;
  width: 100vw;
  margin: 0 auto;
  margin-bottom: 2vh;
  position: relative;
  background-color: pink;

  p,
  button {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
  }
  button {
    top: 50%;
  }
`;

export class Game1 extends React.Component {
  state = {
    gameActive: false,
    time: 0,
  };
  timerID = undefined;
  startGame = () => {
    this.setState({
      gameActive: true,
    });
    setTimeout(() => {
      this.timerID = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
        });
      }, 10);
    }, Math.floor(Math.random() * 3000) + 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerID);
  };

  render() {
    const { gameActive, time } = this.state;
    return (
      <StyledDiv onClick={gameActive ? this.stopTimer : null}>
        {!gameActive ? (
          <>
            <p>best result</p>
            <Button onClick={this.startGame} text="play" />
          </>
        ) : (
          <p>{time} ms</p>
        )}
      </StyledDiv>
    );
  }
}
