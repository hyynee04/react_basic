import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//const App = () => {}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple TODO App with ReactJS</p>
        {/* <MyComponent />*/}
        <ListTodo />

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
  );
}

export default App;
