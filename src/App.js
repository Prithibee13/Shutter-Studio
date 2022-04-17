import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
