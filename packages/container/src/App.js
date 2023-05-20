import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Progress from './components/Progress';
import { useState } from 'react';
import { useEffect } from 'react';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    console.log('isSignedIn', isSignedIn);
  }, [isSignedIn]);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)}></AuthLazy>
              </Route>
              <Route path="/" component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
