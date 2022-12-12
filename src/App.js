import React from 'react';
import { BrowserRouter, Switch,  } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LayoutRoute from "./components/LayoutRoute";
import LoginScreen from "./components/LoginScreen";


function App() {
  //const { jsonwebtoken, updateUser } = useContext(UserContext);
  return (
 <BrowserRouter>
  <Switch>
  <LayoutRoute path="/" exact={true} component={HomeScreen} />
    <LayoutRoute path="/login" exact={true} component={LoginScreen} />
  </Switch>
  </BrowserRouter>

        );
}

export default App;
