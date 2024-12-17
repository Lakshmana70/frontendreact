import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div >
     <h1>product</h1>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
