import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from './constants/routes';
import { IsUserRedirect , ProtectedRoute} from './helpers/routes';
import {useAuthListener} from './hooks';

function App() {
    const {user} = useAuthListener();
    console.log(user)
  return (
    <> 
      <BrowserRouter>
        <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect exact user={user} path={ROUTES.HOME} loggedInPath={ROUTES.BROWSE}> 
          <Home />
        </IsUserRedirect>
        <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

      </BrowserRouter>
    </>
  );
}

export default App;
