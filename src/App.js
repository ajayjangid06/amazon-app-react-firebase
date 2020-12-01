import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51HRAkWKt3Lfs5FmiDb09IM2zVVErcQEe1i0bhOdxfDcg1eCteXTXRxbA1vnQXCZqMVrcgERIB4ih7hPWr7y1Q1Qk00NK5uGJqH"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);
      if (authUser) {
        //the user just logged in / the userS was logged
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
