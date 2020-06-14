import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainMenu from './MainMenu';
import { Game1 } from './Game1';
import { Game2 } from './Game2';
import Game3 from './Game3';

const Views = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainMenu} />
      <Route path="/game1" component={Game1} />
      <Route path="/game2" component={Game2} />
      <Route path="/game3" component={Game3} />
    </Switch>
  );
};

export default Views;
