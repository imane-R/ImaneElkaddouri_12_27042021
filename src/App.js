import './App.css';
import Header from './components/commons/Header/Header';
import SideBar from './components/commons/SideBar/SideBar';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <SideBar/>
        <Routes>
            <Route path='/dashboard/:id' element={<Dashboard/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
