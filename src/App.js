import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutRoute from "./components/LayoutRoute";
import GuestLayoutRoute from "./components/GuestLayoutRoute";
import PrivateLayoutRoute from "./components/PrivateLayoutRoute";
import HomeScreen from './pages/HomeScreen';
import DonateScreen from "./pages/DonateScreen";
import ProductsScreen from "./pages/ProductsScreen";
import InvolvedScreen from "./pages/InvolvedScreen";
import RegistrationScreen from "./pages/RegistrationScreen";
import LoginScreen from "./pages/LoginScreen";


function App() {
  //const { jsonwebtoken, updateUser } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/donate" exact={true} component={DonateScreen} />
        <LayoutRoute path="/products" exact={true} component={ProductsScreen} />
        <LayoutRoute path="/involved" exact={true} component={InvolvedScreen} />
        <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
        <LayoutRoute path="/login" exact={true} component={LoginScreen} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;