import './App.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Edit from './Components/Edit';
import Header from './Components/Header';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
     {/* <BrowserRouter> */}
     <Routes>
      {/* <Route path='/'  element={<Ind/>} exact /> */}
      <Route path='/'  element={<Header/>} exact />
      <Route path='/home'  element={<Home/>} exact />
      <Route path='/about' element={<About />} exact />
      <Route path='/edit' element={<Edit/>} exact />
     </Routes>
     {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
