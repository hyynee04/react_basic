import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo.js';
import Nav from './Nav/Nav.js';
import Home from './Example/Home.js';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//const App = () => {}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />

      </div>

    </BrowserRouter>
  );
}

export default App;
