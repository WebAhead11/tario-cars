import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import React from "react"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <h1>ABOUT PAGE</h1>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/*">
              <h1>Default PAGE</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
