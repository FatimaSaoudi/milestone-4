import React from 'react';
import { BrowserRouter, Switch,  } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LayoutRoute from "./components/LayoutRoute";
import LoginScreen from "./components/LoginScreen";
import GuestLayoutRoute from './components/GuestLayoutRoute';
import PrivateLayoutRoute from './components/PrivateLayoutRoute';
import RegistrationScreen from './components/RegistrationScreen';


function App() {
  //const { jsonwebtoken, updateUser } = useContext(UserContext);
  return (
 <BrowserRouter>
  <Switch>
  <LayoutRoute path="/" exact={true} component={HomeScreen} />
    <LayoutRoute path="/login" exact={true} component={LoginScreen} />
    <GuestLayoutRoute path="/login" exact={true} component={LoginScreen} />
    <GuestLayoutRoute path="/register" exact={true} component={RegistrationScreen} />

  </Switch>
  </BrowserRouter>

        );
}

export default App;

