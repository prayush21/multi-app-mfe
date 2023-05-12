import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp}></Route>
            <Route path="/" component={MarketingApp}></Route>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
