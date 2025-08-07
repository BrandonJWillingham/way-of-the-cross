import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './HomePage/Layout';
import NavBar from './Nav/Nav';
import NotFound from './Errors/PageNotFound';
import Footer from './Nav/Footer';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        
        <Route path={"/"} exact={true} element={<Layout/>}/>
        <Route path={"*"}element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
